import styles from './ErrorNotification.module.css'


let ErrorNotification = (props) => {

    return (
        <div className={styles.errorContainer}>
            <b>{props.errorMessage}</b>
        </div>
    )
}

export default ErrorNotification;