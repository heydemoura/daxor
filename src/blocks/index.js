import { init as registerColumn } from "@wordpress/block-library/build-module/column";
import { init as registerColumns } from "@wordpress/block-library/build-module/columns";
import { init as registerParagraph } from "@wordpress/block-library/build-module/paragraph";
import { init as registerList } from "@wordpress/block-library/build-module/list";
import { init as registerListItem } from "@wordpress/block-library/build-module/list-item";

import registerClock from "./Clock";
import registerShortcutBadge from "./ShortcutBadge";
import registerTodoist from "./Todoist";

export default function registerDashboardBlocks() {
  registerClock();
  registerShortcutBadge();
  registerTodoist();
  registerColumn();
  registerColumns();
  registerParagraph();
  registerList();
  registerListItem();
}
