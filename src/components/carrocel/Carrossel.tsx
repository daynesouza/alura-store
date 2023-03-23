import styles from './carrossel.module.scss';
import img from '../../assets/img/slider.jpg';

export default function Carrocel(){
    
    return(
        <div className={styles.slider}>
                        
            <div className="slide">
                <img src={img} alt="Sapato"/>
            </div>
           
            <div className="slide">
                <img src={img} alt="Sapato"/>
            </div>
           
            <div className="slide">
                <img src={img} alt="Sapato"/>
            </div>
        </div>
    );
}