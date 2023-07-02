<svelte:head>
 <title>YourUni | Find your university</title>
 <meta name="description" content="Find the university that's right for you with YourUni." />
 <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "YourUni"
  }
  </script>
</svelte:head>

<script>
  import Hero from '$lib/components/Hero.svelte'
  import SearchInput from '$lib/components/SearchInput.svelte'
  import InfoCardGrid from '$lib/components/InfoCardGrid.svelte'

  export let data
  let queryVal
  let resultCount
</script>

<main id="mainContent">
  <Hero />
  <SearchInput bind:queryVal results={resultCount} />
  <InfoCardGrid unitData={data} searchData={queryVal} bind:resultCount />
</main>