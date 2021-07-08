import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const len = slides.length;

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    const goNext = () => {
        setCurrent(current === len - 1 ? 0 : current + 1);
    }

    const goPrev = () => {
        setCurrent(current === 0 ? len - 1 : current - 1); 
    }

    console.log(current)
    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow"  onClick={goPrev}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={goNext} />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index===current ? 'slide active' : 'slide'} key={index}>
                        {
                            (index === current) && (<img src={slide.image} alt="elephant" className='image'/>)
                        }
                        
                    </div>
                    
                )
            })}
            
        </section>
    )
}

export default ImageSlider;
