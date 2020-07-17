import React, { useState } from 'react';

const Collapsible = (props) => {
    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    }
    return <>
        <button onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} style={props.className === 'outerCollapsible' && !hover ? { backgroundColor: '#002e63' } : null} className="collapsible btn btn-primary" onClick={handleClick}>{props.title}</button>
        {
            open ?
                <div className="content" >
                    <p>{props.content}</p>
                </div>
                : null
        }
    </>
}

export default Collapsible;