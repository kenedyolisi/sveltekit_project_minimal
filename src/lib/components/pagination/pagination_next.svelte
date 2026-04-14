<script lang="ts">
  import type { ComponentProps } from "svelte";
  import { cn } from "tailwind-variants";
  import ChevronRight from "virtual:icons/mingcute/right-line";
  import { PaginationLink } from ".";

  type PaginationNextProps = ComponentProps<typeof PaginationLink>;

  let { class: className, ...restProps }: PaginationNextProps = $props();
</script>

<PaginationLink
  aria-label="Go to next page"
  size="default"
  class={cn("pr-2!", className)}
  {...restProps}
>
  <span class="pr-2!-text hidden sm:block">Next</span>
  <ChevronRight data-icon="inline-end" />
</PaginationLink>
