import React from 'react'
import './dropdown.css'

const toggleDropdown = (id) => {
    let dropdownContent = document.getElementById('dropdown-content'+ id)
    dropdownContent.classList.toggle('d-none')
}
const Dropdown = ({children, id, position, width}) => {
  return (
    <div className='dropdown'>
        <div className='dropdown-trigger'>
            <button 
                className='btn-caution'
                onClick={() => toggleDropdown(id)}
            >
                Dropdown Trigger
            </button>
        </div>
        <div 
            id={'dropdown-content'+ id}
            className={'dropdown-content ' + 'drop-'+ position}
            style={{
                width: width,
                // right: `${position === 'right' ? '0' : ''}`, 
                // left: `${position === 'left' ? '0' : ''}`, 
            }}
        >
            {/* dp content can be just text, a list with Items. just let them choose what they add here */}
            <ul className='list'>
                <li>About</li>
                <li>Content is way too bi asdasdasdadsg</li>
                <li className='disabled'>Disabled</li>
            </ul>
        </div>
    </div>
  )
}
Dropdown.defaultProps = {
    id: 'example',
    position: "center",
    width: '100%'
}

export default Dropdown