import styles from "./World.module.css";
export default function World(){
    const textStyle = {
        fontSize:"36px",
        textDecoration:"underline",
        color:"blue"
    }
    return(
        <div>
            <div style={textStyle}>World</div>
            <div className={styles.box}>Worldbox</div>
        </div>
    );
}