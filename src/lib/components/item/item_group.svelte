<script lang="ts">
  import type { WithElementRef } from "bits-ui";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "tailwind-variants";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
  bind:this={ref}
  role="list"
  data-slot="item-group"
  class={cn("group/item-group flex flex-col", className)}
  {...restProps}
>
  {@render children?.()}
</div>
