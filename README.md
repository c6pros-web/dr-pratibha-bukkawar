# Dr. Pratibha Bukkawar — Personal Website

A responsive, static personal website starter for Dr. Pratibha Bukkawar (Astrologer, Life Coach and Gemologist).

## Preview locally
Open `index.html` in a browser. An internet connection is used for Google Fonts; system serif/sans fonts are fallbacks.

## Before publishing
1. Open `script.js`.
2. Replace `ADD_NUMBER_HERE` with the WhatsApp number as digits only, including country code. For India, use `91` + the 10-digit mobile number.
3. Later, add profile photos and update text as desired. The hero currently uses a CSS-generated astrology illustration so there is no missing image.
4. Search in `index.html` for `Dr. Pratibha Bukkawar` and edit any text you want.

## Free hosting with Cloudflare Pages
1. Create a GitHub account and a new repository.
2. Upload `index.html`, `style.css`, `script.js`, and the `images` folder.
3. In Cloudflare, open **Workers & Pages → Create → Pages → Connect to Git**.
4. Choose the repository. For a plain static site, use no framework preset and leave build command empty. Set the output directory to `/` if prompted (or the repository root as instructed by the current UI).
5. Deploy. Cloudflare gives you a `*.pages.dev` preview URL.
6. In the Pages project, choose **Custom domains → Set up a custom domain** and follow the instructions. If Cloudflare requires nameservers for an apex domain, follow its exact steps; otherwise you can start with `www` and configure the DNS records it supplies in GoDaddy.
7. Don't share your GoDaddy password or verification codes with anyone.

## Edit without knowing code
For a simple text/photo update, you can ask for the change and replace the files in your repository. To swap in a photo later, add it to `images/` and update the relevant HTML. Keep image files reasonably compressed for speed.
