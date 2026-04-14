<script lang="ts">
  import { Pagination as PaginationPrimitive } from "bits-ui";
  import { cn } from "tailwind-variants";
  import ChevronLeft from "virtual:icons/mingcute/left-line";
  import { buttonVariants } from "../button";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: PaginationPrimitive.PrevButtonProps = $props();
</script>

{#snippet Fallback()}
  <ChevronLeft class={cn("size-4", className)} />
  <span>Previous</span>
{/snippet}
<PaginationPrimitive.PrevButton
  bind:ref
  aria-label="Go to previous page"
  class={cn(buttonVariants({ variant: "ghost" }), "pl-2!", className)}
  {...restProps}
>
  {#if children}
    {@render children?.()}
  {:else}
    {@render Fallback()}
  {/if}
</PaginationPrimitive.PrevButton>
