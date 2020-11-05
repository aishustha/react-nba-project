import React from 'react';
import formfieldStyle from './formfields.module.scss';


const FormFields = ({formdata, change, id}) => {

    const showError = () => {
        let errorMessage = null;

        if(formdata.validation && !formdata.valid) {
            errorMessage = (

                //jsx
                <div className={formfieldStyle.labelError}>
                    {formdata.validationMessage}
                </div>
            )
        }

        return errorMessage;
    }

    const renderTemplate = () => {

        let formTemplate = null;

        //match input and render something
        //checking formdata
        switch(formdata.element) {
            case('input'):
                formTemplate = (
                    <div>
                        <input 
                            {...formdata.config}
                            value={formdata.value}
                            onBlur={(event) => change({event, id, blur: true})}

                            //catch and event and run a function and change function receive event, id , blur
                            onChange={(event) => change({event, id, blur: false})}

                        />

                        {showError()}
                    </div>
                )
                break;

            default:
                formTemplate = null;
        }

        return formTemplate;
    }
    return (
        <div>
            { renderTemplate()}
        </div>
    )
}

export default FormFields;