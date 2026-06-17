# HSK 1 Mandarin Course

A self-contained Progressive Web App for learning Mandarin (0 to hero): a guided
curriculum with quizzes, spaced-repetition flashcards, immersion scenes with audio
and illustrations, picture/listen/cloze/build practice, grammar, stroke-order writing,
tone-colored pinyin, dark mode, a streak + activity heatmap, and cloud sign-in.

## Run locally
Open `index.html`, or serve the folder: `python3 -m http.server` then http://localhost:8000

## Cloud sign-in (Supabase) — already configured
- A Supabase project is connected; keys live in `config.js` (the publishable key is safe to expose).
- A `progress` table with row-level security stores each user's data; progress syncs on sign-in.
- Email/password sign-in is in Settings (gear icon). By default Supabase may require email
  confirmation: to skip it, in the Supabase dashboard go to Authentication > Providers > Email
  and turn off "Confirm email".

## Deploy to Vercel (via GitHub)
1. In this folder: `git init && git add -A && git commit -m "init"`
2. Create a GitHub repo, then: `git remote add origin <repo-url> && git branch -M main && git push -u origin main`
3. vercel.com > Add New > Project > import the repo. Framework: Other. No build command. Deploy.
4. After it is live, add the Vercel URL in Supabase > Authentication > URL Configuration (Site URL).
