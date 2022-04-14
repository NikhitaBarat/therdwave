import React from 'react'
import './dashboard.styles.css'
import OneR from '../../assets/OneRepublic.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { IconButton } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import im1 from '../../assets/im1.png'
import im2 from '../../assets/im2.png'
import im3 from '../../assets/im3.png'

function Dashboard() {
    return (
        <div className='dashboard'>
            <div className="text">
                Royalty Marketplace for Creators.
            </div>
            <div className='main'>
                <div className='box'>
                    <div className="left">
                        <img src={OneR} alt="" />
                    </div>
                    <div className="right">
                        <h1>Run</h1>
                        <p>by OneRepublic</p>
                        <div className='play'>
                            <IconButton>
                                <SkipPreviousIcon fontSize='large' />
                            </IconButton>
                            <IconButton>
                                <PlayArrowIcon fontSize='large' />
                            </IconButton>
                            <IconButton>
                                <SkipNextIcon fontSize='large' />
                            </IconButton>
                            <IconButton>
                                <FavoriteBorderOutlinedIcon fontSize='small' />
                            </IconButton>
                        </div>
                        <div className='rest'>
                            <div className="box2">

                            </div>
                            <div className="box3">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dashboard