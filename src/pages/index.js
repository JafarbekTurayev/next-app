import Navigation from "../components/Navigation";
import React, {useState} from "react";
import {baza} from "./utils/baza";
import Link from "next/link";
import {productsByCategory} from "./utils/bazaByCategory";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from 'next-i18next'
import {useRouter} from "next/router";
import {
    AvForm,
    AvField,
    AvGroup,
    AvInput,
    AvFeedback,
    AvRadioGroup,
    AvRadio,
    AvCheckboxGroup,
    AvCheckbox
} from 'availity-reactstrap-validation';

const Index = (categories) => {

    const [names, setNames] = useState([]);
    const {t} = useTranslation('common')
    let router = useRouter();

    function setLang(event) {
        console.log(event)
        console.log(event.target.value)
        // router.locale = `${event.target.value}`
        router.replace(router.pathname, router.pathname, {locale: event.target.value});
    }


    // function search(e) {
    //     console.log("keldi")
    //     for (let bazaElement of baza) {
    //         if (bazaElement.name.toLowerCase().includes(e.target.value.toLowerCase())) {
    //             console.log(bazaElement.name)
    //             // names[0] = bazaElement.name;
    //             setNames({
    //                 name: bazaElement.name
    //             });
    //         }
    //     }
    // }

    return (
        <div>
            <h1>{t('title')}</h1>
            <p>{t('body')}</p>
            {console.log(router.locale)}

            {/*{names?.map((item, i) => {*/}
            {/*    (<div>*/}
            {/*        <span>{item.name}</span>*/}
            {/*    </div>)*/}
            {/*})}*/}

            {/*<Link*/}
            {/*    href={"/"}*/}
            {/*    locale={router.locale === 'en' ? 'ru' : 'en'}>*/}
            {/*    <button type="button">{t('changeLocale')}</button>*/}
            {/*</Link>*/}


            {/*<select className="form-control" onChange={(e) => setLang(e)}>*/}
            {/*    <option value="">Tanlang</option>*/}
            {/*    <option value="ru">Russian</option>*/}
            {/*    <option value="de">Deutsch</option>*/}
            {/*    <option value="en">English</option>*/}
            {/*</select>*/}


            {/*<AvField name="search" type="text" onKeyUp={(e) => {*/}
            {/*    search(e)*/}
            {/*}}/>*/}

            <input type="text" onKeyUp={(e) => {
                search(e)
            }}/>

            <Navigation/>
            <h1>Home Page</h1>
            <p className="bg-success"></p>
            {console.log(categories)}
            {categories.categories.map((item, i) => {
                return <div key={i}>
                    <Link href={
                        {
                            pathname: "/category/[name]",
                            query: {
                                name: item
                            }
                        }
                    }><p>{item}</p></Link>
                </div>
            })
            }

        </div>
    );
};

export default Index;

export async function getStaticProps({locale}) {
    const categories = baza.reduce((arr, next) => {
        console.log(next)
        next.categories.map(category => {
            if (arr.includes(category)) return
            arr.push(category)
        })
        return arr
    }, [])
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            categories: categories
        }
    }
}



