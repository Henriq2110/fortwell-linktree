// Fortwell official social links
// Paste each VERIFIED profile URL between the quotes and publish the update.
// Example format: https://www.instagram.com/your_official_account/
// Do not use guessed URLs.
const FORTWELL_SOCIAL_LINKS = {
  instagram: "",
  facebook: ""
};

for (const [name, url] of Object.entries(FORTWELL_SOCIAL_LINKS)) {
  const button = document.querySelector(`[data-social="${name}"]`);
  if (!button) continue;
  const value = url.trim();
  // No URL? Leave the visible button disabled rather than sending visitors to the wrong account.
  if (!/^https:\/\//i.test(value)) continue;
  let address;
  try { address = new URL(value); } catch { continue; }
  const host = address.hostname.toLowerCase().replace(/^www\./, "");
  const allowed = name === "instagram"
    ? ["instagram.com", "instagr.am"]
    : ["facebook.com", "fb.com", "m.facebook.com"];
  if (!allowed.includes(host)) continue;
  button.href = address.href;
  button.classList.remove('is-pending');
  button.removeAttribute('aria-disabled');
  button.removeAttribute('title');
  button.setAttribute('aria-label', `Open Fortwell on ${name === "instagram" ? "Instagram" : "Facebook"}`);
  button.setAttribute('target','_blank');
  button.setAttribute('rel','noopener noreferrer');
  button.querySelector('.copy small').textContent = 'Follow Fortwell';
}
