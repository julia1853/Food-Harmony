// Проверка определения продуктов
console.log('script.js загружен');

// Группы продуктов
const productGroups = {
  carbs: "Хлебобулочные",
  dairy: "Молочные",
  protein: "Белковые",
  fruit: "Фрукты",
  vegetable: "Овощи",
  meat: "Мясо",
  fish: "Рыба",
  sweet: "Сладкое",
  condiment: "Соусы и приправы"
};

// Продукты по группам
const groupedProducts = {
  carbs: [
    { value: "bread", name: "Хлеб" },
    { value: "potato", name: "Картофель" },
    { value: "flour", name: "Мука" }
  ],
  dairy: [
    { value: "cheese", name: "Сыр" },
    { value: "milk", name: "Молоко" },
    { value: "yogurt", name: "Йогурт" },
    { value: "butter", name: "Масло сливочное" },
    { value: "sour_cream", name: "Сметана" },
    { value: "ice_cream", name: "Мороженое" },
    { value: "feta", name: "Фета" }
  ],
  protein: [
    { value: "eggs", name: "Яйца" }
  ],
  fruit: [
    { value: "apple", name: "Яблоко" },
    { value: "banana", name: "Банан" },
    { value: "orange", name: "Апельсин" },
    { value: "kiwi", name: "Киви" },
    { value: "avocado", name: "Авокадо" },
    { value: "watermelon", name: "Арбуз" },
    { value: "pineapple", name: "Ананас" },
    { value: "strawberry", name: "Клубника" }
  ],
  vegetable: [
    { value: "tomato", name: "Помидор" },
    { value: "cucumber", name: "Огурец" },
    { value: "carrot", name: "Морковь" },
    { value: "onion", name: "Лук" },
    { value: "bell_pepper", name: "Перец болгарский" },
    { value: "lettuce", name: "Салат" }
  ],
  meat: [
    { value: "sausage", name: "Колбаса" },
    { value: "chicken", name: "Курица" },
    { value: "bacon", name: "Бекон" },
    { value: "ham", name: "Ветчина" }
  ],
  fish: [
    { value: "canned_tuna", name: "Консервы (тунец)" }
  ],
  sweet: [
    { value: "chocolate", name: "Шоколад" },
    { value: "cake", name: "Торт" },
    { value: "cookie", name: "Печенье" },
    { value: "jam", name: "Варенье" }
  ],
  condiment: [
    { value: "mayonnaise", name: "Майонез" },
    { value: "ketchup", name: "Кетчуп" },
    { value: "mustard", name: "Горчица" },
    { value: "soy_sauce", name: "Соевый соус" },
    { value: "vinegar", name: "Уксус" },
    { value: "olive_oil", name: "Оливковое масло" }
  ]
};

// Единый список всех продуктов
const products = Object.values(groupedProducts).flat();
console.log('Products initialized:', products.length);

// Маппинг продукт → группа
const productToGroup = {};
Object.keys(groupedProducts).forEach(groupKey => {
  groupedProducts[groupKey].forEach(product => {
    productToGroup[product.value] = groupKey;
  });
});

// Несовместимые пары
const badCombos = [
  ["cheese", "sausage"],
  ["eggs", "cucumber"],
  ["tomato", "sausage"],
  ["chocolate", "potato"],
  ["ice_cream", "sour_cream"],
  ["banana", "mayonnaise"],
  ["chocolate", "cheese"],
  ["cake", "sour_cream"],
  ["milk", "canned_tuna"],
  ["yogurt", "canned_tuna"],
  ["sour_cream", "canned_tuna"]
];

// Сомнительные пары
const doubtfulCombos = [
  ["banana", "chicken"],
  ["apple", "ham"],
  ["kiwi", "yogurt"],
  ["cucumber", "yogurt"],
  ["tomato", "chocolate"],
  ["avocado", "jam"]
];

// Хорошие пары
const goodCombos = [
  ["watermelon", "feta"],
  ["pineapple", "ham"],
  ["strawberry", "bacon"],
  ["milk", "onion"]
];

// Правила несочетания по группам
const badGroupCombos = [
  ["fish", "dairy"]
];

// Хорошие группы
const goodGroupCombos = [
  ["carbs", "dairy"],
  ["carbs", "meat"],
  ["carbs", "vegetable"],
  ["carbs", "condiment"],
  ["dairy", "fruit"],
  ["dairy", "carbs"],
  ["dairy", "condiment"],
  ["fruit", "vegetable"],
  ["fruit", "dairy"],
  ["fruit", "sweet"],
  ["vegetable", "meat"],
  ["vegetable", "fish"],
  ["vegetable", "condiment"],
  ["meat", "condiment"],
  ["meat", "vegetable"],
  ["meat", "carbs"],
  ["fish", "vegetable"],
  ["fish", "condiment"],
  ["sweet", "fruit"],
  ["sweet", "carbs"],
  ["condiment", "meat"],
  ["condiment", "fish"],
  ["condiment", "vegetable"]
];

