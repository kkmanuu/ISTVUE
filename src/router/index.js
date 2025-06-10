import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProgramsView from "../views/ProgramsView.vue";
import ContactView from "../views/ContactView.vue";
import ApplyView from "../views/ApplyView.vue";
import TuitionView from "../views/TuitionView.vue";
import GalleryView from "../views/GalleryView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",

    
    component: AboutView,
  },
  {
    path: "/programs",
    name: "programs",
    component: ProgramsView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/admissions/apply",
    name: "apply",
    component: ApplyView,
  },
  {
    path: "/admissions/tuition",
    name: "tuition",
    component: TuitionView,
  },
  {
    path: "/admissions/gallery",
    name: "gallery",
    component: GalleryView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;