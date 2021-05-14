import React from 'react';
import { Link }  from 'react-router-dom';

// import './Footer.styl';

const Footer = () => {
  return(pug`
    footer.footer
      .container
        .grid
          .grid__column_size_4
            p.footer-name Chulakov School
            a.footer-privacy(href="/") Правовая информация

          .grid__column_size_4

          .grid__column_size_4
            p.footer-contact school@chulakov.ru
              br
              | +7 495 268 0661
            p.footer-address Ростов-на-Дону, 344010
              br
              | Кировский пр-т, д. 122, 3-й эт.


          .grid__column_size_4
            .footer-social
              a(href="/") Facebook
              a(href="/") Вконтакте
              a(href="/") Instagram
  `
  );
}

export default Footer;