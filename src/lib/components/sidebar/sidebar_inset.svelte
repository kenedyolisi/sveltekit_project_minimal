<script lang="ts">
  import type { WithElementRef } from "bits-ui";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "tailwind-variants";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<div
  bind:this={ref}
  data-slot="sidebar-inset"
  class={cn(
    "relative flex w-full flex-1 flex-col bg-background",
    "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0",
    "md:peer-data-[variant=inset]:rounded-xl",
    "md:peer-data-[variant=inset]:shadow-sm",
    "md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
    className
  )}
  {...restProps}
>
  {@render children?.()}
</div>
