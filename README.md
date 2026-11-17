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

## Work samples

The `/work/` page contains career filters, expandable case studies, and illustrative workflow diagrams. Homepage cards link to their corresponding case studies. Its copy and supporting-file slots live in `lib/work-samples.ts`.

To publish a supporting file, add an `href` to its artifact entry using an approved public OneDrive link, a public repository, or a static file path. Verify that it opens without requesting access and permits viewing only. Keep unpublished slots clearly labelled. The current illustrations are conceptual portfolio recreations, not exported employer architecture diagrams. Add only files you are authorized to publish; use fictional data for recreated finance examples. No OneDrive files have been connected yet.

`trailingSlash: true` emits `out/work/index.html` for reliable direct navigation on GitHub Pages.

## Contact messages

GitHub Pages serves static files. The form submits to the existing portfolio API at `https://shivam-rai-data-portfolio.shivamrai162.chatgpt.site/api/contact`, which saves messages in the owner's private Sites database. It does not send an email notification. The API permits the exact GitHub Pages origin, validates input, and limits each sender to five saved messages per hour. Keep that backend published for form delivery; the direct email link works independently.

The public build variable `NEXT_PUBLIC_CONTACT_ENDPOINT` can override the API URL. Any replacement endpoint must accept the form JSON fields `name`, `email`, `message`, and `website`, support the GitHub origin, and return a successful JSON response only after saving the message. No deployment token or database credential belongs in this repository.

## Optional site statistics

Google Analytics is not included. The repository variable `NEXT_PUBLIC_GOATCOUNTER_CODE` is configured as `shivamrai162`, using the account at https://shivamrai162.goatcounter.com. The tracking script is included during deployment when that variable is set. Run the deployment workflow again after changing a build variable. GitHub reports still require a statistics-reading API secret and a reporting workflow; neither is included yet.

The integration counts page views and these fixed-name events: resume downloads/open/preview; profile and project links; opened case studies and supporting files; saved contact messages; and section views. It never includes contact form values in analytics events. Use the provider dashboard for visits, referring sites, approximate locations, browsers and screen sizes. Traffic before activation cannot be recovered. Resume events measure clicks rather than proof that a download completed. Blockers may prevent counting.

Keep `.env.local`, `node_modules`, generated builds and credentials out of Git. `.env.example` lists only public configuration.
