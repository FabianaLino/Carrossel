import "./App.css";

function App() {
    return (
        <div className="container">
            <div className="logo">
                <img
                    src="/static/images/logo-tenis2.png"
                    width={350}
                    height={200}
                    alt="Logo loja tenis"
                />
            </div>
            <div className="carousel">
                <div className="item">
                    <img
                        src="https://imgcentauro-a.akamaihd.net/230x230/94313731.jpg"
                        alt="Produto Tenis"
                    />
                </div>
                <div className="info">
                    <span className="name">Tenis</span>
                    <span className="oldPrice">R$289,90</span>
                    <span className="price">R$199,90</span>
                </div>
            </div>
        </div>
    );
}

export default App;
