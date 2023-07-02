<script>
  import debounce from 'lodash/debounce'
  export let queryVal
  export let results

  const throttle = debounce((e) => {
    queryVal = e.target.value
	}, 500)

  const focusFirstResult = () => {
    if (results) {
      const firstCardLinkEl = document.querySelector('.card-grid .card a')
      firstCardLinkEl.focus();
    }
  }

  const searchSubmitted = (e) => {
    if (e.key == 'Enter') focusFirstResult()
  }
</script>

<div class="grid-search">
  <label for="search" class="sr-only">Search universities</label>
  <input
    id="search"
    class="grid-search__input"
    type="text" 
    placeholder="Search..." 
    on:input={throttle}
    on:keyup={searchSubmitted}
  />
  <p 
    role="status" 
    class="grid-search__results"
    class:active={queryVal}
  >
    {#if results}
    <span>{results} universities found</span>
    {:else}
    <span>No universities found</span>
    {/if}
  </p>
</div>

<style lang="scss">
  .grid-search {
    @media only screen and (min-width: 768px) {
      display: flex;
      align-items: center;
    }

    &__input {
      border-radius: 4px;
      border: 2px solid #eee;
      font-size: 14px;
      height: 44px;
      width: 100%;
      padding: 0 16px;

      @media only screen and (min-width: 540px) {
        width: 352px;
      }
    }

    &__results {
      color: rgba(0,0,0,.6);
      font-size: 14px;
      margin: 15px 0;
      opacity: 0;
      padding: 0 16px;

      @media only screen and (min-width: 768px) {
        margin: 0 0 0 24px;
        padding: 0;
      }

      &.active {
        opacity: 1;
      }
    }
  }
</style>