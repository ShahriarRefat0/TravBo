# TravBo Authentication System

A production-ready authentication UI system built with Next.js, TypeScript, Tailwind CSS, React Hook Form, and Zod validation.

---

## 📁 Project Structure

```
src/
├── app/(auth)/
│   ├── layout.tsx              # Auth route group layout
│   ├── login/
│   │   └── page.tsx            # Login page
│   └── register/
│       └── page.tsx            # Register page
│
├── components/auth/
│   ├── AuthLayout.tsx          # Centered form container with branding
│   ├── AuthInput.tsx           # Reusable input component
│   ├── SocialLogin.tsx         # Google OAuth button
│   ├── LoginForm.tsx           # Login form with validation
│   ├── RegisterForm.tsx        # Register form with validation
│   └── index.ts                # Component exports
│
├── lib/
│   └── validation.ts           # Zod validation schemas
│
└── types/
    └── auth.ts                 # TypeScript type definitions
```

---

## 🎨 Features

### ✅ Complete
- **Modern UI Design** — Clean, centered forms with soft shadows
- **Responsive Layout** — Mobile, tablet, and desktop optimized
- **Validation** — Server-side ready Zod schemas
- **Form State** — React Hook Form integration
- **Error Handling** — Display validation errors inline
- **Loading States** — Disabled buttons while submitting
- **Password Strength** — Real-time password strength indicator (Register)
- **Show/Hide Password** — Toggle password visibility
- **Social Login UI** — Google OAuth button (ready to integrate)
- **Remember Me** — Checkbox on login form
- **Forgot Password Link** — Navigation to password reset
- **TypeScript** — Full type safety
- **Split Layout** — Desktop: Form + Branding (optional mobile collapse)

### 🔌 Ready to Integrate
- Google OAuth (OAuth2/NextAuth compatible)
- Backend API endpoints
- Token storage & management
- Auth context/provider

---

## 🚀 Usage

### Navigate to Pages

```
Login:    http://localhost:3000/login
Register: http://localhost:3000/register
```

---

## 🧩 Component API

### AuthLayout
Wraps authentication pages with centered form + branding.

```tsx
<AuthLayout
  title="Welcome Back"
  subtitle="Sign in to your account"
  switchLink={{
    text: "Don't have an account?",
    label: "Sign up",
    href: "/register",
  }}
>
  <LoginForm />
</AuthLayout>
```

**Props:**
- `title` (string) — Main heading
- `subtitle?` (string) — Subheading
- `switchLink?` (object) — Link to switch between login/register
  - `text` — Label before the link
  - `label` — Clickable link text
  - `href` — Target URL
- `showImage?` (boolean) — Show/hide right branding section (default: true)

---

### AuthInput
Reusable input with error display and password toggle.

```tsx
<AuthInput
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={errors.email}
  showPasswordToggle={false}
  required
/>
```

**Props:**
- `label?` (string) — Input label
- `type?` (string) — HTML input type (default: "text")
- `placeholder?` (string) — Placeholder text
- `value?` (string) — Input value
- `onChange?` (function) — Change handler
- `onBlur?` (function) — Blur handler
- `error?` (string) — Error message
- `disabled?` (boolean) — Disabled state
- `required?` (boolean) — Show asterisk
- `showPasswordToggle?` (boolean) — Show/hide password button
- `autoComplete?` (string) — HTML autocomplete attribute

---

### LoginForm
Complete login form with validation.

```tsx
<LoginForm
  onSubmit={async (data) => {
    // Handle login: send to API
    console.log(data); // { email, password, rememberMe }
  }}
  onGoogleLogin={() => {
    // Trigger Google OAuth
  }}
/>
```

**Props:**
- `onSubmit?` (function) — Form submission handler
- `onGoogleLogin?` (function) — Google login handler

---

### RegisterForm
Complete register form with password strength indicator.

```tsx
<RegisterForm
  onSubmit={async (data) => {
    // Handle registration
    console.log(data); // { name, email, password, confirmPassword }
  }}
  onGoogleSignup={() => {
    // Trigger Google OAuth signup
  }}
/>
```

