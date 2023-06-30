<script>
  import Header from '$lib/components/Header.svelte'
  import 'sanitize.css'
</script>

<main class="website-wrapper">
  <Header />
  <slot></slot>
</main>

<style lang="scss">  
  .website-wrapper {
    font-family: Arial, Helvetica, sans-serif;
  }

  @media only screen and (min-width: 1440px) {
    .website-wrapper {
      margin: 0 auto;
      max-width: calc(1440px - 240px);
    }
  }
</style>
