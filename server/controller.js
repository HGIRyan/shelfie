module.exports = {
    // GET
    getProducts: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory()
            .then(inventory => res.status(200).send(inventory))
            .catch(err => console.log('Error', err))
    },
    // Post
    postProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        const { image_url, product_name, price } = req.body
        dbInstance.create_product([image_url, product_name, price])
            .then(() => res.sendStatus(200))
            .catch(err => console.log('Error', err))
    },
    // Put

    // Delete
    deleteProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.delete_product(req.params.id)
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'You suck' }, console.log(err))
            })
    }






}