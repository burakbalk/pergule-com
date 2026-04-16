import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";

// Anasayfa eager — LCP için kritik
import Home from "../pages/home/page";

// Diğer sayfalar lazy — sadece ihtiyaç olunca yükle
const AboutPage        = lazy(() => import("../pages/hakkimizda/page"));
const ServicesPage     = lazy(() => import("../pages/hizmetler/page"));
const ServiceDetailPage = lazy(() => import("../pages/hizmetler/[slug]/page"));
const ReferencesPage   = lazy(() => import("../pages/referanslar/page"));
const SSSPage          = lazy(() => import("../pages/sss/page"));
const ContactPage      = lazy(() => import("../pages/iletisim/page"));
const NotFound         = lazy(() => import("../pages/NotFound"));

const Fallback = () => (
  <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#D4A853] border-t-transparent rounded-full animate-spin" />
  </div>
);

function w(el: React.ReactElement) {
  return <Suspense fallback={<Fallback />}>{el}</Suspense>;
}

const routes: RouteObject[] = [
  { path: "/",                element: <Home /> },
  { path: "/hakkimizda",      element: w(<AboutPage />) },
  { path: "/hizmetler",       element: w(<ServicesPage />) },
  { path: "/hizmetler/:slug", element: w(<ServiceDetailPage />) },
  { path: "/referanslar",     element: w(<ReferencesPage />) },
  { path: "/sss",             element: w(<SSSPage />) },
  { path: "/iletisim",        element: w(<ContactPage />) },
  { path: "*",                element: w(<NotFound />) },
];

export default routes;
