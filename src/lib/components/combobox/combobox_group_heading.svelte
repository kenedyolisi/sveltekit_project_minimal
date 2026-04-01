<script lang="ts">
  import { Combobox as ComboboxPrimitive } from "bits-ui";

  let {
    ref = $bindable(null),
    ...restProps
  }: ComboboxPrimitive.GroupHeadingProps = $props();
</script>

<ComboboxPrimitive.GroupHeading
  data-slot="combobox-group-heading"
  bind:ref
  {...restProps}
/>
