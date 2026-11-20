# CINEVERSE — Smart Movie Ticketing & Box Office Intelligence Platform

![CINEVERSE Platform](https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1400&auto=format&fit=crop&q=80)

**CINEVERSE** is an enterprise-grade cinematic web platform that bridges two systems:
1. **Full-Featured Theatrical Ticket Reservation Platform**: Real-time theatre discovery, showtime scheduling, interactive multi-tiered seat selection with atomic reservation locks, demo checkout with F&B add-ons, digital pass generation, QR verification, and PDF ticket downloads.
2. **Theatrical Box Office Intelligence & Data Visualization**: Advanced analytics tracking worldwide grosses, territory splits (India vs. Overseas), daily trajectories, genre performance, budget-to-gross ROI scatter plots, and an experimental Scikit-Learn regression prediction engine.

---

## 🌟 Key Platform Capabilities

### 1. Movie Discovery System
- Comprehensive movie catalogue with search, multi-factor filters (Genre, Language, Industry, Status, Rating), and sorting (Popularity, Rating, Release Date, Box Office Gross).
- Movie detail dossiers with backdrops, synopsis, director and cast profile cards, official trailers, box office numbers, and **verified accessibility indicators** (Audio Description, Closed Captions, Same-Language Captions, Indian Sign Language).

### 2. End-to-End Theatrical Ticket Booking
- **Step 1 — Movie Selection**: Pre-selected or interactive movie switch.
- **Step 2 — Location Selection**: Real-time city selector (Mumbai, Bengaluru, Hyderabad, Delhi NCR, Chennai, Pune).
- **Step 3 — Date Selector**: 7 consecutive calendar days.
- **Step 4 — Theatre & Screen Selection**: Multiplex partners (PVR INOX, Cinepolis, Prasads, Miraj, Palazzo) with cinema formats (IMAX 3D, 4DX, Dolby Cinema, Laser 4K).
- **Step 5 — Showtime Selection**: Show slots with real-time status indicators (Open, Filling Fast, Almost Full).
- **Step 6 — Interactive Seating Layout**:
  - **VIP Recliner** (Top luxury velvet rows with high-tier pricing)
  - **Prime Premium** (Optimum audio/visual sweet spot)
  - **Executive Regular** (Front to mid rows)
  - Real-time seat status: `Available`, `Selected`, `Booked`, `Reserved`.
  - **Atomic 5-Minute Reservation Lock**: Prevents double-booking with automatic release timer.
- **Step 7 — Checkout & F&B Add-ons**:
  - Gourmet Popcorn, Supreme Nachos, Blockbuster combos, and Mocktails with instant price updates.
  - Server-recalculated ticket pricing + Convenience Fee + 18% GST.
  - Demo payment options: Simulated UPI (GPay/PhonePe), Credit Card, NetBanking (no real financial data stored).
- **Step 8 — Booking Confirmation & Digital Pass**:
  - Unique reference ID (e.g., `CV-2026-XXXXX`).
  - Scannable QR code encoding secure verification URL.
  - High-resolution **Download PDF Ticket** using `jspdf`.
- **Step 9 — My Bookings**:
  - Upcoming, completed, and cancelled reservations.
  - Cancellation policy execution (90% refund credit up to 2 hours before showtime).

### 3. Box Office Analytics Dashboard
- **6 Key Metrics**: Total Tracked Worldwide, Total Tracked India, All-Time Gross Leader, Record 3-Day Opening, Number of Tracked Releases, Average Gross per Film.
- **7 Interactive Recharts Visualizations**:
  - **Chart 1 — Daily Trajectory**: Multi-movie line chart showing daily box office curve.
  - **Chart 2 — Worldwide Collection**: Comparative bar chart of top grossing titles.
  - **Chart 3 — India vs. Overseas**: Stacked bar chart highlighting territory splits.
  - **Chart 4 — Genre Performance**: Donut chart of theatrical revenue by genre.
  - **Chart 5 — Monthly Trends**: Area chart displaying seasonal quarterly cycles.
  - **Chart 6 — Budget vs. Gross**: Scatter plot analyzing ROI multiplier efficiency.
  - **Chart 7 — Opening Weekend Comparison**: 3-day opening impact vs. first-day velocity.
- Sortable performance ledger table with column sorting and verified data source tracking.

### 4. Movie Comparison Arena
- Head-to-head battle between any two films.
- Compares: Production Budget, India Gross, Overseas Gross, Worldwide Gross, Opening Day, Opening Weekend, Audience Rating, and Collection-to-Budget Multiplier.
- Automatic **Tale of the Tape** winner badges with educational footnotes on distributor shares vs. producer profit.

