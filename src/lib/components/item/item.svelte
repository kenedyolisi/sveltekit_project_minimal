<script lang="ts" module>
  import type { WithElementRef } from "bits-ui";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn, tv, type VariantProps } from "tailwind-variants";

  export type ItemSize = VariantProps<typeof itemVariants>["size"];
  export type ItemVariant = VariantProps<typeof itemVariants>["variant"];
  export const itemVariants = tv({
    base: [
      "flex flex-wrap items-center rounded-md border border-transparent",
      "text-sm outline-none transition-colors duration-100 ",
      "group/item [a]:hover:bg-accent/50 [a]:transition-colors",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    ],
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border",
        muted: "bg-muted/50",
      },
      size: {
        default: "gap-4 p-4",
        sm: "gap-2.5 px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  });
</script>

<script lang="ts">
  let {
    ref = $bindable(null),
    class: className,
    child,
    variant,
    size,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    child?: Snippet<[{ props: Record<string, unknown> }]>;
    variant?: ItemVariant;
    size?: ItemSize;
  } = $props();

  const mergedProps = $derived({
    class: cn(itemVariants({ variant, size }), className),
    "data-slot": "item",
    "data-variant": variant,
    "data-size": size,
    ...restProps,
  });
</script>

{#if child}
  {@render child({ props: mergedProps })}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render mergedProps.children?.()}
  </div>
{/if}
