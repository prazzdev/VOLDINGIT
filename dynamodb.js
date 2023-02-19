// DynamoDB
const CyclicDb = require("@cyclic.sh/dynamodb")

const db = CyclicDb("drab-gray-anemone-kitCyclicDB")

const run = async () => {
    let animals = db.collection('animals')
    let question = db.collection('questions')

    // create an item in collection with key "leo" :)
    let leo = await animals.set('cheetah', {
        type:'cat',
        color:'brown'
    })

    // get an item at key "leo" from collection animals :)
    let item = await animals.get('cheetah')
    console.log(item)
}
run()