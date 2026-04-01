<script lang="ts">
  import { Calendar as CalendarPrimitive } from "bits-ui";
  import { cn } from "tailwind-variants";
  import ChevronLeft from "virtual:icons/mingcute/left-line";
  import { buttonVariants, type ButtonVariant } from "../button";


  let {
    ref = $bindable(null),
    class: className,
    children,
    variant = "ghost",
    ...restProps
  }: CalendarPrimitive.PrevButtonProps & {
    variant?: ButtonVariant;
  } = $props();
</script>

{#snippet Fallback()}
  <ChevronLeft class="size-4" />
{/snippet}

<CalendarPrimitive.PrevButton
  bind:ref
  class={cn(
    buttonVariants({ variant }),
    "size-(--cell-size) select-none bg-transparent p-0 disabled:opacity-50 rtl:rotate-180",
    className,
  )}
  children={children || Fallback}
  {...restProps}
/>
