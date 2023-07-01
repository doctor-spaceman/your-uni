<script>
  export let cardData
</script>

<li class="card">
  <a href={`https://${cardData.url}`}>
    <div>
      <p class="card__location">{cardData.city} · {cardData.st}</p>
      <h3 class="card__title">{cardData.name}</h3>
      <p class="card__url">{cardData.url}</p>
    </div>
  </a>
</li>

<style lang="scss">
  .card {
    border-radius: 4px;
    background: #FFF;
    box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.20);
    list-style: none;
    margin-bottom: 24px;
    padding: 0;
    width: 100%;

    @media only screen and (min-width: 540px) {
      width: calc(50% - 24px);
    }

    @media only screen and (min-width: 768px) {
      width: 342px;
    }

    @media only screen and (min-width: 1024px) {
      width: 282px;
    }

    a {
      display: block;
      padding: 12px 16px;
      text-decoration: none;
    }

    &__location {
      color: rgba(0, 0, 0, 0.60);
      font-size: 14px;
      line-height: 150%;
      padding: 0;
      margin: 0 0 4px 0;
    }

    &__title {
      color: #000;
      font-size: 22px;
      line-height: 135%;
      padding: 0;
      margin: 0 0 8px 0;
    }

    &__url {
      color: #E16259;
      padding: 0;
      margin: 0;
    }
  }
</style>