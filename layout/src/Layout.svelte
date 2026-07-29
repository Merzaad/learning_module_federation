<script lang="ts">
  import { onMount } from "svelte"

  const {eventManager} = $props()
  onMount(() => {
    const unsubscribe = eventManager.subscribe(
      'TEST',
      (event: any) => {
       console.log(event)
      }
    );

    return unsubscribe;
  });
</script>

<header class="layout">
  layout
</header>

<style>
  .layout {
    border: dashed;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    padding: 2rem;
  }

</style>
