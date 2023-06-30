<script>
  import { debounce } from 'lodash'
  export let input = ''

  const throttle = debounce((e) => {
    input = e.target.value
	}, 500)
</script>

<input
  type="text" 
  placeholder="Search..." 
  on:input={throttle}
/>