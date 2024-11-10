const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/pretrazivanje",
        component: () => import("pages/ExplorePage.vue"),
      },
      {
        path: "/onama",
        component: () => import("pages/AboutUs.vue"),
      },
      {
        path: "/profilkorisnika",
        component: () => import("pages/ProfilePage.vue"),
      },
      {
        path: "/kontakt",
        component: () => import("pages/ContactPage.vue"),
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
