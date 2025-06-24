import './style.css'
import { createHeader } from './components/Header/header'
import './components/Header/header.css'
import { renderHomePage } from './pages/HomePage/homePage'
import './pages/HomePage/homePage.css'
import { createFooter } from './components/Footer/footer'
import './components/Footer/footer.css'

const app = document.querySelector<HTMLDivElement>('#app')!

const header = createHeader()
document.body.prepend(header)

renderHomePage(app)

const footer = createFooter()
document.body.appendChild(footer)
