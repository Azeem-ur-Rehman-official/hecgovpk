import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CarouselComponent from "./CarouselComponent";
import CardsComponent from "./CardsComponent";
import KeyboardArrowLeftSharpIcon from "@mui/icons-material/KeyboardArrowLeftSharp";
import KeyboardArrowRightSharpIcon from "@mui/icons-material/KeyboardArrowRightSharp";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
const page = () => {
  return (
    <div className="d-flex justify-content-center align-items-center sample">
    <h5>Page not found</h5>
      {/* <div className="main-bg pb-5">
    
      <Box >
        <div className="header1 pt-5">
          <div>
            <MenuIcon
              sx={{ color: "#ffffff", fontSize: "34px" }}
              className="menuIcon"
            />
          </div>
          
          <div className="search-wrap">
            <SearchIcon className="searchIcon" />
            <input
              type="text"
              placeholder="Search a keyword, service, scholarships etc"
              id="landingSearchInput"
              readonly="readonly"
            ></input>
          </div>
        </div>
        <div className="d-flex justify-content-md-center">
            <img src="/main-logo.png" alt="sks" className="top-logo" />
          </div>
          <div className="p-2"></div>
        <div class="main-heading text-center mt-5" id="welcomeText">
          <h1 class="text-uppercase">Welcome to HEC Pakistan</h1>
          <p>Empowering Pakistan through Higher Education</p>
        </div>
        <div className="tabCards">
          <CarouselComponent />
        </div>
        <div className="mobCards">
          <div className="search-wrap2">
            <SearchIcon className="searchIcon2" />
            <input
              type="text"
              placeholder="Search a keyword, service, scholarships etc"
              id="landingSearchInput2"
              readonly="readonly"
            ></input>
          </div>
          <CardsComponent />
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid
            container
            mt={3}
           
            sx={{ width: { md: "80%", xs: "90%", sm: "90%" } }}
          >
            <Grid
              item
              sm={12}
              md={3}
              xs={12}
              className="left-border"
              sx={{
                backgroundColor: "#E5B24C",
                padding: "10px",
                position: "relative",
               
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img src="/anouc.png" width="50px" className="anouc" alt="ssks" />
              <div></div>
              <Typography color="#ffffff" fontWeight="bold" fontSize="14px">
                Annoucements
              </Typography>
            </Grid>
            <Grid
              item
              sm={12}
              md={6}
              xs={12}
             
              sx={{
                backgroundColor: "#111747",
                padding: "10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography color="#ffffff" textAlign="left" fontSize="14px">
                Position Announcement for Vice Chancellors for Public Sector
                Universities
              </Typography>
            </Grid>
            <Grid
              item
              sm={12}
              md={3}
              xs={12}
              className="right-border"
              sx={{
                backgroundColor: "#111747",
                padding: "10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: { xs: "center", md: "end" },
                
                borderTop: { xs: "1px solid #595959", md: "none" },
              }}
            >
              <Box sx={{ display: { md: "block", sm: "none", xs: "none" } }}>
                <KeyboardArrowLeftSharpIcon sx={{ color: "#fff" }} />
                <KeyboardArrowRightSharpIcon sx={{ color: "#fff" }} />
              </Box>

              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: "bold", fontSize: "16px" }}
              >
                See All
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            mt={3}
            sx={{ width: { md: "80%", xs: "90%", sm: "90%" } }}
          >
            <Grid
              item
              sm={12}
              md={2}
              xs={12}
              
className="left-border"
              sx={{
                backgroundColor: "#fff",

                position: "relative",

                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "start",
                
              }}
            >
              <img src="/APAN58logo.jpg" className="anouc2" alt="ssks" />
            </Grid>
            <Grid
              item
              sm={12}
              md={8}
              xs={12}
              sx={{
                backgroundColor: "#fff",
                padding: "10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography textAlign="left" fontSize="14px">
                58th Asia Pacific Advanced Network Meeting, 26 – 30 August 2024
                Islamabad, Pakistan
              </Typography>
            </Grid>
            <Grid
              item
              sm={12}
              md={2}
              xs={12}
              className="right-border"
              sx={{
                backgroundColor: "#fff",
                padding: "10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: { xs: "center", md: "end" },
                
                borderTop: { xs: "1px solid #000", md: "none" },
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#349C7D", fontWeight: "bold", fontSize: "16px" }}
              >
                Read More
              </Typography>
              <Box sx={{ display: { md: "block", sm: "none", xs: "none" } }}>
                <ArrowRightAltSharpIcon
                  sx={{ color: "#349C7D", fontSize: "30px" }}
                />
              </Box>
            </Grid>
          </Grid>
          
          <Box
            container
            className="main-footer"
            mt={3}
            sx={{ width: { md: "80%", xs: "90%", sm: "90%" } }}
          >
            <div className="footer-links-wrapper">
              <ul
                className="d-flex align-items-center flex-wrap flex-xl-nowrap "
                id="QuickLinks"
              >
                <li class="d-none d-xl-block">
                  <p>Quick Links</p>
                </li>
                <li>
                  <a className="bl" href="https://www.hec.gov.pk/english/services/universities/Monitoring-Evaluation/Pages/default.aspx">
                    Monitoring Evaluation
                  </a>
                </li>
                <li>
                  <a href="https://www.hec.gov.pk/english/services/universities/QAA/Pages/default.aspx">
                    Quality Assurance Agency
                  </a>
                </li>
                <li>
                  <a href="https://www.hec.gov.pk/english/services/universities/HEDP/Pages/default.aspx">
                    HEDP Project
                  </a>
                </li>
                <li>
                  <a href="https://www.hec.gov.pk/english/news/Pages/TendersRFPs.aspx">
                    Tenders RFPs
                  </a>
                </li>
                <li>
                  <a href="https://careers.hec.gov.pk/">Jobs Careers</a>
                </li>
                <li>
                  <a href="https://www.hec.gov.pk/english/Notifications/Pages/default.aspx">
                    Notifications
                  </a>
                </li>
                <li class="d-none d-xl-block">
                  <ul
                    class="d-flex align-items-center flex-wrap flex-xl-nowrap "
                    id="social-media-icons"
                  >
                    <li>
                      <a
                        href="https://www.facebook.com/HECPakistan2002/"
                        onclick="openInNewTab(event)"
                        className="border-none"
                      >
                        <img
                          src="https://www.hec.gov.pk/Style%20Library/HEC/images/facebook.svg"
                          alt="Facebook"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/hecpkofficial"
                        onclick="openInNewTab(event)"
                      >
                        <img
                          src="https://www.hec.gov.pk/Style%20Library/HEC/images/X.png"
                          alt="Twitter"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UCctruSZb5g5Y2Q8_Sgqygsg?"
                        onclick="openInNewTab(event)"
                      >
                        <img
                          src="https://www.hec.gov.pk/Style%20Library/HEC/images/youtube.svg"
                          alt="Youtube"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/hec_pk/"
                        onclick="openInNewTab(event)"
                      >
                        <img
                          src="https://www.hec.gov.pk/PublishingImages/Social%20Media%20Icons/instagram.png"
                          alt="Instagram"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/hec-pakistan"
                        onclick="openInNewTab(event)"
                      >
                        <img
                          src="https://www.hec.gov.pk/PublishingImages/Social%20Media%20Icons/linkedin%20logo_icon.png"
                          alt="Linkedin"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.whatsapp.com/channel/0029VaKcxd74dTnMvcB9Hy0l"
                        onclick="openInNewTab(event)"
                      >
                        <img
                          src="https://www.hec.gov.pk/Style%20Library/HEC/images/whatsapp.png"
                          alt="Whatsapp-Channel"
                        />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div class="footer-bottom d-flex align-items-center flex-wrap flex-xl-nowrap justify-content-xl-between">
                <ul
                  class="d-flex align-items-center flex-wrap flex-xl-nowrap pt-2 pb-2"
                  id="landingBottomFooter"
                >
                  <li>
                    <a href="https://www.hec.gov.pk/english/aboutus/Pages/aboutus.aspx">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hec.gov.pk/english/Pages/ContactUs.aspx">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hec.gov.pk/english/news/Pages/MainEventsPage.aspx">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="https://onlinehelp.hec.gov.pk/">Help/Complaints</a>
                  </li>
                </ul>
                <ul class="landing-lang">
                  <li>
                    <select name="lang" id="langFooter">
                      <option value="en">English</option>
                      <option value="ur">اردو</option>
                    </select>
                  </li>
                </ul>
                <ul
                  class="d-flex align-items-center flex-wrap flex-xl-nowrap"
                  id="landingBottomsection2"
                >
                  <li>
                    <a href="https://www.hec.gov.pk/english/Pages/PrivacyPolicy.aspx">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hec.gov.pk/english/Pages/Terms-Conditions.aspx">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hec.gov.pk/english/Pages/Copyrights.aspx">
                      Copyrights HEC 2024
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Box>
          <Box
            container
            className="main-footer2"
            mt={3}
            sx={{ width: { md: "80%", xs: "90%", sm: "90%" } }}
          >
            <div className="footer-links-wrapper">
              <ul
                className="d-flex align-items-center flex-wrap flex-xl-nowrap "
                id="QuickLinks"
              >
                <li class="d-flex justify-content-center w-100 borderBottom">
                  <p className="text-align-center">Quick Links</p>
                </li>
                <li className="w-50">
                  <a className="bl" href="https://www.hec.gov.pk/english/services/universities/Monitoring-Evaluation/Pages/default.aspx">
                    Monitoring Evaluation
                  </a>
                </li>
                <li className="w-50">
                  <a href="https://www.hec.gov.pk/english/services/universities/QAA/Pages/default.aspx">
                    Quality Assurance Agency
                  </a>
                </li>
                <li className="w-50">
                  <a href="https://www.hec.gov.pk/english/services/universities/HEDP/Pages/default.aspx">
                    HEDP Project
                  </a>
                </li>
                <li className="w-50">
                  <a href="https://www.hec.gov.pk/english/news/Pages/TendersRFPs.aspx">
                    Tenders RFPs
                  </a>
                </li>
                <li className="w-50">
                  <a href="https://careers.hec.gov.pk/">Jobs Careers</a>
                </li>
                <li className="w-50">
                  <a href="https://www.hec.gov.pk/english/Notifications/Pages/default.aspx">
                    Notifications
                  </a>
                </li>
               
              </ul>
              <div class="footer-bottom d-flex align-items-center flex-wrap flex-xl-nowrap justify-content-xl-between">
                <ul
                  class="d-flex align-items-center flex-wrap flex-xl-nowrap pt-2 pb-2"
                  id="landingBottomFooter"
                >
                  <li className="w-50">
                    <a href="https://www.hec.gov.pk/english/aboutus/Pages/aboutus.aspx">
                      About Us
                    </a>
                  </li>
                  <li className="w-50">
                    <a href="https://www.hec.gov.pk/english/Pages/ContactUs.aspx">
                      Contact Us
                    </a>
                  </li>
                  <li className="w-50">
                    <a href="https://www.hec.gov.pk/english/news/Pages/MainEventsPage.aspx">
                      Events
                    </a>
                  </li>
                  <li className="w-50">
                    <a href="https://onlinehelp.hec.gov.pk/">Help/Complaints</a>
                  </li>
                </ul>
                <ul class="landing-lang">
                  <li className="w-100">
                    <select name="lang" id="langFooter">
                      <option value="en">English</option>
                      <option value="ur">اردو</option>
                    </select>
                  </li>
                </ul>
                <ul
                  class="d-flex align-items-center flex-wrap flex-xl-nowrap"
                  id="landingBottomsection2"
                >
                  <li className="w-33">
                    <a href="https://www.hec.gov.pk/english/Pages/PrivacyPolicy.aspx">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="w-33">
                    <a href="https://www.hec.gov.pk/english/Pages/Terms-Conditions.aspx">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="w-33">
                    <a href="https://www.hec.gov.pk/english/Pages/Copyrights.aspx">
                      Copyrights HEC 2024
                    </a>
                  </li>
                </ul>
              </div>
              <li class="d-flex justify-content-end borderTop w-100 mt-3">
                  <ul
                    class="d-flex align-items-center gap-2 p-3 flex-wrap flex-xl-nowrap "
                    id="social-media-icons"
                  >
                    <li>
                      <a
                        href="https://www.facebook.com/HECPakistan2002/"
                        onclick="openInNewTab(event)"
                        className="border-none"
                      >
                        <img
                          src="https://www.hec.gov.pk/Style%20Library/HEC/images/facebook.svg"
                          alt="Facebook"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/hecpkofficial"
                        onclick="openInNewTab(event)"
                      >
                        <img
                          src="https://www.hec.gov.pk/Style%20Library/HEC/images/X.png"
                          alt="Twitter"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UCctruSZb5g5Y2Q8_Sgqygsg?"
                        onclick="openInNewTab(event)"
                      >
                        <img
                          src="https://www.hec.gov.pk/Style%20Library/HEC/images/youtube.svg"
                          alt="Youtube"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/hec_pk/"
                        onclick="openInNewTab(event)"
                      >
                        <img
                          src="https://www.hec.gov.pk/PublishingImages/Social%20Media%20Icons/instagram.png"
                          alt="Instagram"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/hec-pakistan"
                        onclick="openInNewTab(event)"
                      >
                        <img
                          src="https://www.hec.gov.pk/PublishingImages/Social%20Media%20Icons/linkedin%20logo_icon.png"
                          alt="Linkedin"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.whatsapp.com/channel/0029VaKcxd74dTnMvcB9Hy0l"
                        onclick="openInNewTab(event)"
                      >
                        <img
                          src="https://www.hec.gov.pk/Style%20Library/HEC/images/whatsapp.png"
                          alt="Whatsapp-Channel"
                        />
                      </a>
                    </li>
                  </ul>
                </li>
            </div>
          </Box>
        </Box>
        
        
          
       
      </Box>
      <a href="https://edutv.hec.gov.pk/" className="youtube">
        <img src="/youtube.png" alt="youtube"/>
        </a>
    </div> */}
    </div>
    
  );
};

export default page;
