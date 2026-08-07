<script lang="ts">
  import { onMount } from "svelte"

  const {eventManager} = $props()
  let state = $state("initial")
  onMount(() => {
    const unsubscribeSetState = eventManager.subscribe(
      'setState',
      (event: any) => {
       state = event.payload
      }
    );
    const unsubscribeReset = eventManager.subscribe(
      'reset',
      () => {
       state = "initial"
      }
    );
    return () => {
      unsubscribeSetState()
      unsubscribeReset()
    };
  });
</script>

<div class="layout">
  <header >
  layout
</header>
  <div class="state">
    {state}
  </div>
</div>

<style>
  .layout {
    border: dashed;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    padding: 2rem;
  }
   .state {
    border: dashed;
    display: flex;
    border-radius: 0.5rem;
    padding: 0.5rem;
    width: max-content;
    margin: auto
  }

</style>
