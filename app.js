let search = document.querySelector('.search');
let container = document.querySelector('.container');
let containItem = document.querySelector('.contain-item');
let items = [
    {
        img : 'imgs/jean2.jpg',
        name: 'Jean Homme',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
        price: 49.99,
        category: 'jean'
    },
    {
        img : 'imgs/p1.jpg',
        name: 'Versace',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
        price: 149.99,
        category: 'parfum'
    },
    {
        img : 'imgs/t2.jpg',
        name: 'T-shirt Homme',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
        price: 19.99,
        category: 't-shirt'
    },
    {
        img : 'imgs/jean1.jpg',
        name: 'Jean Femme',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
        price: 25,
        category: 'jean'
    },
    {
        img : 'imgs/snk1.jpg',
        name: 'Chaussurre de sport',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
        price: 110,
        category: 'sneaker'
    },
    {
        img : 'imgs/snk2.jpg',
        name: 'Air force 1',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
        price: 100,
        category: 'sneaker'
    },
    {
        img : 'imgs/snk3.jpg',
        name: 'Air force 1 colorfull',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
        price: 150,
        category: 'sneaker'
    },
    {
        img : 'imgs/t1.jpg',
        name: 'T-shirt xxxx',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
        price: 30,
        category: 't-shirt'
    }
];

//créer les div card et les mettre dans le container

function itemCard(img, title, description, price){
    let clotheCard = document.createElement("div");
    
    clotheCard.classList.add('clothe-card');
    
        clotheCard.innerHTML = `
        <div class="img-div">
            <img src="${img}">
        </div>
        <div class="clothe-info">
            <h2>${title}</h2>
            <p>${description}</p>
            <p>$${price}</p>
        </div>`;
    containItem.appendChild(clotheCard);
}

//si on tape quelque chose dans la barre de recherche 
//on vérifie si la valeur entré est contenu dans une categorie d'item
//on crée une carte des items avec la meme categorie
//sinn on affiche tout les produits
items.forEach(item => {
    itemCard(item.img, item.name, item.description, item.price);
})

search.addEventListener('input', function(){
    let n = 0;
    containItem.innerHTML = "";
    if(search.value != ''){
        items.forEach(item => {
            if((item.category.toLocaleLowerCase().includes(search.value) || item.name.toLocaleLowerCase().includes(search.value)) && n < 3){
                n++;
                itemCard(item.img, item.name, item.description, item.price);
            }
        })
    }else{
        items.forEach(item => {
            itemCard(item.img, item.name, item.description, item.price);
        })
    }
})