// Данные по калориям и БЖУ
const calories = {
  bread: 265, cheese: 402, sausage: 322, eggs: 155, tomato: 18,
  cucumber: 15, milk: 54, butter: 717, yogurt: 59, sour_cream: 214,
  ham: 245, chicken: 110, bacon: 458, lettuce: 15, onion: 40,
  garlic: 149, bell_pepper: 20, carrot: 41, potato: 77, zucchini: 17,
  eggplant: 25, apple: 52, banana: 89, orange: 47, grapefruit: 32,
  kiwi: 61, strawberry: 32, blueberry: 57, avocado: 160, pineapple: 50,
  watermelon: 30, peanut_butter: 590, jam: 275, honey: 304,
  chocolate: 546, cookie: 480, cake: 370, ice_cream: 207,
  mayonnaise: 680, ketchup: 110, mustard: 10, soy_sauce: 10,
  olive_oil: 884, vinegar: 21, pickles: 12, canned_tuna: 132,
  salad_dressing: 180, sugar: 387, flour: 364, salt: 0
};

const proteins = {
  bread: 9, cheese: 25, sausage: 13, eggs: 13, tomato: 1,
  cucumber: 0.7, milk: 3.2, butter: 0.9, yogurt: 3.5, sour_cream: 2.2,
  ham: 18, chicken: 24, bacon: 12, lettuce: 1.3, onion: 1.1,
  garlic: 6.4, bell_pepper: 0.9, carrot: 0.9, potato: 2.0, zucchini: 1.2,
  eggplant: 1.0, apple: 0.3, banana: 1.1, orange: 0.9, grapefruit: 0.8,
  kiwi: 1.1, strawberry: 0.7, blueberry: 0.7, avocado: 2.0, pineapple: 0.5,
  watermelon: 0.6, peanut_butter: 25, jam: 0.5, honey: 0.3,
  chocolate: 5.3, cookie: 4.0, cake: 3.5, ice_cream: 3.5,
  mayonnaise: 0.9, ketchup: 1.3, mustard: 4.0, soy_sauce: 5.1,
  olive_oil: 0.0, vinegar: 0.0, pickles: 1.0, canned_tuna: 23,
  salad_dressing: 0.2, sugar: 0.0, flour: 10, salt: 0.0
};

const fats = {
  bread: 3, cheese: 33, sausage: 26, eggs: 11, tomato: 0.2,
  cucumber: 0.1, milk: 3.3, butter: 81, yogurt: 3.3, sour_cream: 21,
  ham: 17, chicken: 2.6, bacon: 33, lettuce: 0.2, onion: 0.1,
  garlic: 0.5, bell_pepper: 0.3, carrot: 0.2, potato: 0.1, zucchini: 0.3,
  eggplant: 0.2, apple: 0.3, banana: 0.3, orange: 0.1, grapefruit: 0.1,
  kiwi: 0.5, strawberry: 0.3, blueberry: 0.3, avocado: 15, pineapple: 0.1,
  watermelon: 0.2, peanut_butter: 50, jam: 0.1, honey: 0.0,
  chocolate: 30, cookie: 20, cake: 15, ice_cream: 11,
  mayonnaise: 79, ketchup: 0.1, mustard: 0.8, soy_sauce: 0.0,
  olive_oil: 100, vinegar: 0.0, pickles: 0.1, canned_tuna: 5.0,
  salad_dressing: 18, sugar: 0.0, flour: 1.0, salt: 0.0
};

const carbs = {
  bread: 49, cheese: 1.3, sausage: 1.4, eggs: 1.1, tomato: 3.9,
  cucumber: 3.6, milk: 4.8, butter: 0.1, yogurt: 4.7, sour_cream: 2.9,
  ham: 1.0, chicken: 0.0, bacon: 0.7, lettuce: 2.9, onion: 9.3,
  garlic: 33, bell_pepper: 4.6, carrot: 9.6, potato: 17, zucchini: 3.1,
  eggplant: 5.9, apple: 14, banana: 23, orange: 12, grapefruit: 11,
  kiwi: 15, strawberry: 7.7, blueberry: 14, avocado: 9.0, pineapple: 13,
  watermelon: 7.6, peanut_butter: 20, jam: 70, honey: 82,
  chocolate: 61, cookie: 60, cake: 55, ice_cream: 24,
  mayonnaise: 3.0, ketchup: 26, mustard: 6.0, soy_sauce: 3.0,
  olive_oil: 0.0, vinegar: 0.1, pickles: 2.0, canned_tuna: 0.0,
  salad_dressing: 2.0, sugar: 99, flour: 76, salt: 0.0
};

