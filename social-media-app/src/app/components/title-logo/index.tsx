import styles from './TitleLogoProps.module.css';

type TitleLogoProps = {
    title:string,
    // href:string;
}
export default function TitleLogo({title}:TitleLogoProps){
    return <span className={styles.mainTitle}>{title}</span>
}