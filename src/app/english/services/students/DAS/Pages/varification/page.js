import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const page = () => {
  return (
    <div>
      <div class="top-navbar">
        <div class="container">
          <ul
            class="d-flex justify-content-end flex-column flex-xl-row "
            id="topNavigation"
          >
            <li>
              <a href="https://www.hec.gov.pk/english/aboutus/Pages/aboutus.aspx">
                About Hec
              </a>
            </li>
            <li>
              <a href="https://www.hec.gov.pk/english/news/Pages/MainEventsPage.aspx">
                Events
              </a>
            </li>
            <li>
              <a href="https://www.hec.gov.pk/english/social/Pages/HECBlog.aspx">
                Blog
              </a>
            </li>
            <li>
              <a href="https://www.hec.gov.pk/english/news/Pages/VideosImages.aspx">
                Gallery
              </a>
            </li>
            <li>
              <a href="https://careers.hec.gov.pk/">Jobs &amp; Careers</a>
            </li>
            <li>
              <a href="https://onlinehelp.hec.gov.pk/">Help</a>
            </li>
            <li>
              <a href="https://www.hec.gov.pk/english/Pages/ContactUs.aspx">
                Contact Us
              </a>
            </li>
            <li>
              <select name="lang" id="lang">
                <option value="en">English</option>
                <option value="ur">اردو</option>
              </select>
            </li>
          </ul>
          
        </div>
      </div>
      <div class="bottom-nav">
        <div className="container d-flex gap-2 justify-content-between">
          <div className="p-3">
            <img src="/android-chrome-512x512.png" alt="sns" width="50px"/>
          </div>
          <div className="item-list">
            <p>Home</p>
          </div>
          <div className="item-list">
            <p>Services & Facilities</p>
          </div>
          <div className="item-list">
            <p>Scholorships & Funds</p>
          </div>
          <div className="item-list">
            <p>University Information</p>
          </div>
          <div className="item-list">
            <p>Quality Assurance</p>
          </div>
          <div className="item-list">
            <p>Iniciative & Research</p>
          </div>
          <div className="item-list">
            <p>Policies & Procedures</p>
          </div>
          <div className="item-list">
            <p>News & Publications</p>
          </div>
          <div className="item-list">
            <p>Higher Education Statistics</p>
          </div>
          <div className="item-list">
            <p>NAHE</p>
          </div>
          <div className="item-list2">
          <SearchIcon></SearchIcon>
            <p>Search</p>
          </div>
        </div>
      </div>
      <div className="w-100vw d-flex justify-content-center pt-2">
        <img src="/nextBanner.png" alt="" className="bann2"/>
      </div>
    </div>
  );
};

export default page;
