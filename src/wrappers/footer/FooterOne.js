import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import FooterCopyright from "../../components/footer/FooterCopyright";

const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu,
}) => {
  return (
    <footer
      className={clsx(
        "footer-area",
        backgroundColorClass,
        spaceTopClass,
        spaceBottomClass,
        extraFooterClass,
        spaceLeftClass,
        spaceRightClass
      )}
    >
      <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="row">
          <div className={`${sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"}`}>
            {/* footer copyright */}
            <FooterCopyright footerLogo="/assets/img/logo/logo.png" spaceBottomClass="mb-30" />
          </div>
          <div className={`${sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"}`}>
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3>ABOUT US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/about"}>About us</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Store location</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Orders tracking</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"}`}>
            <div className={`${sideMenu ? "footer-widget mb-30 ml-95" : "footer-widget mb-30 ml-50"}`}>
              <div className="footer-title">
                <h3>USEFUL LINKS</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Returns</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Support Policy</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Size guide</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${sideMenu ? "col-xl-3 col-sm-4" : "col-lg-2 col-sm-6"}`}>
            <div className={`${sideMenu ? "footer-widget mb-30 ml-145" : "footer-widget mb-30 ml-75"}`}>
              <div className="footer-title">
                <h3>FOLLOW US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <a href="//www.facebook.com" target="_blank" rel="noopener noreferrer">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="//www.twitter.com" target="_blank" rel="noopener noreferrer">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="//www.instagram.com" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="//www.youtube.com" target="_blank" rel="noopener noreferrer">
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${sideMenu ? "col-xl-3 col-sm-8" : "col-lg-4 col-sm-6"}`}>
            <div className={`${sideMenu ? "footer-widget mb-30 ml-145" : "footer-widget mb-30 ml-75"}`}>
              <div className="footer-title">
                <h3>Contact US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <ul>
                      <span className="fa fa-phone" style={{ fontWeight: "bolder" }} /> <span>+923022304253</span>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <span className="fa fa-globe" style={{ fontWeight: "bolder" }} /> <span>temp@gmail.com</span>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <span className="fa fa-map-marker" style={{ fontWeight: "bolder" }} /> <span>Adress Here</span>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <span className="fa fa-clock-o" style={{ fontWeight: "bolder" }} />{" "}
                      <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
};

export default FooterOne;
