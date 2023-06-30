<script>
  import InfoCard from '$lib/components/InfoCard.svelte'
  export let unitData
</script>

<section>
  <ul class="card-grid">
    {#each unitData.units as unit (unit.id)}
    <InfoCard cardData={unit}/>
    {/each}
  </ul>
</section>

<style>
  .card-grid {
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fill,minmax(282px, 1fr));
    padding: 0;
  }
</style>