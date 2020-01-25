module.exports = {
    addProduct: (req,res) => {
        const dbInstance = req.app.get('db')
        const {image_url, product_name, price} = req.body
        console.log(req.body)
        

        dbInstance.add_product([image_url, product_name, price]).then(() => res.sendStatus(200)
    ).catch(err => res.status(500).send(err))
    },

    getProducts: (req,res) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_products().then(shelfie => {
             
            res.status(200).send(shelfie)
        }).catch(err => res.status(500).send(err))
    },

    getProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params

        dbInstance.get_product(+id).then(shelfie => {
            const obj = shelfie[0]
            res.status(200).send(obj)
        })
    },

    deleteProduct: (req,res) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params
        dbInstance.delete_product(+id).then(shelfie => {
            res.status(200).send(shelfie)
        }).catch(err => res.status(500).send(err))
    },

    updateProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const {image_url, product_name, price} = req.body
        const {id} = req.params

        dbInstance.edit_product({id, image_url, product_name, price}).then(shelfie => {
            res.status(200).send(shelfie)
        })
    }
}