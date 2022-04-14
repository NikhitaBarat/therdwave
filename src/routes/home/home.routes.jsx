import React from 'react'
import '../home/home.styles.css'
import album from '../../assets/album.png'

function Home() {
  return (
    <div className='home'>
            <img src={album} alt="" />
        <div className='top-right'>
            <span className='blockchain'>Blockchain</span>
            <div className='text'>
                Decentralized Music Rights <span className = 'span'>Marketplace.</span>
            </div>
        </div>
    </div>
  )
}

export default Home