<template>
  <div class="layout">
    <header class="header">
      <div class="container-fluid">

        <nav class="navbar navbar-expand-lg sticky-top">
          <a class="navbar-brand" href="#">halie.online</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarContent">
            <ul class="navbar-nav">
              <!-- <li class="nav-item">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li> -->
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Portfolio
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Resume</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <!--end of .container-->
    </header>
    <div class="content">
      <slot/><!-- Page content will be inserted here -->
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import css from '../custom.css'
</script>
