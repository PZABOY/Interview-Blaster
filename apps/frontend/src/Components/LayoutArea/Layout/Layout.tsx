import "./Layout.css";
import { Routing } from "../Routing/Routing";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export function Layout() {
    return (
        <div className="Layout">
            <header>
                <Header />
            </header>

            <main>
                <Routing />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}
