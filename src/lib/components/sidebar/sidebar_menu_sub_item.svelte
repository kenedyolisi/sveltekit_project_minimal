<script lang="ts">
  import type { WithElementRef } from "bits-ui";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "tailwind-variants";

  let {
    ref = $bindable(null),
    children,
    class: className,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLLIElement>> = $props();
</script>

<li
  bind:this={ref}
  data-slot="sidebar-menu-sub-item"
  data-sidebar="menu-sub-item"
  class={cn("group/menu-sub-item relative", className)}
  {...restProps}
>
  {@render children?.()}
</li>
