<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type WithoutChildrenOrChild,
  } from "bits-ui";
  import ArrowsDown from "virtual:icons/mingcute/arrows-down-line";

  let {
    ref = $bindable(null),
    ...restProps
  }: WithoutChildrenOrChild<ComboboxPrimitive.ScrollDownButtonProps> = $props();
</script>

<ComboboxPrimitive.ScrollDownButton bind:ref {...restProps}>
  <ArrowsDown class="size-4" />
</ComboboxPrimitive.ScrollDownButton>
