import React, { useContext } from 'react';
//styles
import "../../../styles/ViewsStyles/Login.scss";
//context
import { UseApiContext } from '../../../context/ApiContext';
//router 
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

function Login() {


    const { users } = useContext(UseApiContext);
    const isScreen= useMediaQuery("(min-width:1920px)")
    const isScreenUp= useMediaQuery("(max-width:1921px)")

    return (<>
        {isScreen && isScreenUp ?
            <div className="div-container">
                <div className="div-welcome">¡Te damos la bienvenida a tu comunidad profesional!</div>
                <div style={{ width: '100%', paddingLeft: '850px' }}>
                    <div className="div-img"></div>
                </div>
                <div className='div-users'>
                    {users.length !== 0 && users.map((user, i) => {

                    return (
                        <div key={i}>
                            <img src={user.fotoPersonal} className="users-img" alt='Users'></img>
                            <h4 className='users-name'>{user.nombreApellido}</h4>
                            <div className='users-desc'>{user.profesion}</div>
                            <div>
                                <Link
                                    to={`/home/${user.id}`}
                                    key={user.id}
                                >
                                    <button className='join-button'>Ingresar</button>
                                </Link>
                                <Link 
                                to='/'
                                style={{textDecoration: 'none'}}>
                                <p className='to-linkedin'>LinkedIn</p>
                                </Link>
                            </div>

                            </div>
                        )
                    })}
                </div>
                <div className="select">*Selecciona un perfil para comenzar</div>

            </div>
        :
            <div className='error-screen'>
                <p>Este sitio está disponible sólo para desktop 1920px por el momento</p>
                <p>This site is available only for desktop 1920px at this moment</p>
            </div>
        }
    </>)
}

export default Login