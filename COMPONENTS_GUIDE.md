# TravBo UI Components Guide

## 🎨 Color Theme

Your brand colors are now integrated throughout the application:

- **Primary Gold**: `#FFAF19` - CTAs, buttons, highlights
- **Dark Charcoal**: `#040404` - Text, backgrounds, dark mode
- **Light Gray**: `#F3F3F3` - Page backgrounds, card surfaces

## 📦 Components Created

### 1. **Navbar Component** ✅
**File**: `src/components/shared/Navbar.tsx`

**Features**:
- Fixed header with logo and brand name
- Desktop navigation with 5 main links (Home, Explore, AI Planner, About, Contact)
- Responsive hamburger menu for mobile
- Login button and Sign Up CTA button (gold)
- Dark mode support
- Active link styling
- Smooth transitions

**Usage**:
```tsx
import { Navbar } from '@/components/shared';

export default function Page() {
  return <Navbar />;
}
```

---

### 2. **Footer Component** ✅
**File**: `src/components/shared/Footer.tsx`

**Features**:
- 5 navigation columns: Explore, Services, Useful Links, Promotions
- Contact information (Email, Phone, WhatsApp)
- Two office locations with map links
- Social media links (4 platforms)
- Certifications section
- Payment methods display
- Full responsive grid layout
- Mobile-first design
- Dark mode support
- Dynamic copyright year

**Usage**:
```tsx
import { Footer } from '@/components/shared';

export default function Page() {
  return <Footer />;
}
```

---

### 3. **Layout Wrapper Component** ✅
**File**: `src/components/shared/Layout.tsx`

**Features**:
- Wraps Navbar + Main Content + Footer
- Proper spacing for fixed navbar (pt-16)
- Flexbox layout ensuring footer sticks to bottom
- Reusable across all pages

**Usage**:
```tsx
import { Layout } from '@/components/shared';

export default function Page() {
  return (
    <Layout>
      <div>Your page content here</div>
    </Layout>
  );
}
```

---

### 4. **Shared Components Index** ✅
**File**: `src/components/shared/index.ts`

**Allows easy imports**:
```tsx
import { Navbar, Footer, Layout } from '@/components/shared';
```

---

## 🎯 How to Use in Your Pages

### Update `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Layout } from "@/components/shared";
import "./globals.css";

export const metadata: Metadata = {
  title: "TravBo - AI Travel Planner & Booking",
  description: "Plan and book your perfect trip with AI assistance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
```

---

### Alternative: Use Components Individually

```tsx
'use client';

import { Navbar, Footer } from '@/components/shared';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Your content */}
      </main>
      <Footer />
    </>
  );
}
```

---

## 📱 Responsive Breakpoints

**Navbar**:
- Mobile: Hamburger menu (shown)
- Tablet (md): Full navigation visible
- Desktop (lg): All features visible

**Footer**:
- Mobile (1 column)
- Tablet (2-3 columns)
- Desktop (5 columns for links section)

---

## 🎨 Customizing Colors

All colors are defined in `src/app/globals.css`:

```css
:root {
  --primary: #FFAF19;        /* Gold */
  --dark: #040404;           /* Charcoal */
  --light: #F3F3F3;          /* Light Gray */
  --primary-hover: #FF9500;  /* Dark Gold */
}
```

To use in components:
```tsx
className="text-[#FFAF19]"  // Primary Gold
className="text-[#040404]"  // Dark Charcoal
className="bg-[#F3F3F3]"    // Light Gray
```

---

## 🌙 Dark Mode

Both components automatically adapt to dark mode using Tailwind's `dark:` prefix:

```tsx
<div className="bg-white dark:bg-[#1A1A1A]">
  <p className="text-[#040404] dark:text-white">Text</p>
  <button className="bg-[#FFAF19] hover:bg-[#FF9500] dark:hover:bg-[#FFD700]">
    Gold Button
  </button>
</div>
```

---

## 📦 Dependencies Used

- **lucide-react**: Icons (Menu, X, Mail, Phone, MapPin, etc.)
- **next/link**: Navigation
- **tailwindcss**: Styling (v4)

---

## 🚀 Next Steps

1. ✅ Components created and responsive
2. ⏭️ Create page components (Home, Explore, AI Planner, etc.)
3. ⏭️ Set up API integration layer
4. ⏭️ Build dashboard pages
5. ⏭️ Add backend integration

---

## 💡 Tips

- Use the `Layout` component in `layout.tsx` for consistent header/footer
- Customize colors directly in globals.css for easy brand color changes
- Mobile-first approach: Design for mobile, then enhance for larger screens
- All components are `'use client'` for interactivity (toggle menu, etc.)

