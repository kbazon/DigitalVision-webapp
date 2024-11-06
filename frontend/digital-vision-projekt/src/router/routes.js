const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/pretrazivanje",
        component: () => import("src/pages/ExplorePage.vue"),
      },
      {
        path: "/onama",
        component: () => import("src/pages/AboutUs.vue"),
      },
      {
        path: "/profilkorisnika",
        component: () => import("src/pages/ProfilePage.vue"),
      },
      {
        path: "/kontakt",
        component: () => import("src/pages/ContactPage.vue"),
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
