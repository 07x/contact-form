// IMPORT STYLE 
import styles from "./ContactHeader.module.css"

const ContactHeader = () => {

    return (
        <div className={`container ${styles.contact_section}`}>
            <h1 style={{ fontSize: '25px' }}>CONTACT US</h1>
            <p>
                LET’S CONNECT: WE’RE HERE TO HELP, 
                AND WE’D LOVE TO HEAR FROM YOU!
                WHETHER YOU HAVE A QUESTION, COMMENT,
                OR JUST WANT TO CHAT , YOU CAN REACH 
                OR SOCIAL MEDIA. Lorem ipsum dolor, sit amet consectetur adipisicing elit.

            </p>
        </div>

    );
};
export default ContactHeader