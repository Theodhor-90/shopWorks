import React from "react";
import TextInput from "./inputs/TextInput";
import Dropdwon from "./inputs/Dropdown";

const Question = (props) => {
/*  
props => 
    question: {
        title: String,
        fields: Array
    },
    fieldsData: Array  => handles User feedback
*/
    return(
        <div className="question">
            <div className="question-title">
                {props.question.title}
            </div>
            {props.question.fields.map((el,index) => {
                return el.type === 'text' ? 
                    <TextInput key={index} field={el} handleChange={props.handleChange} fieldsData={props.fieldsData} errors={props.errors}/> 
                    : 
                    <Dropdwon key={index} field={el} handleChange={props.handleChange} fieldsData={props.fieldsData} errors={props.errors}/>
            })}
        </div>
    )
}

export default Question