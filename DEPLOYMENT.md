# CINEVERSE DEPLOYMENT GUIDE

This document outlines the step-by-step production deployment process for **CINEVERSE** on Vercel and Supabase.

---

## 1. Vercel Production Deployment

### Option A: Via Vercel CLI
```bash
# 1. Install Vercel CLI globally if not already installed
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy to production
cd C:\Users\HARESH\.gemini\antigravity\scratch\cineverse
vercel --prod
```

### Option B: Via GitHub & Vercel Dashboard
1. Initialize a git repository in the `cineverse` directory:
   ```bash
   git init
   git add .
   git commit -m "feat: complete production-ready Cineverse platform"
   git branch -M main
   git remote add origin https://github.com/your-username/cineverse.git
   git push -u origin main
   ```
2. Navigate to [https://vercel.com/new](https://vercel.com/new).
3. Import the `cineverse` repository.
4. Configure Build & Development Settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Configure Production Environment Variables:
   - `NEXT_PUBLIC_APP_URL`: `https://cineverse.vercel.app`
   - `NEXT_PUBLIC_SUPABASE_URL`: (Your Supabase project URL)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: (Your Supabase public anon key)
6. Click **Deploy**. Vercel will build the 23 static and dynamic routes and deploy the application globally across edge networks.

---

## 2. Supabase Cloud Database Provisioning

1. Sign in to your [Supabase Console](https://app.supabase.com).
2. Click **New Project** and name it `cineverse-db`.
3. Choose your nearest region (e.g. `ap-south-1` Mumbai or `us-east-1`).
4. Once provisioned, navigate to the **SQL Editor** tab.
5. Open `src/lib/db/schema.sql` from the Cineverse repository, paste the entire contents into the SQL Editor, and click **Run**.
   - This creates all 11 relational tables (`profiles`, `movies`, `theatres`, `screens`, `shows`, `seat_reservations`, `bookings`, `booked_seats`, `box_office_records`, `user_preferences`, `reviews`), constraints, indexes, and Row Level Security (RLS) policies.
6. Open `src/lib/db/seed.sql`, paste into the SQL Editor, and click **Run** to populate the cloud database with realistic seed data.
7. Navigate to **Project Settings -> API** to retrieve your `URL` and `anon/public` key.
8. Add these to your `.env.local` or Vercel Environment Variables.

---

## 3. Production Verification & Test Matrix

After deployment, verify the following core workflows:
1. **Homepage Load**: Featured hero banner loads, trailer modal plays, trending grid shows active releases.
2. **Movie Discovery**: Search for "CyberHorizon", filter by "Sci-Fi" and "Telugu", verify movie card renders with rating and badges.
3. **Theatrical Booking Flow**:
   - Select Movie -> Choose City (Mumbai) -> Select Date -> Select Showtime.
   - Interactive Seating: Choose 2 Recliner seats (e.g. A3, A4), verify 5-minute reservation timer triggers.
   - Checkout: Add Caramel Popcorn, select Demo UPI, complete booking.
   - Confirmation: Verify confetti celebration, inspect unique booking reference ID, test **Download PDF Ticket** button.
4. **My Bookings**: Confirm newly created ticket appears under "Active Passes". Test cancellation modal and verify seat liberation.
5. **Box Office Dashboard**:
   - Check key metric summary cards.
   - Toggle through all 7 Recharts tabs (Worldwide, India vs Overseas, Daily, Genre, Monthly, Scatter ROI, Opening Weekend).
   - Test table sorting by Worldwide Gross and Multiplier.
6. **Movie Comparison Arena**: Compare "CyberHorizon: 2099" vs "Astraea: Reign of Gods" and verify winning indicators.
7. **ML Success Predictor**: Adjust budget and star power sliders, click "Simulate Box Office Outcome", and inspect confidence intervals.
8. **Admin Control Center**: Switch role to Admin (Aiden Vance), open `/admin`, publish a new movie, and verify it appears in the catalogue.
