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
  data-slot="breadcrumb-ellipsis"
  role="presentation"
  aria-hidden="true"
  class={cn(
    "flex size-5 items-center justify-center [&>svg]:size-4",
    className
  )}
  {...restProps}
>
  <Ellipsis />
  <span class="sr-only">More</span>
</span>
