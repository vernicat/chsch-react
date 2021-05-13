import React from 'react';
import { Link }  from 'react-router-dom';

const Subscribe = () => {
  return(pug`
    .block6.container.grid
      .block6-title.grid__column_size_6
          h3 Найдем решение для вас
      p.block6-description.grid__column_size_6 Оставьте свои контакты, чтобы мы смогли узнать ваши цели
          |  и подобрать оптимальную траекторию обучения.

      form.block6-form.grid__column_size_6
          input(type="text", name="name", placeholder="Имя")
          br
          input(type="tel", name="tel", placeholder="Телефон")
          br
          input(type="email", name="email", placeholder="E-mail")

    .block7.container.grid
      .block7-elements.grid__column_size_3
          a.block7-elements-sub.circle-sub(href="/") записаться
      .block7-elements.grid__column_size_3
          p.block7-elements-text Нажимая на кнопку, вы даете
              span  согласие
              |  на обработку персональных
              br
              | данных и соглашаетесь с политикой
              br
              | конфиденциальности.
  `
  );
}

export default Subscribe;