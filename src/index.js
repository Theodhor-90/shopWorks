import React from 'react'
import { createRoot } from 'react-dom/client';
import Form from './components/forms/Form'
import './css/index.css';

const container = document.getElementById('root');
const root = createRoot(container);

class App extends React.Component {
    render(){
        return(
            <div className='app'>
                <Form />
            </div>
        )
    }
}

root.render(<App/>);