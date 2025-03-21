import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import job from '../assets/Job.jpg'

const JobContainer = styled.div`
.jobe{
    margin: 35px;
}
.jobs{
    border: 15px solid #DAE0E8;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgb(6, 6, 6);
   
}
.jobs img{
    width: 100%;
    height: auto;
    
}
`
export default function Job() {
  return (
    <div>
        <Header/>
        <JobContainer>
            <section className="jobe">
                <div className="jobs">
                    <img src={job}/>
                </div> 
            </section>
        </JobContainer>
        <Footer/>
    </div>
  )
}
