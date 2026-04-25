export const Select = (props) => {
    return(
        <>
            <select 
                name={props.name}
                id={props.id}
                className={props.style}
            >
                {props.options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </>
    )
}