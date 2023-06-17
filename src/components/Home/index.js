// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'
      const aboutImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const aboutTextClassName = isDarkTheme
        ? 'about-text-light'
        : 'about-text-dark'
      return (
        <div className={`about-app-container ${aboutBgClassName}`}>
          <Navbar />
          <div className="page-container">
            <div className="about-container">
              <img className="image" src={aboutImageUrl} alt="home" />
              <h1 className={`about-heading ${aboutTextClassName}`}>Home</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
