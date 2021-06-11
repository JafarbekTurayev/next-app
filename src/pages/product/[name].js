import {useRouter} from "next/router";
import {React, useState} from 'react';
import Link from "next/link";

const Index = () => {
    let router = useRouter();
    const [number, setNumber] = useState(0);
    const [price, setPrice] = useState(router.query.price);
    const incrementNumber = () => {
        setNumber(number + 1)
    };

    const decrementNumber = () => {
        if (number > 1) {
            setNumber(number - 1)
        }
    };
    return (
        <div>
            {console.log(router)}
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="card bg-transparent">
                            <img src={router.query.image} alt="no"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <h1>{router.query.name}</h1>
                        <h4>{router.query.price} $</h4>
                        <p>{router.query.description}</p>
                        <div id="counter"
                             className="d-flex counter border-dark   ml-1 justify-content-center align-items-center">


                            <button type="button" onClick={incrementNumber} className="btn badge-success">+</button>
                            <p className="btn mb-0 mx-1 btn-info">{number}</p>
                            <button type="button" onClick={decrementNumber} className="btn btn-danger">-</button>
                        </div>
                        <button className="btn btn-secondary" type="button">
                            <Link href={
                                {
                                    pathname: "/cart",
                                    query: {
                                        name: router.query.name,
                                        price: router.query.price,
                                        image: router.query.image,
                                        number: number
                                    }
                                }
                            }>
                                Add to Cart
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;