<script lang="ts">
  import { Toaster, type ToasterProps } from "svelte-sonner";

  let {
    position = "top-center",
    duration = 5000,
    ...restProps
  }: ToasterProps = $props();
</script>

<Toaster {position} {duration} {...restProps} />
