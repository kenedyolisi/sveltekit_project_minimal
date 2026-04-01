<script lang="ts">
  import {
    Progress as ProgressPrimitive,
    type WithoutChildrenOrChild,
  } from "bits-ui";
  import { cn } from "tailwind-variants";

  type Props = WithoutChildrenOrChild<ProgressPrimitive.RootProps> & {
    bgColor: string;
  };

  let {
    ref = $bindable(null),
    class: className,
    max = 100,
    value,
    ...restProps
  }: Props = $props();
</script>

<ProgressPrimitive.Root
  bind:ref
  data-slot="progress"
  class={cn(
    "relative h-2 w-full overflow-hidden rounded-full bg-foreground/20",
    className,
  )}
  {value}
  {max}
  {...restProps}
>
  <div
    data-slot="progress-indicator"
    class="h-full w-full flex-1 bg-foreground transition-all"
    style="transform: translateX(-{100 - (100 * (value ?? 0)) / (max ?? 1)}%)"
  ></div>
</ProgressPrimitive.Root>
