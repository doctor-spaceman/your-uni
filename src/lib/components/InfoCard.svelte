<script>
  export let cardData
</script>

<li class="card">
  <p class="card__location">{cardData.city} · {cardData.st}</p>
  <h3 class="card__title">{cardData.name}</h3>
  <p class="card__url"><a href={cardData.url}>{cardData.url}</a></p>
</li>

<style lang="scss">
  .card {
    border-radius: 4px;
    background: #FFF;
    box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.20);
    list-style: none;
    margin-bottom: 24px;
    padding: 12px 16px;
    width: 282px;

    &__location {
      color: rgba(0, 0, 0, 0.60);
      font-size: 14px;
      line-height: 150%;
      padding: 0;
      margin: 0 0 4px 0;
    }

    &__title {
      font-size: 22px;
      line-height: 135%;
      padding: 0;
      margin: 0 0 8px 0;
    }

    &__url {
      padding: 0;
      margin: 0;

      a {
        color: #E16259;
        text-decoration: none;
      }
    }
  }
</style>