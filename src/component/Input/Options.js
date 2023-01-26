import React from 'react';
import { Field } from 'react-final-form'

const InputCheckbox = (props) => {

    const { required, name, placeholder, lable, options } = props;
    return (<>
        <Field name={name} validate={required}>
            {({ input, meta }) => (
                <>
                    <div className="mb-3">
                        <label for={name}>{lable}</label>
                        <div className={`form-control form-validtion ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""} `} >
                            {options.map((option, index) => {
                                return (
                                    <>
                                        <Field name={name} component="input" type="checkbox" value={option.value} className="form-check-input" >
                                            {({ input, meta }) => (
                                                <div>
                                                    <input {...input} name={name} type="checkbox" id={'checkbox_' + option.value + '_' + index} className="form-check-input" />
                                                    <lable for={'checkbox-' + option.value + '-' + index}> {option.label}</lable>
                                                </div>
                                            )}
                                        </Field>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </>
            )}
        </Field>
    </>);
}

const InputRadio = (props) => {
    const { required, name, placeholder, lable, options } = props;
    return (<>
        <Field name={name} validate={required}>
            {({ input, meta }) => (
                <>
                    <div className="mb-3">
                        <label for={name}>{lable}</label>
                        <div className={`form-control form-validtion ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""} `} >
                            {options.map((option, index) => {
                                return (
                                    <Field name={name} component="input" value={option.value} type="radio" className="form-check-input" >
                                        {({ input, meta }) => (
                                            <div  for={'radio' + option.value + '' + index}>
                                                <input  id={'radio' + option.value + '' + index}  {...input} name={name} type="radio" className="form-check-input" />
                                                <lable  for={'radio' + option.value + '' + index}> {option.label}</lable>
                                            </div>
                                        )}
                                    </Field>
                                )
                            })}
                        </div>
                    </div>
                </>
            )}
        </Field>
    </>);
}

export { InputCheckbox, InputRadio };