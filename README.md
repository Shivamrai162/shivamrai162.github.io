# Shivam Rai — portfolio

Personal portfolio built with Next.js, TypeScript and Tailwind CSS, exported for GitHub Pages.

## Website and updates

Target website: https://shivamrai162.github.io/

The `Deploy portfolio to GitHub Pages` workflow builds and publishes every push to `main`. GitHub repository Settings → Pages must use **GitHub Actions** as its publishing source. The user-site repository name is `shivamrai162.github.io`, so no project base path is needed.

Use Node.js 22, run `npm ci`, then `npm run dev`. Run `npm run typecheck` and `npm run build` before publishing. The static output is `out/`.

## Content and appearance

- Edit professional content and project links in `lib/content.ts`. Missing live-demo/source links remain clearly marked placeholders.
- Replace `public/Shivam_Rai_Resume.pdf` to update the resume preview/download.
- Edit the layout in `components/portfolio.tsx` and styles in `app/globals.css`.
- Every page load starts in dark mode. The header button switches between light and dark for the current visit.

## Contact messages

GitHub Pages serves static files. The form submits to the existing portfolio API at `https://shivam-rai-data-portfolio.shivamrai162.chatgpt.site/api/contact`, which saves messages in the owner's private Sites database. It does not send an email notification. The API permits the exact GitHub Pages origin, validates input, and limits each sender to five saved messages per hour. Keep that backend published for form delivery; the direct email link works independently.

The public build variable `NEXT_PUBLIC_CONTACT_ENDPOINT` can override the API URL. Any replacement endpoint must accept the form JSON fields `name`, `email`, `message`, and `website`, support the GitHub origin, and return a successful JSON response only after saving the message. No deployment token or database credential belongs in this repository.

## Optional site statistics

Google Analytics is not included. GoatCounter integration is prepared but sends no data until a real account is configured. Create a free personal-site account at https://www.goatcounter.com/signup, keep its dashboard private, and set repository Settings → Secrets and variables → Actions → Variables → `NEXT_PUBLIC_GOATCOUNTER_CODE` to the site code from `YOURCODE.goatcounter.com`. Run the deployment workflow again after changing a build variable.

The integration counts page views and these fixed-name events: resume downloads/open/preview; profile and project links; saved contact messages; and section views. It never includes contact form values in analytics events. Use the provider dashboard for visits, referring sites, approximate locations, browsers and screen sizes. Traffic before activation cannot be recovered. Resume events measure clicks rather than proof that a download completed. Blockers may prevent counting.

Keep `.env.local`, `node_modules`, generated builds and credentials out of Git. `.env.example` lists only public configuration.
