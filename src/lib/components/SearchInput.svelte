<script>
  import { debounce } from 'lodash'
  export let input = ''

  const throttle = debounce((e) => {
    input = e.target.value
	}, 500)
</script>

<input
  class="grid-search-input"
  type="text" 
  placeholder="Search..." 
  on:input={throttle}
/>

<style lang="scss">
  .grid-search-input {
    border-radius: 4px;
    border: 2px solid #eee;
    height: 44px;
    width: 352px;
    padding: 0 16px;
  }
</style>