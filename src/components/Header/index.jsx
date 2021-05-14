import React from 'react';
import { Link }  from 'react-router-dom';

// import './Header.styl';

const Header = () => {

    window.onload = () => {
        let links = document.querySelectorAll('.menu .header-nav a');

        links.forEach(link =>
            link.addEventListener("click", openMenu)
        )
    }

    const openMenu = e => {
        let displayTrue = document.getElementsByClassName('menu')[0].style.display == 'block' ? true : false;
        document.getElementsByClassName('menu')[0].style.display = displayTrue ? 'none' : 'block';
        document.getElementsByTagName('body')[0].style.overflow = displayTrue ? '' : 'hidden';
    };



    return(pug`
    header
        .header
            .container
                p.header-logo.grid__column_size_3 chsch

                .grid__column_size_3
                    a.header-sub.circle-sub.grid(href="/") записаться

                nav.header-nav.grid__column_size_3
                    .header-nav-link_active
                        .header-nav-link_active-line
                        Link(to="/") О нас
                    .header-nav-link
                        Link(to="/course") Курс
                    .header-nav-link
                        Link(to="/format") Формат
                    .header-nav-link
                        Link(to="/sub") Записаться

                a.header-menu-link(onClick=openMenu) Меню

        .menu
            .container
                .header
                    .menu-header-top
                        p.header-logo chsch

                        a.menu-header-close(onClick=openMenu) Назад

                    nav.header-nav
                        .header-nav-link_active
                            .header-nav-link_active-line
                            Link(to="/") О нас
                        .header-nav-link
                            Link(to="/course") Курс
                        .header-nav-link
                            Link(to="/format") Формат
                        .header-nav-link
                            Link(to="/sub") Записаться

                .footer
                    .grid
                        .footer-top
                            .grid__column_size_4
                                p.footer-name Chulakov School

                            .grid__column_size_4

                            .grid__column_size_4
                                p.footer-contact school@chulakov.ru
                                    br
                                    | +7 495 268 0661
                                p.footer-address Ростов-на-Дону, 344010
                                    br
                                    | Кировский пр-т, д. 122, 3-й эт.

                                a.footer-privacy(href="/") Правовая информация


                        .grid__column_size_4
                            .footer-social
                                a(href="/") Facebook
                                a(href="/") Вконтакте
                                a(href="/") Instagram
  `
  );
}

export default Header;