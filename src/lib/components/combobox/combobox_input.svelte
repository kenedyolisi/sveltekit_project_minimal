<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type WithoutChildrenOrChild,
  } from "bits-ui";
  import { cn } from "tailwind-variants";

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChildrenOrChild<ComboboxPrimitive.InputProps> = $props();
</script>

<ComboboxPrimitive.Input
  data-slot="combobox-input"
  class={cn(
    "border-input bg-background flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base",
    "ring-offset-background shadow-xs transition-[color,box-shadow] outline-none",
    "placeholder:text-muted-foreground",
    "dark:bg-input/30 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
    className
  )}
  bind:ref
  {...restProps}
/>
