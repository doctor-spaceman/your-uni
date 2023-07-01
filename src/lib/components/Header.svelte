<script>
  const currentPath = window.location.pathname
</script>

<header class="header">
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
</header>

<style lang="scss">
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px 0 80px 0;

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
    font-size: 24px;
    font-weight: 700;
    line-height: 145%;
  }
  .header-navigation ul {
    display: flex;
    justify-content: flex-end;
    font-size: 17px;
    line-height: 150%;
    list-style: none;
    margin: 2px 0 0 0;
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
</style>
  