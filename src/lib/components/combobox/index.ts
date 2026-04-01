import { Combobox as ComboboxPrimitive } from "bits-ui";
import Root from "./combobox.svelte";
import Content from "./combobox_content.svelte";
import Group from "./combobox_group.svelte";
import GroupHeading from "./combobox_group_heading.svelte";
import Input from "./combobox_input.svelte";
import Item from "./combobox_item.svelte";
import ScrollDownButton from "./combobox_scroll_down_button.svelte";
import ScrollUpButton from "./combobox_scroll_up_button.svelte";
import Trigger from "./combobox_trigger.svelte";

const Arrow = ComboboxPrimitive.Arrow;
const Separator = ComboboxPrimitive.Separator;

export {
  Arrow,
  Root as Combobox,
  Arrow as ComboboxArrow,
  Content as ComboboxContent,
  Group as ComboboxGroup,
  GroupHeading as ComboboxGroupHeading,
  Input as ComboboxInput,
  Item as ComboboxItem,
  ScrollDownButton as ComboboxScrollDownButton,
  ScrollUpButton as ComboboxScrollUpButton,
  Separator as ComboboxSeparator,
  Trigger as ComboboxTrigger,
  Content,
  Group,
  GroupHeading,
  Input,
  Item,
  Root,
  ScrollDownButton,
  ScrollUpButton,
  Separator,
  Trigger,
};
