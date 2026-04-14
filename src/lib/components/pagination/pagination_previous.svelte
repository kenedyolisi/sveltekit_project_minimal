<script lang="ts">
  import type { ComponentProps } from "svelte";
  import { cn } from "tailwind-variants";
  import ChevronLeft from "virtual:icons/mingcute/left-line";
  import { PaginationLink } from ".";

  type PaginationPreviousProps = ComponentProps<typeof PaginationLink>;

  let { class: className, ...restProps }: PaginationPreviousProps = $props();
</script>

<PaginationLink
  aria-label="Go to previous page"
  size="default"
  class={cn("pl-2!", className)}
  {...restProps}
>
  <ChevronLeft data-icon="inline-start" />
  <span class="pl-2!-text hidden sm:block">Previous</span>
</PaginationLink>
