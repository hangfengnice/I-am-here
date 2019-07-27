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
    path: '/me',
    name: 'me',
    component: () => import('../views/me.vue'),
    meta: {
      title: 'me'
    }
  },
  {
    path: '/book-detail',
    name: 'book-detail',
    component: () => import('../views/book-detail.vue'),
    meta: {
      title: 'book-detail'
    }
  }
];
