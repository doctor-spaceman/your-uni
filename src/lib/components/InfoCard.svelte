<script>
  export let cardData
</script>

<li class="card">
  <p class="card__location">{cardData.city} · {cardData.state}</p>
  <h3 class="card__title">{cardData.name}</h3>
  <p class="card__url">{cardData.url}</p>
</li>

<style>
  .card {
    border-radius: 4px;
    background: #FFF;
    box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.20);
    list-style: none;
    margin-bottom: 24px;
    padding: 12px 16px;
  }
  .card__location {
    color: rgba(0, 0, 0, 0.60);
    font-size: 14px;
    line-height: 150%;
  }
  .card__title {
    font-size: 22px;
    line-height: 135%;
  }
  .card__url {
    color: #E16259;
  }
</style>