// Функция проверки сочетания
function checkCompatibility() {
  console.log('Функция checkCompatibility вызвана');
  
  const selects = document.querySelectorAll(".product");
  console.log('Найдено элементов select:', selects.length);
  
  const selectedProducts = [];
  const resultDiv = document.getElementById("result");

  // Очистка предыдущих подсветок
  selects.forEach(select => {
    select.classList.remove("bad-combo", "doubtful-combo", "good-combo");
    const value = select.value;
    if (value) {
      selectedProducts.push({
        value,
        element: select
      });
    }
  });

  console.log('Выбранные продукты:', selectedProducts);
  
  if (!resultDiv) {
    console.error('Элемент result не найден');
    return;
  }
  
  resultDiv.innerHTML = "";

  if (selectedProducts.length < 2) {
    resultDiv.innerHTML = "<div class='error'>Выберите хотя бы 2 продукта</div>";
    return;
  }

  const badPairs = [];
  const doubtfulPairs = [];
  const goodPairs = [];

  // Поиск плохих, сомнительных и хороших пар
  for (let i = 0; i < selectedProducts.length; i++) {
    for (let j = i + 1; j < selectedProducts.length; j++) {
      const product1 = selectedProducts[i];
      const product2 = selectedProducts[j];

      // Проверяем несовместимые пары
      if (badCombos.some(pair => 
        (pair[0] === product1.value && pair[1] === product2.value) ||
        (pair[0] === product2.value && pair[1] === product1.value)
      )) {
        badPairs.push([product1, product2]);
      }
      // Проверяем сомнительные пары
      else if (doubtfulCombos.some(pair =>
        (pair[0] === product1.value && pair[1] === product2.value) ||
        (pair[0] === product2.value && pair[1] === product1.value)
      )) {
        doubtfulPairs.push([product1, product2]);
      }
      // Проверяем хорошие пары
      else if (goodCombos.some(pair =>
        (pair[0] === product1.value && pair[1] === product2.value) ||
        (pair[0] === product2.value && pair[1] === product1.value)
      )) {
        goodPairs.push([product1, product2]);
      }
    }
  }

  console.log('Найдены пары:', { badPairs, doubtfulPairs, goodPairs });

  // Отображение результата
  if (badPairs.length > 0) {
    badPairs.flat().forEach(item => {
      item.element.classList.add("bad-combo");
    });
    resultDiv.innerHTML += `<div class="bad">❌ Не сочетаются</div>`;
  } else if (doubtfulPairs.length > 0) {
    doubtfulPairs.flat().forEach(item => {
      item.element.classList.add("doubtful-combo");
    });
    resultDiv.innerHTML += `<div class="doubtful">🤷‍♂️ Сомнительно, но Окэй</div>`;
  } else if (goodPairs.length > 0) {
    goodPairs.flat().forEach(item => {
      item.element.classList.add("good-combo");
    });
    resultDiv.innerHTML += `<div class="good">✅ Хорошо сочетаются</div>`;
  } else {
    resultDiv.innerHTML += `<div class="neutral">🍴 Нейтральное сочетание</div>`;
  }

  // Расчет калорий и БЖУ
  let totalCalories = 0, totalProteins = 0, totalFats = 0, totalCarbs = 0;
  selectedProducts.forEach(product => {
    totalCalories += calories[product.value] || 0;
    totalProteins += proteins[product.value] || 0;
    totalFats += fats[product.value] || 0;
    totalCarbs += carbs[product.value] || 0;
  });

  resultDiv.innerHTML += `
    <div class="nutrition-info">
      <h3>Пищевая ценность:</h3>
      <p>Калории: ${totalCalories} ккал</p>
      <p>Белки: ${totalProteins.toFixed(1)} г</p>
      <p>Жиры: ${totalFats.toFixed(1)} г</p>
      <p>Углеводы: ${totalCarbs.toFixed(1)} г</p>
    </div>
  `;
}

// Генерируем выпадающие списки при загрузке страницы
window.addEventListener('load', () => {
  console.log('Страница загружена, инициализация выпадающих списков');
  const container = document.getElementById("productSelectors");
  if (!container) {
    console.error('Контейнер productSelectors не найден');
    return;
  }

  for (let i = 0; i < 3; i++) {
    const select = document.createElement("select");
    select.classList.add("product");

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "-- Выберите продукт --";
    select.appendChild(defaultOption);

    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.value;
      option.textContent = product.name;
      select.appendChild(option);
    });

    container.appendChild(select);
  }
  console.log('Выпадающие списки созданы');
});

// Делаем функцию глобальной
window.checkCompatibility = checkCompatibility;