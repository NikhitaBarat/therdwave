const express = require('express')
const router = express.Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/', (req, res) => {
    res.send('Api Running at /api')
})

router.get('/all/music', async (req, res) => {
    const data = await prisma.music.findMany({})
    res.status(200).json(data)
})

router.post('/add/music', async (req, res) => {
    const { music_name, music_poster, artist, current_bid, last_bid } = req.body
    const data = await prisma.music.create({
        data: {
            music_name: music_name,   
            music_poster: music_poster, 
            artist: artist,       
            current_bid: current_bid,  
            last_bid: last_bid  
        }
    })
    res.status(201).json(data)
})
module.exports = router