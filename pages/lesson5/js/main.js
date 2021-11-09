function log(e){
    console.log(e)
}

function createShoppingBucket() {
    let bucket = []

    return {
        addItem: (item, count = 1) => {
            for(let i = 0; i < count; i++){
                bucket.push(item)
            }
        },
        showTotalPrice: () => {
            return Math.round(bucket.reduce((sum, item) => {
                sum += item.price
                return sum
            }, 0))
        },
        showAllItems: () => {
            console.table(bucket)
        }
    }

}

let bucket = createShoppingBucket()
bucket.addItem({title: "Banana", price: 22.50}, 2)
bucket.addItem({title: "Orange", price: 62.20}, 3)
bucket.addItem({title: "Apple", price: 74.13}, 4)

log (bucket.showTotalPrice())
bucket.showAllItems()

