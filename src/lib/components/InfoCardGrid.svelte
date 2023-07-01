<script>
  import InfoCard from '$lib/components/InfoCard.svelte'
  export let unitData
  export let searchData

  $: searchString = searchData && searchData.length ? searchData.toLowerCase() : null

  $: filteredCards = unitData.units.filter((unit) => {
      const searchy = `${unit.name}, ${unit.city}`
      return searchy.toLowerCase().includes(searchString)
    })
</script>

<section>
  <ul class="card-grid">
  {#if searchData}
    {#each filteredCards as unit (unit.id)}
    <InfoCard cardData={unit}/>
    {/each}
  {:else}
    {#each unitData.units as unit (unit.id)}
    <InfoCard cardData={unit}/>
    {/each}
  {/if}
  </ul>
</section>

<style lang="scss">
  .card-grid {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 24px;
    padding: 0;
  }
</style>