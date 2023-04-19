import React, { useContext } from 'react'
//styles
import "../../../../styles/ViewsStyles/HomeStyles/RightSide.scss"
//context
import { UseApiContext } from '../../../../context/ApiContext';

function RightSide() {

    const { otherUsers } = useContext(UseApiContext);
 

    return (
        <>
            <div>
                <div className='main-right-side'>
                    <div className='right-side-header'>
                        <div className='add'>
                            Añadir a tu feed
                        </div>
                        <div className='right-see-more'>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.5 0C7.84518 0 8.125 0.279822 8.125 0.625V6.875H14.375C14.7202 6.875 15 7.15482 15 7.5C15 7.84518 14.7202 8.125 14.375 8.125H8.125V14.375C8.125 14.7202 7.84518 15 7.5 15C7.15482 15 6.875 14.7202 6.875 14.375V8.125H0.625C0.279822 8.125 0 7.84518 0 7.5C0 7.15482 0.279822 6.875 0.625 6.875H6.875V0.625C6.875 0.279822 7.15482 0 7.5 0Z" fill="#0A66C2" />
                            </svg>
                            <p>Ver más</p>
                        </div>
                    </div>

                    <div className='right-side-mid'>
                        {otherUsers.length !== 0 && otherUsers.map((others, i) => {
                            return (
                                <div key={i} className='usuers-right-side'>
                                    <div className='profile-img'>
                                        <img src={others.foto} alt="" />
                                    </div>
                                    <div className='profile-info'>
                                        <h3>{others.nombreApellido}</h3>
                                        <h5>{others.profesion}</h5>
                                        <button><svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.5 0C7.84518 0 8.125 0.279822 8.125 0.625V6.875H14.375C14.7202 6.875 15 7.15482 15 7.5C15 7.84518 14.7202 8.125 14.375 8.125H8.125V14.375C8.125 14.7202 7.84518 15 7.5 15C7.15482 15 6.875 14.7202 6.875 14.375V8.125H0.625C0.279822 8.125 0 7.84518 0 7.5C0 7.15482 0.279822 6.875 0.625 6.875H6.875V0.625C6.875 0.279822 7.15482 0 7.5 0Z" />
                                        </svg>
                                            <p>Seguir</p></button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
                    <div className='footer'>
                        <div className='top-footer'>
                            <div className='footer-banner'></div>
                        </div>
                        <div className='footer-options'>
                            <div className='one'>Acerca de</div>
                            <div className='two'>Accesibilidad</div>
                            <div className='three'>Centro de ayuda</div>
                            <div className='four'>Privacidad y Términos <svg width="12" height="4" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.0488262 0.246604C0.162819 0.0263221 0.440048 -0.0629647 0.668035 0.0471762L6 2.62306L11.332 0.0471762C11.56 -0.0629647 11.8372 0.0263221 11.9512 0.246604C12.0652 0.466885 11.9728 0.734746 11.7448 0.844887L6.2064 3.52049C6.07647 3.58326 5.92353 3.58326 5.7936 3.52049L0.255229 0.844887C0.0272428 0.734746 -0.0651669 0.466885 0.0488262 0.246604Z" fill="black" />
                            </svg>
                            </div>
                            <div className='five'>Opciones de publicidad</div>
                            <div className='six'>Publicidad</div>
                            <div className='seven'>Servicios empresariales <svg width="12" height="4" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.0488262 0.246604C0.162819 0.0263221 0.440048 -0.0629647 0.668035 0.0471762L6 2.62306L11.332 0.0471762C11.56 -0.0629647 11.8372 0.0263221 11.9512 0.246604C12.0652 0.466885 11.9728 0.734746 11.7448 0.844887L6.2064 3.52049C6.07647 3.58326 5.92353 3.58326 5.7936 3.52049L0.255229 0.844887C0.0272428 0.734746 -0.0651669 0.466885 0.0488262 0.246604Z" fill="black" />
                            </svg>
                            </div>
                            <div className='eight'>Descarga la aplicación de LinkedIn</div>
                            <div className='nine'>Más</div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default RightSide