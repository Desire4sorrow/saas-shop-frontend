<template>
  <header class="header">
    <div class="container">
      <div class="row header-row">
        <div class="col-xl-2">
          <a class="logo-container" href="/">
            <img src="@/assets/image/logo.svg" class="logo" alt="" />
          </a>
        </div>
        <div class="col-xl-9">
          <nav class="navbar navbar-expand-md">
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                 aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                        aria-label="Close">
                </button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Продукты</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Решения</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Разработка</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">О нас</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div class="col-xl-1">
          <div class="profile-container">
            <a href="/" class="link">
              <img class="image" src="@/assets/image/avatar.png" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderPage'
}
</script>

<style scoped>
.header
{
  background-color: #fff;
  border-bottom: 1px solid #E0E0E0;
  padding: 6px 0;
}

.header-row
{
  align-items: center;
}

.logo-container
{
  display: inline-block;
}

.logo-container .logo
{
  max-width: 100%;
}

.offcanvas-body
{
  justify-content: center;
}

.nav-link
{
  font-weight: 700;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.56);
  padding-left: 13px !important;
  padding-right: 13px !important;
}

.nav-link:hover
{
  color: #FF9900;
}

.profile-container
{
  text-align: end;
}

.profile-container .link
{
  display: inline-block;
}

.profile-container .image
{
  max-width: 100%;
  height: 32px;
}
</style>