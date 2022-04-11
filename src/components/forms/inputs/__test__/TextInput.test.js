import { render, screen } from '@testing-library/react'
import TextInput from '../TextInput'
import '@testing-library/jest-dom'
const fieldProp = {
    name: 'first_name',
    label: 'First Name'
}

const fieldsDataProp = [{
    name: 'first_name',
    value: 'Jhon'
}]

it('Should have a label with same text as passed from props', async() => {
    render(<TextInput field={fieldProp} fieldsData={fieldsDataProp} errors={[]}/>);
    const labelElement = screen.getByText('First Name');
    expect(labelElement).toBeInTheDocument();
})

it('Should contain a span element inside a label element', async() => {
    render(<TextInput field={fieldProp} fieldsData={fieldsDataProp} errors={[]}/>);
    const labelElement = screen.getByText('First Name');
    expect(labelElement).toContainHTML('span')
})

it('Should contain a text input with the value Jhon', async() => {
    render(<TextInput field={fieldProp} fieldsData={fieldsDataProp} errors={[]}/>);
    const inputElement = screen.getByDisplayValue('Jhon');
    expect(inputElement).toBeInTheDocument();
})

it('Should not contain validation error', async() => {
    render(<TextInput field={fieldProp} fieldsData={fieldsDataProp} errors={[]}/>);
    const inputElement = screen.getByDisplayValue('Jhon');
    expect(inputElement).not.toHaveStyle('border-color: red')
})

it('Should contain validation error', async() => {
    render(<TextInput field={fieldProp} fieldsData={fieldsDataProp} errors={[{name: 'first_name'}]}/>);
    const inputElement = screen.getByDisplayValue('Jhon');
    expect(inputElement).toHaveStyle('border-color: red')
})

