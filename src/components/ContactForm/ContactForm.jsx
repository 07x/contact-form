// Import Styles 
import styles from "./Contact.module.css"
import Button from "../Button/Button";

import { IoMdCall } from "react-icons/io";
import { MdMessage } from "react-icons/md"
import { IoIosMailUnread } from "react-icons/io";
import { useState } from "react";



const ContactForm = () => {

    // USING USE STATE 
    const [name,setName]   = useState(" ");
    const [email,setEmail] = useState(" ")
    const [text,setText]   = useState(" ") 

    // let name = "Abhinav";
    // let email = "abhinavsrivastav421@gmail.com"; 
    // let text = "Hello There I am good";
    

    // FUNC 
    const onSubmit = (event) => {
       event.preventDefault();

       setName(event.target[0].value)
       setEmail(event.target[1].value)
       setText(event.target[2].value)

    };

    return (
        <section className={styles.container}>

            {/* LEFT FORM SIDE */}

            <div className={styles.contact_form}>
                <div className={styles.top_buttons}>

                    {/* SUPPORT BUTTON */}
                    <Button
                        text=" VIA SUPPORT CHAT"
                        icon={<MdMessage fontSize="24px" />} />

                    {/* VIA CALL BUTTON */}
                    <Button
                        text=" VIA CALL"
                        icon={<IoMdCall fontSize="24px" />} />

                </div>
                
                
                <Button isOutline={true} text="VIA EMAIL FORM" icon={<IoIosMailUnread fontSize="24px" />} />

                <form onSubmit={onSubmit}>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>

                    <div className={styles.form_control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                    </div>

                    <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows="5" />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "end",
                        }}
                    >
                        <Button text="SUBMIT BUTTON" />
                    </div>
                </form>
            </div>
            


                {/* // RIGHT SIDE */}
                <div className={styles.contact_image}>
                    <img src="./images/Service24_7.svg" alt="service-image" />
                   
                    <hr />
                    <div>
                       |  {name} <br /> 

                       |  {email} <br />
                       
                       |  {text}  <br />

                    </div>

                </div>
                

        </section>
    );
};
export default ContactForm