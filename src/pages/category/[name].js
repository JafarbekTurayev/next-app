import {useRouter} from "next/router";
import {productsByCategory} from "../utils/bazaByCategory";
import {baza} from "../utils/baza";
import Link from "next/link";

const Name = () => {
    const router = useRouter();
    let byCategory = productsByCategory(baza);
    const products = byCategory[router.query.name];
    return (

        <div>
            <div className="container category-page">
                <h1>{router.query.name} Page </h1>
                {console.log(products.items)}
                {console.log(products.items.length)}
                <div className="row">
                    {
                        products.items.map((item, i) => {
                            return <div className="col-4 mt-3">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <div className="img-style">
                                            <img src={item.image} alt="no"/>
                                        </div>
                                        <h5>{item.name}</h5>
                                        <p>{item.price}</p>
                                        <button type="button">
                                            <Link href={
                                                {
                                                    pathname: "/product/[name]",
                                                    query: {
                                                        name: item.name,
                                                        price: item.price,
                                                        description: item.description,
                                                        image: item.image
                                                    }
                                                }
                                            }>Batafsil</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Name;