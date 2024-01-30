import styles from "./Navigation.module.css"

const Navigation = () => {
    
    return (
        <nav className={`${styles.navigation} container`}>
            <div className="logo">
                <img src="./images/nav_logo.png" alt="Do Some Code" />
            </div>
            <ul>
                <li href=""> Home</li>
                <li href=""> About</li>
                <li href=""> Contact</li>
            </ul>
        </nav>
    );
};
export default Navigation