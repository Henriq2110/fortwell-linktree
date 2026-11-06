FORTWELL HOME EXTERIORS - LINKTREE WITH 5 BUTTONS
=================================================
Final URL: https://links.fortwellexteriors.com/

BUTTONS (in order):
1. Instagram - visible but disabled until the official profile URL is supplied
2. Facebook - visible but disabled until the official page URL is supplied
3. Phone - tel:+19736715237
4. Website - https://fortwellexteriors.com/
5. Request a Quote - opens an email to info@fortwellexteriors.com with a pre-filled request template

ACTIVATE INSTAGRAM AND FACEBOOK:
Open public/assets/links.js and paste each exact official URL between the double quotes.
Commit changes to GitHub; Render will automatically redeploy if linked.
Unverified social account URLs were intentionally not guessed.

RENDER DEPLOY:
- Host as a new Static Site, independent from the existing Fortwell website service.
- GitHub repository should contain the public folder at its root.
- Build Command: echo ready
- Publish Directory: public
- Link custom domain: links.fortwellexteriors.com
- Squarespace DNS: CNAME host links -> exact target supplied by Render for this new static site.
- If an old CNAME for links points to Cloudflare Pages, replace it; do not create two CNAME records with the same host.
- Do not change @, www, MX, or TXT records.

QR CODE / BUSINESS CARD:
The QR printed on the previously prepared business card points to
https://links.fortwellexteriors.com/
No new QR is required when changing button URLs or hosting, provided this domain stays active.
