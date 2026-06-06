import { Icon } from "./icons";

export function AppStoreBtn() {
  return (
    <span className="store-btn store-btn--coming-soon" aria-label="Coming soon to the App Store">
      {Icon.apple({ width: 22, height: 22 })}
      <span>
        <span className="store-btn__line1">Coming soon to the</span>
        <span className="store-btn__line2">App Store</span>
      </span>
    </span>
  );
}
