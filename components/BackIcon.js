import React from 'react';


const BackIcon = ({ className }) => {

    return (
        <svg 
            className={className} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            width="20" 
            height="20"
        >
            <path 
                fill="none" 
                d="M0 0h24v24H0z"
            />
            <path 
                d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"
                className="fill-current text-custom-white"
            />
            </svg>
    );
}

export default BackIcon;
