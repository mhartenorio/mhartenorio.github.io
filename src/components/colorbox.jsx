import React from 'react';
import './colorbox.css';


/**
 * Define UserList, a React componment of CS142 project #5
 */
class ColorBox extends React.Component {
  render() {
    return (
      <div className='colorContainer'>
        <div className='colorBoxes'>
            <div className='colorBox1'></div>
            <div className='colorBox2'></div>
            <div className='colorBox3'></div>
            <div className='colorBox4'></div>
            <div className='colorBox5'></div>
        </div>
      </div>
    );
  }
}

export default ColorBox;
