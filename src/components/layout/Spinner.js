import React from 'react';
import spinner from './spinner.gif';

export default () => {
    return (
        <div>
            <img src={spinner} alt="Loading..." style={{width: '50px', margin: 'auto', display: 'block' }} />
        </div>
    )
}
