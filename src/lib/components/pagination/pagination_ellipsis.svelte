<script lang="ts">
  import type { WithElementRef, WithoutChildren } from "bits-ui";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "tailwind-variants";
  import Ellipsis from "virtual:icons/mingcute/more-1-line";

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChildren<
    WithElementRef<HTMLAttributes<HTMLSpanElement>>
  > = $props();
</script>

<span
  bind:this={ref}
  aria-hidden="true"
  data-slot="pagination-ellipsis"
  class={cn(
    "flex size-9 items-center justify-center [&_svg:not([class*='size-'])]:size-4",
    className
  )}
  {...restProps}
>
  <Ellipsis />
  <span class="sr-only">More pages</span>
</span>
