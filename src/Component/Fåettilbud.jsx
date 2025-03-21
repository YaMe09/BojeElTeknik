import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'


const FåettilbudContainer = styled.div`
.få{
  background-color: #DAE0E8;
  margin: 25px;
  box-shadow: 0 2px 4px rgb(6, 6, 6);
}
.form-inline {
  display: flex;
  flex-direction: column;
  margin: 15px;
}

.form-inline label {
  margin: 10px 0;
  
}

.form-inline input, .form-inline textarea {
  vertical-align: middle;
  margin: 5px 0;
  padding: 15px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 20px;
  
}

.form-inline button {
  padding: 15px 20px;
  background-color: #47ABD2;
  border: 1px solid #ddd;
  color: white;
  cursor: pointer;
  margin: 10px 0 10px  ;
  font-size: 20px;
  border-radius: 30px;
  float: right;
}

.form-inline button:hover {
  background-color: #B1D3E4;
}


@media (max-width: 800px) {
  .form-inline input, .form-inline textarea {
    margin: 10px 0;
  }
  
  .form-inline {
    flex-direction: column;
    align-items: stretch;
  }
}

`
export default function Fåettilbud() {
  return (
    <div>
      <Header/>
      <FåettilbudContainer>
            <section className="få">
                  <form className="form-inline" action="https://api.web3forms.com/submit" method="POST">
                      <input type="hidden" name="access_key" value="ce601e9e-28e4-4b29-86c4-e9ab8fd56b64"/>
                      <input type="hidden" name="from_name" value="Boje El"></input>
                      <input type="hidden" name="subject" value="Ny formularindsendelse fra din hjemmeside"></input>
                      <label htmlFor="navn">Navn</label>
                      <input type="text" id="navn" placeholder="Dit navn" name="navn" required/>
            
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" placeholder="Din email" name="email" required/>
            
                      <label htmlFor="nummer">Telefon nu.</label>
                      <input type="text" id="nummer" placeholder="Din telefon nu." name="nummer" required/>
            
                      <label htmlFor="adress">Adress</label>
                      <input type="text" id="adress" placeholder="Dit adresse" name="adress" required/>
            
                     <label htmlFor="subject">Besked</label>
                     <textarea  name="message" placeholder="Hvordan kan jeg hjælpe dig?" style={{height:'170px'}} required></textarea>
            
                     <button type="submit">Send</button>
                     <input type="hidden" name="redirect" value="http://localhost:5175/tak" />
                 </form>
              </section>
      </FåettilbudContainer>
      <Footer/>
    </div>
  )
}
