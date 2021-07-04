import { FC, ReactElement } from 'react';
import './style.scss';

const Footer: FC = (): ReactElement => (
  <footer className="footer">
    <a className="footer__github" href="https://github.com/MyWay778">
      myway778
    </a>
    <span className="footer__year">2021</span>
    <a className="footer__rss" href="https://rs.school/js/"></a>
  </footer>
);

export default Footer;
