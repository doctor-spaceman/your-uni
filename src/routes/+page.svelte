<script>
  import Hero from '$lib/components/Hero.svelte'
  import SearchInput from '$lib/components/SearchInput.svelte'
  import InfoCardGrid from '$lib/components/InfoCardGrid.svelte'
  export let data
  export let input
</script>

<Hero />
<SearchInput bind:input />
<InfoCardGrid unitData={data} searchData={input}/>