**Props:**
- `onSubmit?` (function) — Form submission handler
- `onGoogleSignup?` (function) — Google signup handler

---

### SocialLogin
Social login buttons (currently Google).

```tsx
<SocialLogin
  onGoogleClick={() => {}}
  isLoading={false}
  disabled={false}
/>
```

**Props:**
- `onGoogleClick?` (function) — Google button click handler
- `isLoading?` (boolean) — Show loading state
- `disabled?` (boolean) — Disable buttons

---

## 📋 Validation Schemas (Zod)

### Login Schema

```typescript
{
  email: string (required, valid email),
  password: string (required, min 6 chars),
  rememberMe?: boolean (optional, default false)
}
```

### Register Schema

```typescript
{
  name: string (required, min 2 chars),
  email: string (required, valid email),
  password: string (required, min 6 chars, must contain letters + numbers),
  confirmPassword: string (required, must match password)
}
```

---

## 🔌 API Integration

### Login Endpoint

**Request:**
```typescript
POST /api/auth/login
{
  email: string,
  password: string,
  rememberMe?: boolean
}
```

**Response (Success):**
```typescript
{
  success: true,
  token: string,
  user: {
    id: string,
    name: string,
    email: string,
    image?: string
  }
}
```

**Response (Error):**
```typescript
{
  success: false,
  message: "Invalid credentials"
}
```

---

### Register Endpoint

**Request:**
```typescript
POST /api/auth/register
{
  name: string,
  email: string,
  password: string
}
```

**Response (Success):**
```typescript
{
  success: true,
  token: string,
  user: {
    id: string,
    name: string,
    email: string
  }
}
```

**Response (Error):**
```typescript
{
  success: false,
  message: "Email already exists"
}
```

---

## 🔐 Google OAuth Integration

### Option 1: NextAuth.js (Recommended)

```typescript
// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
});

export { handler as GET, handler as POST };
```

### Option 2: Custom OAuth Flow

Implement the OAuth2 flow manually or use a library like `next-auth/react`.

---

## 🎨 Color Scheme

Built with TravBo's brand colors:

| Color | Value | Usage |
|-------|-------|-------|
| Primary Gold | `#FFAF19` | Buttons, links, focus states |
| Primary Hover | `#FF9500` | Button hover states |
| Dark Charcoal | `#1f2937` | Text, headings |
| Light Gray | `#F3F3F3` | Backgrounds, cards |
| Border | `#e5e7eb` | Input borders |
| Muted Text | `#64748b` | Placeholder, helper text |

---

## ⌨️ Keyboard Navigation

- `Tab` — Move between inputs
- `Shift+Tab` — Move back between inputs
- `Enter` — Submit form
- `Space` — Toggle checkbox / password visibility

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | 320px-640px | Single column, full-width form |
| Tablet | 641px-1024px | Single column, max-width form |
| Desktop | 1025px+ | Two-column layout (form + branding) |

---

## 🧪 Testing

### Form Validation

```typescript
// Test login form
const form = new LoginForm({
  email: "invalid-email",
  password: "123",
});

const result = loginSchema.safeParse(form);
console.log(result.error?.flatten().fieldErrors);
// { email: ["Please enter a valid email"], password: ["Password must be at least 6 characters"] }
```

---

## 🚀 Deployment

### Build

```bash
npm run build
```

### Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_API_URL=https://api.travbo.com
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

## 📝 Notes

- All forms include CSRF protection when connected to proper backends
- Passwords are hashed on the server (never send plaintext to client)
- Tokens should be stored securely (HTTP-only cookies recommended over localStorage)
- Consider implementing rate limiting on login attempts
- Add 2FA for enhanced security

---

## 🔗 Related Files

- [Tailwind Config](../../tailwind.config.ts)
- [Global Styles](../../src/app/globals.css)
- [Type Definitions](../../src/types/)

---

**Built with ❤️ for TravBo**
