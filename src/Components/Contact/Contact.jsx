import "./Contact.scss";
import { FaTwitter, FaLinkedinIn, FaTwitch } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

const Contact = () => {
  return (
    <ul className="contact">
      <li className="contact__item">
        <a
          className="contact__link"
          href="https://www.twitch.tv/hopepoprock"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitch className="contact__icon" />
        </a>
      </li>
      <li className="contact__item">
        <a
          className="contact__link"
          href="https://twitter.com/UmmutPal"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className="contact__icon" />
        </a>
      </li>
      <li className="contact__item">
        <a
          className="contact__link"
          href="https://github.com/UmutPalabiyik"
          target="_blank"
          rel="noreferrer"
        >
          <VscGithub className="contact__icon" />
        </a>
      </li>
      <li className="contact__item">
        <a
          className="contact__link"
          href="https://www.linkedin.com/in/umutpalabiyik/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn className="contact__icon" />
        </a>
      </li>
    </ul>
  );
};

export default Contact;
