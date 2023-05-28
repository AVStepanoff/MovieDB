document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); // отменили стандартное поведение браузера для отправки формы

        let newFilm = addInput.value.toUpperCase(); // получаем то что ввел пользователь в инпут
        const favorite = checkbox.checked; // получаем булиновое значение, отмечен ли чекбокс или нет

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            } // обрезаем название если оно больше 21 символа
			
			if (favorite) {
				console.log('Добавляем любимый фильм');
			}
        
            movieDB.movies.push(newFilm); // добавили новый фильм в массив movies
            sortArr(movieDB.movies); // отсортировали по алфавиту фильмы в массиве
        
            createMovieList(movieDB.movies, movieList); // заново строим список фильмов на странице
        }

        addForm.reset(); // очищаем форму
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    }
        
    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    }
    
    const sortArr = (arr) => {
        arr.sort(); 
    }
    
	function createMovieList(films, parent) {
		parent.innerHTML = "";

		sortArr(films); // сортировку будем делать здесь

		films.forEach((film, i) => {
			parent.innerHTML += `
				<li class="promo__interactive-item">${i + 1} ${film}
					<div class="delete"></div>
				</li>
			`;
		});

		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.parentElement.remove(); // удаляем родительский элемент для кнопки
				movieDB.movies.splice(i, 1); // удаляем элемент из массива
				
				createMovieList(films, parent); // формируем список и нумерацию заново
			});
		});
	}

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});