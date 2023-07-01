<script>
  import Hero from '$lib/components/Hero.svelte'
  import SearchInput from '$lib/components/SearchInput.svelte'
  import InfoCardGrid from '$lib/components/InfoCardGrid.svelte'

  export let data
  let queryVal
  let resultCount
</script>

<div id="mainContent">
  <Hero />
  <SearchInput bind:queryVal results={resultCount} />
  <InfoCardGrid unitData={data} searchData={queryVal} bind:resultCount />
</div>