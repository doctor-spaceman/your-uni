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
    color: #000;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 40px;
    
    @media only screen and (min-width: 768px) {
      margin: 0 auto;
      max-width: calc(768px - 120px);
    }

    @media only screen and (min-width: 1024px) {
      max-width: calc(1024px - 120px);
    }

    @media only screen and (min-width: 1440px) {
      max-width: calc(1440px - 240px);
    }
  }
</style>
