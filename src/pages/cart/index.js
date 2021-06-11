import {React, useState} from 'react';
import {useRouter} from "next/router";

const Index = () => {
    let router = useRouter();
    const [number, setNumber] = useState(router.query.number);
    const [price, setPrice] = useState(router.query.price);
    const [onePrice, setOnePrice] = useState(router.query.price);
    const incrementNumber = () => {
        setNumber(parseInt(number) + 1),
            setPrice(price + onePrice)
    };

    const decrementNumber = () => {
        if (number > 1) {
            setNumber(number - 1),
                setPrice(price - onePrice)
        }
    };


    return (
        <div className="container p-0">
            <div className="row">
                <div className=" mt-5 col-12">
                    <h1>Your Card</h1>
                    {console.log(router)}
                </div>
            </div>

            <div className="w-100">
                <div className="w-100 p-0 card">
                    <div className="card-body d-flex align-items-center">
                        <img className="w-25 " src={router.query.image} alt=""/>
                        <h4 className="text-success mt-2">Your Mebel</h4>

                        <p className="ml-5 mr-2 mt-3 ">QUANTITY</p>
                        <div id="counter"
                             className="d-flex counter border-dark   ml-1 justify-content-center align-items-center">


                            <button type="button" onClick={incrementNumber} className="btn badge-success">+</button>
                            <p className="btn mb-0 mx-1 btn-info">{number}</p>
                            <button type="button" onClick={decrementNumber} className="btn btn-danger">-</button>
                        </div>

                        <div className="d-block ml-auto price">
                            <h1>{router.query.price}</h1>
                        </div>
                        <button type="close" className="btn mx-2 mb-3 border-0">x</button>
                    </div>
                </div>
            </div>


            <div className="d-flex justify-content-between align-items-center">

            </div>

            <div className="d-flex mt-5 justify-content-between align-items-center">
                <h5>Proceed to check out ==> </h5>
                <div>
                    <h5>Total: {onePrice * number} </h5>
                </div>
            </div>

            <hr className="mt-5"/>
            <footer className="d-flex justify-content-between align-items-center">
                <p>Copyright © 2021 JAMstack Ecommerce. All rights reserved.</p>

                <h6>Admin</h6>

            </footer>

        </div>
    );
};

export default Index;