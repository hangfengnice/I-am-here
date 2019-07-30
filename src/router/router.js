export default [
  {
    
    path: "/classic",
    name: "classic",
    component: () => import("../views/classic.vue"),
    meta: {
      title: "classic"
    }
  },
  {
    path: "",
    redirect: "/classic"
  },
  {
    path: '/book',
    name: 'book',
    component: () => import('../views/book.vue'),
    meta: {
      title: 'book'
    }
  },
  {
    path: '/favor',
    name: 'favor',
    component: () => import('../views/favor.vue'),
    meta: {
      title: 'favor'
    }
  },
  {
    path: '/me',
    name: 'me',
    component: () => import('../views/me.vue'),
    meta: {
      title: 'me'
    },
    children: [
      {
        path: 'http',
        name: 'http',
        component: () => import('../views/me/http.vue'),
      },
      {
        path: 'promise',
        name: 'promise',
        component: () => import('../views/me/promise.vue'),
      },
      {
        path: 'slot',
        name: 'slot',
        component: () => import('../views/me/slot.vue'),
      },
      {
        path: 'scroll',
        name: 'scroll',
        component: () => import('../views/me/scroll.vue'),
      }
    ]
  },
  {
    path: '/book-detail/:bid',
    name: 'book-detail',
    component: () => import('../views/book-detail.vue'),
    meta: {
      title: 'book-detail'
    }
  }
];
