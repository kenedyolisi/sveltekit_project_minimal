<script lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
  import { cn } from "tailwind-variants";
  import { buttonVariants } from "../button";

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: AlertDialogPrimitive.ActionProps = $props();
</script>

<AlertDialogPrimitive.Action
  bind:ref
  data-slot="alert-dialog-action"
  class={cn(buttonVariants(), className)}
  {...restProps}
/>
