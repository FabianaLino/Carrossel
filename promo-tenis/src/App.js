import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        fetch("http://localhost:3000/static/materialtenis.json")
            .then((Response) => Response.json())
            .then(setData);
    }, []);

    if (!data || !data.length) return null;

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    return (
        <div className="container">
            <motion.div animate={{ x: -30, y: 35 }} className="logo">
                <img
                    src="/static/images/logolojatenis.png"
                    width={270}
                    height={210}
                    alt="Logo loja tenis"
                />
            </motion.div>
            <div className="carousel" ref={carousel}>
                {data.map((item) => {
                    const { id, name, price, oldPrice, image } = item;
                    return (
                        <div className="item" key={id}>
                            <img src={image} alt={name} />
                            <div className="info">
                                <span className="name">{name}</span>
                                <span className="oldPrice">{oldPrice}</span>
                                <span className="price">{price}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="buttons">
                <button onClick={handleLeftClick}>
                    <img
                        src="/static/images/right_chevron_icon.png"
                        alt="Scroll Left"
                    ></img>
                </button>
                <button onClick={handleRightClick}>
                    <img
                        src="/static/images/right_chevron_icon.png"
                        alt="Scroll Right"
                    ></img>
                </button>
            </div>
        </div>
    );
}

export default App;
