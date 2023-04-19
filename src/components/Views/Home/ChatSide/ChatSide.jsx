import React, { useContext, useEffect, useState } from 'react'
//toggle
import ChatToggleButton from './ChatToggleButton';
//context
import { UseApiContext } from '../../../../context/ApiContext';
//style
import "../../../../styles/ViewsStyles/HomeStyles/ChatSide.scss"
//img chat people
import JohnDoe from '../../../../assets/chatPeopleImages/JohnDoe.jpg'
import LissaDoe from '../../../../assets/chatPeopleImages/LissaDoe.jpg'
import JaneSmith from '../../../../assets/chatPeopleImages/JaneSmith.jpg'


function ChatSide() {

    const { userSelect, setUserSelect } = useContext(UseApiContext);

    const [isOpen, setIsOpen] = useState(false)
    const [containerHeight, setContainerHeight] = useState('51px');
    const [selectedChat, setSelectedChat] = useState(null);
    const [autoRes, setAutoRes] = useState(false);

    const bothModalUp = () => {
        toggleChat();
        setContainerHeight(isOpen ? '51px' : '800px');
    }

    const toggleChat = () => {
        handleChatClose();
        setIsOpen(!isOpen)
    }

    const handleChatClick = (chat) => {
        setSelectedChat(chat);
    };

    const handleChatClose = () => {
        setSelectedChat(null);
    };

    //users chat

    const chatList = [
        {
            id: 0,
            name: 'John Doe',
            photo: JohnDoe,
            lastMessage: 'Tienes un mensaje nuevo',
            day: 'Jueves',
            dateMessage: 'Hoy',
        },
        {
            id: 1,
            name: 'Jane Smith',
            photo: JaneSmith,
            lastMessage: 'Tienes un mensaje nuevo',
            day: 'Viernes',
            dateMessage: 'Ayer',
        },
        {
            id: 2,
            name: 'Lissa Doe',
            photo: LissaDoe,
            lastMessage: 'Tienes un mensaje nuevo',
            day: 'Lunes',
            dateMessage: '5 horas',
        },
    ]

    //auto ms

    const handleOnMessage = (e) => {
        if (e.code === 'Enter' || e.code === undefined) {
            if (document.getElementById('idInput').value !== '') {
                let newChats = userSelect.chats;

                newChats[selectedChat].chat.push(
                    {
                        mensaje: document.getElementById('idInput').value,
                        user: userSelect.id,
                    })


                document.getElementById('idInput').focus();
                document.getElementById('idInput').value = '';
                setUserSelect({ ...userSelect, newChats })
                setAutoRes(true)
            }
        }
    }
    useEffect(() => {
        if (autoRes) {
            setAutoRes(false)
            setTimeout(() => {
                let newChats = userSelect.chats;

                newChats[selectedChat].chat.push(
                    {
                        mensaje: 'Esta es una respuesta automática',
                        user: 'zxc',
                    })
                setUserSelect({ ...userSelect, newChats })
            }, 500);
        } else {
            if (document.getElementById('chat-modal-body') !== null) {
                setTimeout(() => {
                    document.getElementById('chat-modal-body').lastChild.scrollIntoView({ behavior: 'smooth' })
                }, 600);
            }
        }
    }, [autoRes])



    return (
        <>
            {userSelect.nombreApellido !== undefined &&
                <div className='div-modal-chat-main'>
                    <div style={{ height: containerHeight }} className='div-modal-chat'>
                        <div className='div-modal-up' onClick={bothModalUp}>
                            <div className='div-sms'>
                                Mensajes
                            </div>
                            <div className='div-svg-chat'>
                                <svg className='svg-chat-hover' width="6" height="6" viewBox="0 0 15 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.73077 3.4C0.774892 3.4 0 2.63888 0 1.7C0 0.761116 0.774892 0 1.73077 0C2.68665 0 3.46154 0.761116 3.46154 1.7C3.46154 2.63888 2.68665 3.4 1.73077 3.4ZM7.5 3.4C6.54412 3.4 5.76923 2.63888 5.76923 1.7C5.76923 0.761116 6.54412 0 7.5 0C8.45588 0 9.23077 0.761116 9.23077 1.7C9.23077 2.63888 8.45588 3.4 7.5 3.4ZM13.2692 3.4C12.3134 3.4 11.5385 2.63888 11.5385 1.7C11.5385 0.761116 12.3134 0 13.2692 0C14.2251 0 15 0.761116 15 1.7C15 2.63888 14.2251 3.4 13.2692 3.4Z" fill="black" />
                                </svg>
                                <svg className='svg-chat-hover' width="10" height="10" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.85 1.48897C15.05 1.69097 15.05 2.01847 14.85 2.22046L13.7821 3.29931L11.734 1.23034L12.802 0.151496C13.0019 -0.0504989 13.3261 -0.0504987 13.5261 0.151497L14.85 1.48897Z" fill="black" />
                                    <path d="M13.058 4.0308L11.0099 1.96183L4.03325 9.00976C3.97704 9.06654 3.93469 9.13576 3.90956 9.21193L3.08566 11.7088C3.01895 11.911 3.20935 12.1034 3.40949 12.036L5.88117 11.2037C5.95657 11.1783 6.02509 11.1355 6.0813 11.0787L13.058 4.0308Z" fill="black" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 13.4483C0 14.3053 0.687709 15 1.53604 15H12.8003C13.6487 15 14.3364 14.3053 14.3364 13.4483V7.24138C14.3364 6.95571 14.1072 6.72414 13.8244 6.72414C13.5416 6.72414 13.3124 6.95571 13.3124 7.24138V13.4483C13.3124 13.7339 13.0831 13.9655 12.8003 13.9655H1.53604C1.25326 13.9655 1.02403 13.7339 1.02403 13.4483V2.06897C1.02403 1.7833 1.25326 1.55172 1.53604 1.55172H8.19222C8.475 1.55172 8.70424 1.32015 8.70424 1.03448C8.70424 0.748818 8.475 0.517241 8.19222 0.517241H1.53604C0.687709 0.517241 0 1.21197 0 2.06897V13.4483Z" fill="black" />
                                </svg>
                                <ChatToggleButton isOpen={isOpen} toggleChat={toggleChat} setContainerHeight={setContainerHeight} />
                            </div>
                        </div>
                        <div className='div-chat-search'>
                            <div className='chat-search'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="chat-svg-search bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                                <input type="text" placeholder='Buscar' name="ChatSearch" id="search-chat" />
                                <svg className='chat-svg-filter' width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 1.4745C11.1716 1.4745 10.5 2.14871 10.5 2.98038C10.5 3.81206 11.1716 4.48627 12 4.48627C12.8284 4.48627 13.5 3.81206 13.5 2.98038C13.5 2.14871 12.8284 1.4745 12 1.4745ZM9.55001 2.47842C9.78164 1.33283 10.7905 0.470581 12 0.470581C13.2095 0.470581 14.2184 1.33283 14.45 2.47842H16.5V3.48235H14.45C14.2184 4.62794 13.2095 5.49019 12 5.49019C10.7905 5.49019 9.78164 4.62794 9.55001 3.48235H0.5V2.47842H9.55001ZM5 6.49411C4.17157 6.49411 3.5 7.16832 3.5 7.99999C3.5 8.83167 4.17157 9.50588 5 9.50588C5.82843 9.50588 6.5 8.83167 6.5 7.99999C6.5 7.16832 5.82843 6.49411 5 6.49411ZM2.55001 7.49803C2.78164 6.35244 3.79052 5.49019 5 5.49019C6.20948 5.49019 7.21836 6.35244 7.44999 7.49803H16.5V8.50195H7.44999C7.21836 9.64755 6.20948 10.5098 5 10.5098C3.79052 10.5098 2.78164 9.64755 2.55001 8.50195H0.5V7.49803H2.55001ZM12 11.5137C11.1716 11.5137 10.5 12.1879 10.5 13.0196C10.5 13.8513 11.1716 14.5255 12 14.5255C12.8284 14.5255 13.5 13.8513 13.5 13.0196C13.5 12.1879 12.8284 11.5137 12 11.5137ZM9.55001 12.5176C9.78164 11.372 10.7905 10.5098 12 10.5098C13.2095 10.5098 14.2184 11.372 14.45 12.5176H16.5V13.5216H14.45C14.2184 14.6672 13.2095 15.5294 12 15.5294C10.7905 15.5294 9.78164 14.6672 9.55001 13.5216H0.5V12.5176H9.55001Z" fill="black" fillOpacity="0.75" />
                                </svg>

                            </div>
                        </div>
                        {isOpen && (
                            <div className="chat-list" onClick={() => {
                                setTimeout(() => {

                                    document.getElementById('chat-modal-body').lastChild.scrollIntoView({ behavior: 'auto' })
                                }, 300);
                            }
                            }>
                                {chatList && chatList.map((chat, id) => {
                                    return (
                                        <div
                                            key={id}
                                            className="chat-list-item"
                                            onClick={() => handleChatClick(chat.id)}
                                        >
                                            <img className='chat-list-image' src={chat.photo} alt="ChatPeople" />
                                            <div className="chat-list-item-content">
                                                <div className='chat-list-item-content-div'>
                                                    <h3 className='chat-list-item-content-div-h3'>{chat.name}</h3>
                                                    <p className='chat-list-item-content-div-p' >{chat.dateMessage}</p>
                                                </div>
                                                <div className='chat-list-item-content-second-div'>
                                                    <p>{chat.lastMessage}</p>
                                                    <svg style={{ marginTop: '5px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0A66C2" className="bi bi-1-circle-fill" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312V4.002Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        )}

                        {selectedChat !== null && userSelect !== undefined && (
                            <>
                                <div className="chat-modal">
                                    <div className="chat-modal-header">
                                        <div className="chat-modal-header-img-name">
                                            <img src={chatList[selectedChat].photo} alt="ChatPeople" />
                                            <h2>{chatList[selectedChat].name}</h2>
                                        </div>
                                        <div className="chat-modal-header-content">
                                            <svg width="25" height="6" viewBox="0 0 25 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.88462 5.66667C1.29149 5.66667 0 4.39814 0 2.83333C0 1.26853 1.29149 0 2.88462 0C4.47774 0 5.76923 1.26853 5.76923 2.83333C5.76923 4.39814 4.47774 5.66667 2.88462 5.66667ZM12.5 5.66667C10.9069 5.66667 9.61538 4.39814 9.61538 2.83333C9.61538 1.26853 10.9069 0 12.5 0C14.0931 0 15.3846 1.26853 15.3846 2.83333C15.3846 4.39814 14.0931 5.66667 12.5 5.66667ZM22.1154 5.66667C20.5223 5.66667 19.2308 4.39814 19.2308 2.83333C19.2308 1.26853 20.5223 0 22.1154 0C23.7085 0 25 1.26853 25 2.83333C25 4.39814 23.7085 5.66667 22.1154 5.66667Z" fill="black" />
                                            </svg>

                                            <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0.263184 3.2C0.263184 1.43269 1.67854 0 3.42447 0H15.2793C16.885 0 18.211 1.21172 18.4138 2.78107L23.3309 0.568912C24.3762 0.0986637 25.5535 0.873154 25.5535 2.03101V13.969C25.5535 15.1268 24.3762 15.9013 23.3309 15.4311L18.4138 13.2189C18.211 14.7883 16.885 16 15.2793 16H3.42447C1.67854 16 0.263184 14.5673 0.263184 12.8V3.2ZM18.4406 11.4801L23.9729 13.969L23.9729 2.03101L18.4406 4.5199V11.4801ZM3.42447 1.6C2.55151 1.6 1.84383 2.31634 1.84383 3.2V12.8C1.84383 13.6837 2.55151 14.4 3.42447 14.4H15.2793C16.1523 14.4 16.86 13.6837 16.86 12.8V3.2C16.86 2.31634 16.1523 1.6 15.2793 1.6H3.42447Z" fill="black" />
                                            </svg>
                                            <svg width="18" height="17" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0.673303 15.8531C0.869179 16.049 1.18676 16.049 1.38264 15.8531L5.49172 11.744L5.49172 14.5205C5.49172 14.7975 5.71629 15.0221 5.9933 15.0221C6.27031 15.0221 6.49487 14.7975 6.49487 14.5205L6.49487 10.5331C6.49487 10.2561 6.27031 10.0315 5.9933 10.0315L2.00595 10.0315C1.72894 10.0315 1.50438 10.2561 1.50438 10.5331C1.50438 10.8101 1.72894 11.0347 2.00595 11.0347L4.78239 11.0347L0.673303 15.1438C0.477426 15.3396 0.477426 15.6572 0.673303 15.8531Z" fill="black" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M16.3794 15.8531C16.1836 16.049 15.866 16.049 15.6701 15.8531L11.561 11.744L11.561 14.5205C11.561 14.7975 11.3364 15.0221 11.0594 15.0221C10.7824 15.0221 10.5579 14.7975 10.5579 14.5205L10.5579 10.5331C10.5579 10.2561 10.7824 10.0315 11.0594 10.0315L15.0468 10.0315C15.3238 10.0315 15.5484 10.2561 15.5484 10.5331C15.5484 10.8101 15.3238 11.0347 15.0468 11.0347L12.2703 11.0347L16.3794 15.1438C16.5753 15.3396 16.5753 15.6572 16.3794 15.8531Z" fill="black" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M16.3794 0.146786C16.1836 -0.0490913 15.866 -0.0490913 15.6701 0.146786L11.561 4.25587L11.561 1.47939C11.561 1.20238 11.3364 0.977813 11.0594 0.977813C10.7824 0.977813 10.5579 1.20238 10.5579 1.47939L10.5579 5.46678C10.5579 5.74379 10.7824 5.96836 11.0594 5.96836L15.0468 5.96835C15.3238 5.96835 15.5484 5.74379 15.5484 5.46678C15.5484 5.18977 15.3238 4.9652 15.0468 4.9652L12.2703 4.96521L16.3794 0.856118C16.5753 0.660241 16.5753 0.342662 16.3794 0.146786Z" fill="black" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0.673303 0.146786C0.869179 -0.0490913 1.18676 -0.0490913 1.38264 0.146786L5.49172 4.25587L5.49172 1.47939C5.49172 1.20238 5.71629 0.977813 5.9933 0.977813C6.27031 0.977813 6.49487 1.20238 6.49487 1.47939L6.49487 5.46678C6.49487 5.74379 6.27031 5.96836 5.9933 5.96836L2.00595 5.96835C1.72894 5.96835 1.50438 5.74379 1.50438 5.46678C1.50438 5.18977 1.72894 4.9652 2.00595 4.9652L4.78239 4.96521L0.673303 0.856118C0.477426 0.660241 0.477426 0.342662 0.673303 0.146786Z" fill="black" />
                                            </svg>
                                            <button className='botton-close-style' onClick={handleChatClose}>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.72163 1.13807C0.46128 0.877722 0.46128 0.455612 0.72163 0.195262C0.981979 -0.0650874 1.40409 -0.0650874 1.66444 0.195262L8.52637 7.05719L15.3883 0.195262C15.6486 -0.0650874 16.0708 -0.0650874 16.3311 0.195262C16.5915 0.455612 16.5915 0.877722 16.3311 1.13807L9.46918 8L16.3311 14.8619C16.5915 15.1223 16.5915 15.5444 16.3311 15.8047C16.0708 16.0651 15.6486 16.0651 15.3883 15.8047L8.52637 8.94281L1.66444 15.8047C1.40409 16.0651 0.98198 16.0651 0.72163 15.8047C0.461281 15.5444 0.461281 15.1223 0.72163 14.8619L7.58356 8L0.72163 1.13807Z" fill="black" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>


                                    <div className="chat-modal-body" >
                                        <div className='day-mess'>
                                            <h3>{chatList[selectedChat].day}</h3>
                                        </div>
                                        <div id="chat-modal-body">
                                            {userSelect.chats[selectedChat].chat.map((c, i) => {

                                                return (
                                                    <div className='div-mess' key={i}>
                                                        {userSelect.id === c.user ?
                                                            <>
                                                                <div className='div-mess-info'>
                                                                    <p className='mess-name-right'>{userSelect.nombreApellido}</p>
                                                                    <img className='img-user-chat' src={userSelect.fotoPersonal} alt="ModalImage" />
                                                                </div>
                                                                <div className='mess-end'>
                                                                    <p className='overflow-visible'>{c.mensaje}</p>
                                                                    <svg style={{ marginTop: '10px', marginLeft: '10px' }} width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M8.68085 0.239215C9.01155 -0.0797383 9.54772 -0.0797383 9.87842 0.239215C10.2051 0.554256 10.2091 1.06264 9.89043 1.38242L5.38293 6.81669C5.37642 6.82453 5.36947 6.83202 5.3621 6.83913C5.03141 7.15808 4.49524 7.15808 4.16454 6.83913L1.17649 3.95721C0.845792 3.63826 0.845792 3.12113 1.17649 2.80218C1.50719 2.48322 2.04336 2.48322 2.37406 2.80218L4.73781 5.08197L8.65839 0.263646C8.66536 0.255076 8.67286 0.246918 8.68085 0.239215Z" fill="black" />
                                                                        <path d="M7.64162 5.83681L8.68085 6.83913C9.01155 7.15808 9.54772 7.15808 9.87842 6.83913C9.88578 6.83202 9.89273 6.82453 9.89924 6.81669L14.4067 1.38242C14.7254 1.06264 14.7214 0.554256 14.3947 0.239215C14.064 -0.0797383 13.5279 -0.0797383 13.1972 0.239215C13.1892 0.246918 13.1817 0.255076 13.1747 0.263646L9.25412 5.08197L8.70613 4.55344L7.64162 5.83681Z" fill="black" />
                                                                    </svg>
                                                                </div>
                                                            </>
                                                            :
                                                            <>
                                                                <div className='second-div-mess-info'>
                                                                    <img src={chatList[selectedChat].photo} alt="ChatPeople" />
                                                                    <p className='mess-name-left'>{chatList[selectedChat].name}</p>
                                                                </div>
                                                                <div className='mess-start'>
                                                                    {c.mensaje}
                                                                    <svg style={{ marginTop: '10px', marginLeft: '10px' }} width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M8.68085 0.239215C9.01155 -0.0797383 9.54772 -0.0797383 9.87842 0.239215C10.2051 0.554256 10.2091 1.06264 9.89043 1.38242L5.38293 6.81669C5.37642 6.82453 5.36947 6.83202 5.3621 6.83913C5.03141 7.15808 4.49524 7.15808 4.16454 6.83913L1.17649 3.95721C0.845792 3.63826 0.845792 3.12113 1.17649 2.80218C1.50719 2.48322 2.04336 2.48322 2.37406 2.80218L4.73781 5.08197L8.65839 0.263646C8.66536 0.255076 8.67286 0.246918 8.68085 0.239215Z" fill="black" />
                                                                        <path d="M7.64162 5.83681L8.68085 6.83913C9.01155 7.15808 9.54772 7.15808 9.87842 6.83913C9.88578 6.83202 9.89273 6.82453 9.89924 6.81669L14.4067 1.38242C14.7254 1.06264 14.7214 0.554256 14.3947 0.239215C14.064 -0.0797383 13.5279 -0.0797383 13.1972 0.239215C13.1892 0.246918 13.1817 0.255076 13.1747 0.263646L9.25412 5.08197L8.70613 4.55344L7.64162 5.83681Z" fill="black" />
                                                                    </svg>
                                                                </div>
                                                            </>
                                                        }
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className='div-send-text-message'>
                                            <div className='div-input-send-text-message'>
                                                <input
                                                    type="text"
                                                    placeholder='Escribe un mensaje...'
                                                    id="idInput"
                                                    onKeyDown={(e) => handleOnMessage(e)}
                                                />
                                            </div>
                                            <div className='div-svg-send-text-message'>
                                                <div>
                                                    <svg width="22" height="20" viewBox="0 0 25 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M24.8983 6.91862C24.6608 7.37754 24.0832 7.56355 23.6083 7.33409L12.5 1.96766L1.39174 7.33409C0.916769 7.56355 0.339207 7.37754 0.101723 6.91862C-0.135763 6.4597 0.0567551 5.90165 0.531727 5.67219L12.07 0.098021C12.3407 -0.0327525 12.6593 -0.0327525 12.93 0.098021L24.4683 5.67219C24.9432 5.90165 25.1358 6.4597 24.8983 6.91862Z" fill="black" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <svg onClick={handleOnMessage} width="22" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.9553 0.885707C20.0481 0.645834 19.9937 0.371861 19.8169 0.189179C19.6401 0.00649693 19.375 -0.0497383 19.1429 0.0462109L0.958998 7.56221L0.957177 7.56296L0.392889 7.7962C0.175171 7.88619 0.0245181 8.09454 0.00271597 8.33579C-0.0190861 8.57705 0.0916317 8.81062 0.289461 8.94071L0.801485 9.2774L0.803856 9.27896L7.04728 13.3845L11.0204 19.836L11.0223 19.8391L11.3477 20.3676C11.4736 20.572 11.6996 20.6864 11.9331 20.6639C12.1666 20.6413 12.3682 20.4857 12.4553 20.2607L19.9553 0.885707ZM17.6638 3.32737L8.29645 13.007L8.02729 12.5699C7.97817 12.4902 7.91272 12.4226 7.83555 12.3718L7.41256 12.0937L16.7799 2.41407L18.2531 1.80516L17.6638 3.32737Z" fill="black" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='div-end-chat'>
                                            <div className='div-end-chat-triple-svg'>
                                                <svg width="22" height="20" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 6.90226C9 8.17293 7.99264 9.20301 6.75 9.20301C5.50736 9.20301 4.5 8.17293 4.5 6.90226C4.5 5.63159 5.50736 4.6015 6.75 4.6015C7.99264 4.6015 9 5.63159 9 6.90226Z" fill="black" />
                                                    <path d="M3 0C1.34315 0 0 1.37344 0 3.06767V18.406C0 20.1002 1.34315 21.4737 3 21.4737H21C22.6569 21.4737 24 20.1002 24 18.406V3.06767C24 1.37344 22.6569 0 21 0H3ZM21 1.53383C21.8284 1.53383 22.5 2.22056 22.5 3.06767V13.0376L16.8354 10.0509C16.5467 9.90328 16.1979 9.96115 15.9697 10.1946L10.4044 15.8853L6.41603 13.1664C6.11856 12.9636 5.72247 13.0037 5.46967 13.2622L1.5 16.8722V3.06767C1.5 2.22056 2.17157 1.53383 3 1.53383H21Z" fill="black" />
                                                </svg>

                                                <svg width="22" height="20" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 4C0 1.79086 1.86692 0 4.16988 0C6.47285 0 8.33977 1.79086 8.33977 4V18.4C8.33977 19.7255 7.21962 20.8 5.83784 20.8C4.45606 20.8 3.33591 19.7255 3.33591 18.4V7.2C3.33591 6.75817 3.70929 6.4 4.16988 6.4C4.63048 6.4 5.00386 6.75817 5.00386 7.2V18.4C5.00386 18.8418 5.37725 19.2 5.83784 19.2C6.29843 19.2 6.67181 18.8418 6.67181 18.4V4C6.67181 2.67452 5.55166 1.6 4.16988 1.6C2.78811 1.6 1.66795 2.67452 1.66795 4V18.4C1.66795 20.6091 3.53487 22.4 5.83784 22.4C8.1408 22.4 10.0077 20.6091 10.0077 18.4V7.2C10.0077 6.75817 10.3811 6.4 10.8417 6.4C11.3023 6.4 11.6757 6.75817 11.6757 7.2V18.4C11.6757 21.4928 9.06199 24 5.83784 24C2.61369 24 0 21.4928 0 18.4V4Z" fill="black" />
                                                </svg>

                                                <svg width="22" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.6758 22.5C6.87679 22.5 2.17578 17.799 2.17578 12C2.17578 6.20101 6.87679 1.5 12.6758 1.5C18.4748 1.5 23.1758 6.20101 23.1758 12C23.1758 17.799 18.4748 22.5 12.6758 22.5ZM12.6758 24C19.3032 24 24.6758 18.6274 24.6758 12C24.6758 5.37258 19.3032 0 12.6758 0C6.04836 0 0.675781 5.37258 0.675781 12C0.675781 18.6274 6.04836 24 12.6758 24Z" fill="black" />
                                                    <path d="M7.10297 14.3508C7.46152 14.1434 7.92031 14.2659 8.12772 14.6245C9.0366 16.1956 10.7335 17.25 12.6758 17.25C14.6181 17.25 16.315 16.1956 17.2239 14.6245C17.4313 14.2659 17.8901 14.1434 18.2487 14.3508C18.6072 14.5582 18.7297 15.017 18.5223 15.3755C17.3564 17.3912 15.1752 18.75 12.6758 18.75C10.1764 18.75 7.99529 17.3912 6.82931 15.3755C6.6219 15.017 6.74443 14.5582 7.10297 14.3508Z" fill="black" />
                                                    <path d="M11.1758 9.75C11.1758 10.9926 10.5042 12 9.67578 12C8.84735 12 8.17578 10.9926 8.17578 9.75C8.17578 8.50736 8.84735 7.5 9.67578 7.5C10.5042 7.5 11.1758 8.50736 11.1758 9.75Z" fill="black" />
                                                    <path d="M17.1758 9.75C17.1758 10.9926 16.5042 12 15.6758 12C14.8474 12 14.1758 10.9926 14.1758 9.75C14.1758 8.50736 14.8474 7.5 15.6758 7.5C16.5042 7.5 17.1758 8.50736 17.1758 9.75Z" fill="black" />
                                                </svg>

                                            </div>
                                            <div className='div-end-chat-one-svg'>
                                                <svg width="22" height="20" viewBox="0 0 25 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.88462 5.66667C1.29149 5.66667 0 4.39814 0 2.83333C0 1.26853 1.29149 0 2.88462 0C4.47774 0 5.76923 1.26853 5.76923 2.83333C5.76923 4.39814 4.47774 5.66667 2.88462 5.66667ZM12.5 5.66667C10.9069 5.66667 9.61538 4.39814 9.61538 2.83333C9.61538 1.26853 10.9069 0 12.5 0C14.0931 0 15.3846 1.26853 15.3846 2.83333C15.3846 4.39814 14.0931 5.66667 12.5 5.66667ZM22.1154 5.66667C20.5223 5.66667 19.2308 4.39814 19.2308 2.83333C19.2308 1.26853 20.5223 0 22.1154 0C23.7085 0 25 1.26853 25 2.83333C25 4.39814 23.7085 5.66667 22.1154 5.66667Z" fill="black" />
                                                </svg>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </>
                        )}
                    </div>
                </div>
            }
        </>


    )
}

export default ChatSide;