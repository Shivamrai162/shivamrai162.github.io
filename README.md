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
- Homepage motion lives in `components/portfolio-motion.tsx` and `app/motion.css`: drifting background dots, sequential pipeline stages and project diagram highlights, and brief section entry cues. The diagram control pauses all homepage animations. Reduced-motion visitors start with motion off and can explicitly enable it for that visit. Loops pause off-screen and when the page is hidden. No animation library or additional network assets are required.

## Work samples

The `/work/` page contains career filters, expandable case studies, and illustrative workflow diagrams. Homepage cards link to their corresponding case studies. Its copy and supporting-file slots live in `lib/work-samples.ts`.

To publish a supporting file, add an `href` to its artifact entry using an approved public OneDrive link, a public repository, or a static file path. Verify that it opens without requesting access and permits viewing only. Keep unpublished slots clearly labelled. The current illustrations are conceptual portfolio recreations, not exported employer architecture diagrams. Add only files you are authorized to publish; use fictional data for recreated finance examples. No OneDrive files have been connected yet.

`trailingSlash: true` emits `out/work/index.html` for reliable direct navigation on GitHub Pages.

## Contact messages

The contact form opens a prefilled draft in the visitor's email app. The visitor reviews and sends the draft from that app. The direct email address and LinkedIn link provide other ways to get in touch.

## Optional site statistics

Google Analytics is not included. The repository variable `NEXT_PUBLIC_GOATCOUNTER_CODE` is configured as `shivamrai162`, using the account at https://shivamrai162.goatcounter.com. The tracking script is included during deployment when that variable is set. Run the deployment workflow again after changing a build variable. GitHub reports still require a statistics-reading API secret and a reporting workflow; neither is included yet.

The integration counts page views and these fixed-name events: resume downloads/open/preview; profile and project links; opened case studies and supporting files; email draft clicks; and section views. Analytics exclude contact form values. Use the provider dashboard for visits, referring sites, approximate locations, browsers and screen sizes. Traffic before activation cannot be recovered. Resume and email draft events measure clicks. Blockers may prevent counting.

Keep `.env.local`, `node_modules`, generated builds and credentials out of Git. `.env.example` lists only public configuration.
