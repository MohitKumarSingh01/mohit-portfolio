# Mohit Kumar Singh — Dynamic Full-Stack Portfolio

A responsive React portfolio backed by a Node.js + Express API. The experience timeline, skills, projects, certifications and profile data load dynamically from `/api/*`. Cards and skill tags open detail panels; navigation, social profiles, email, resume download, theme toggle, skill filters/search and contact form are interactive.

## Tech stack
- React + Vite
- Node.js + Express REST API
- Lucide React icons
- Responsive custom CSS

## Requirements
- Node.js 18+ recommended
- npm

## Run locally
```bash
npm install
npm run dev
```
- Frontend: http://localhost:5173
- API: http://localhost:5000/api/profile

## Production build
```bash
npm install
npm run build
npm start
```
The Express server serves the Vite build in production. Set `PORT` if your hosting provider requires a specific port.

## Personal details and content
Edit `server/index.js` to update the profile, skills, work history, projects and certifications. The supplied resume PDF is at `client/public/Mohit-Kumar-Singh-Resume.pdf` and is linked from the hero section.

### Before publishing
1. Verify the LinkedIn URL and GitHub username.
2. Replace generic project links with the exact repositories and live demos. The Growth Basket links are included from the supplied profile details.
3. Confirm the Orbitor role dates/details and all skill levels before publishing.
4. Add credential verification URLs where available.
5. The contact API validates submissions and logs them to the server console only. It does **not** send emails or persist messages. Connect an email provider (for example, Resend) or database before production use; do not add private API keys to frontend code.
6. Update the education CGPA if it changes. This portfolio uses the latest value supplied in the request: 7.56 CGPA; Class XII: 75.4%.

## API routes
- `GET /api/profile`
- `GET /api/experience`
- `GET /api/skills`
- `GET /api/projects`
- `GET /api/certifications`
- `POST /api/contact` with `{ "name": "...", "email": "...", "message": "..." }`


## Vercel deployment note
The React frontend now bundles profile, skills, experience, projects and certifications locally, so these sections render on static Vercel hosting without an Express API. The contact form requires a separately deployed API and email provider to actually deliver messages. Set `VITE_API_BASE_URL` to the deployed backend URL if/when one is configured.
