<script lang="ts">
  import type { WithElementRef, WithoutChildren } from "bits-ui";
  import type { HTMLTextareaAttributes } from "svelte/elements";
  import { cn } from "tailwind-variants";

  let {
    ref = $bindable(null),
    value = $bindable(),
    class: className,
    "data-slot": dataSlot = "textarea",
    ...restProps
  }: WithoutChildren<WithElementRef<HTMLTextareaAttributes>> = $props();
</script>

<textarea
  bind:this={ref}
  data-slot={dataSlot}
  class={cn(
    "border-input placeholder:text-muted-foreground border px-3 py-2 text-base shadow-xs ",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
    "aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full",
    "rounded-md bg-transparent  transition-[color,box-shadow] outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    className
  )}
  bind:value
  {...restProps}
></textarea>
