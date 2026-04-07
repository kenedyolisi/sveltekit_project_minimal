<script lang="ts">
  import CheckCircle from "virtual:icons/mingcute/check-circle-line";
  import type { AlertVariant } from "../alert";
  import * as Alert from "../alert";

  type ToastProps = {
    variant: AlertVariant;
    message: string;
  };

  let { variant, message }: ToastProps = $props();
</script>

<Alert.Root {variant} class="flex items-center justify-between gap-4">
  <div class="flex items-start gap-2">
    <CheckCircle class="shrink-0" />
    <Alert.Description class="text-inherit">
      {message}
    </Alert.Description>
  </div>
  <!-- <button type="button" class="size-5" aria-label="dismiss alert">
    <Close class="size-4" />
  </button> -->
</Alert.Root>
