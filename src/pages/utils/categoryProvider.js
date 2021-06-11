import {baza} from './baza'

export async function getCategories() {
    const categories = baza.reduce((arr, next) => {
        next.categories.map(category => {
            if (arr.includes(category)) return
            arr.push(category)
        })
        return arr
    }, [])
    return Promise.resolve(categories) //
}

