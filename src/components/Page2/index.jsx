import React from 'react';

// import './Page2.styl';

const Page2 = () => {
  return(pug`
    .block3
        .block3-header.container.grid
            .block3-header-open.grid__column_size_4
                a Открыть все
                svg.svg-color(width='24', height='24', viewBox='0 0 24 24', fill='none', xmlns='http://www.w3.org/2000/svg')
                    path(d='M22 12L12.1005 21.8995L2.20101 12', stroke='#FF4D01', strokeWidth='2', strokeLinecap='round', strokeLinejoin='round')

            .block3-title.grid__column_size_12
                h2 Учим тому,
                    br
                    | что востре&shy;бовано
        // +block3Courses()
        -
            var courses = ["Design", "Marketing", "Management", "Education"];

        .block3-courses
            each cource_name, index in courses
                .block3-courses-course(key=index)
                    .container.grid
                        .block3-courses-course-icon.grid__column_size_4
                            svg.svg-expansion(width='24', height='24', viewBox='0 0 24 24', fill='none', xmlns='http://www.w3.org/2000/svg')
                                path(d='M22 12L12.1005 21.8995L2.20101 12', stroke='#000', strokeWidth='2', strokeLinecap='round', strokeLinejoin='round')
                        p.block3-courses-course-title.grid__column_size_8= cource_name
                        p.block3-courses-course-number.grid__column_size_4= index+1

    .block4.container
        h2.block4-title Как устроено
            br
            | обучение?
        p.block4-description Обучение недельными
            br
            | спринтами

        .block4-elements
            -
                var elements = [
                    { "title": "Важно общаться",   "text": "Люди учатся в ходе диалога, а не в процессе просмотра записанных видеороликов. На всех наших онлайн-курсах много живого общения, коммуникаций со специалистами и одногруппниками." },
                    { "title": "Тут не все равно", "text": "Мы выявляем уровень знаний и желаемую цель каждого. Важен именно ваш результат. Поэтому обучение проходит в небольших группах и с закрепленными кураторами." },
                    { "title": "Дрим-тим", "text": "Правильный наставник — залог развития. Все преподаватели школы — действующие практики и лидеры диджитал-индустрии." },
                    { "title": "Практическая магия", "text": "Никаких иллюзий — все как в жизни. Полное погружение в рабочие процессы и задания по реальным кейсам крупнейших брендов." },
                    { "title": "А что дальше?", "text": "Наша цель — ваши успехи после обучения. Центр развития карьеры школы поможет каждому понять, как применить полученные знания с максимальным профитом." },
                ];
            .block4-elements-grid.grid__column_size_6
                // +block4Elements(idx=0)
                // +block4Elements(idx=1)
                .block4-elements-element.grid__column_size_3
                    p.block4-elements-element-title= elements[0].title
                    p.block4-elements-element-text= elements[0].text
                .block4-elements-element.grid__column_size_3
                    p.block4-elements-element-title= elements[1].title
                    p.block4-elements-element-text= elements[1].text
            .block4-elements-grid.grid__column_size_9
                // +block4Elements(idx=2)
                // +block4Elements(idx=3)
                // +block4Elements(idx=4)
                .block4-elements-element.grid__column_size_3
                    p.block4-elements-element-title= elements[2].title
                    p.block4-elements-element-text= elements[2].text
                .block4-elements-element.grid__column_size_3
                    p.block4-elements-element-title= elements[3].title
                    p.block4-elements-element-text= elements[3].text
                .block4-elements-element.grid__column_size_3
                    p.block4-elements-element-title= elements[4].title
                    p.block4-elements-element-text= elements[4].text
  `
  );
}

export default Page2;