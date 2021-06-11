function productsByCategory(baza) {
    return baza.reduce((acc, next) => {
        // const categories = next.categories
        next.categories.forEach(c => {
            if (acc[c]) { //massiv["on sale"]]
                acc[c].items.push(next)
            } else {
                acc[c] = {}
                acc[c].items = []
                acc[c].items.push(next)
            }
        })
        return acc //massiv
    }, {})
}

export {
    productsByCategory
}