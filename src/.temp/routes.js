const c1 = () => import(/* webpackChunkName: "page--src--pages--portfolio-vue" */ "/Users/haliekoehler/Desktop/gridsome-portfolio/src/pages/Portfolio.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/haliekoehler/Desktop/gridsome-portfolio/node_modules/gridsome/app/pages/404.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/haliekoehler/Desktop/gridsome-portfolio/src/pages/Index.vue")

export default [
  {
    path: "/portfolio/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
