import React from 'react'; 
import './footer.css';

export default (props) => {
    return (
        <footer className="footer">
            {props.info}
        </footer>
    )
}