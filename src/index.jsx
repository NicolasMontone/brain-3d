import './style.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Setup from './Setup'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
        <Routes>
            <Route path="/setup" element={<Setup />} />
        </Routes>
    </BrowserRouter>,
)