### 5. Machine Learning Box Office Predictor
- Scikit-Learn regression pipeline trained on historical theatrical records.
- **Inputs**: Budget, Genre, Language, Star Power index (1-10), Audience Buzz (10-100), Screen Count (800-7500), Franchise Status, Release Window.
- **Outputs**:
  - Estimated Opening Weekend collection (with 90% confidence margin).
  - Estimated Worldwide Theatrical Gross (with 90% confidence margin).
  - Commercial classification (Blockbuster, Profitable Hit, Average, High Risk).
  - Model evaluation transparency: Gradient Boosting & Random Forest ($R^2 = 0.928$ for opening weekend, $R^2 = 0.895$ for worldwide gross).

### 6. Intelligent Recommendations
- Content-based similarity scoring matching user preferences (genres, languages, star actors, minimum rating).
- Dynamic justification tags ("Matches your interest in Sci-Fi & Action", "Critically acclaimed ★8.9/10").
- One-click interactive taste profile editor.

### 7. Audience & Theatre Analytics
- Platform-internal demand analytics.
- **Occupancy Percentage Formula**:
  $$\text{Occupancy Percentage} = \left(\frac{\text{Booked Seats}}{\text{Total Available Seats}}\right) \times 100$$
- Showtime slot demand (Morning, Matinee, Prime Evening, Night, Late Night).
- Screen format preferences (IMAX vs. 4DX vs. Dolby Atmos vs. 2D).

### 8. Admin Control Center
- Role-based server-side security.
- Movie inventory management (Publish new films, delete old titles).
- Showtime scheduler (Assign films to screens, set dates and start times).
- Customer booking ledger (Inspect booking IDs, view attendee details, approve cancellations).
- Quick role toggle (Admin Aiden Vance vs. Movie Buff Alex Rivera).

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend Framework** | Next.js 14 (App Router), React 18, TypeScript |
| **Styling & UI** | Tailwind CSS, Lucide React, Glassmorphism, CSS Variables |
| **Data Visualization** | Recharts (Responsive Line, Bar, Stacked Bar, Pie, Area, Scatter Charts) |
| **Ticket Generation** | jsPDF, QRCode, Canvas-Confetti |
| **Backend & APIs** | Next.js Server Route Handlers (`/api/*`), Node.js |
| **Database Architecture** | Dual-Mode: Supabase PostgreSQL (Production) + Resilient In-Memory & File Store (Zero-config local) |
| **Machine Learning** | Python 3.13, Scikit-learn, Pandas, NumPy, Gradient Boosting, Random Forest |
| **Deployment Targets** | Vercel (Frontend & Serverless APIs), Supabase (Cloud Database) |

---

## 📂 Project Directory Structure

