import React, { useEffect, useContext } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

//context
import { UseApiContext } from '../../../context/ApiContext'

//navbar
import Navbar from "./Navbar/Navbar"
//left side
import LeftSide from "./LeftSide/LeftSide"
//middle side
import MiddleSide from "./MiddleSide/MiddleSide"
//right side
import RightSide from "./RightSide/RightSide"
//chat 
import Chat from "./ChatSide/ChatSide"
import { useMediaQuery } from '@mui/material'


function Home() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { collectionByParam } = useContext(UseApiContext)

  useEffect(() => {
    userFilterId();
    window.scrollTo({
      top:0,
      behavior:"auto"
    })
  }, [])

  const userFilterId = async () => {
    const x = await collectionByParam('usuarios', id, '');
    if (!x) {
      navigate('/');
    }
  }

  const isScreen= useMediaQuery("(min-width:1920px)")
  const isScreenUp= useMediaQuery("(max-width:1921px)")
  return (
    <>
      {isScreen && isScreenUp ?
        <div>
          <Navbar />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
            <LeftSide />
            <MiddleSide />
            <RightSide />
            <Chat />
          </div>
        </div>
      :
        <div className='error-screen'>
          <p>Este sitio está disponible sólo para desktop 1920px por el momento</p>
          <p>This site is available only for desktop 1920px at this moment</p>
        </div>
      }
    </>
  )
}

export default Home;