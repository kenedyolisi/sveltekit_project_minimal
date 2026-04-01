import { Dialog as SheetPrimitive } from "bits-ui";
import Close from "./sheet_close.svelte";
import Content from "./sheet_content.svelte";
import Description from "./sheet_description.svelte";
import Footer from "./sheet_footer.svelte";
import Header from "./sheet_header.svelte";
import Overlay from "./sheet_overlay.svelte";
import Title from "./sheet_title.svelte";
import Trigger from "./sheet_trigger.svelte";

const Root = SheetPrimitive.Root;
const Portal = SheetPrimitive.Portal;

export {
  Close,
  Content,
  Description,
  Footer,
  Header,
  Overlay,
  Portal,
  Root,
  Root as Sheet,
  Close as SheetClose,
  Content as SheetContent,
  Description as SheetDescription,
  Footer as SheetFooter,
  Header as SheetHeader,
  Overlay as SheetOverlay,
  Portal as SheetPortal,
  Title as SheetTitle,
  Trigger as SheetTrigger,
  Title,
  Trigger,
};
