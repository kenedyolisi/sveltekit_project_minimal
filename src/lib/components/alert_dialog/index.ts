import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
import Action from "./alert_dialog_action.svelte";
import Cancel from "./alert_dialog_cancel.svelte";
import Content from "./alert_dialog_content.svelte";
import Description from "./alert_dialog_description.svelte";
import Footer from "./alert_dialog_footer.svelte";
import Header from "./alert_dialog_header.svelte";
import Overlay from "./alert_dialog_overlay.svelte";
import Title from "./alert_dialog_title.svelte";
import Trigger from "./alert_dialog_trigger.svelte";

const Root = AlertDialogPrimitive.Root;
const Portal = AlertDialogPrimitive.Portal;

export {
  Action,
  Root as AlertDialog,
  Action as AlertDialogAction,
  Cancel as AlertDialogCancel,
  Content as AlertDialogContent,
  Description as AlertDialogDescription,
  Footer as AlertDialogFooter,
  Header as AlertDialogHeader,
  Overlay as AlertDialogOverlay,
  Portal as AlertDialogPortal,
  Title as AlertDialogTitle,
  Trigger as AlertDialogTrigger,
  Cancel,
  Content,
  Description,
  Footer,
  Header,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
};
