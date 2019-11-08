import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/Login'
import Admin from '@/components/pages/admin/Admin'
import Category from '@/components/pages/admin/Category'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: {path: "login"}
    },
    
    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      redirect: {path: "/admin/category"},
      children : [
        {
          path: 'category',
          name: 'admin.category',
          component: Category
        },
      ]
    },

  ],

  mode:"history"
})
