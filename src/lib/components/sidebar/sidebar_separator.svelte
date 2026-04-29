<script lang="ts">
  import type { ComponentProps } from "svelte";
  import { cn } from "tailwind-variants";
  import { Separator } from "../separator";

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: ComponentProps<typeof Separator> = $props();
</script>

<Separator
  bind:ref
  data-slot="sidebar-separator"
  data-sidebar="separator"
  class={cn("mx-2 w-auto bg-sidebar-border", className)}
  {...restProps}
/>
