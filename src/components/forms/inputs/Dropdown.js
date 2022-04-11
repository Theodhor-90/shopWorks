const Dropdwon = (props) => {
    /*
    props =>
        field: {
            label: String,
            name: String,
            type: String,
            options: [String,...]
        }

        fieldsData: [
            {
                name: String,
                value: "Dinamic selected option"
            },
            ...
        ]
    */    

    // finds the field on which to model the select's value
    const targetField = props.fieldsData.find( el => el.name === props.field.name)

    // checks if there is an error related to this field
    const error = props.errors.find(err => err.name === props.field.name)

    // if no country has been selected yet, an extra option 'Please select' will be shown
    const isCountrySelected = () => {
        return props.field.options.includes(targetField.value) ? false : true
    }


    return(
        <label className="question-select-label">
            <span className="label-container">{props.field.label}</span>

            <select 
                value={targetField.value} 
                onChange={props.handleChange} 
                name={props.field.name} 
                className="question-select-input"
                style={error && {borderColor: 'red'}}>

                {isCountrySelected() && <option value={null}>Please select</option>}   
                {props.field.options.map((el,index) => {
                    return <option value={el} key={index}>{el}</option>
                })}

            </select>
        </label>
    )
}

export default Dropdwon