<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type WithoutChildrenOrChild,
  } from "bits-ui";
  import ArrowsUp from "virtual:icons/mingcute/arrows-up-line";

  let {
    ref = $bindable(null),
    ...restProps
  }: WithoutChildrenOrChild<ComboboxPrimitive.ScrollUpButtonProps> = $props();
</script>

<ComboboxPrimitive.ScrollUpButton bind:ref {...restProps}>
  <ArrowsUp class="size-4" />
</ComboboxPrimitive.ScrollUpButton>
