<script lang="ts">
  import {
    RatingGroup as RatingGroupPrimitive,
    type WithoutChildrenOrChild,
  } from "bits-ui";
  import { cn } from "tailwind-variants";
  import StarFill from "virtual:icons/mingcute/star-fill";
  import StarHalf from "virtual:icons/mingcute/star-half-fill";
  import Star from "virtual:icons/mingcute/star-line";

  let {
    value = $bindable(0),
    ref = $bindable(null),
    showLabel = true,
    max = 5,
    class: className,
    ...restProps
  }: WithoutChildrenOrChild<RatingGroupPrimitive.RootProps> & {
    showLabel?: boolean;
  } = $props();
</script>

<div class="flex flex-col gap-2">
  <RatingGroupPrimitive.Root
    bind:value
    bind:ref
    class={cn("flex gap-1", className)}
    {max}
    {...restProps}
  >
    {#snippet children({ items })}
      {#each items as item (item.index)}
        <RatingGroupPrimitive.Item index={item.index}>
          {#if item.state === "inactive"}
            <Star />
          {:else if item.state === "active"}
            <StarFill />
          {:else if item.state === "partial"}
            <StarHalf />
          {/if}
        </RatingGroupPrimitive.Item>
      {/each}
    {/snippet}
  </RatingGroupPrimitive.Root>

  {#if showLabel}
    <p class="text-muted-foreground text-sm">
      Rating: {value} out of {max} stars
    </p>
  {/if}
</div>
