import { useState } from 'react';
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import kunde1 from '../assets/kunde1.png'
import kunde2  from '../assets/kunde 2.png'
import kunde3 from '../assets/kunde 3.png'
import kunde4 from '../assets/kunde 4.png'
import kunde5 from '../assets/kunde 5.png'
import kunde6 from '../assets/kunde 6.png'
import kunde7 from '../assets/case7.png'
import kunde8 from '../assets/case8.png'

const CasesContainer = styled.div`
.case{
    margin:15px;
}
.slider-wrapper {
    max-width: 1000px;
    position: relative;
    margin: auto;
    box-sizing:border-box;
    
}
 
.mySlides {
    display: none;
    border:15px solid #DAE0E8;
    box-shadow: 0 2px 4px rgb(6, 6, 6);
}
  
  
.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: #47ABD2;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
}
  
 
.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}
  
  
.prev:hover, .next:hover {
    background-color: #DAE0E8;
}
  
  
.tex {
    color: #f2f2f2;
    font-size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
}
  
  
.numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
}
  
.active, .dot:hover {
    background-color: #007bb5;
}
  
  
.fade {
    animation-name: fade;
    animation-duration: 1.5s;
}
  
@keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}



`
export default function Cases() {
    const [slideIndex, setSlideIndex] = useState(0);

    function plusSlides(n) {
        showDivs(slideIndex + n);
    }

    function showDivs(n) {
        const x = document.getElementsByClassName("mySlides");
        if (n >= x.length) {
            setSlideIndex(0);
            n = 0;
        }
        if (n < 0) {
            setSlideIndex(x.length - 1);
            n = x.length - 1;
        }

        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }

        x[n].style.display = "block";
        setSlideIndex(n);
    }

  return (
    <div>
        <Header/>
        <CasesContainer>
            <div className='case'>
               <div className="slider-wrapper">
                   <img className="mySlides" src={kunde1} style={{ width: '100%', display: 'block' }} /> 
                   <img className="mySlides" src={kunde2} style={{ width: '100%', display: 'none' }} /> 
                   <img className="mySlides" src={kunde3} style={{ width: '100%' , display: 'none'}} /> 
                   <img className="mySlides" src={kunde4} style={{ width: '100%' , display: 'none'}} /> 
                   <img className="mySlides" src={kunde5} style={{ width: '100%' , display: 'none'}} /> 
                   <img className="mySlides" src={kunde6} style={{ width: '100%' , display: 'none'}} /> 
                   <img className="mySlides" src={kunde7} style={{ width: '100%' , display: 'none'}} /> 
                   <img className="mySlides" src={kunde8} style={{ width: '100%' , display: 'none'}} /> 
                   <a className="prev" onClick={() => plusSlides(-1)}>❮</a> 
                   <a className="next" onClick={() => plusSlides(1)}>❯</a> 
               </div> 
            </div>
        </CasesContainer>
        <Footer/>
    </div>
  )
}
