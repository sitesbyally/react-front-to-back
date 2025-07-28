import PropTypes from 'prop-types'

function Header({ text = 'Feedback UI', bgColor = '#ff6a95', textColor='white' }) {
   
   const headerStyles = {
      backgroundColor: bgColor,
      color: textColor,
   }

   return (
      <header style={headerStyles}>
         <div className="container">
            <h2>{ text }</h2>
         </div>
      </header>
   )
}

Header.propTypes = {
   text: PropTypes.string,
   bgColor: PropTypes.string,
   textColor: PropTypes.string,
}


export default Header
