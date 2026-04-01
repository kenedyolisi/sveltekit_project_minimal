import { Command as CommandPrimitive } from "bits-ui";
import Root from "./command.svelte";
import Dialog from "./command_dialog.svelte";
import Empty from "./command_empty.svelte";
import Group from "./command_group.svelte";
import Input from "./command_input.svelte";
import Item from "./command_item.svelte";
import LinkItem from "./command_link_item.svelte";
import List from "./command_list.svelte";
import Separator from "./command_separator.svelte";
import Shortcut from "./command_shortcut.svelte";

const Loading = CommandPrimitive.Loading;

export {
  Root as Command,
  Dialog as CommandDialog,
  Empty as CommandEmpty,
  Group as CommandGroup,
  Input as CommandInput,
  Item as CommandItem,
  LinkItem as CommandLinkItem,
  List as CommandList,
  Loading as CommandLoading,
  Separator as CommandSeparator,
  Shortcut as CommandShortcut,
  Dialog,
  Empty,
  Group,
  Input,
  Item,
  LinkItem,
  List,
  Loading,
  Root,
  Separator,
  Shortcut,
};
