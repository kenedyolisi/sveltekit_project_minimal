<script lang="ts">
  import { Combobox as ComboboxPrimitive } from "bits-ui";
  import { cn } from "tailwind-variants";
  import Check from "virtual:icons/mingcute/check-line";

  let {
    ref = $bindable(null),
    class: className,
    children: childrenProp,
    label,
    value,
    ...restProps
  }: ComboboxPrimitive.ItemProps = $props();
</script>

<ComboboxPrimitive.Item
  data-slot="combobox-item"
  class={cn(
    "data-highlighted:bg-accent flex h-10 w-full items-center justify-between",
    "rounded-md py-3 pr-1.5 pl-5 text-sm capitalize outline-hidden select-none",
    className
  )}
  {value}
  {label}
  bind:ref
  {...restProps}
>
  {#snippet children({ selected, highlighted })}
    {#if childrenProp}
      {@render childrenProp({ selected, highlighted })}
    {:else}
      {label ?? value}
    {/if}
    {#if selected}
      <Check class="size-4 " />
    {/if}
  {/snippet}
</ComboboxPrimitive.Item>
