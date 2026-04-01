<script lang="ts">
  import { Pagination as PaginationPrimitive } from "bits-ui";
  import { cn } from "tailwind-variants";
  import ChevronLeft from "virtual:icons/mingcute/left-line";
  import { buttonVariants } from "../button";

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: PaginationPrimitive.PrevButtonProps = $props();
</script>

<PaginationPrimitive.PrevButton
  bind:ref
  aria-label="Go to previous page"
  class={cn(
    buttonVariants({
      size: "default",
      variant: "ghost",
      class: "gap-1 px-2.5 sm:ps-2.5",
    }),
    className
  )}
  {...restProps}
>
  <ChevronLeft />
  <span class="hidden sm:block">Previous</span></PaginationPrimitive.PrevButton
>
