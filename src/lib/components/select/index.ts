import { Select as SelectPrimitive } from "bits-ui";
import Content from "./select_content.svelte";
import Group from "./select_group.svelte";
import GroupHeading from "./select_group_heading.svelte";
import Item from "./select_item.svelte";
import Label from "./select_label.svelte";
import ScrollDownButton from "./select_scroll_down_button.svelte";
import ScrollUpButton from "./select_scroll_up_button.svelte";
import Separator from "./select_separator.svelte";
import Trigger from "./select_trigger.svelte";

const Root = SelectPrimitive.Root;

export {
  Content,
  Group,
  GroupHeading,
  Item,
  Label,
  Root,
  ScrollDownButton,
  ScrollUpButton,
  Root as Select,
  Content as SelectContent,
  Group as SelectGroup,
  GroupHeading as SelectGroupHeading,
  Item as SelectItem,
  Label as SelectLabel,
  ScrollDownButton as SelectScrollDownButton,
  ScrollUpButton as SelectScrollUpButton,
  Separator as SelectSeparator,
  Trigger as SelectTrigger,
  Separator,
  Trigger,
};
