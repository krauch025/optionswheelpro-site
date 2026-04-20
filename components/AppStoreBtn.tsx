import { Icon } from "./icons";

export function AppStoreBtn({ href = "#download" }: { href?: string }) {
  return (
    <a className="store-btn" href={href}>
      {Icon.apple({ width: 22, height: 22 })}
      <span>
        <span className="store-btn__line1">Download on the</span>
        <span className="store-btn__line2">App Store</span>
      </span>
    </a>
  );
}
