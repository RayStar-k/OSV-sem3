const dishes = [
    {
        keyword: 'gazpacho',
        name: 'Гаспачо',
        price: 195,
        category: 'soup',
        count: '350 г',
        image: 'images/soups/gazpacho.jpg',
        kind: 'veg'
    },
    {
        keyword: 'mushroom_soup',
        name: 'Грибной суп-пюре',
        price: 185,
        category: 'soup',
        count: '330 г',
        image: 'images/soups/mushroom_soup.jpg',
        kind: 'veg'
    },
    {
        keyword: 'norwegian_soup',
        name: 'Норвежский суп',
        price: 270,
        category: 'soup',
        count: '330 г',
        image: 'images/soups/norwegian_soup.jpg',
        kind: 'fish'
    },
    {
        keyword: 'ramen',
        name: 'Рамен',
        price: 375,
        category: 'soup',
        count: '425 г',
        image: 'images/soups/ramen.jpg',
        kind: 'meat'
    },
    {
        keyword: 'tomyum',
        name: 'Том ям с креветками',
        price: 650,
        category: 'soup',
        count: '400 г',
        image: 'images/soups/tomyum.jpg',
        kind: 'fish'
    },
    {
        keyword: 'chicken',
        name: 'Куриный суп',
        price: 330,
        category: 'soup',
        count: '350 г',
        image: 'images/soups/chicken.jpg',
        kind: 'meat'
    },

    {
        keyword: 'fried_potatoes_mushrooms',
        name: 'Жареная картошка с грибами',
        price: 150,
        category: 'main_course',
        count: '250 г',
        image: 'images/main_course/friedpotatoeswithmushrooms1.jpg',
        kind: 'veg'
    },
    {
        keyword: 'lasagna',
        name: 'Лазанья',
        price: 385,
        category: 'main_course',
        count: '310 г',
        image: 'images/main_course/lasagna.jpg',
        kind: 'meat'
    },
    {
        keyword: 'chicken_cutlets',
        name: 'Котлеты из курицы с картофельным пюре',
        price: 225,
        category: 'main_course',
        count: '280 г',
        image: 'images/main_course/chickencutletsandmashedpotatoes.jpg',
        kind: 'meat'
    },
    {
        keyword: 'fish_rice',
        name: 'Рыбная котлета с рисом и спаржей',
        price: 320,
        category: 'main_course',
        count: '270 г',
        image: 'images/main_course/fishrice.jpg',
        kind: 'fish'
    },
    {
        keyword: 'shrimp_pasta',
        name: 'Паста с креветками',
        price: 340,
        category: 'main_course',
        count: '280 г',
        image: 'images/main_course/shrimppasta.jpg',
        kind: 'fish'
    },
    {
        keyword: 'pizza',
        name: 'Пицца Маргарита',
        price: 450,
        category: 'main_course',
        count: '470 г',
        image: 'images/main_course/pizza.jpg',
        kind: 'veg'
    },

    {
        keyword: 'caesar',
        name: 'Цезарь с курицей',
        price: 250,
        category: 'salad',
        count: '220 г',
        image: 'images/salads_starters/caesar.jpg',
        kind: 'meat'
    },
    {
        keyword: 'caprese',
        name: 'Капрезе с моцареллой',
        price: 350,
        category: 'salad',
        count: '235 г',
        image: 'images/salads_starters/caprese.jpg',
        kind: 'veg'
    },
    {
        keyword: 'tuna_salad',
        name: 'Салат с тунцом',
        price: 480,
        category: 'salad',
        count: '250 г',
        image: 'images/salads_starters/tunasalad.jpg',
        kind: 'fish'
    },
    {
        keyword: 'french_fries_1',
        name: 'Картофель фри с соусом',
        price: 280,
        category: 'salad',
        count: '235 г',
        image: 'images/salads_starters/frenchfries1.jpg',
        kind: 'veg'
    },
    {
        keyword: 'french_fries_2',
        name: 'Картофель фри с кетчупом',
        price: 260,
        category: 'salad',
        count: '235 г',
        image: 'images/salads_starters/frenchfries2.jpg',
        kind: 'veg'
    },
    {
        keyword: 'salad_with_egg',
        name: 'Салат с яйцом и авокадо',
        price: 440,
        category: 'salad',
        count: '240 г',
        image: 'images/salads_starters/saladwithegg.jpg',
        kind: 'veg'
    },

    {
        keyword: 'orange_juice',
        name: 'Апельсиновый сок',
        price: 120,
        category: 'beverage',
        count: '300 мл',
        image: 'images/beverages/orangejuice.jpg',
        kind: 'cold'
    },
    {
        keyword: 'apple_juice',
        name: 'Яблочный сок',
        price: 90,
        category: 'beverage',
        count: '300 мл',
        image: 'images/beverages/applejuice.jpg',
        kind: 'cold'
    },
    {
        keyword: 'carrot_juice',
        name: 'Морковный сок',
        price: 110,
        category: 'beverage',
        count: '300 мл',
        image: 'images/beverages/carrotjuice.jpg',
        kind: 'cold'
    },
    {
        keyword: 'cappuccino',
        name: 'Капучино',
        price: 180,
        category: 'beverage',
        count: '300 мл',
        image: 'images/beverages/cappuccino.jpg',
        kind: 'hot'
    },
    {
        keyword: 'green_tea',
        name: 'Зеленый чай',
        price: 100,
        category: 'beverage',
        count: '300 мл',
        image: 'images/beverages/greentea.jpg',
        kind: 'hot'
    },
    {
        keyword: 'tea',
        name: 'Черный чай',
        price: 90,
        category: 'beverage',
        count: '300 мл',
        image: 'images/beverages/tea.jpg',
        kind: 'hot'
    },

    {
        keyword: 'baklava',
        name: 'Пахлава',
        price: 220,
        category: 'dessert',
        count: '105 г',
        image: 'images/desserts/baklava.jpg',
        kind: 'small'
    },
    {
        keyword: 'cheesecake',
        name: 'Чизкейк',
        price: 240,
        category: 'dessert',
        count: '125 г',
        image: 'images/desserts/checheesecake.jpg',
        kind: 'small'
    },
    {
        keyword: 'chocolate_cheesecake',
        name: 'Шоколадный чизкейк',
        price: 260,
        category: 'dessert',
        count: '125 г',
        image: 'images/desserts/chocolatecheesecake.jpg',
        kind: 'small'
    },
    {
        keyword: 'chocolate_cake',
        name: 'Шоколадный торт',
        price: 270,
        category: 'dessert',
        count: '140 г',
        image: 'images/desserts/chocolatecake.jpg',
        kind: 'medium'
    },
    {
        keyword: 'donuts',
        name: 'Пончики (3 штуки)',
        price: 410,
        category: 'dessert',
        count: '160 г',
        image: 'images/desserts/donuts.jpg',
        kind: 'medium'
    },
    {
        keyword: 'donuts2',
        name: 'Пончики (6 штук)',
        price: 650,
        category: 'dessert',
        count: '320 г',
        image: 'images/desserts/donuts2.jpg',
        kind: 'large'
    }
];
