import { Tabs as TabsPrimitive } from "bits-ui";
import Content from "./tabs_content.svelte";
import List from "./tabs_list.svelte";
import Trigger from "./tabs_trigger.svelte";

const Root = TabsPrimitive.Root;

export {
  Content,
  List,
  Root,
  Root as Tabs,
  Content as TabsContent,
  List as TabsList,
  Trigger as TabsTrigger,
  Trigger,
};
