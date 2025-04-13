import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play_icon.png'

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt='' className='about_img' />
            <img src={play_icon} alt='' className='play_icon' onClick={() => { setPlayState(true) }} />
        </div>
        <div className='about-right'>
            <h3>Om AGUA TOTALINTERPRISE</h3>
            <h2>Din pålidelige partner til VVS, murer- og tømrerarbejde</h2>
            <p>Hos Agua Totalinterpriseer vi din totalleverandør, når det gælder kvalitetsarbejde til hjem og erhverv. Vi kombinerer ekspertise inden for VVS, murer- og tømrerfaget for at sikre, at dine projekter bliver løst hurtigt, effektivt og med den højeste faglige standard.</p>
            <p>Vores team af dygtige håndværkere arbejder tæt sammen for at levere helhedsløsninger, der både løser dine udfordringer og skaber værdi i længden. Uanset om du har brug for reparation af vandskader, ny flisebelægning eller en terrasse til din have, står vi klar til at hjælpe – altid med fokus på kvalitet, æstetik og pålidelighed.</p>
            <p>Vi ved, at bygge- og reparationsprojekter kan være en stor beslutning, og derfor prioriterer vi gennemsigtighed, ansvarlighed og et tæt samarbejde med dig som kunde. Vores kerneværdier er rodfæstet i troen på, at godt håndværk skaber tillid – og vi gør det rigtigt første gang.</p>
            <h2>Hvorfor vælge os?</h2>
            <ul>
              <li>Kvalitet og præcision: Vi sikrer holdbare løsninger.</li>
              <li>Pålidelig service: Hurtige og effektive løsninger, når du har brug for det.</li>
              <li>Faglig ekspertise: Alt udført af specialister inden for VVS, murer- og tømrerarbejde.</li>
            </ul>
        </div>
    </div>
  )
}

export default About