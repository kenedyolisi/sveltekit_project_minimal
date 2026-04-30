<script lang="ts">
  import type { WithElementRef } from "bits-ui";
  import type { Snippet } from "svelte";
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import { cn } from "tailwind-variants";

  let {
    ref = $bindable(null),
    class: className,
    href = undefined,
    child,
    children,
    ...restProps
  }: WithElementRef<HTMLAnchorAttributes> & {
    child?: Snippet<[{ props: HTMLAnchorAttributes }]>;
  } = $props();

  const attributes = $derived({
    "data-slot": "breadcrumb-link",
    class: cn("hover:text-foreground transition-colors", className),
    href,
    ...restProps,
  });
</script>

{#if child}
  {@render child({ props: attributes })}
{:else}
  <a bind:this={ref} {...attributes}>
    {@render children?.()}
  </a>
{/if}
