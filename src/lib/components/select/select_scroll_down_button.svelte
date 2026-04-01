<script lang="ts">
  import {
    Select as SelectPrimitive,
    type WithoutChildrenOrChild,
  } from "bits-ui";
  import { cn } from "tailwind-variants";
  import ArrowsDown from "virtual:icons/mingcute/arrows-down-line";

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChildrenOrChild<SelectPrimitive.ScrollDownButtonProps> = $props();
</script>

<SelectPrimitive.ScrollDownButton
  bind:ref
  data-slot="select-scroll-down-button"
  class={cn("flex cursor-default items-center justify-center py-1", className)}
  {...restProps}
>
  <ArrowsDown class="size-4" />
</SelectPrimitive.ScrollDownButton>
