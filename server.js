const express = require('express')
const { PrismaClient } = require('@prisma/client')
const cors = require('cors')
const path = require('path')

// app configuration
const prisma = new PrismaClient()
const app = express()
const PORT = process.env.PORT || 4000
const router = require('./routes/server.routes.js')

// static
app.use(express.static(path.resolve(__dirname, "build")));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "build", 'index.html'));
});

// middleware
app.use(express.json())
app.use(cors())

// database
const DatabaseConnection = async () => {
    await prisma.$connect()
    console.log('Database Connected')
}

DatabaseConnection()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })


// app routes
// app.get('/', (req, res) => {
//     res.status(200).send('Server is Running')
// })

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})