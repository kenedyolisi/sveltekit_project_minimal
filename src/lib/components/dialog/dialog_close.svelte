<script lang="ts">
  import { Dialog as DialogPrimitive } from "bits-ui";
  import { cn } from "tailwind-variants";
  import X from "virtual:icons/mingcute/close-line";
  import { Button } from "../button";

  let { ref = $bindable(null), ...restProps }: DialogPrimitive.CloseProps =
    $props();
</script>

<DialogPrimitive.Close bind:ref data-slot="dialog-close" {...restProps}>
  {#snippet child(props)}
    <Button
      variant="ghost"
      size="icon"
      aria-label="Close"
      class={cn(
        "ring-offset-background focus:ring-ring absolute inset-e-4 top-4 rounded-full",
        "opacity-70 transition-opacity hover:opacity-100",
        "focus:ring-2 focus:ring-offset-2 focus:outline-hidden",
        "disabled:pointer-events-none [&_svg]:pointer-events-none",
        "[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      )}
      {...props}
    >
      <X />
    </Button>
  {/snippet}
</DialogPrimitive.Close>
