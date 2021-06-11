import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" href="#">
                    <img src="" alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={
                                {
                                    pathname: "/category/new-arrivals",
                                    query: {
                                        name: "new-arrivals",
                                        text: "Salom"
                                    }
                                }
                            }>New arrivals</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" href={
                                {
                                    pathname: "/category/sofas",
                                    query: {
                                        name: "sofas",
                                        text: "Salom"
                                    }
                                }
                            }>Sofas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={
                                {
                                    pathname: "/category/living-room",
                                    query: {
                                        name: "Living Room",
                                        text: "Salom"
                                    }
                                }
                            }>Living room</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" href={
                                {
                                    pathname: "/category/on-sale",
                                    query: {
                                        name: "On sale",
                                        text: "Salom"
                                    }
                                }
                            }>On sale</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={
                                {
                                    pathname: "/category/chairs",
                                    query: {
                                        name: "Chairs",
                                        text: "Salom"
                                    }
                                }
                            }>Chairs</Link>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <Link className="nav-link" href="/all">All</Link>*/}
                        {/*</li>*/}

                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Navigation;