const mongoose = require('mongoose')

const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI : console.log('Error en la variable de entorno')

mongoose.connect(URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then((d) => {
    const {name, host, port, user, pass} = d.connections[0]
    console.log(`Conectado a ${name} [${host}:${port}]`)
}).catch(() => {
    console.log('Error en URI')
})