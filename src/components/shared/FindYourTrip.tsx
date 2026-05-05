"use client";

import React, { useMemo, useState } from "react";
import { MapPin, Search } from "lucide-react";

const FindYourTrip = () => {
  const [destination, setDestination] = useState("Cox's Bazar");
  const [checkin, setCheckin] = useState("2026-05-06");
  const [checkout, setCheckout] = useState("2026-05-08");
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [queryResult, setQueryResult] = useState<string>("");
  const [error, setError] = useState<string>("");

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const handleSearch = () => {
    setError("");

    if (!destination.trim() || !checkin || !checkout) {
      setError("Please complete destination and dates.");
      return;
    }

    if (checkout < checkin) {
      setError("Check-out date cannot be before check-in.");
      return;
    }

    setQueryResult(
      `Searching Hotels: ${destination} • Check-in: ${checkin} • Check-out: ${checkout} • ${guests} guest(s), ${rooms} room(s)`
    );
  };

  return (
    <section className="relative z-30 -mt-16 pb-12 sm:-mt-20 sm:pb-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-5">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            <div className="space-y-4">
              <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 lg:items-end">
                {/* Destination */}
                <div>
                  <label className="block text-sm font-medium text-[#64748b] mb-2">Destination</label>
                  <div className="flex items-center gap-2 p-3 border border-[#dce3ec] rounded-lg bg-white">
                    <MapPin className="h-5 w-5 text-[#FFAF19]" />
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="City or Hotel"
                      className="flex-1 bg-transparent outline-none text-[#1f2937]"
                    />
                  </div>
                </div>

                {/* Check-in */}
                <div>
                  <label className="block text-sm font-medium text-[#64748b] mb-2">Check-in</label>
                  <input
                    type="date"
                    min={today}
                    value={checkin}
                    onChange={(e) => setCheckin(e.target.value)}
                    className="w-full p-3 border border-[#dce3ec] rounded-lg bg-white text-[#1f2937]"
                  />
                </div>

                {/* Check-out */}
                <div>
                  <label className="block text-sm font-medium text-[#64748b] mb-2">Check-out</label>
                  <input
                    type="date"
                    min={checkin || today}
                    value={checkout}
                    onChange={(e) => setCheckout(e.target.value)}
                    className="w-full p-3 border border-[#dce3ec] rounded-lg bg-white text-[#1f2937]"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm font-medium text-[#64748b] mb-2">Guests</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full p-3 border border-[#dce3ec] rounded-lg bg-white text-[#1f2937]"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>{n} Guest{n > 1 ? "s" : ""}</option>
                    ))}
                  </select>
                </div>

                {/* Rooms */}
                <div>
                  <label className="block text-sm font-medium text-[#64748b] mb-2">Rooms</label>
                  <select
                    value={rooms}
                    onChange={(e) => setRooms(Number(e.target.value))}
                    className="w-full p-3 border border-[#dce3ec] rounded-lg bg-white text-[#1f2937]"
                  >
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>{n} Room{n > 1 ? "s" : ""}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <button
                type="button"
                onClick={handleSearch}
                className="w-full lg:w-auto lg:ml-auto flex items-center justify-center gap-2 px-8 py-3 bg-[#FFAF19] text-white font-semibold rounded-lg hover:bg-[#ff9800] transition-colors"
              >
                <Search className="h-5 w-5" />
                Search Hotels
              </button>

              {/* Error Message */}
              {error && <p className="text-sm font-semibold text-[#d7263d]">{error}</p>}

              {/* Search Result */}
              {queryResult && (
                <div className="mt-4 p-4 bg-[#f8fbff] border border-[#dbe5f2] rounded-lg text-sm text-[#1f2937]">
                  <p className="font-semibold">Search Request</p>
                  <p className="mt-2">{queryResult}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindYourTrip;