

import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data.json'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home')
  },
  {
    path: '/me',
    name: 'Profile',
    component: () => import('@/pages/Profile'),
    meta: { toTop: true, smoothScroll: true }
  },
  {
    path: '/me/edit',
    name: 'ProfileEdit',
    component: () => import('@/pages/Profile'),
    props: { edit: true }
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: () => import('@/pages/Category'),
    props: true
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: () => import('@/pages/Forum'),
    props: true
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: () => import('@/pages/ThreadShow'),
    props: true,
    beforeEnter(to, from, next) {
      // check if thread exists
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
      // if exists continue
      if (threadExists) {
        return next()
      } else {
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash
        })
      }
      // if not redirect to page not found
    }
  },
  {
    path: '/forum/:forumId/thread/create',
    name: 'ThreadCreate',
    component: () => import('@/pages/ThreadCreate'),
    props: true
  },
  {
    path: '/thread/:id/edit',
    name: 'ThreadEdit',
    component: () => import('@/pages/ThreadEdit'),
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound'),
  }
]


export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.meta.toTop) scroll.top = 0
    if (to.meta.smoothScroll) scroll.smoothBehavior.top = 'smooth'
    return scroll
  }
})
