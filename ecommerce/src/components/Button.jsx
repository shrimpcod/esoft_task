export const Button = ({ className, onClick, children}) => {
    return(
        <button 
            className={`${`cursor-pointer active:scale-95 transition-all`} ${className}`} 
            onClick={onClick}
        >
            {children}
        </button>
    )
}