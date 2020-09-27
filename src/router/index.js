import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tiendas',
    name: 'Tiendas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tienda" */ '../views/Tiendas.vue')
  },
  {
    path: '/crear/tiendas',
    name: 'CrearTienda',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tienda" */ '../views/CrearTienda.vue')
  },
  {
    path: '/editar/tiendas',
    name: 'EditarTienda',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tienda" */ '../views/EditarTienda.vue')
  },
  {
    path: '/elimiar/tiendas',
    name: 'EliminarTienda',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tienda" */ '../views/EliminarTienda.vue')
  },
  {
    path: '/productos',
    name: 'Productos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "productos" */ '../views/Productos.vue')
  },
  {
    path: '/crear/productos',
    name: 'CrearProducto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Producto" */ '../views/CrearProducto.vue')
  },
  {
    path: '/editar/productos',
    name: 'EditarProducto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Producto" */ '../views/EditarProducto.vue')
  },
  {
    path: '/elimiar/productos',
    name: 'EliminarProducto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Producto" */ '../views/EliminarProducto.vue')
  },
  {
    path: '/funciones',
    name: 'Funciones',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Producto" */ '../views/Funciones.vue')
  },
  {
    path: '/funciones/multiplos',
    name: 'Multiplos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is la/zy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Producto" */ '../views/Multiplos.vue')
  },
  {
    path: '/funciones/camel-case',
    name: 'CamelCase',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Producto" */ '../views/CamelCase.vue')
  },
  {
    path: '/funciones/invertir-palabras',
    name: 'InvertirPalabra',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Producto" */ '../views/InvertirPalabras.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
