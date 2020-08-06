const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (item, img='http://placehold.it/200x150') => `<div class="product-item" data-id="${this.id}">
                <img src="${img}" alt="Some img">
                <div class="desc">
                    <h3>${item.title}</h3>
                    <p>${item.price}</p>
                    <button class="buy-btn">Купить</button>
                    <button class="by-btn">Добавить в корзину</button>
                </div>
              </div>`;


const renderProducts = list => {
    document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(' '));
};

renderProducts(products);
