import { Popover as PopoverPrimitive } from "bits-ui";
import Content from "./popover_content.svelte";
import Trigger from "./popover_trigger.svelte";

const Root = PopoverPrimitive.Root;
const Close = PopoverPrimitive.Close;

export {
  Close,
  Content,
  Root as Popover,
  Close as PopoverClose,
  Content as PopoverContent,
  Trigger as PopoverTrigger,
  Root,
  Trigger,
};
