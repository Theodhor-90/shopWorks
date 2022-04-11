const TextInput = (props) => {
    /*
    props =>
        field: {
            label: String,
            name: String,
            type: String
        }

        fieldsData: [
            {
                name: String,
                value: "Dinamic input"
            },
            ...
        ]
    */

    // finds the field on which to model the input's value
    const targetField = props.fieldsData.find( el => el.name === props.field.name)
    
    // checks if there is an error related to this field
    const error = props.errors.find(err => err.name === props.field.name)
    
    return(
        <label className="question-text-label">
            <span className="label-container">{props.field.label}</span>
            <input 
                className="question-text-input"
                style={error && {borderColor: 'red'}} 
                type="text" 
                value={targetField.value} 
                onChange={props.handleChange} name={props.field.name}/>
        </label>
    )
}

export default TextInput