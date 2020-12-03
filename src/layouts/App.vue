<template>
  <div class="layout">
    <header class="header">
      <Nav />
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
