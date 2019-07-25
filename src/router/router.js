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
  }
];
