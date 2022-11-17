import styles from "./BusinessCard.module.css";

const BusinessCard = ({name, job, website}) => {
    return (
        <div className={styles.card}>
            <p className={styles.name}>{name}</p>
            <p className={styles.jobTitle}>{job}</p>
            <p className={styles.website}>{website}</p>
        </div>
    );
};

export default BusinessCard;
