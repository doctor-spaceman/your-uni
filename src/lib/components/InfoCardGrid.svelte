<script>
  import InfoCard from '$lib/components/InfoCard.svelte'

  // Get the data
  fetch('https://gist.githubusercontent.com/simonlast/d5a86ba0c82e1b0d9f6e3d2581b95755/raw/f608b9b896dd3339df13dae317998d5f24c00a50/edu-scorecard.csv')
  .then((response) => response.text())
  .then((data) => console.log(data));
</script>

<div class="card-grid">
  <p>Cards go here</p>
</div>