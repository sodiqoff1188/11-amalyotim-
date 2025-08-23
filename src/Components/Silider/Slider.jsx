import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import './Slider.css'


const Slider = () => {
    return (
        <div className='big-slide'>
            <div className="slider">

                <div className="slidreHead">
                    <h1>Bizning maqolalarimiz</h1>
                    <div className="buttons">
                        <button>left</button>
                        <button>right</button>
                    </div>
                </div>

                <div className="sliding">


                    <div className="card">
                        <div className="top1">
                            <div className="child-card">
                                <h1><span id='span'>19</span><br /> SENTABR</h1>
                            </div>
                        </div>

                        <div className="bottom">
                            <h2>Tugilishdan Oldin Qoshimcha Ovqatlanishni Kuchaytradi</h2>

                            <div className="links">
                                <h5>Muallif: Ali Sodiqov</h5>
                                <FontAwesomeIcon icon={faShareNodes} />
                                {/* icon uchun joy */}
                            </div>

                            <h3>Oziq-ovqat xarid qilishni unutganingizda televizor kechki ovqat pitsa bo'lagi uchun tanlagan qo'shimchalar, bo'yoq... <br />
                            </h3>
                            <span id='Span'>O'qishni davom ettiring</span>


                        </div>
                    </div>



                    <div className="card">
                        <div className="top2">
                            <div className="child-card">
                                <h1><span id='span'>09</span> <br /> SENTABR</h1>
                            </div>
                        </div>

                        <div className="bottom">
                            <h2>Organik Sut Chorvachiligi Yanada Sog'lom Sigirlar Talab Qiladi</h2>

                            <div className="links">
                                <h5>Muallif: Ali Sodiqov</h5>
                                <FontAwesomeIcon icon={faShareNodes} />
                                {/* icon uchun joy */}
                            </div>

                            <h3>Ehtimol, hamkorlik, aloqa va nazorat punktlari bo'lmagan, kelishilgan jarayon bo'lmagan ...
                            </h3>
                            <span id='Span'>O'qishni davom ettiring</span>

                        </div>
                    </div>




                    <div className="card">
                        <div className="top3">
                            <div className="child-card">
                                <h1><span id='span'>19</span> <br /> SENTABR</h1>
                            </div>
                        </div>

                        <div className="bottom">
                            <h2>Organik Sut Chorvachiligi Uchun Sog'lom, Chidamli Sigirlar </h2>

                            <div className="links">
                                <h5>Muallif: Ali Sodiqov</h5>
                                <FontAwesomeIcon icon={faShareNodes} />
                                {/* icon uchun joy */}
                            </div>

                            <h3>Eski tildagi chalkash so'zlardan ko'proq narsani anglatuvchi matnga nisbatan nafrat ko'p...
                            </h3>
                                <span id='Span'>O'qishni davom ettiring</span>

                        </div>
                    </div>


                    <div className="card">
                        <div className="top4    ">
                            <div className="child-card">
                                <h1><span id='span'>28</span> <br /> AVGUST</h1>
                            </div>
                        </div>

                        <div className="bottom">
                            <h2>Organik Sut Chorvachiligi Uchun Qanday Zotlarni Tanlashim Mumkin? </h2>

                            <div className="links">
                                <h5>Muallif: Ali Sodiqov</h5>
                                <FontAwesomeIcon icon={faShareNodes} />
                                {/* icon uchun joy */}
                            </div>

                            <h3>Eski tildagi chalkash so'zlardan ko'proq narsani anglatuvchi matnga nisbatan nafrat ko'p...
                            </h3>

                                <span id='Span'>O'qishni davom ettiring</span>
                            
                        </div>
                    </div>








                </div>


            </div>
        </div>
    )
}

export default Slider