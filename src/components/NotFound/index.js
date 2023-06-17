// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgClassName = isDarkTheme
        ? 'not-found-bg-dark'
        : 'not-found-bg-light'
      const notFoundHeadingTextClassName = isDarkTheme
        ? 'not-found-heading-text-light'
        : 'not-found-heading-text-dark'

      const notFoundTextClassName = isDarkTheme
        ? 'about-text-light'
        : 'about-text-dark'
      return (
        <div className={`about-app-container ${notFoundBgClassName}`}>
          <Navbar />
          <div className="page-container">
            <div className="about-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1 className={`about-heading ${notFoundHeadingTextClassName}`}>
                Lost Your Way?
              </h1>
              <p className={`not-found-content ${notFoundTextClassName}`}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
