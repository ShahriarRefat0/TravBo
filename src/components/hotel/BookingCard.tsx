"use client";

import { useMemo, useState } from "react";

type BookingCardProps = {
  currency: string;
  pricePerNight: number;
};

const NIGHT_MILLISECONDS = 1000 * 60 * 60 * 24;

function getNightCount(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut) {
    return 0;
  }

  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diff = end.getTime() - start.getTime();

  if (diff <= 0) {
    return 0;
  }

  return Math.ceil(diff / NIGHT_MILLISECONDS);
}

export default function BookingCard({ currency, pricePerNight }: BookingCardProps) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const nights = useMemo(() => getNightCount(checkIn, checkOut), [checkIn, checkOut]);
  const roomSubtotal = nights * pricePerNight;
  const serviceFee = nights > 0 ? 15 : 0;
  const tax = Math.round(roomSubtotal * 0.1);
  const total = roomSubtotal + serviceFee + tax;

  const canBook = Boolean(checkIn && checkOut && nights > 0);

  return (
    <aside className="rounded-2xl border border-[#e5e7eb] bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <h2 className="text-lg font-semibold text-[#1f2937]">Reserve your stay</h2>
      <p className="mt-1 text-[#64748b]">
        {currency} {pricePerNight} <span className="text-sm">/ night</span>
      </p>

      <div className="mt-4 space-y-3">
        <div>
          <label className="block text-sm text-[#475569] mb-1">Check-in</label>
          <input
            type="date"
            value={checkIn}
            onChange={(event) => setCheckIn(event.target.value)}
            className="w-full rounded-lg border border-[#cbd5e1] px-3 py-2 outline-none focus:border-[#FFAF19]"
          />
        </div>

        <div>
          <label className="block text-sm text-[#475569] mb-1">Check-out</label>
          <input
            type="date"
            min={checkIn || undefined}
            value={checkOut}
            onChange={(event) => setCheckOut(event.target.value)}
            className="w-full rounded-lg border border-[#cbd5e1] px-3 py-2 outline-none focus:border-[#FFAF19]"
          />
        </div>

        <div>
          <label className="block text-sm text-[#475569] mb-1">Guests</label>
          <input
            type="number"
            min={1}
            max={10}
            value={guests}
            onChange={(event) => setGuests(Number(event.target.value))}
            className="w-full rounded-lg border border-[#cbd5e1] px-3 py-2 outline-none focus:border-[#FFAF19]"
          />
        </div>
      </div>

      <div className="mt-5 space-y-2 text-sm text-[#475569]">
        <div className="flex items-center justify-between">
          <span>
            {currency} {pricePerNight} x {nights} night{nights > 1 ? "s" : ""}
          </span>
          <span>
            {currency} {roomSubtotal}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Service fee</span>
          <span>
            {currency} {serviceFee}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Tax (10%)</span>
          <span>
            {currency} {tax}
          </span>
        </div>
        <div className="border-t border-[#e2e8f0] pt-2 mt-2 flex items-center justify-between font-semibold text-[#1f2937]">
          <span>Total</span>
          <span>
            {currency} {total}
          </span>
        </div>
      </div>

      <button
        type="button"
        disabled={!canBook}
        className="mt-5 w-full rounded-lg bg-[#FFAF19] px-4 py-2.5 text-white font-semibold hover:bg-[#FF9500] disabled:cursor-not-allowed disabled:opacity-50"
      >
        Book now
      </button>

      {!canBook ? (
        <p className="mt-2 text-xs text-[#64748b]">Please select valid check-in and check-out dates.</p>
      ) : null}
    </aside>
  );
}
