import { Link } from "react-router-dom";

function Homepage() {
    return (
        <div>
            {/* Parte 1 */}
            <section id="parte1" style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div>
                    <h1>Parte 1</h1>
                    <a href="#parte2" style={{ fontSize: "24px", textDecoration: "none" }}>⬇</a>
                </div>
            </section>

            {/* Parte 2 */}
            <section id="parte2" style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div>
                    <h1>Parte 2</h1>
                    <Link to="/login">
                        <button>Ir a Login</button>
                    </Link>
                    <a href="#parte1" style={{ fontSize: "24px", textDecoration: "none" }}>⬆</a>
                </div>
            </section>
        </div>
    );
}

export default Homepage;