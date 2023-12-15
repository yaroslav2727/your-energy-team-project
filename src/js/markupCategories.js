import noImage from '../img/no-image.jpg'

// відмальовування карток з категоріями вправ  ----
export function markupCategories(data) {
  return data
    .map(({ imgURL, filter, name }) => {
      return `<li class="card-exercises" data-body-exercise='${name}'>
               <button type="button" class="card-exercises-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${checkedImg(imgURL)}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${upFirst(name)}</p>
      <p class="name-exercises">${filter}</p>
  </div>
    </li>`;
    })
    .join('');
}

// назва категорії з великої літери  ----
const upFirst = (name) => name[0].toUpperCase() + name.slice(1);

// перевірка фото  ----
const checkedImg = imgURL =>
  `${!imgURL
    ? `${noImage}`
    : `${imgURL}`
  }`;