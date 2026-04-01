<script lang="ts">
  import { Select as SelectPrimitive, type WithoutChild } from "bits-ui";
  import { cn } from "tailwind-variants";
  import ChevronDown from "virtual:icons/mingcute/down-line";

  let {
    ref = $bindable(null),
    class: className,
    children,
    size = "default",
    ...restProps
  }: WithoutChild<SelectPrimitive.TriggerProps> & {
    size?: "sm" | "default";
  } = $props();
</script>

<SelectPrimitive.Trigger
  bind:ref
  data-slot="select-trigger"
  data-size={size}
  class={cn(
    "border-input flex w-fit items-center justify-between gap-2 rounded-md border",
    "bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs",
    "transition-[color,box-shadow] outline-none select-none",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "aria-invalid:border-destructive disabled:cursor-not-allowed disabled:opacity-50",
    "aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground",
    "data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1",
    "*:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center",
    "dark:bg-input/30 dark:hover:bg-input/50 *:data-[slot=select-value]:gap-2",
    "dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    "[&_svg:not([class*='text-'])]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4",
    className
  )}
  {...restProps}
>
  {@render children?.()}
  <ChevronDown class="size-4 opacity-50" />
</SelectPrimitive.Trigger>
