import registerClock from "./Clock";
import registerShortcutBadge from "./ShortcutBadge";

export default function registerDashboardBlocks() {
  registerClock();
  registerShortcutBadge();
}
