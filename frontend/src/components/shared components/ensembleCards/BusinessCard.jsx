import styles from "./BusinessCard.module.css";

const BusinessCard = ({headline, name, instrument}) => {
    return (
        <div className={styles.card}>
            <p className={styles.headline}>{headline}</p>
            <p className={styles.name}>{name}</p>
            <p className={styles.instrument}>{instrument}</p>
        </div>
    );
};

export default BusinessCard;
