/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const promo = document.querySelectorAll('div.promo__adv > img'),
      promoBg = document.querySelector('.promo__bg'),
      promoGenre = promoBg.querySelector('.promo__genre'),
      promoInteractiveList = document.querySelector('.promo__interactive-list');

promo.forEach(item => {
    item.remove();
});

promoGenre.innerHTML = 'драма';
promoBg.style.background = "url('img/bg.jpg') top center/cover no-repeat";
// promoBg.style.backgroundImage = 'url("img/bg.jpg")';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

function replaceInteractiveList(movies) {
    promoInteractiveList.innerHTML = '';
    movies.sort();
    movies.forEach(function(item, i) {
        promoInteractiveList.insertAdjacentHTML('beforeend', `
            <li class="promo__interactive-item">${i + 1}. ${item}
                <div class="delete"></div>
            </li>
        `);
        
    });
}

replaceInteractiveList(movieDB.movies);

