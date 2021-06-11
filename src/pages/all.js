import React from 'react';
import {categories, products, baza} from "./utils/baza";
import {bazaByCategory} from "./utils/bazaByCategory"
import {getCategories} from "./utils/categoryProvider"

const All = () => {

    const byCategory = bazaByCategory(baza)

    function getOneCategory(category) {
        console.log(category)
        console.log(byCategory)
        return byCategory[category.name]
    }

    return (
        <div>
            {console.log(baza.categories)}
            {console.log(categories)}
            {console.log(byCategory)}
            {console.log(bazaByCategory(baza))}
            {console.log(getCategories(baza))}
            <div className="container">
                <div className="row">
                    {
                        categories.length > 0 ?
                            categories.map((item, index) => {
                                return <div className="col-md-4 p-2">
                                    <div className="card p-4 border-0">
                                        <div className="d-flex mt-5 justify-content-center">
                                            <img src="https://www.jamstackecommerce.dev/products/couch7.png"
                                                 alt="New arrivals"
                                                 className="w-3/5"/>
                                        </div>
                                        <div className="sofa-text">
                                            {item.name}
                                        </div>
                                        <div className="sofa-text2">
                                            {/*{getOneCategory(item)}*/}
                                        </div>
                                    </div>
                                </div>
                            })
                            : "Malumot topilmadi!"
                    }

                </div>
            </div>
        </div>
    );
};

export default All;


export async function getStaticProps() {
    const inventoryCategories = baza.reduce((acc, next) => {
        const categories = next.categories
        categories.forEach(c => {
            const index = acc.findIndex(item => item.name === c)
            if (index !== -1) {
                const item = acc[index]
                item.itemCount = item.itemCount + 1
                acc[index] = item
            } else {
                const item = {
                    name: c,
                    image: next.image,
                    itemCount: 1
                }
                acc.push(item)
            }
        })
        return acc
    }, [])

    return {
        props: {
            categories: inventoryCategories
        }
    }
}


