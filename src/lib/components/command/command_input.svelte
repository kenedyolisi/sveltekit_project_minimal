<script lang="ts">
  import { Command as CommandPrimitive } from "bits-ui";
  import { cn } from "tailwind-variants";
  import Search from "virtual:icons/mingcute/search-2-line";

  let {
    ref = $bindable(null),
    class: className,
    value = $bindable(""),
    ...restProps
  }: CommandPrimitive.InputProps = $props();
</script>

<div
  class="flex h-9 items-center gap-2 border-b pr-8 pl-3"
  data-slot="command-input-wrapper"
>
  <Search class="size-4 shrink-0 opacity-50" />
  <CommandPrimitive.Input
    data-slot="command-input"
    class={cn(
      "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3",
      "text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    bind:ref
    {...restProps}
    bind:value
  />
</div>
