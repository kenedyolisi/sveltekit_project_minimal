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
  data-slot="item-separator"
  orientation="horizontal"
  class={cn("my-0", className)}
  {...restProps}
/>
