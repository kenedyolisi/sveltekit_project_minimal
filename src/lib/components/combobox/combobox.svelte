<script lang="ts">
  import { Combobox as ComboboxPrimitive } from "bits-ui";

  let {
    type,
    items = [],
    value = $bindable(),
    open = $bindable(false),
    ...restProps
  }: ComboboxPrimitive.RootProps = $props();
</script>

<ComboboxPrimitive.Root
  {type}
  {items}
  bind:value={value as never}
  bind:open
  {...restProps}
/>
