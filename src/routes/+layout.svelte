<script>
  import Header from '$lib/components/Header.svelte'
  import 'sanitize.css'
</script>

<div class="website-wrapper">
  <Header />
  <slot></slot>
</div>

<style lang="scss">
  :global(.sr-only) {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }

  .website-wrapper {
    color: #000;
    font-family: Arial, Helvetica, sans-serif;
    padding: 0 20px;
    min-width: 340px;
    
    @media only screen and (min-width: 540px) {
      margin: 0 auto;
      max-width: calc(540px - 20px);
      padding: 0;
    }

    @media only screen and (min-width: 768px) {
      max-width: calc(768px - 60px);
    }

    @media only screen and (min-width: 1024px) {
      max-width: calc(1024px - 120px);
    }

    @media only screen and (min-width: 1440px) {
      max-width: calc(1440px - 240px);
    }
  }
</style>
