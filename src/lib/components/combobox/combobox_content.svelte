<script lang="ts">
  import { Combobox as ComboboxPrimitive, type WithoutChild } from "bits-ui";
  import { cn } from "tailwind-variants";
  import { ScrollDownButton, ScrollUpButton } from ".";

  let {
    ref = $bindable(null),
    class: className,
    children,
    portalProps,
    ...restProps
  }: WithoutChild<ComboboxPrimitive.ContentProps> & {
    portalProps?: ComboboxPrimitive.PortalProps;
  } = $props();
</script>

<ComboboxPrimitive.Portal {...portalProps}>
  <ComboboxPrimitive.Content
    data-slot="combobox-content"
    class={cn(
      "border-muted bg-background shadow-popover z-50 h-96 rounded-xl border px-1 py-3 outline-hidden select-none",
      "data-[state=closed]:animate-out data-[state=open]:animate-in",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "max-h-(--bits-combobox-content-available-height) w-(--bits-combobox-anchor-width) min-w-(--bits-combobox-anchor-width)",
      "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    )}
    bind:ref
    {...restProps}
  >
    <ScrollUpButton class="flex w-full items-center justify-center py-1" />
    <ComboboxPrimitive.Viewport class="p-1">
      {@render children?.()}
    </ComboboxPrimitive.Viewport>
    <ScrollDownButton class="flex w-full items-center justify-center py-1" />
  </ComboboxPrimitive.Content>
</ComboboxPrimitive.Portal>
