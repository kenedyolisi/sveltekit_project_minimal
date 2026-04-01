<script lang="ts" module>
  import type { WithElementRef } from "bits-ui";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn, tv, type VariantProps } from "tailwind-variants";

  export const alertVariants = tv({
    base: "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "bg-red-100 text-red-500 *:data-[slot=alert-description]:text-red-500/90 [&>svg]:text-current",
        success:
          "bg-green-100 text-green-500 *:data-[slot=alert-description]:text-green-500/90 [&>svg]:text-current",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  });

  export type AlertVariant = VariantProps<typeof alertVariants>["variant"];
</script>

<script lang="ts">
  let {
    ref = $bindable(null),
    class: className,
    variant = "default",
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    variant?: AlertVariant;
  } = $props();
</script>

<div
  bind:this={ref}
  data-slot="alert"
  class={cn(alertVariants({ variant }), className)}
  {...restProps}
  role="alert"
>
  {@render children?.()}
</div>
