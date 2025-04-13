import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next_icon.png'
import back_icon from '../../assets/back_icon.png'
import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'
import user4 from '../../assets/user4.png'

const Testimonials = () => {
    const slider=useRef(null);
    let tx=0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25; // Corrected this line
        }
        slider.current.style.transform = `translateX(${tx}%)`;    
    }
    
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`; 
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt=''/>
                            <div>
                                <h3>Alejandro Rivera</h3>
                                <span>Slotsherrensvej, Rødovre</span>
                            </div>
                        </div>
                        <p>Jeg valgte Agua totalinterprise til at renovere mit badeværelse, og jeg kunne ikke være mere tilfreds! De håndterede både VVS- og flisearbejdet med en imponerende præcision og professionalisme. Hele processen var gennemsigtig, og de lyttede virkelig til mine ønsker. Resultatet er ikke bare smukt, men også holdbart – jeg kan tydeligt mærke deres fokus på kvalitet. Kan varmt anbefales!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user2} alt=''/>
                            <div>
                                <h3>Cynthia Rivera</h3>
                                <span>Løgstørgade, København Ø</span>
                            </div>
                        </div>
                        <p>Vi brugte Agua totalinterprise til at bygge en ny terrasse i vores have, og de gjorde et fantastisk stykke arbejde. Teamet var altid venligt, pålideligt og professionelle fra start til slut. De overholdt tidsplanen og gik aldrig på kompromis med kvaliteten. Terrassen er nu vores yndlingssted, og vi får så mange komplimenter fra gæster. Tak for en fantastisk oplevelse!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user3} alt=''/>
                            <div>
                                <h3>Ismael Lopez</h3>
                                <span>Sønderlundvej, Herlev</span>
                            </div>
                        </div>
                        <p>Jeg havde brug for akut hjælp med en vandskade, og Agua totalinterprise rykkede hurtigt ud. De håndterede situationen effektivt og professionelt, og hele teamet var ekstremt imødekommende. Det var en stor lettelse at opleve deres ansvarlighed og ekspertise i sådan en presset situation. Deres arbejde har virkelig skabt værdi for os, og jeg vil helt sikkert bruge dem igen i fremtiden!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user4} alt=''/>
                            <div>
                                <h3>Rocio Diaz</h3>
                                <span>Østerhøjvej, Ballerup</span>
                            </div>
                        </div>
                        <p>Agua Total Entreprise leverer virkelig helhedsløsninger, der gør en forskel! De renoverede vores køkken, og resultatet er over al forventning. Kombinationen af VVS-, murer- og tømrerarbejde blev udført perfekt og uden komplikationer. De holdt mig opdateret gennem hele projektet, hvilket gav mig stor tryghed. Det er tydeligt, at de går op i at gøre tingene rigtigt første gang. Fantastisk service og håndværk!</p>
                    </div>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Testimonials