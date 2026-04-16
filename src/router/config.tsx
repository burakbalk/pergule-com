import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import AboutPage from "../pages/hakkimizda/page";
import ServicesPage from "../pages/hizmetler/page";
import ServiceDetailPage from "../pages/hizmetler/[slug]/page";
import ReferencesPage from "../pages/referanslar/page";
import SSSPage from "../pages/sss/page";
import ContactPage from "../pages/iletisim/page";

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/hakkimizda", element: <AboutPage /> },
  { path: "/hizmetler", element: <ServicesPage /> },
  { path: "/hizmetler/:slug", element: <ServiceDetailPage /> },
  { path: "/referanslar", element: <ReferencesPage /> },
  { path: "/sss", element: <SSSPage /> },
  { path: "/iletisim", element: <ContactPage /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
