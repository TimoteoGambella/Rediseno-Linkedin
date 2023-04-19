import React from 'react';
import "../../../../styles/ViewsStyles/HomeStyles/ChatSide.scss"

const ChatToggleButton = ({ isOpen, toggleChat }) => {

    const handleToggle = () => {
        toggleChat();
      };

    return (
        <button className='svg-chat-hover' onClick={handleToggle}>
            {isOpen ? <svg width="15" height="5" viewBox="0 0 15 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.939 4.69175C14.7965 4.9671 14.4499 5.07871 14.165 4.94103L7.5 1.72117L0.835043 4.94103C0.55006 5.0787 0.203524 4.9671 0.0610333 4.69174C-0.081459 4.41639 0.0340529 4.08157 0.319036 3.94389L7.242 0.599388C7.40441 0.520924 7.59559 0.520924 7.758 0.599388L14.681 3.94389C14.9659 4.08157 15.0815 4.41639 14.939 4.69175Z" fill="black" />
            </svg> :
                <svg width="15" height="5" viewBox="0 0 15 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.0610327 0.848782C0.203524 0.57343 0.55006 0.461821 0.835043 0.599498L7.5 3.81936L14.165 0.599498C14.4499 0.461821 14.7965 0.57343 14.939 0.848782C15.0815 1.12413 14.9659 1.45896 14.681 1.59664L7.758 4.94114C7.59559 5.0196 7.40441 5.0196 7.242 4.94114L0.319036 1.59664C0.0340534 1.45896 -0.0814587 1.12413 0.0610327 0.848782Z" fill="black" />
                </svg>
            }
        </button>
    );
};

export default ChatToggleButton;
