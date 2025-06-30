import { useDispatch } from 'react-redux';
import { addToCart } from './CardSlice';


  const products = [
  { id: 1, name: "Laptop", price: 750, amount: 1, img: "/images.jpg" },
  { id: 2, name: "Phone", price: 400, amount: 1, img: "/phone.jpg" },
  { id: 3, name: "Headphones", price: 100, amount: 1, img: "/headphone.jpg" },
  { id: 4, name: "Smartwatch", price: 150, amount: 1, img: "/smartwatch.jpg" },
  { id: 5, name: "Tablet", price: 300, amount: 1, img: "/tablet.jpg" },
  { id: 6, name: "Bluetooth Speaker", price: 80, amount: 1, img: "/blutoothspeaker.jpg" },
  { id: 7, name: "Gaming Console", price: 500, amount: 1, img: "/gamingconsole.jpg" },
  { id: 8, name: "Monitor", price: 200, amount: 1, img: "/monitor.jpg" },
  { id: 9, name: "Keyboard", price: 50, amount: 1, img: "/keyboard.jpg" },
  { id: 10, name: "Speaker", price: 500, amount: 1, img: "/speaker.jpg" },
  { id: 11, name: "Drone", price: 650, amount: 1, img: "/drone.jpg" },
  { id: 12, name: "Camera", price: 700, amount: 1, img: "/camera.jpg" },
  
];



const ProductList = () => {
  const dispatch = useDispatch();

  return (<>
  <h2>Products</h2>   
    <div className="product-list">

      {products.map(product => (

        <div key={product.id} className="card">

          <img src={product.img} alt="" />
          <h3>{product.name}</h3>
          <p>${product.price}</p> 
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          
      
        </div>
      ))}
    </div>
    </>
  );
};

export default ProductList;
