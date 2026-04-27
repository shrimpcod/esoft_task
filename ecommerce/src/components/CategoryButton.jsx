export const CategoryButton = ({children, isActive, className, onClick}) => {
    return(
        <button
            onClick={onClick}
            className={`${isActive ? `text-lg md:text-sm text-black font-bold border-b-2 border-b-black` : `text-gray-400 text-sm`} ${className || ''}`}
        >
            {children}
        </button>
    )
}