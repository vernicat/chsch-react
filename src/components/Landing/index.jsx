import React from 'react';
import { Link }  from 'react-router-dom';

// import './Landing.styl';

const Landing = () => {
    return(pug`
    -
      var events = [
          { "title": "событие", "text": "Информация о том, что скоро состоится конференция." },
          { "title": "курс",    "text": "Скоро релиз нового курса на тему маркетинга или дизайна." },
          { "title": "вебинар", "text": "Скоро состоится вебинар от арт-директор Студии." },
          { "title": "конкурс", "text": "Информация о гранте на обучение по курсу «Дизайн интерфейсов»" },
      ];

    .block1
        .block1-title.container
            h1 Digital Marketing
        img.block1-img.container(src="src/images/1.png")
        // +block1Events()

        .block1-events.container.grid
            each event, index in events
                .block1-events-event.grid__column_size_3(key=index)
                    p.block1-events-event-title= event.title
                    p.block1-events-event-text= event.text
                    a(href="/")
                        svg.svg-color.block1-events-event-open(width='12', height='11', viewBox='0 0 12 11', fill='none', xmlns='http://www.w3.org/2000/svg')
                            path(d='M1.43439 0.53186L11.0002 0.531861L11.0002 10.0976', stroke='#FF4D01', strokeLinecap='round', strokeLinejoin='round')
                            line(x1='10.5659', y1='0.707107', x2='1.70718', y2='9.56578', stroke='#FF4D01', strokeLinecap='round', strokeLinejoin='round')

    .block-sub.container
        a.circle-sub(href="/") записаться

    .block2.container
        .block2-title
            h2 Chulakov School — школа
                br
                | креативных навыков
        p.block2-description Место, где практические знания
            br
            | передаются студентам
        .block2-elements
            .block2-elements-element
                .grid.grid__column_size_4
                    p.block2-elements-element-circle.circle.circle_small A
                .grid.grid__column_size_12
                    p.block2-elements-element-text
                        span Мы верим
                        |  в силу креативных индустрий. Индустриальная эпоха уходит на второй план, и
                        | экономика нуждается в новых
                        br
                        | специалистах.
        .block2-elements-element
            .grid.grid__column_size_4
                p.block2-elements-element-circle.circle.circle_small B
            .grid.grid__column_size_12
                p.block2-elements-element-text
                    span Наша миссия
                    |  — дать возможность
                    br
                    | талантливым людям раскрыть свой
                    br
                    | потенциал и реализоваться.

    .block5.container.grid
        .block5-header.grid__column_size_6
            .block5-header-title
                h3 Трудо&shy;устройство
                    br
                    | выпускников
            a.block5-header-open.circle(href="/")
                svg.svg-color(width='12', height='13', viewBox='0 0 12 13', fill='none', xmlns='http://www.w3.org/2000/svg')
                    path(d='M1.43454 1.53186L10.9998 1.53186L10.9998 11.0972', stroke='#FF4D01', strokeWidth='2', strokeLinecap='round', strokeLinejoin='round')
                    line(x1='10.5652', y1='2.41421', x2='2.41406', y2='10.5653', stroke='#FF4D01', strokeWidth='2', strokeLinecap='round', strokeLinejoin='round')
        p.block5-description.grid__column_size_6 Нам важно, чтобы каждый студент извлек максимальную пользу от обучения, поэтому у нас существует центр развития карьеры.
    `);
}

export default Landing;