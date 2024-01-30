import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const NewsPageDetail = React.lazy(() => import("pages/NewsPageDetail"));
const NewsPageOne = React.lazy(() => import("pages/NewsPageOne"));
const NewsPage = React.lazy(() => import("pages/NewsPage"));
const NewsletterPage = React.lazy(() => import("pages/NewsletterPage"));
const FavoritesPageNoResultOne = React.lazy(
  () => import("pages/FavoritesPageNoResultOne"),
);
const FavoritesPageNoResult = React.lazy(
  () => import("pages/FavoritesPageNoResult"),
);
const FavoritesPageLogin = React.lazy(() => import("pages/FavoritesPageLogin"));
const BookmarkWebsitLinkpage = React.lazy(
  () => import("pages/BookmarkWebsitLinkpage"),
);
const BookmarkWebsitLinkpageOne = React.lazy(
  () => import("pages/BookmarkWebsitLinkpageOne"),
);
const HomePageOne = React.lazy(() => import("pages/HomePageOne"));
const AiToolsCategory = React.lazy(() => import("pages/AiToolsCategory"));
const SubmittoolOne = React.lazy(() => import("pages/SubmittoolOne"));
const Submittool = React.lazy(() => import("pages/Submittool"));
const ArticlesOne = React.lazy(() => import("pages/ArticlesOne"));
const Articles = React.lazy(() => import("pages/Articles"));
const AiToolsCategoryThree = React.lazy(
  () => import("pages/AiToolsCategoryThree"),
);
const AiToolsCategoryTwo = React.lazy(() => import("pages/AiToolsCategoryTwo"));
const AiToolsCategoryOne = React.lazy(() => import("pages/AiToolsCategoryOne"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const TermsConditions = React.lazy(() => import("pages/TermsConditions"));
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const CustomAISolutions = React.lazy(() => import("pages/CustomAISolutions"));
const AitoolMapperloginOne = React.lazy(
  () => import("pages/AitoolMapperloginOne"),
);
const AitoolMapperlogin = React.lazy(() => import("pages/AitoolMapperlogin"));
const AitoolMapper = React.lazy(() => import("pages/AitoolMapper"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const RegisterPage = React.lazy(() => import("pages/RegisterPage"));
const RegisterPageOne = React.lazy(() => import("pages/RegisterPageOne"));
const LoginPage = React.lazy(() => import("pages/LoginPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/registerpageone" element={<RegisterPageOne />} />
          <Route path="/registerpage" element={<RegisterPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/aitoolmapper" element={<AitoolMapper />} />
          <Route path="/aitoolmapperlogin" element={<AitoolMapperlogin />} />
          <Route
            path="/aitoolmapperloginone"
            element={<AitoolMapperloginOne />}
          />
          <Route path="/customaisolutions" element={<CustomAISolutions />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/termsconditions" element={<TermsConditions />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/aitoolscategoryone" element={<AiToolsCategoryOne />} />
          <Route path="/aitoolscategorytwo" element={<AiToolsCategoryTwo />} />
          <Route
            path="/aitoolscategorythree"
            element={<AiToolsCategoryThree />}
          />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articlesone" element={<ArticlesOne />} />
          <Route path="/submittool" element={<Submittool />} />
          <Route path="/submittoolone" element={<SubmittoolOne />} />
          <Route path="/aitoolscategory" element={<AiToolsCategory />} />
          <Route path="/homepageone" element={<HomePageOne />} />
          <Route
            path="/bookmarkwebsitlinkpageone"
            element={<BookmarkWebsitLinkpageOne />}
          />
          <Route
            path="/bookmarkwebsitlinkpage"
            element={<BookmarkWebsitLinkpage />}
          />
          <Route path="/favoritespagelogin" element={<FavoritesPageLogin />} />
          <Route
            path="/favoritespagenoresult"
            element={<FavoritesPageNoResult />}
          />
          <Route
            path="/favoritespagenoresultone"
            element={<FavoritesPageNoResultOne />}
          />
          <Route path="/newsletterpage" element={<NewsletterPage />} />
          <Route path="/newspage" element={<NewsPage />} />
          <Route path="/newspageone" element={<NewsPageOne />} />
          <Route path="/newspagedetail" element={<NewsPageDetail />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
