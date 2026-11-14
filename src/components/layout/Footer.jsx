import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__inner">
        <div>
          <h3>email</h3>
          <a href="mailto:kimlh3743@gmail.com">kimlh3743@gmail.com</a>
        </div>
        <div>
          <h3>site</h3>
          <a
            href="https://kimyihyung.github.io/portfolio/3d/"
            target="_blank"
            rel="noreferrer"
          >
            3d portal
          </a>
          <a
            href="https://kimyihyung.github.io/portfolio/"
            target="_blank"
            rel="noreferrer"
          >
            portfolio
          </a>
        </div>
        <div>
          <h3>social</h3>
          <ul>
            <li>
              <a
                href="https://github.com/kimyihyung"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
            </li>
            <li>
              <a
                href="https://blog.naver.com/branson_note"
                target="_blank"
                rel="noreferrer"
              >
                blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
