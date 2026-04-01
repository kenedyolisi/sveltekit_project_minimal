<script lang="ts">
  import { Tabs as TabsPrimitive } from "bits-ui";
  import { cn } from "tailwind-variants";

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: TabsPrimitive.TriggerProps = $props();
</script>

<TabsPrimitive.Trigger
  bind:ref
  class={cn(
    "inline-flex items-center justify-center rounded-sm whitespace-nowrap",
    "ring-offset-background focus-visible:ring-ring",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
    "data-[state=active]:bg-background data-[state=active]:text-foreground",
    "px-3 py-1.5 text-sm font-medium transition-all",
    "disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm",
    className
  )}
  {...restProps}
/>
