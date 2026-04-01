<script lang="ts">
  import type { WithElementRef } from "bits-ui";
  import type {
    HTMLInputAttributes,
    HTMLInputTypeAttribute,
  } from "svelte/elements";
  import { cn } from "tailwind-variants";

  type InputType = Exclude<HTMLInputTypeAttribute, "file">;

  type Props = WithElementRef<
    Omit<HTMLInputAttributes, "type"> &
      (
        | { type: "file"; files?: FileList }
        | { type?: InputType; files?: undefined }
      )
  >;

  let {
    ref = $bindable(null),
    value = $bindable(),
    type,
    files = $bindable(),
    class: className,
    ...restProps
  }: Props = $props();
</script>

{#if type === "file"}
  <input
    bind:this={ref}
    data-slot="input"
    class={cn(
      "border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 pt-1.5 text-sm font-medium",
      "ring-offset-background shadow-xs transition-[color,box-shadow] outline-none",
      "selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground",
      "dark:bg-input/30 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
      className
    )}
    type="file"
    bind:files
    bind:value
    {...restProps}
  />
{:else}
  <input
    bind:this={ref}
    data-slot="input"
    class={cn(
      "border-input bg-background flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base",
      "ring-offset-background shadow-xs transition-[color,box-shadow] outline-none",
      "selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground",
      "dark:bg-input/30 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
      className
    )}
    {type}
    bind:value
    {...restProps}
  />
{/if}
