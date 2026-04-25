export const Button = (props) => {
    return(
        <button 
            className={props.style} onClick={props.onClick}
        >
            {props.name}
        </button>
    )
}