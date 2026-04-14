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
  data-slot="avatar-group"
  class={cn(
    "data-[size=sm]:size-6-group group/avatar-group flex size-8 -space-x-2 rounded-full after:rounded-full data-[size=lg]:size-10 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
    className
  )}
  {...restProps}
>
  {@render children?.()}
</div>
