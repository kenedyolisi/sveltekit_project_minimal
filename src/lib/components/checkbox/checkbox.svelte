<script lang="ts">
  import {
    Checkbox as CheckboxPrimitive,
    type WithoutChildrenOrChild,
  } from "bits-ui";
  import { cn } from "tailwind-variants";
  import Check from "virtual:icons/mingcute/check-line";
  import Minus from "virtual:icons/mingcute/minimize-line";

  let {
    ref = $bindable(null),
    checked = $bindable(false),
    indeterminate = $bindable(false),
    class: className,
    ...restProps
  }: WithoutChildrenOrChild<CheckboxPrimitive.RootProps> = $props();
</script>

<CheckboxPrimitive.Root
  bind:ref
  data-slot="checkbox"
  class={cn(
    "flex size-4 shrink-0 items-center justify-center rounded-sm border shadow-xs transition-shadow outline-none",
    "peer border-input dark:bg-input/30",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
    "dark:data-[state=checked]:bg-primary disabled:cursor-not-allowed disabled:opacity-50",
    className
  )}
  bind:checked
  bind:indeterminate
  {...restProps}
>
  {#snippet children({ checked, indeterminate })}
    <div data-slot="checkbox-indicator" class="text-current transition-none">
      {#if checked}
        <Check class="size-4" />
      {:else if indeterminate}
        <Minus class="size-4" />
      {/if}
    </div>
  {/snippet}
</CheckboxPrimitive.Root>
