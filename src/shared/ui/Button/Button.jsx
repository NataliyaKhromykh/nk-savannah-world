export const Button = ({ text, onClick }) => {
    return (
        <button
            type="button"
            className={styles.btn}
            onClick={onClick}
        >
            {text}
        </button>
    )
};