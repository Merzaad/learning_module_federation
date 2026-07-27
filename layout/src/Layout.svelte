<script lang="ts">
  const {state} = $props()
 
</script>

<header class="layout">
  layout
  <div>{state}</div>
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
