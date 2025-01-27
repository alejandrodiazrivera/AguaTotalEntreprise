import React from 'react'
import './Contact.css'
import message_icon from '../../assets/message_icon.png'
import mail_icon from '../../assets/mail_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import location_icon from '../../assets/location_icon.png'
import white_arrow from '../../assets/white_arrow.png'

const Contact = () => {
    
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "af227498-fdae-4a37-a4e5-f019354174c8");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
        <h3>Send en besked <img src={message_icon} alt='' /></h3>
        <p>Vil du have et uforpligtende tilbud på dit projekt? Kontakt os i dag – vi vender tilbage inden for 24 timer! Ingen projekter er for små eller store – vi står klar til at hjælpe.</p>
        <ul>
            <li><img src={mail_icon} alt=''/> Aguasservice75@gmail.com</li>
            <li><img src={phone_icon} alt=''/> (+45) 28 49 34 81</li>
            <li><img src={location_icon} alt=''/> Østerhøjvej 28, 2750 Ballerup, Danmark</li>
        </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Dit navn</label>
                <input type='text' name='name' placeholder='Indtast dit navn' required/>
                <label>Telefonnummer</label>
                <input type='tel' name='phone' placeholder='Indtast dit telefonnummer' required/>
                <label>Skriv din besked her</label>
                <textarea name='message' rows="6" placeholder='Indtast besked' required></textarea>
                <button type='submit' className='btn dark-btn'>Indsend nu<img src={white_arrow} alt=''/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact