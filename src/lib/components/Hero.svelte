<script>
  const hero_img_src = '/hero-ellipse.png'
  const hero_img_alt = 'Person viewing a dramatic landscape from a rocky outcrop'
</script>

<section class="hero">
  <div class="hero-content">
    <h1 class="hero-content__heading">Find the university that's right for you.</h1>
    <p class="hero-content__copy">Tenetur ex explicabo et illo. Recusandae fugit eius voluptatem. Voluptas atque autem totam.</p>
  </div>
  <div class="hero-image">
    <img src={hero_img_src} alt={hero_img_alt} />
  </div>
</section>

<style lang="scss">
  .hero {
    margin-bottom: 60px;
    position: relative;

    @media only screen and (min-width: 540px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }

    @media only screen and (min-width: 768px) {
      margin-bottom: 60px;
    }

    @media only screen and (min-width: 1024px) {
      margin-bottom: 100px;
    }
  }

  .hero-content {
    width: 100%;

    &__heading {
      font-size: 32px;
      font-weight: 700;
      letter-spacing: -1.85px;
      line-height: 100%;
      margin: 0 0 24px 0;

      @media only screen and (min-width: 768px) {
        font-size: 42px;
      }

      @media only screen and (min-width: 1024px) {
        font-size: 69px;
      }
    }

    &__copy {
      font-size: 16px;
      line-height: 145%;

      @media only screen and (min-width: 768px) {
        font-size: 18px;
      }

      @media only screen and (min-width: 1024px) {
        font-size: 20px;
      }
    }
  }

  .hero-image {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -50;

    @media only screen and (min-width: 540px) {
      display: flex;
      align-items: center;
      justify-content: center;
      position: unset;
      top: unset;
      right: unset;
      z-index: unset;
    }

    img {
      height: auto;
      width: 230px;

      @media only screen and (min-width: 540px) {
        padding: 0;
      }

      @media only screen and (min-width: 768px) {
        width: 300px;
      }

      @media only screen and (min-width: 1024px) {
        width: 384px;
      }
    }
  }

  .hero-content,
  .hero-image {
    @media only screen and (min-width: 540px) {
      width: calc(50% - 24px);
    }

    @media only screen and (min-width: 1024px) {
      width: calc(50% - 24px);
    }
  }
</style>