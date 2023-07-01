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
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 100px;
  }

  .hero-content,
  .hero-image {
    width: calc(50% - 24px);
  }

  .hero-content {
    &__heading {
      font-size: 69px;
      font-weight: 700;
      letter-spacing: -1.85px;
      line-height: 100%;
      margin: 0 0 24px 0;
    }

    &__copy {
      font-size: 20px;
      line-height: 145%;
    }
  }

  .hero-image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 384px;

    img {

    }
  }
</style>