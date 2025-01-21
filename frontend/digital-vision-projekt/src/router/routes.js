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
        path: "/prijava",
        component: () => import("src/pages/PrijavaPage.vue"),
      },
      {
        path: "/reg",
        component: () => import("src/pages/RegPage.vue"),
      },
      {
        path: "/kontakt",
        component: () => import("pages/ContactPage.vue"),
      },
      {
        path: "/profil",
        component: () => import("pages/profilPage.vue"),
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
