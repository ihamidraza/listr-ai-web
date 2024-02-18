import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Spin } from 'antd'

import { Layout } from './layout'
import NotFound from "pages/NotFound";

const NewsPageDetail = React.lazy(() => import("pages/NewsPageDetail"));
const NewsPageOne = React.lazy(() => import("pages/NewsPageOne"));
const NewsPage = React.lazy(() => import("pages/NewsPage"));
const NewsletterPage = React.lazy(() => import("pages/NewsletterPage"));
const FavoritesPageNoResultOne = React.lazy(() => import("pages/FavoritesPageNoResultOne"));
const FavoritesPageNoResult = React.lazy(() => import("pages/FavoritesPageNoResult"));
const FavoritesPageLogin = React.lazy(() => import("pages/FavoritesPageLogin"));
const BookmarkWebsitLinkpage = React.lazy(() => import("pages/BookmarkWebsitLinkpage"));
const BookmarkWebsitLinkpageOne = React.lazy(() => import("pages/BookmarkWebsitLinkpageOne"));
const HomePageOne = React.lazy(() => import("pages/HomePageOne"));
const AiToolsCategory = React.lazy(() => import("pages/AiToolsCategory"));
const SubmittoolOne = React.lazy(() => import("pages/SubmittoolOne"));
const Submittool = React.lazy(() => import("pages/Submittool"));
const ArticlesOne = React.lazy(() => import("pages/ArticlesOne"));
const Articles = React.lazy(() => import("pages/Articles"));
const AiToolsCategoryThree = React.lazy(() => import("pages/AiToolsCategoryThree"));
const AiToolsCategoryTwo = React.lazy(() => import("pages/AiToolsCategoryTwo"));
const AiToolsCategoryOne = React.lazy(() => import("pages/AiToolsCategoryOne"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const TermsConditions = React.lazy(() => import("pages/TermsConditions"));
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const CustomAISolutions = React.lazy(() => import("pages/CustomAISolutions"));
const AitoolMapperloginOne = React.lazy(() => import("pages/AitoolMapperloginOne"));
const AitoolMapperlogin = React.lazy(() => import("pages/AitoolMapperlogin"));
const AitoolMapper = React.lazy(() => import("pages/AitoolMapper"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const RegisterPage = React.lazy(() => import("pages/RegisterPage"));
const RegisterPageOne = React.lazy(() => import("pages/RegisterPageOne"));
const LoginPage = React.lazy(() => import("pages/LoginPage"));


const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<Spin />}>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Layout />} >
            <Route path="" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPageOne />} />
            {/* <Route path="registerpage" element={<RegisterPage />} /> */}
            {/* <Route path="aiToolMapper" element={<AitoolMapper />} />
            <Route path="aiToolMapperLogin" element={<AitoolMapperlogin />} />
            <Route path="aiToolMapperLoginone" element={<AitoolMapperloginOne />} />
            <Route path="customAISolutions" element={<CustomAISolutions />} />
            <Route path="contactUs" element={<ContactUs />} />
            <Route path="/termsConditions" element={<TermsConditions />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/aiToolsCategoryOne" element={<AiToolsCategoryOne />} />
            <Route path="/aiToolsCategoryTwo" element={<AiToolsCategoryTwo />} />
            <Route path="/aiToolsCategoryThree" element={<AiToolsCategoryThree />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articlesOne" element={<ArticlesOne />} />
            <Route path="/submitTool" element={<Submittool />} />
            <Route path="/submitToolOne" element={<SubmittoolOne />} />
            <Route path="/aiToolsCategory" element={<AiToolsCategory />} />
            <Route path="/homeOne" element={<HomePageOne />} />
            <Route path="/bookmarkWebsiteLinkOne" element={<BookmarkWebsitLinkpageOne />} />
            <Route path="/bookmarkWebsiteLinkPage" element={<BookmarkWebsitLinkpage />} />
            <Route path="/favoritesLogin" element={<FavoritesPageLogin />} />
            <Route path="/favoritesNoResult" element={<FavoritesPageNoResult />} />
            <Route path="/favoritesNoResultOne" element={<FavoritesPageNoResultOne />} />
            <Route path="/newsLetter" element={<NewsletterPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/newsOne" element={<NewsPageOne />} />
            <Route path="/newsDetail" element={<NewsPageDetail />} /> */}
          </Route>
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
