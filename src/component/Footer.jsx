import "../style/footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div class="footer">
      <div className="container">
        <div class="footer_container">
          <div class="about-company">
            <h2>PsycheCraftery</h2>
            <p class="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              ante mollis quam tristique convallis{" "}
            </p>
            <p>
              <Link  to="#">
               <img src="../images/icon-facebook.png" alt="facebook-icon" />
              </Link>
              <Link  to="#">
              <img src="../images/icon-linkedin.png" alt="linkedin-icon" />
              </Link>
            </p>
          </div>
          <div class=" links">
            <h4 class="">Links</h4>
            <p>
              <Link  to="/">Home</Link>
            </p>
            <p>
              <Link  to="#">Nam mauris velit</Link>
            </p>
            <p>
              <Link  to="#">Etiam vitae mauris</Link>
            </p>
            <p>
              <Link  to="#">Etiam vitae mauris</Link>
            </p>
          </div>
          <div class=" location">
            <h4 class="">Location</h4>
            <p>B2, Second floor, Tyre, Lebanon</p>
            <p class="p_footer_icon">
            <img src="../images/icon-phone.png" alt="facebook-icon" />(961) 76/1234567
            </p>
            <p className="p_footer_icon">
            <img src="../images/icon-envelope.png" alt="facebook-icon" />PsycheCraftery@gmail.com
            </p>
          </div>
        </div>
        <div class="">
          <div class=" copyright">
            <p class="">
              <small>© 2024. All Rights Reserved.</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
