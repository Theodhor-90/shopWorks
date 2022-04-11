import React from "react";
import Question from './Question'
import './../../css/form.css'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const simulateApiRequest = () => {
    // simulates an API request
    return {
        "questions": [
          {
            "title": "Tell us about yourself",
            "fields": [
              { "name": "first_name", "label": "First Name", "type": "text" },
              { "name": "last_name", "label": "Last Name", "type": "text" },
              { "name": "email", "label": "Email", "type": "text" },
              { "name": "phone_number", "label": "Phone Number", "type": "text" }
            ]
          },
          {
            "title": "Where do you live?",
            "fields": [
              { "name": "street_address", "label": "Street Address", "type": "text" },
              { "name": "post_code", "label": "Post Code", "type": "text" },
              { "name": "country", "label": "Country", "type": "dropdown", "options": ["Canada", "USA"] },
            ]
          }
        ]
      } 
}

class Form extends React.Component {
    constructor(props){
        super(props)

        /*  The state is structured in 2 parts: 
            questions => needed to create the User's interface
            fieldsData => collects feedback from Users
            the are related with the same property "name"
        */
        this.state = {questions: [], errors: []}

        this.submitForm = this.submitForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    submitForm(e){
        e.preventDefault() // prevents page from reloading after submitting a form
        this.validateForm();
        console.log(this.formatFormOutput()) // prints on console as required, ingoring form validation
    }

    formatOutputKey(keyToFormat){
        // transforms 'first_name' into 'firstName'
        let formattedKey = keyToFormat.split('_')
        if(formattedKey.length > 1){
            formattedKey[1] = capitalizeFirstLetter(formattedKey[1])
        }
        return formattedKey.join('')
    }

    formatFormOutput(){
        /* Transforms the fieldsData array into an object
        [{name: 'first_name',value: 'John'},...] ===> {firstName: 'Jhon', ...}
        */
        const output = {}
        this.state.fieldsData.forEach(field => {
            const formattedKey = this.formatOutputKey(field.name)
            output[formattedKey] = field.value
        })
        return output
    }

    handleChange(e){
        /* Updates a specific field value based on input or selection */
        const oldState = this.state.fieldsData;
        const fieldToUpdate = oldState.find(el => {
           return el.name === e.target.name
        })
        const indexToUpdate = oldState.indexOf(fieldToUpdate)
        oldState[indexToUpdate].value = e.target.value
        this.setState({fieldsData: oldState, errors: []})
    }

    validateForm(){
        /* Validates conditions to apply to fields
           to keep it simple, an error is thrown if any given field is empty before submitting, more logic can be implemented
        */
        const errors = []
        this.state.fieldsData.forEach(field => {
            if(field.value === ''){
                errors.push(
                    {
                        name: field.name
                    }
                )
            }
        })
        if(errors.length > 0){
            this.setState({ errors })
        }
    }

    componentDidMount(){
        const apiResponse =  simulateApiRequest()
        const initalState = []

        /* for each field that requires an input value, create an object structured as follows 
            {
                name: ..., ====> needed
                value: ...,
            }
        
        */
        apiResponse.questions.forEach(question => {
            question.fields.forEach(field => {
                const fieldState = {}
                fieldState.name = field.name
                fieldState.value = ''
                initalState.push(fieldState) // then push it to the array recording all fields values
            })
        })
        this.setState({ questions: apiResponse.questions, fieldsData: initalState})
    }

    render(){
        return(
            <form className="form" onSubmit={this.submitForm}>
                {this.state.questions.length ? this.state.questions.map((el,index) => {
                    return <Question key={index} question={el} handleChange={this.handleChange} fieldsData={this.state.fieldsData} errors={this.state.errors}/>
                })
                : 
                <div className="loading">Loading form</div>}
                <input className="submit-button" type="submit" value="Submit" style={this.state.questions.length ? {} : {display: "none"}}/>
                {this.state.errors.length ? <div className="errors">Please make sure to complete the fields in red!</div> : <div></div>}
            </form>
        )
    }
}

export default Form