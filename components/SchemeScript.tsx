// Inline script to apply theme before hydration — no FOUC.
// Light by default. Only goes dark if the user explicitly toggled (stored in localStorage).
const script = `(function(){try{var s=localStorage.getItem('owp.site.scheme')||'light';document.documentElement.setAttribute('data-scheme',s);}catch(e){document.documentElement.setAttribute('data-scheme','light');}})();`;

export function SchemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
