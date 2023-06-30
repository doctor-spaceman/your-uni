<script>
  import Hero from '$lib/components/Hero.svelte'
  import InfoCardGrid from '$lib/components/InfoCardGrid.svelte'
  export let data
</script>

<Hero />
<input type="text"/>
<InfoCardGrid unitData={data}/>