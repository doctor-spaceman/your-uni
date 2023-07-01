<script>
  import { onMount } from 'svelte';

  let currentPath = ''
  onMount(() => {
		currentPath = window.location.pathname
	});
</script>

<header class="header">
  <a class="skip-link" href="#mainContent">Skip to main content</a>
  <div class="header-banner">
    <div class="header-logo"><a href="/">YourUni</a></div>
    <nav class="header-navigation">
      <ul>
        <li class:active={currentPath === '/'}>
          <a href="/">Product</a>
        </li>
        <li class:active={currentPath === '/download'}>
          <a href="/download">Download</a>
        </li>
        <li class:active={currentPath === '/pricing'}>
          <a href="/pricing">Pricing</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

<style lang="scss">
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header-banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0 40px 0;
    width: 100%;

    @media only screen and (min-width: 540px) {
      margin: 40px 0 80px 0;
    }

    a {
      color: #000;
      text-decoration: none;

      &:hover, 
      &:visited {
        color: #000;
      }
    }
  }

  .header-logo {
    font-size: 20px;
    font-weight: 700;
    line-height: 145%;

    @media only screen and (min-width: 540px) {
      font-size: 24px;
    }
  }

  .header-navigation ul {
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
    line-height: 150%;
    list-style: none;
    margin: 2px 0 0 0;

    @media only screen and (min-width: 540px) {
      font-size: 17px;
    }
  }

  .header-navigation ul li {
    border-bottom: 2px solid transparent;
    margin-right: 24px;

    &:last-child {
      margin-right: 0;
    }

    &.active {
      border-bottom: 2px solid #E16259;
    }
  }

  .skip-link {
    position: absolute;
    color: #000;
    opacity: 0;
    padding: 10px;
    transform: translateY(-100%);

    &:focus {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
  