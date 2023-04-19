import React, { useState, useContext } from 'react'
//styles
import "../../../../styles/ViewsStyles/HomeStyles/Navbar.scss";

//context
import { UseApiContext } from '../../../../context/ApiContext';

//white svg
import WhiteHouse from './Svg/White/WhiteHouse';
import WhitePeople from './Svg/White/WhitePeople';
import WhiteBriefcase from './Svg/White/WhiteBriefcase';
import WhiteMessage from './Svg/White/WhiteMessage';
import WhiteBell from './Svg/White/WhiteBell';

// //black svg
import BlackHouse from './Svg/Black/BlackHouse';
import BlackPeople from './Svg/Black/BlackPeople';
import BlackBriefcase from './Svg/Black/BlackBriefcase';
import BlackMessage from './Svg/Black/BlackMessage';
import BlackBell from './Svg/Black/BlackBell';
import ModalUsers from './ModalUsers';


function Navbar() {

    const { userSelect } = useContext(UseApiContext);
    const [selectedSvg, setSelectedSvg] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const svgs = [
        { id: 0, svg: <WhiteHouse />, svgBlack: <BlackHouse /> },
        { id: 1, svg: <WhitePeople />, svgBlack: <BlackPeople /> },
        { id: 2, svg: <WhiteBriefcase />, svgBlack: <BlackBriefcase /> },
        { id: 3, svg: <WhiteMessage />, svgBlack: <BlackMessage /> },
        { id: 4, svg: <WhiteBell />, svgBlack: <BlackBell /> },
    ];


    const handleSvgClick = (id) => {
        if (selectedSvg === id) {
            setSelectedSvg(null);
        } else {
            setSelectedSvg(id);
        }
    }


    return (
        <>
            <header className='navbar'>
                <nav style={{ display: 'flex' }}>
                    <div className="img"></div>
                    <div className='search'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                        <input className='input-search' type="text" placeholder='Buscar' />
                    </div>


                    <div className="icons">
                        {svgs.map(({ id, svg, svgBlack }) => (
                            <div
                                key={id}
                                onClick={() => handleSvgClick(id)}
                                className={selectedSvg === id ? "selected" : ""}
                            >
                                {selectedSvg === id ? svgBlack : svg}
                            </div>
                        ))}
                    </div>

                    <div className='div-user-grid'>
                        <div>
                            {userSelect.id !== undefined &&
                                <div className='user-img'>
                                    <img onClick={() => setShowModal(!showModal)} className='user-img-navbar' src={userSelect.fotoPersonal} alt="user-image" />
                                    <ModalUsers 
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                    />
                                </div>
                            }
                        </div>
                        <div className='spreader-bar'></div>

                        <div className='grid-img'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-grid" viewBox="0 0 16 16">
                                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                            </svg>
                        </div>
                    </div>

                </nav>
            </header>
        </>
    )
}

export default Navbar