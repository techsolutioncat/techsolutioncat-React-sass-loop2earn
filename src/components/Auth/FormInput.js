import React from 'react';

function FormInput(props) {
    // const {appResults} = props.data; // or const appResults = props.appResults;

    return (    
        <div className={props.data.TagClass}>
            <div className='icon'>
                {props.data.svg} 
            </div>
            <input type={props.data.InputType} className={props.data.InputClass} placeholder={props.data.InputPlaceholder}/>
        </div>
    );
};

export default FormInput;