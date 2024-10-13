import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import  CartContext  from "../../context/cartContext";
import './shop.css';



const Shop = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { addToCart } = useContext(CartContext);
    const [isUserLoggedIn, setIsUserLoggedin] = useState(false);
    

    const [cartQuantities, setCartQuantities] = useState({
        jerseys: Array(6).fill(1),
        shoes: Array(3).fill(1),
        accessories: Array(3).fill(1),
    });
  
    useEffect(()=>{
        const token = localStorage.getItem("usertoken")
        if(token) {
            setIsUserLoggedin(true)
        }
    },[])

    const handleViewCart = () =>{
        if(!setIsUserLoggedin) {
            navigate('/login')
        } else {
            navigate('/cart')
        }
    } 
    const handleAddToCart = async (product, category, index) => {
        if (!category || index === undefined) {
            console.error('Category or Index missing');
            return;
        }
        if(!isUserLoggedIn){
            alert("You Must Be Logged In To Procced")
            navigate("/login")
            return;
        }
        setLoading(true);
        try {
            const quantity = cartQuantities[category][index];
            const itemToAdd = { ...product, quantity, category };
            
            console.log('Item to add:', itemToAdd);
            const response = await addToCart(itemToAdd);
            console.log('Item added to cart:', response);
        } catch (error) {
            console.error('Error adding item to cart:', error);
        } finally {
            setLoading(false);
        }
    };
    
    
    const updateQuantity = (type, index, change) => {
        setCartQuantities((prevQuantities) => {
            const updatedQuantities = { ...prevQuantities };
            // Ensure quantity never goes below 1 and update correctly based on previous state
            updatedQuantities[type] = updatedQuantities[type].map((qty, idx) =>
                idx === index ? Math.max(1, qty + change) : qty
            );
            return updatedQuantities;
        });
    };
    

      const jerseys = [
        { id: 1, name: "Kyllian Mbappe", price: "90 €", image: "/images/mbappe.jpg" },
        { id: 2, name: "Vinícius Júnior Jersey", price: "90 €", image: "/images/vini.jpg" },
        { id: 3, name: "Karim Benzema Jersey", price: "90 €", image: "/images/benzima.jpg" },
        { id: 4, name: "Luka Modrić Jersey", price: "90 €", image: "/images/luka.jpg" },
        { id: 5, name: "Jude Bellingham Jersey", price: "90 €", image: "/images/bellingam.jpg" },
        { id: 6, name: "Federico Valverde Jersey", price: "90 €", image: "/images/federico.jpg" }
    ];
    
    const shoes = [
        { id: 7, name: "Nike Mercurial", price: "120 €", image: "/images/nike_mercurial.jpg" },
        { id: 8, name: "Adidas Predator", price: "115 €", image: "/images/adidas_predator.jpg" },
        { id: 9, name: "Puma Future", price: "110 €", image: "/images/puma_future.jpg" }
    ];
    
    const accessories = [
        { id: 10, name: "Real Madrid Cap", price: "25 €", image: "/images/rm_cap.jpg" },
        { id: 11, name: "Real Madrid Scarf", price: "20 €", image: "/images/rm_scarf.jpg" },
        { id: 12, name: "Real Madrid Gloves", price: "30 €", image: "/images/rm_gloves.jpg" }
    ];
    

    const [activeCategory, setActiveCategory] = useState("jerseys");

    const renderProducts = (products, type) => {
        return products.map((item, index) => (
            <div key={item.id} className="jersey-card">
                <img src={item.image} alt={item.name} />
                <h2>{item.name}</h2>
                <p>{item.price}</p>
                <div className="quantity-controls">
                    <button onClick={() => updateQuantity(type, index, -1)}>-</button>
                    <span>{cartQuantities[type][index]}</span>
                    <button onClick={() => updateQuantity(type, index, 1)}>+</button>
                </div>
                <div className="buttons">
                    <button className="buy-now">Buy Now</button>
                    <button className="add-to-cart-button" disabled={loading} onClick={() => handleAddToCart(item, type, index)}>
                     {loading ? 'Adding...' : 'Add to Cart'}
                    </button>


                </div>
            </div>
        ));
    };

    return (
        <div className="shop-container">
            <h1>Shop</h1>
            <div className="navbar">
                <button className={`nav-button ${activeCategory === "jerseys" ? "active" : ""}`} onClick={() => setActiveCategory("jerseys")}>Jerseys</button>
                <button className={`nav-button ${activeCategory === "shoes" ? "active" : ""}`} onClick={() => setActiveCategory("shoes")}>Shoes</button>
                <button className={`nav-button ${activeCategory === "accessories" ? "active" : ""}`} onClick={() => setActiveCategory("accessories")}>Accessories</button>
            </div>

            <div className="jersey-list">
                {activeCategory === "jerseys" && renderProducts(jerseys, 'jerseys')}
                {activeCategory === "shoes" && renderProducts(shoes, 'shoes')}
                {activeCategory === "accessories" && renderProducts(accessories, 'accessories')}
            </div>
            <div className="view-cart-button" >
                
                    <ShoppingCart
                      variant="outline"
                      color="black"
                      onClick={handleViewCart}
                    />
                    <div className="cart">
                        <span>Cart</span>
                        
                    </div>
            </div>
        </div>
    );
};

export default Shop;
