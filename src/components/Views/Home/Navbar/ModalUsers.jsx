import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
//styled
import styled from 'styled-components'
//context
import { UseApiContext } from '../../../../context/ApiContext';
//styles
import "../../../../styles/ViewsStyles/HomeStyles/Navbar.scss";


function ModalUsers({ showModal, setShowModal }) {

    const { users, userSelect } = useContext(UseApiContext);
    const { id } = useParams();
    const { collectionByParam } = useContext(UseApiContext)
    


    const handleOnClickModal = async() => {
        await collectionByParam('usuarios', id, '');
    }


    return (
        <>
            {showModal &&
                <Overlay>
                    <ModalContainer>
                        <ModalBody>
                            {userSelect !== undefined &&
                                <>
                                    {
                                        users.length !== 0 && users.map((user, i) => {

                                            return (
                                                <div key={i}>
                                                    <div className='div-users-info'>
                                                        <img src={user.fotoPersonal} className="users-modal-img" alt='Users'></img>
                                                        <h4 className='users-name-desc'>{user.nombreApellido}</h4>
                                                        <div className='users-modal-desc'>{user.profesion}</div>
                                                        <Link
                                                            to={`/home/${user.id}`}
                                                            key={user.id}
                                                        >
                                                            <button onClick={handleOnClickModal(user.id)} className='join-button'>Cambiar de usuario</button>
                                                        </Link>
                                                        <a
                                                            href={user.linkedin}
                                                            target='_blank'
                                                        >
                                                            <button className='go-to-login'>LinkedIn</button>
                                                        </a>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </>
                            }
                        </ModalBody>
                        <ModalFooter onClick={() => setShowModal(!showModal)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </ModalFooter>
                    </ModalContainer>
                </Overlay>
            }
        </>
    )
}

export default ModalUsers;

const Overlay = styled.div` 
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
`;

const ModalContainer = styled.div`
    width: 500px;
    height: 520px;
    background: #FFFF;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, .2) 0px 7px 29px 0px;
    padding: 20px;
    margin-bottom: 400px;
    margin-right: 100px;
`;

const ModalBody = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const ModalFooter = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3 ease all;
    border-radius: 5px;
    color: #1766DC;

    svg{
        width: 100%;
        height: 100%;
    }

    &:hover{
        background: #F2F2F2;
    }
`;