import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const ProductCard = ({product}) => {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    setCount(count + 1);

  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Стоимость: {product.price} р.</p>
      <button onClick={handleAddToCart}> Добавить в корзину (кол-во: {count}) </button>
    </div>
  );
};

function App() {
  const products = [
    {
      id: 1,
      name: 'Гамбургер',
      price: 66,
      image: 'https://avatars.mds.yandex.net/get-altay/6928818/2a00000183b53ae15cc8605b846304f1d5ff/XXL',
    },
    {
      id: 2,
      name: 'Картошка Фри',
      price: 93,
      image: 'https://imgproxy.sbermarket.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzI2MzIxNzgxL29yaWdpbmFsLzEvMjAyMy0wOS0yMFQxMyUzQTEwJTNBMTAuNTM1MjYzJTJCMDAlM0EwMC8yNjMyMTc4MV8xLmpwZw==.jpg',
    },
    {
      id: 3,
      name: 'Кока Кола',
      price: 79,
      image: 'https://goldniva.ru/upload/iblock/76c/xhvg5gp8gl3mbrdiq33aqgjcyaap0b20.png',
    },
    {
      id: 4,
      name: 'Наггетсы 5шт.',
      price: 63,
      image: 'https://images.satu.kz/191434979_w700_h500_naggetsy-kurinye-2.jpg',
    },
    {
      id: 5,
      name: 'Цезарь Ролл',
      price: 113,
      image: 'https://i.pinimg.com/736x/f0/47/e5/f047e5bce442613d2a3b145b68195bd0.jpg',
    },
  ];

  return (
    <div className="App">
      <h1>Добро пожаловать во "Вкусно и Точка"!</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App
