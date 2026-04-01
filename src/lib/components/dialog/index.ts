import { Dialog as DialogPrimitive } from "bits-ui";
import Close from "./dialog_close.svelte";
import Content from "./dialog_content.svelte";
import Description from "./dialog_description.svelte";
import Footer from "./dialog_footer.svelte";
import Header from "./dialog_header.svelte";
import Overlay from "./dialog_overlay.svelte";
import Title from "./dialog_title.svelte";
import Trigger from "./dialog_trigger.svelte";

const Root = DialogPrimitive.Root;
const Portal = DialogPrimitive.Portal;

export {
  Close,
  Content,
  Description,
  Root as Dialog,
  Close as DialogClose,
  Content as DialogContent,
  Description as DialogDescription,
  Footer as DialogFooter,
  Header as DialogHeader,
  Overlay as DialogOverlay,
  Portal as DialogPortal,
  Title as DialogTitle,
  Trigger as DialogTrigger,
  Footer,
  Header,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
};
