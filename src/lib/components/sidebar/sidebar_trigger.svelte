<script lang="ts">
  import type { ComponentProps } from "svelte";
  import { cn } from "tailwind-variants";
  import Layout from "virtual:icons/mingcute/layout-line";
  import { Button } from "../button";
  import { useSidebar } from "./context.svelte.js";

  let {
    ref = $bindable(null),
    class: className,
    onclick,
    ...restProps
  }: ComponentProps<typeof Button> & {
    onclick?: (e: MouseEvent) => void;
  } = $props();
  const sidebar = useSidebar();
</script>

<Button
  bind:ref
  data-sidebar="trigger"
  data-slot="sidebar-trigger"
  variant="ghost"
  size="icon"
  class={cn("cn-sidebar-trigger", className)}
  type="button"
  onclick={(event) => {
    onclick?.(event);
    sidebar.toggle();
  }}
  {...restProps}
>
  <Layout />
  <span class="sr-only">Toggle Sidebar</span>
</Button>
