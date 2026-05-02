export const Dropdown = (props) => {
    return(
        <>
            <select 
                name={props.name}
                id={props.id}
                className={props.className}
                value={props.value}
                onChange={props.onChange}
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