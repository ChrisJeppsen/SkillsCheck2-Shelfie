require('dotenv').config()
const express = require('express'),
        massive = require('massive'),
        cors = require('cors'),
        {SERVER_PORT, CONNECTION_STRING} = process.env,
        ctrl = require('./controller')
        app = express()

app.use(express.json())
app.use(cors())

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('db is connected')
})
.catch(err => console.log(err))

app.get('/api/products', ctrl.getProducts)
app.get('/api/products/:id', ctrl.getProduct)
app.post('/api/products', ctrl.addProduct)
app.delete(`/api/products/:id`, ctrl.deleteProduct)
app.put(`/api/products/:id`, ctrl.updateProduct)




app.listen(SERVER_PORT, () => console.log(`server listening on ${SERVER_PORT}`))