```
cineverse/
├── ml/                                 # Machine Learning Module
│   ├── box_office_dataset.csv          # Historical theatrical dataset
│   ├── train_model.py                  # Scikit-Learn training script
│   ├── predict.py                      # Standalone Python inference script
│   ├── model_metrics.json              # Trained evaluation metrics & R² scores
│   ├── opening_weekend_model.joblib    # Serialized opening model
│   └── worldwide_gross_model.joblib    # Serialized gross model
├── scripts/
│   └── verify_server.js                # Server validation & endpoint probe script
├── src/
│   ├── app/                            # Next.js App Router Pages & APIs
│   │   ├── admin/page.tsx              # Admin Control Center
│   │   ├── audience-analytics/page.tsx # Audience & Occupancy Analytics
│   │   ├── booking/                    # Booking flow
│   │   │   ├── page.tsx                # Theatre & Showtime picker
│   │   │   ├── seats/[showId]/page.tsx # Interactive Seating Map
│   │   │   ├── checkout/page.tsx       # Checkout & Demo Payment
│   │   │   └── confirmation/[bookingId]/page.tsx # Digital Ticket & Confirmation
│   │   ├── bookings/page.tsx           # My Bookings Hub
│   │   ├── box-office/page.tsx         # Box Office Intelligence Dashboard
│   │   ├── compare/page.tsx            # Movie Comparison Arena
│   │   ├── movies/                     # Movie Catalogue
│   │   │   ├── page.tsx                # Discovery Grid & Filters
│   │   │   └── [id]/page.tsx           # Movie Details Dossier
│   │   ├── predict/page.tsx            # ML Success Predictor
│   │   ├── recommendations/page.tsx    # Intelligent Recommendations
│   │   ├── api/                        # 13 Complete Backend API Routes
│   │   │   ├── admin/route.ts
│   │   │   ├── audience-analytics/route.ts
│   │   │   ├── bookings/route.ts
│   │   │   ├── bookings/[id]/route.ts
│   │   │   ├── bookings/[id]/cancel/route.ts
│   │   │   ├── box-office/route.ts
│   │   │   ├── movies/route.ts
│   │   │   ├── movies/[id]/route.ts
│   │   │   ├── predict/route.ts
│   │   │   ├── recommendations/route.ts
│   │   │   ├── seats/[showId]/route.ts
│   │   │   ├── shows/route.ts
│   │   │   └── theatres/route.ts
│   │   ├── globals.css                 # Cinematic Theme & Styles
│   │   └── layout.tsx                  # Root Layout & Context Wrappers
│   ├── components/                     # Reusable UI Components
│   │   ├── Navbar.tsx                  # Cinematic Header & City Selector
│   │   ├── Footer.tsx                  # Platform Footer & Disclaimers
│   │   ├── MovieCard.tsx               # Poster, Badges & Book Action
│   │   ├── HeroSection.tsx             # Featured Banner & Trailer Embed
│   │   ├── SeatLayout.tsx              # Interactive Seating Map & Timed Locks
│   │   ├── DigitalTicket.tsx           # Digital Pass, QR & PDF Export
│   │   ├── BoxOfficeCharts.tsx         # 7 Recharts Interactive Charts
│   │   ├── ComparisonChart.tsx         # Head-to-Head Comparison Arena
│   │   ├── PredictionForm.tsx          # ML Regression Simulator Form
│   │   ├── PreferenceModal.tsx         # User Taste Profile Customizer
│   │   └── TrailerModal.tsx            # Video Player Embed Modal
│   └── lib/                            # Business Logic & Database
│       ├── types.ts                    # TypeScript Type Definitions
│       ├── utils.ts                    # Formatting & Helpers
│       ├── context/                    # AuthContext & CityContext
│       ├── supabase/                   # Supabase Client & Configuration
│       └── db/
│           ├── database.ts             # Data Access Layer & Atomic Locks
│           ├── seed-data.ts            # Realistic Seed Dataset (Movies, Theatres)
│           ├── schema.sql              # Supabase PostgreSQL DDL & RLS
│           └── seed.sql                # Supabase SQL Seed Script
├── .env.example                        # Environment variables template
├── package.json                        # Dependencies & Scripts
├── tailwind.config.ts                  # Tailwind Configuration
└── tsconfig.json                       # TypeScript Configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher (v22 tested)
- **Python**: v3.10+ (for retraining ML models with Scikit-learn)

### Installation
1. Clone the repository and navigate to the project directory:
   ```bash
   cd cineverse
   ```
2. Install npm dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (optional for local development, as the built-in Data Access Layer works immediately):
   ```bash
   copy .env.example .env.local
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚢 Deployment to Vercel & Supabase

### Deploy to Vercel
1. Push your repository to GitHub or GitLab.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. In Project Settings, set:
   - **Framework Preset**: Next.js
   - **Root Directory**: `.`
   - **Build Command**: `npm run build`
4. Add the following Environment Variables:
   - `NEXT_PUBLIC_APP_URL`: Your Vercel production domain (e.g. `https://cineverse-app.vercel.app`)
   - `NEXT_PUBLIC_SUPABASE_URL`: (Optional) Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: (Optional) Your Supabase anon key
5. Click **Deploy**.

### Connect Supabase Cloud Database (Optional)
1. Create a project at [supabase.com](https://supabase.com).
2. Open the **SQL Editor** in Supabase.
3. Paste and run `src/lib/db/schema.sql` to generate all tables, relations, and Row Level Security policies.
4. Paste and run `src/lib/db/seed.sql` to populate the database with demonstration data.
5. Copy your **Project URL** and **Anon API Key** into your Vercel Environment Variables.

---

## 🔒 Security & Data Compliance Notice
- All booking amounts and seat availability are strictly verified and recalculated server-side.
- Seat reservation locks automatically expire after 5 minutes to release uncompleted bookings back to the public pool.
- Payments run in **Demonstration Test Mode**; no real credit cards, bank accounts, or financial credentials are ever requested or stored.
- Box office figures are indexed under the **Cineverse Simulated Cinema Ledger** for educational and demonstration purposes.
