import { render, screen } from '@testing-library/react'
import Dropdwon from '../Dropdown' 
import '@testing-library/jest-dom'

const fieldProp = {
    name: 'country',
    label: 'Country',
    options: ['Italy', 'France', 'Germany']
}

const fieldsDataProp = [{
    name: 'country',
    value: 'Germany'
}]

it('Should have a label with same text as passed from props', async() => {
    render(<Dropdwon field={fieldProp} fieldsData={fieldsDataProp} errors={[]}/>);
    const labelElement = screen.getByText('Country');
    expect(labelElement).toBeInTheDocument();
})

it('Should contain a span element inside a label element', async() => {
    render(<Dropdwon field={fieldProp} fieldsData={fieldsDataProp} errors={[]}/>);
    const labelElement = screen.getByText('Country');
    expect(labelElement).toContainHTML('span')
})

it('Should contain an element with display value as passed from props', async() => {
    render(<Dropdwon field={fieldProp} fieldsData={fieldsDataProp} errors={[]}/>);
    const selectElement = screen.getByDisplayValue('Germany');
    expect(selectElement).toBeInTheDocument();
})

it('Should not contain validation error', async() => {
    render(<Dropdwon field={fieldProp} fieldsData={fieldsDataProp} errors={[]}/>);
    const selectElement = screen.getByDisplayValue('Germany');
    expect(selectElement).not.toHaveStyle('border-color: red')
})

it('Should contain validation error', async() => {
    render(<Dropdwon field={fieldProp} fieldsData={fieldsDataProp} errors={[{name: 'country'}]}/>);
    const selectElement = screen.getByDisplayValue('Germany');
    expect(selectElement).toHaveStyle('border-color: red')
})

it('Should contain as many options as passed from props', async() => {
    render(<Dropdwon field={fieldProp} fieldsData={fieldsDataProp} errors={[]}/>);
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(fieldProp.options.length)
})