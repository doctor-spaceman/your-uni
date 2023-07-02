<script>
  export let cardData

  function formatCardDisplayUrl (url) {
    let cardUrl = url

    if (cardUrl.includes('www.')) {
      cardUrl = cardUrl.split('www.')[1]
    }

    const cardUrlLastChar = cardUrl.substr(-1)
    if ( cardUrlLastChar === '/') {
      cardUrl = cardUrl.split(cardUrlLastChar)[0]
    }

    return cardUrl
  }

  function formatCardHrefUrl (url) {
    return !url.includes('http') ? `https://${url}` : url
  }
</script>

<li class="card">
  <a target="_blank" href={formatCardHrefUrl(cardData.url)}>
    <div itemtype="https://schema.org/CollegeOrUniversity">
      <p class="card__location">{cardData.city} &#183; {cardData.st}</p>
      <div class="card__title" itemprop="name">{cardData.name}</div>
      <p class="card__url" itemprop="url">{formatCardDisplayUrl(cardData.url)}</p>
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
      font-weight: 700;
      line-height: 135%;
      padding: 0;
      margin: 0 0 8px 0;
    }

    &__url {
      color: #E16259;
      font-size: 15px;
      line-height: 150%;
      padding: 0;
      margin: 0;
    }
  }
</style>