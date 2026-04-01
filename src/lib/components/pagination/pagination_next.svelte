<script lang="ts">
  import { Pagination as PaginationPrimitive } from "bits-ui";
  import { cn } from "tailwind-variants";
  import ChevronRight from "virtual:icons/mingcute/right-line";
  import { buttonVariants } from "../button";

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: PaginationPrimitive.NextButtonProps = $props();
</script>

<PaginationPrimitive.NextButton
  bind:ref
  aria-label="Go to next page"
  class={cn(
    buttonVariants({
      size: "default",
      variant: "ghost",
      class: "gap-1 px-2.5 sm:pe-2.5",
    }),
    className
  )}
  {...restProps}
>
  <span class="hidden sm:block">Next</span>
  <ChevronRight />
</PaginationPrimitive.NextButton>
