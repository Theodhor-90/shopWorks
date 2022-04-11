import { render, screen } from '@testing-library/react'
import Question from '../Question'
import '@testing-library/jest-dom'

const question = {
    title: 'What is your name',
    fields: [{
        type: 'text',
        name: 'first_name',
        label: 'First Name'
    },
    {
        type: 'dropdown',
        name: 'country',
        label: 'Country',
        options: ['England','Wales']
    }
    ]
}

const fieldsDataProp = [{
    name: 'first_name',
    value: 'Bobby'
},
{
    name: 'country',
    value: 'England'
}
]

it('Should have a title with same text as passed from props', async() => {
    render(<Question question={question} fieldsData={fieldsDataProp} errors={[]}/>);
    const labelElement = screen.getByText(question.title);
    expect(labelElement).toBeInTheDocument();
})

it('Should contain a container with class name question', async() => {
    render(<Question question={question} fieldsData={fieldsDataProp} errors={[]}/>);
    const titleElement = screen.getByText(question.title);
    const containerElement = titleElement.parentNode;
    expect(containerElement).toHaveClass('question')
})

it('Should contain input elements and select elements according to props received', async() => {
    render(<Question question={question} fieldsData={fieldsDataProp} errors={[]}/>);
    const inputElements = screen.getAllByRole('textbox');
    const selectElements = screen.getAllByRole('combobox')
    const inputProps = question.fields.filter(el => el.type==='text')
    const selectProps = question.fields.filter(el => el.type==='dropdown')
    expect(inputElements).toHaveLength(inputProps.length)
    expect(selectElements).toHaveLength(selectProps.length)
})
