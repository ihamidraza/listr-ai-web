import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/loginpage">LoginPage</Link>
        </li>
        <li>
          <Link to="/registerpageone">RegisterPageOne</Link>
        </li>
        <li>
          <Link to="/registerpage">RegisterPage</Link>
        </li>
        <li>
          <Link to="/homepage">HomePage</Link>
        </li>
        <li>
          <Link to="/aitoolmapper">AitoolMapper</Link>
        </li>
        <li>
          <Link to="/aitoolmapperlogin">AitoolMapperlogin</Link>
        </li>
        <li>
          <Link to="/aitoolmapperloginone">AitoolMapperloginOne</Link>
        </li>
        <li>
          <Link to="/customaisolutions">CustomAISolutions</Link>
        </li>
        <li>
          <Link to="/contactus">ContactUs</Link>
        </li>
        <li>
          <Link to="/termsconditions">TermsConditions</Link>
        </li>
        <li>
          <Link to="/aboutus">AboutUs</Link>
        </li>
        <li>
          <Link to="/aitoolscategoryone">AiToolsCategoryOne</Link>
        </li>
        <li>
          <Link to="/aitoolscategorytwo">AiToolsCategoryTwo</Link>
        </li>
        <li>
          <Link to="/aitoolscategorythree">AiToolsCategoryThree</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/articlesone">ArticlesOne</Link>
        </li>
        <li>
          <Link to="/submittool">Submittool</Link>
        </li>
        <li>
          <Link to="/submittoolone">SubmittoolOne</Link>
        </li>
        <li>
          <Link to="/aitoolscategory">AiToolsCategory</Link>
        </li>
        <li>
          <Link to="/homepageone">HomePageOne</Link>
        </li>
        <li>
          <Link to="/bookmarkwebsitlinkpageone">BookmarkWebsitLinkpageOne</Link>
        </li>
        <li>
          <Link to="/bookmarkwebsitlinkpage">BookmarkWebsitLinkpage</Link>
        </li>
        <li>
          <Link to="/favoritespagelogin">FavoritesPageLogin</Link>
        </li>
        <li>
          <Link to="/favoritespagenoresult">FavoritesPageNoResult</Link>
        </li>
        <li>
          <Link to="/favoritespagenoresultone">FavoritesPageNoResultOne</Link>
        </li>
        <li>
          <Link to="/newsletterpage">NewsletterPage</Link>
        </li>
        <li>
          <Link to="/newspage">NewsPage</Link>
        </li>
        <li>
          <Link to="/newspageone">NewsPageOne</Link>
        </li>
        <li>
          <Link to="/newspagedetail">NewsPageDetail</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
