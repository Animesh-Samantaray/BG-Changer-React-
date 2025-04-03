import React from 'react';


function H(props) {
    return (
        <div className="h-[200px] w-full flex items-center justify-center fixed top-12  text-6xl font-extrabold transition-colors duration-300 ease-in-out" 
        style={{color:props.col}}>
            Change the Background Color !!!
        </div>
    );
}

export default H;
