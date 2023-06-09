import React, { useContext } from 'react'
//styles 
import "../../../../styles/ViewsStyles/HomeStyles/MiddleSide.scss"

//coder logo
import CoderLogo from "../../../../assets/coderLogo.png"

//context
import { UseApiContext } from '../../../../context/ApiContext';

function MiddleSide() {

    const { userSelect } = useContext(UseApiContext);

    return (
        <>
            <div className='main-middle'>
                <div className='make-post'>
                    {userSelect.id !== undefined &&
                        <div className='middle-img'>
                            <img className='user-img-middle-top' src={userSelect.fotoPersonal} alt="user-middle-top" />
                        </div>
                    }
                    <div className='middle-searcher'>
                        <input className='input-make-post' type="text" placeholder='Crear publicación' />
                    </div>
                    <div className='subtitles'>
                        <button className='add-photo'>
                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.86184 6.90592C8.86184 8.15708 7.86995 9.17135 6.64638 9.17135C5.42282 9.17135 4.43092 8.15708 4.43092 6.90592C4.43092 5.65476 5.42282 4.64049 6.64638 4.64049C7.86995 4.64049 8.86184 5.65476 8.86184 6.90592Z" fill="#0A66C2" />
                                <path d="M2.95395 0.109619C1.32253 0.109619 0 1.46198 0 3.1302V18.2331C0 19.9013 1.32253 21.2537 2.95395 21.2537H20.6776C22.3091 21.2537 23.6316 19.9013 23.6316 18.2331V3.1302C23.6316 1.46198 22.3091 0.109619 20.6776 0.109619H2.95395ZM20.6776 1.61991C21.4933 1.61991 22.1546 2.29609 22.1546 3.1302V12.9471L16.577 10.0062C16.2927 9.86088 15.9493 9.91786 15.7245 10.1477L10.2447 15.7511L6.31753 13.0739C6.02463 12.8743 5.63462 12.9137 5.38571 13.1683L1.47697 16.7228V3.1302C1.47697 2.29609 2.13824 1.61991 2.95395 1.61991H20.6776Z" fill="#0A66C2" />
                            </svg>
                            <p>Foto</p>
                        </button>
                        <button className='add-video'>
                            <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 15.5039V3.85938C0 2.2516 1.32253 0.948242 2.95395 0.948242H20.6776C22.3091 0.948242 23.6316 2.2516 23.6316 3.85938V15.5039C23.6316 17.1117 22.3091 18.4151 20.6776 18.4151H2.95395C1.32253 18.4151 0 17.1117 0 15.5039ZM10.0296 5.45051C9.80446 5.29206 9.50838 5.27087 9.26241 5.39561C9.01644 5.52036 8.86184 5.77012 8.86184 6.04273V13.3206C8.86184 13.5932 9.01644 13.843 9.26241 13.9677C9.50838 14.0924 9.80446 14.0713 10.0296 13.9128L15.199 10.2739C15.393 10.1373 15.5082 9.91669 15.5082 9.68165C15.5082 9.44662 15.393 9.22605 15.199 9.08943L10.0296 5.45051Z" fill="#057642" />
                            </svg>
                            <p>Vídeo</p>
                        </button>
                        <button className='add-job'> 
                            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.98998 0C8.76665 0 7.77452 1.01176 7.77452 2.26081V3.01491H2.60511C1.38154 3.01491 0.389648 4.02728 0.389648 5.27609V7.36262L11.6346 10.4232C12.0086 10.525 12.4023 10.525 12.7763 10.4232L24.0212 7.36262V5.27609C24.0212 4.02728 23.0293 3.01491 21.8058 3.01491H16.6364V2.26081C16.6364 1.01176 15.6442 0 14.4209 0H9.98998ZM9.98998 1.50746H14.4209C14.829 1.50746 15.1594 1.84608 15.1594 2.26211V3.01491H9.25149V2.26081C9.25149 1.84478 9.58189 1.50746 9.98998 1.50746Z" fill="#9660D6" />
                                <path d="M0.389648 17.3357C0.389648 18.5846 1.38154 19.5969 2.60511 19.5969H21.8058C23.0293 19.5969 24.0212 18.5846 24.0212 17.3357V8.8174L12.3957 11.9815C12.271 12.0154 12.1398 12.0154 12.0152 11.9815L0.389648 8.8174V17.3357Z" fill="#9660D6" />
                            </svg>
                            <p>Empleo</p>
                        </button>
                        <button className='add-article'>
                            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.5851 1.84943C21.9929 1.84943 22.3235 2.17527 22.3235 2.57721V15.6773C22.3235 16.0793 21.9929 16.4051 21.5851 16.4051H2.38441C1.97655 16.4051 1.64592 16.0793 1.64592 15.6773V2.57721C1.64592 2.17527 1.97655 1.84943 2.38441 1.84943H21.5851ZM2.38441 0.39386C1.16084 0.39386 0.168945 1.37138 0.168945 2.57721V15.6773C0.168945 16.8832 1.16084 17.8607 2.38441 17.8607H21.5851C22.8086 17.8607 23.8005 16.8832 23.8005 15.6773V2.57721C23.8005 1.37138 22.8086 0.39386 21.5851 0.39386H2.38441Z" fill="#C25739" />
                                <path d="M4.59987 9.85505C4.59987 9.45311 4.9305 9.12727 5.33835 9.12727H18.6311C19.039 9.12727 19.3696 9.45311 19.3696 9.85505C19.3696 10.257 19.039 10.5828 18.6311 10.5828H5.33835C4.9305 10.5828 4.59987 10.257 4.59987 9.85505ZM4.59987 12.7662C4.59987 12.3642 4.9305 12.0384 5.33835 12.0384H14.2002C14.6081 12.0384 14.9387 12.3642 14.9387 12.7662C14.9387 13.1681 14.6081 13.494 14.2002 13.494H5.33835C4.9305 13.494 4.59987 13.1681 4.59987 12.7662Z" fill="#C25739" />
                                <path d="M4.59987 5.48835C4.59987 5.0864 4.9305 4.76056 5.33835 4.76056H18.6311C19.039 4.76056 19.3696 5.0864 19.3696 5.48835V6.94392C19.3696 7.34586 19.039 7.6717 18.6311 7.6717H5.33835C4.9305 7.6717 4.59987 7.34586 4.59987 6.94392V5.48835Z" fill="#C25739" />
                            </svg>
                            <p>Artículo</p>
                        </button>
                    </div>
                </div>
                {userSelect.id !== undefined &&
                    <>
                        {userSelect.publicaciones.map((post, i) => {
                            return (
                                <div key={i}>

                                    <div className='posted'>
                                        <div className='coder-comment'>
                                            <div className='left-comment'>
                                                <img className="coder-logo" src={CoderLogo} alt="CoderLogo" />
                                                <p><strong>Coderhouse</strong> ha comentado esto</p>
                                            </div>
                                            <div className='right-comment'>
                                                <svg width="20" height="5" viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.30769 4.53333C1.03319 4.53333 0 3.51851 0 2.26667C0 1.01482 1.03319 0 2.30769 0C3.5822 0 4.61538 1.01482 4.61538 2.26667C4.61538 3.51851 3.5822 4.53333 2.30769 4.53333ZM10 4.53333C8.7255 4.53333 7.69231 3.51851 7.69231 2.26667C7.69231 1.01482 8.7255 0 10 0C11.2745 0 12.3077 1.01482 12.3077 2.26667C12.3077 3.51851 11.2745 4.53333 10 4.53333ZM17.6923 4.53333C16.4178 4.53333 15.3846 3.51851 15.3846 2.26667C15.3846 1.01482 16.4178 0 17.6923 0C18.9668 0 20 1.01482 20 2.26667C20 3.51851 18.9668 4.53333 17.6923 4.53333Z" fill="black" fillOpacity="0.75" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className='underline'></div>
                                        <div className='user-info'>
                                            {userSelect.id !== undefined &&
                                                <>
                                                    <div className='user-img-middle-mid'>
                                                        <img className='user-image-middle-mid' src={userSelect.fotoPersonal} alt="user-img-middle-mid" />
                                                    </div>
                                                    <div className='user-middle-desc'>
                                                        <div>
                                                            <h2>{userSelect.nombreApellido}</h2>
                                                            <h4>{userSelect.profesion}</h4>
                                                            <h5 className={`time-h5${i + 1}`}>{post.tiempo}</h5>
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                            <button className='user-right'>
                                                <svg className="follow-svg" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M8 0C8.34518 0 8.625 0.279822 8.625 0.625V6.875H14.875C15.2202 6.875 15.5 7.15482 15.5 7.5C15.5 7.84518 15.2202 8.125 14.875 8.125H8.625V14.375C8.625 14.7202 8.34518 15 8 15C7.65482 15 7.375 14.7202 7.375 14.375V8.125H1.125C0.779822 8.125 0.5 7.84518 0.5 7.5C0.5 7.15482 0.779822 6.875 1.125 6.875H7.375V0.625C7.375 0.279822 7.65482 0 8 0Z" fill="#0A66C2" />
                                                </svg>
                                                <p>Seguir</p>
                                            </button>
                                        </div>
                                        <div className='paragraph'>
                                            <p className={`post-p${i + 1}`}>
                                                {post.texto}
                                            </p>
                                        </div>
                                        <button className='see-more'>
                                            <p>Ver más</p>
                                        </button>
                                        <div className='interactions'>
                                            <div className='left'>
                                                <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.60499 0.0460592C6.56067 -0.192861 7.44792 0.530102 7.51249 1.46585C7.58505 2.51744 7.74189 3.48161 7.94123 4.05676C8.0657 4.4159 8.41985 5.06871 8.98001 5.69469C9.53789 6.31812 10.2629 6.87339 11.1119 7.10496C11.7833 7.28812 12.4688 7.86992 12.4688 8.72015V12.7212C12.4688 13.5656 11.7865 14.185 11.0209 14.2662C9.95139 14.3796 9.457 14.6814 8.95285 14.9891L8.90525 15.0182C8.63248 15.1844 8.32703 15.3675 7.93446 15.5026C7.53785 15.6392 7.07344 15.7205 6.4688 15.7205H2.9688C2.03174 15.7205 1.36984 15.2426 1.03467 14.6561C0.87064 14.369 0.781297 14.0499 0.781297 13.7439C0.781297 13.5916 0.804055 13.4318 0.85813 13.2795C0.656685 13.0172 0.477283 12.7021 0.369454 12.3786C0.259716 12.0494 0.197913 11.6171 0.366194 11.2304C0.297043 11.0997 0.245301 10.9614 0.206785 10.8266C0.129597 10.5564 0.0937967 10.2594 0.0937967 9.9705C0.0937967 9.68161 0.129597 9.38454 0.206785 9.11439C0.241283 8.99364 0.286392 8.87012 0.345118 8.75177C-0.0495033 8.18035 -0.0733137 7.55086 0.111213 7.01847C0.316421 6.42641 0.79242 5.91891 1.31068 5.74615C2.15782 5.46378 3.11409 5.47028 3.82656 5.53505C3.98478 5.54943 4.1335 5.56695 4.26939 5.58555C3.79893 3.58771 4.11179 1.89202 4.33221 1.07601C4.46957 0.567518 4.88114 0.227022 5.34357 0.111414L5.60499 0.0460592ZM2.9688 14.7205H6.4688C6.97949 14.7205 7.33186 14.6525 7.60888 14.5571C7.88993 14.4603 8.11495 14.3287 8.38487 14.1642L8.42478 14.1399C8.97964 13.8014 9.62319 13.4088 10.9154 13.2717C11.2482 13.2365 11.4688 12.9813 11.4688 12.7211V8.72014C11.4688 8.4658 11.2429 8.17723 10.8487 8.0697C9.75333 7.7709 8.87195 7.07352 8.23481 6.36152C7.59994 5.65205 7.17049 4.88662 6.99637 4.38422C6.75376 3.68422 6.58949 2.61627 6.51486 1.53467C6.48986 1.17237 6.15414 0.939535 5.84753 1.01619L5.58611 1.08154C5.4255 1.12169 5.32773 1.22529 5.29761 1.33678C5.07725 2.15255 4.74954 3.98157 5.44314 6.06237C5.50085 6.23549 5.45965 6.42631 5.33566 6.56021C5.2117 6.69406 5.02452 6.74973 4.84753 6.70555L4.84493 6.70492L4.83123 6.70165C4.81849 6.69864 4.79865 6.69406 4.77234 6.68826C4.71968 6.67666 4.64123 6.66022 4.54181 6.64181C4.34256 6.60491 4.06128 6.5605 3.73603 6.53093C3.0735 6.4707 2.27978 6.4772 1.62691 6.69482C1.45142 6.75332 1.17742 6.99582 1.05607 7.34594C0.949536 7.65331 0.970222 8.0148 1.32235 8.36693L1.6759 8.72048L1.32235 9.07404C1.2798 9.11658 1.21805 9.215 1.16831 9.38909C1.1205 9.55643 1.0938 9.75937 1.0938 9.97048C1.0938 10.1816 1.1205 10.3845 1.16831 10.5519C1.21805 10.726 1.2798 10.8244 1.32235 10.8669L1.6759 11.2205L1.32235 11.574C1.27532 11.6211 1.21417 11.7505 1.31814 12.0624C1.41582 12.3554 1.62069 12.6653 1.82235 12.8669L2.1759 13.2205L1.82235 13.574C1.81711 13.5793 1.7813 13.6237 1.7813 13.7439C1.7813 13.8599 1.81695 14.0095 1.90292 14.1599C2.06775 14.4484 2.40586 14.7205 2.9688 14.7205Z" fill="#0A66C2" />
                                                </svg>
                                                <p className={`post-like${i + 1}`}>Coderhouse y {post.megustas} personas más</p>
                                            </div>
                                            <div className='right'>
                                                <p className={`post-comment${i + 1}`}>{post.comentarios} comentarios</p>
                                                <p className={`post-shared${i + 1}`}>{post.compartidos} veces compartido</p>
                                            </div>
                                        </div>
                                        <div className='actions'>
                                            <button className='action-recommend'>
                                                <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.60499 0.0460592C6.56067 -0.192861 7.44792 0.530102 7.51249 1.46585C7.58505 2.51744 7.74189 3.48161 7.94123 4.05676C8.0657 4.4159 8.41985 5.06871 8.98001 5.69469C9.53789 6.31812 10.2629 6.87339 11.1119 7.10496C11.7833 7.28812 12.4688 7.86992 12.4688 8.72015V12.7212C12.4688 13.5656 11.7865 14.185 11.0209 14.2662C9.95139 14.3796 9.457 14.6814 8.95285 14.9891L8.90525 15.0182C8.63248 15.1844 8.32703 15.3675 7.93446 15.5026C7.53785 15.6392 7.07344 15.7205 6.4688 15.7205H2.9688C2.03174 15.7205 1.36984 15.2426 1.03467 14.6561C0.87064 14.369 0.781297 14.0499 0.781297 13.7439C0.781297 13.5916 0.804055 13.4318 0.85813 13.2795C0.656685 13.0172 0.477283 12.7021 0.369454 12.3786C0.259716 12.0494 0.197913 11.6171 0.366194 11.2304C0.297043 11.0997 0.245301 10.9614 0.206785 10.8266C0.129597 10.5564 0.0937967 10.2594 0.0937967 9.9705C0.0937967 9.68161 0.129597 9.38454 0.206785 9.11439C0.241283 8.99364 0.286392 8.87012 0.345118 8.75177C-0.0495033 8.18035 -0.0733137 7.55086 0.111213 7.01847C0.316421 6.42641 0.79242 5.91891 1.31068 5.74615C2.15782 5.46378 3.11409 5.47028 3.82656 5.53505C3.98478 5.54943 4.1335 5.56695 4.26939 5.58555C3.79893 3.58771 4.11179 1.89202 4.33221 1.07601C4.46957 0.567518 4.88114 0.227022 5.34357 0.111414L5.60499 0.0460592ZM2.9688 14.7205H6.4688C6.97949 14.7205 7.33186 14.6525 7.60888 14.5571C7.88993 14.4603 8.11495 14.3287 8.38487 14.1642L8.42478 14.1399C8.97964 13.8014 9.62319 13.4088 10.9154 13.2717C11.2482 13.2365 11.4688 12.9813 11.4688 12.7211V8.72014C11.4688 8.4658 11.2429 8.17723 10.8487 8.0697C9.75333 7.7709 8.87195 7.07352 8.23481 6.36152C7.59994 5.65205 7.17049 4.88662 6.99637 4.38422C6.75376 3.68422 6.58949 2.61627 6.51486 1.53467C6.48986 1.17237 6.15414 0.939535 5.84753 1.01619L5.58611 1.08154C5.4255 1.12169 5.32773 1.22529 5.29761 1.33678C5.07725 2.15255 4.74954 3.98157 5.44314 6.06237C5.50085 6.23549 5.45965 6.42631 5.33566 6.56021C5.2117 6.69406 5.02452 6.74973 4.84753 6.70555L4.84493 6.70492L4.83123 6.70165C4.81849 6.69864 4.79865 6.69406 4.77234 6.68826C4.71968 6.67666 4.64123 6.66022 4.54181 6.64181C4.34256 6.60491 4.06128 6.5605 3.73603 6.53093C3.0735 6.4707 2.27978 6.4772 1.62691 6.69482C1.45142 6.75332 1.17742 6.99582 1.05607 7.34594C0.949536 7.65331 0.970222 8.0148 1.32235 8.36693L1.6759 8.72048L1.32235 9.07404C1.2798 9.11658 1.21805 9.215 1.16831 9.38909C1.1205 9.55643 1.0938 9.75937 1.0938 9.97048C1.0938 10.1816 1.1205 10.3845 1.16831 10.5519C1.21805 10.726 1.2798 10.8244 1.32235 10.8669L1.6759 11.2205L1.32235 11.574C1.27532 11.6211 1.21417 11.7505 1.31814 12.0624C1.41582 12.3554 1.62069 12.6653 1.82235 12.8669L2.1759 13.2205L1.82235 13.574C1.81711 13.5793 1.7813 13.6237 1.7813 13.7439C1.7813 13.8599 1.81695 14.0095 1.90292 14.1599C2.06775 14.4484 2.40586 14.7205 2.9688 14.7205Z" fill="black" fillOpacity="0.75" />
                                                </svg>
                                                <p>Recomendar</p>
                                            </button>
                                            <button className='action-comment'>
                                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.4688 7.37733C17.4688 11.3877 13.6632 14.6388 8.96881 14.6388C8.10101 14.6388 7.26358 14.5277 6.47495 14.3213C5.85461 14.6282 4.42953 15.2181 2.03251 15.6012C1.82106 15.635 1.6592 15.419 1.74273 15.2264C2.11896 14.3586 2.45835 13.2033 2.56171 12.1492C1.25831 10.8731 0.468811 9.20398 0.468811 7.37733C0.468811 3.36692 4.27439 0.115845 8.96881 0.115845C13.6632 0.115845 17.4688 3.36692 17.4688 7.37733ZM5.25006 4.26526C4.95666 4.26526 4.71881 4.49748 4.71881 4.78394C4.71881 5.0704 4.95666 5.30262 5.25006 5.30262H12.6876C12.981 5.30262 13.2188 5.0704 13.2188 4.78394C13.2188 4.49748 12.981 4.26526 12.6876 4.26526H5.25006ZM5.25006 6.85865C4.95666 6.85865 4.71881 7.09087 4.71881 7.37733C4.71881 7.66379 4.95666 7.89601 5.25006 7.89601H12.6876C12.981 7.89601 13.2188 7.66379 13.2188 7.37733C13.2188 7.09087 12.981 6.85865 12.6876 6.85865H5.25006ZM5.25006 9.45204C4.95666 9.45204 4.71881 9.68426 4.71881 9.97072C4.71881 10.2572 4.95666 10.4894 5.25006 10.4894H9.50006C9.79346 10.4894 10.0313 10.2572 10.0313 9.97072C10.0313 9.68426 9.79346 9.45204 9.50006 9.45204H5.25006Z" fill="black" fillOpacity="0.75" />
                                                </svg>
                                                <p>Comentar</p>
                                            </button>
                                            <button className='action-share'>
                                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.6051 5.21378C14.8043 5.01852 14.8043 4.70194 14.6051 4.50668L10.5234 0.506676C10.3242 0.311414 10.0012 0.311414 9.80191 0.506676C9.60266 0.701939 9.60266 1.01852 9.80191 1.21378L13.0126 4.36023H3.01982C1.61093 4.36023 0.468802 5.47952 0.468802 6.86023V14.8602C0.468802 15.1364 0.697228 15.3602 0.979007 15.3602C1.26078 15.3602 1.48921 15.1364 1.48921 14.8602V6.86023C1.48921 6.0318 2.17449 5.36023 3.01982 5.36023H13.0126L9.80191 8.50668C9.60266 8.70194 9.60266 9.01852 9.80191 9.21378C10.0012 9.40905 10.3242 9.40905 10.5234 9.21378L14.6051 5.21378Z" fill="black" fillOpacity="0.75" />
                                                </svg>
                                                <p>Compartir</p>
                                            </button>
                                            <button className='action-send'>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.2382 1.00308C15.3056 0.82898 15.2661 0.630128 15.1378 0.497537C15.0095 0.364945 14.817 0.324129 14.6485 0.39377L1.45056 5.84893L1.44924 5.84948L1.03968 6.01876C0.881657 6.08408 0.772312 6.2353 0.756488 6.4104C0.740664 6.58551 0.821023 6.75503 0.964609 6.84945L1.33624 7.09383L1.33796 7.09496L5.86948 10.0748L8.75316 14.7573L8.75454 14.7596L8.99075 15.1431C9.08213 15.2915 9.24618 15.3745 9.41564 15.3582C9.5851 15.3418 9.73144 15.2289 9.79465 15.0656L15.2382 1.00308ZM13.575 2.77525L6.77613 9.80079L6.58077 9.48357C6.54513 9.42569 6.49762 9.3766 6.44161 9.33976L6.1346 9.13788L12.9335 2.11237L14.0027 1.67042L13.575 2.77525Z" fill="black" fillOpacity="0.75" />
                                                </svg>
                                                <p>Enviar</p>
                                            </button>
                                        </div>
                                        <div className='add-comment'>
                                            <input className='input-add-comment' type="text" placeholder='Agregar un comentario' />
                                            <div className='actions-comment'>
                                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 19.25C5.16751 19.25 1.25 15.3325 1.25 10.5C1.25 5.66751 5.16751 1.75 10 1.75C14.8325 1.75 18.75 5.66751 18.75 10.5C18.75 15.3325 14.8325 19.25 10 19.25ZM10 20.5C15.5228 20.5 20 16.0228 20 10.5C20 4.97715 15.5228 0.5 10 0.5C4.47715 0.5 0 4.97715 0 10.5C0 16.0228 4.47715 20.5 10 20.5Z" fill="#404040" />
                                                    <path d="M5.35599 12.459C5.65478 12.2862 6.03711 12.3883 6.20995 12.687C6.96735 13.9964 8.38145 14.875 10 14.875C11.6186 14.875 13.0327 13.9964 13.7901 12.687C13.963 12.3883 14.3453 12.2862 14.6441 12.459C14.9429 12.6318 15.045 13.0142 14.8721 13.313C13.9005 14.9926 12.0829 16.125 10 16.125C7.9172 16.125 6.09959 14.9926 5.12794 13.313C4.9551 13.0142 5.0572 12.6318 5.35599 12.459Z" fill="#404040" />
                                                    <path d="M8.75 8.625C8.75 9.66053 8.19036 10.5 7.5 10.5C6.80964 10.5 6.25 9.66053 6.25 8.625C6.25 7.58947 6.80964 6.75 7.5 6.75C8.19036 6.75 8.75 7.58947 8.75 8.625Z" fill="#404040" />
                                                    <path d="M13.75 8.625C13.75 9.66053 13.1904 10.5 12.5 10.5C11.8096 10.5 11.25 9.66053 11.25 8.625C11.25 7.58947 11.8096 6.75 12.5 6.75C13.1904 6.75 13.75 7.58947 13.75 8.625Z" fill="#404040" />
                                                </svg>
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.5 6.30461C7.5 7.36351 6.66053 8.22191 5.625 8.22191C4.58947 8.22191 3.75 7.36351 3.75 6.30461C3.75 5.24572 4.58947 4.38732 5.625 4.38732C6.66053 4.38732 7.5 5.24572 7.5 6.30461Z" fill="#404040" />
                                                    <path d="M2.5 0.552734C1.11929 0.552734 0 1.69727 0 3.10913V15.8911C0 17.3029 1.11929 18.4475 2.5 18.4475H17.5C18.8807 18.4475 20 17.3029 20 15.8911V3.10913C20 1.69727 18.8807 0.552734 17.5 0.552734H2.5ZM17.5 1.83093C18.1904 1.83093 18.75 2.4032 18.75 3.10913V11.4174L14.0295 8.92849C13.7889 8.80547 13.4983 8.85369 13.3081 9.04821L8.67036 13.7905L5.34669 11.5247C5.0988 11.3558 4.76872 11.3892 4.55806 11.6046L1.25 14.6129V3.10913C1.25 2.4032 1.80964 1.83093 2.5 1.83093H17.5Z" fill="#404040" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className='relevant'>
                                            <p>Más relevantes</p>
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.22123 7.39624L0.258049 1.71805C-0.327404 1.04825 0.147757 0 1.03682 0H10.9632C11.8522 0 12.3274 1.04825 11.742 1.71805L6.77877 7.39624C6.36649 7.86792 5.63351 7.86792 5.22123 7.39624Z" fill="black" />
                                            </svg>
                                        </div>
                                        <div className='coder-comment-footer'>
                                            <div className='coder-logo-2'>
                                                <img src={CoderLogo} alt="CoderLogo" />
                                            </div>
                                            <div className='coder-text'>
                                                <h3>Coderhouse</h3>
                                                <h5>Escuela digital 100% en vivo</h5>
                                                <p className='coder-text-p'>Lorem ipsum dolor zsit t. Qui vero praesentium id sapiente quas te quaeraperioreem perspiciatis distinctio?</p>
                                            </div>
                                        </div>
                                        <div className='recommend'>
                                            <div className='recommend-div'>
                                                <p className='p-recommend'>Recomendar</p>
                                            </div>
                                            <div className='svg-div'>
                                                <svg width="13" height="16" viewBox="0 0 13 16" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.60501 0.0460592C6.56069 -0.192861 7.44794 0.530102 7.51251 1.46585C7.58507 2.51744 7.7419 3.48161 7.94124 4.05676C8.06571 4.4159 8.41986 5.06871 8.98002 5.69469C9.5379 6.31812 10.263 6.87339 11.1119 7.10496C11.7833 7.28812 12.4688 7.86992 12.4688 8.72015V12.7212C12.4688 13.5656 11.7865 14.185 11.0209 14.2662C9.9514 14.3796 9.45701 14.6814 8.95287 14.9891L8.90527 15.0182C8.63249 15.1844 8.32705 15.3675 7.93447 15.5026C7.53787 15.6392 7.07345 15.7205 6.46881 15.7205H2.96881C2.03175 15.7205 1.36986 15.2426 1.03469 14.6561C0.870655 14.369 0.781312 14.0499 0.781312 13.7439C0.781312 13.5916 0.80407 13.4318 0.858145 13.2795C0.6567 13.0172 0.477299 12.7021 0.36947 12.3786C0.259731 12.0494 0.197928 11.6171 0.366209 11.2304C0.297058 11.0997 0.245317 10.9614 0.2068 10.8266C0.129612 10.5564 0.093812 10.2594 0.093812 9.9705C0.093812 9.68161 0.129612 9.38454 0.2068 9.11439C0.241299 8.99364 0.286407 8.87012 0.345133 8.75177C-0.0494881 8.18035 -0.0732985 7.55086 0.111228 7.01847C0.316436 6.42641 0.792436 5.91891 1.3107 5.74615C2.15783 5.46378 3.11411 5.47028 3.82658 5.53505C3.9848 5.54943 4.13351 5.56695 4.2694 5.58555C3.79895 3.58771 4.1118 1.89202 4.33223 1.07601C4.46958 0.567518 4.88116 0.227022 5.34359 0.111414L5.60501 0.0460592ZM2.96881 14.7205H6.46881C6.97951 14.7205 7.33187 14.6525 7.60889 14.5571C7.88994 14.4603 8.11496 14.3287 8.38488 14.1642L8.42479 14.1399C8.97965 13.8014 9.62321 13.4088 10.9154 13.2717C11.2483 13.2365 11.4688 12.9813 11.4688 12.7211V8.72014C11.4688 8.4658 11.2429 8.17723 10.8487 8.0697C9.75335 7.7709 8.87196 7.07352 8.23482 6.36152C7.59996 5.65205 7.17051 4.88662 6.99638 4.38422C6.75377 3.68422 6.58951 2.61627 6.51488 1.53467C6.48988 1.17237 6.15415 0.939535 5.84754 1.01619L5.58612 1.08154C5.42552 1.12169 5.32774 1.22529 5.29762 1.33678C5.07726 2.15255 4.74955 3.98157 5.44315 6.06237C5.50086 6.23549 5.45966 6.42631 5.33567 6.56021C5.21172 6.69406 5.02453 6.74973 4.84754 6.70555L4.84495 6.70492L4.83124 6.70165C4.8185 6.69864 4.79867 6.69406 4.77235 6.68826C4.7197 6.67666 4.64125 6.66022 4.54183 6.64181C4.34258 6.60491 4.06129 6.5605 3.73604 6.53093C3.07351 6.4707 2.27979 6.4772 1.62693 6.69482C1.45144 6.75332 1.17744 6.99582 1.05608 7.34594C0.949552 7.65331 0.970237 8.0148 1.32237 8.36693L1.67592 8.72048L1.32237 9.07404C1.27982 9.11658 1.21807 9.215 1.16832 9.38909C1.12051 9.55643 1.09381 9.75937 1.09381 9.97048C1.09381 10.1816 1.12051 10.3845 1.16832 10.5519C1.21807 10.726 1.27982 10.8244 1.32237 10.8669L1.67592 11.2205L1.32237 11.574C1.27533 11.6211 1.21418 11.7505 1.31815 12.0624C1.41584 12.3554 1.6207 12.6653 1.82236 12.8669L2.17592 13.2205L1.82237 13.574C1.81712 13.5793 1.78131 13.6237 1.78131 13.7439C1.78131 13.8599 1.81697 14.0095 1.90293 14.1599C2.06776 14.4484 2.40587 14.7205 2.96881 14.7205Z" />
                                                </svg>
                                                <p>1</p>
                                            </div>
                                            <div className='answer-div'>
                                                <p className='p-recommend'>Responder</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            )
                        })}


                    </>
                }
            </div>

        </>
    )
}

export default MiddleSide;