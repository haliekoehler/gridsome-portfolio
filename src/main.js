// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
// import Nav from '~/layouts/Nav.vue'
import '~/assets/custom.css'
import App from '~/layouts/App.vue'
import Nav from '~/components/Nav.vue'

export default function (Vue, { router, head, isClient }) {

  // Responsive meta tag
    head.meta.push({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
    })

  // Adobe Fonts - Montserrat
    head.link.push({
      rel: 'stylesheet',
      href: 'https://use.typekit.net/ltj4kwq.css'
    })

  // Add Bootstrap CDN
    head.link.push({
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css'
    })

    // Add jQuery
    head.script.push({
      src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js',
      body: true
    })

    // Add Popper.js
    head.script.push({
      src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
      body: true
    })

    // Add Bootstrap.js
    head.script.push({
      src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
      body: true
    })

  // Set default layout as a global component
  // Vue.component('Nav', Nav)
  Vue.component('App', App)
  Vue.component('Nav', Nav)
}
