// Inline script to apply theme before hydration — no FOUC.
// Reads localStorage first, falls back to prefers-color-scheme, defaults to light.
const script = `(function(){try{var s=localStorage.getItem('owp.site.scheme');if(!s){s=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-scheme',s);}catch(e){document.documentElement.setAttribute('data-scheme','light');}})();`;

export function SchemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
