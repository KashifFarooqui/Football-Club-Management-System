import React, { useState } from "react";
import './shop.css';

const Shop = () => {
    const [cartQuantities, setCartQuantities] = useState({
        jerseys: Array(6).fill(1),
        shoes: Array(3).fill(1),
        accessories: Array(3).fill(1),
    });

    const updateQuantity = (type, index, delta) => {
        setCartQuantities((prevState) => {
            const updatedQuantities = [...prevState[type]];
            updatedQuantities[index] = Math.min(Math.max(updatedQuantities[index] + delta, 1), 10);
            return { ...prevState, [type]: updatedQuantities };
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
        { id: 1, name: "Nike Mercurial", price: "120 €", image: "/images/nike_mercurial.jpg" },
        { id: 2, name: "Adidas Predator", price: "115 €", image: "/images/adidas_predator.jpg" },
        { id: 3, name: "Puma Future", price: "110 €", image: "/images/puma_future.jpg" }
    ];

    const accessories = [
        { id: 1, name: "Real Madrid Cap", price: "25 €", image: "/images/rm_cap.jpg" },
        { id: 2, name: "Real Madrid Scarf", price: "20 €", image: "/images/rm_scarf.jpg" },
        { id: 3, name: "Real Madrid Gloves", price: "30 €", image: "/images/rm_gloves.jpg" }
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
                </div >
                <div className="buttons">
                    <button className="buy-now">Buy Now</button> 
                    <button className="add-to-cart-button">Add to Cart</button>
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
        </div>
    );
};

export default Shop;
