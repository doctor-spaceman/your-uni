<script>
  import Header from '$lib/components/Header.svelte'
</script>

<main class="website-wrapper">
  <Header />
  <slot></slot>
</main>

<style>
  .website-wrapper {
    max-width: 800px;
    margin: 0 auto;
  }
</style>
