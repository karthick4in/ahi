import React from 'react';
import { Form, Field } from 'react-final-form'
import { Outlet, Link, useNavigate } from "react-router-dom";
import { InputSelect, InputText, InputMultiSelect, InputCheckbox, InputRadio, InputTextarea } from '../../component/Input/';
import { required, mustBeNumber, minValue, maxValue, composeValidators } from '../../service/FormValidate.service'
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}

const options = [{ "value": "red", label: "Red" }, { "value": "blue", label: "Blue" }, { "value": "green", label: "Green" }];

export default function LedgerList() {
    var initalData = {
        "checkboxtest": [
            "blue"
        ],
        "testInput": "blue",
        "firstName": "22",
        "textarea": "fas",
        "lastName": "44",
        "country": "red",
        "country23": [
            "green"
        ],
        "age": "2"
    };
    initalData = {};
    // return (<><h1>WElcome all </h1></>)
    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="row">
                            <div className="col">
                                <h4 className="page-title">Accounts</h4>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="./">Accounts</Link></li>
                                    <li className="breadcrumb-item"><Link to="./">Entry</Link></li>
                                    <li className="breadcrumb-item active">insert</li>
                                </ol>
                            </div>{/*end col*/}
                        </div>{/*end row*/}
                    </div>{/*end page-title-box*/}
                </div>{/*end col*/}
            </div>
            <Form
                onSubmit={onSubmit}
                initialValues={initalData}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <div className="card ">
                        <form onSubmit={handleSubmit} className="row g-3 needs-validation form-floating card-body" >
                            <h5 className="card-title">Entry Insert</h5>
                            <hr />
                            <div className="col-md-4">
                                <InputText name="firstName" required={required} lable="First Name" placeholder="First Name" ></InputText>
                                <InputTextarea name="textarea" required={required} lable="Textarea" placeholder="Textarea" ></InputTextarea>
                                <InputCheckbox name="checkboxtest" required={required} lable="Country Name" placeholder="Country Name" options={options} ></InputCheckbox>
                                <InputRadio name="testInput" required={required} lable="country2222 Name" placeholder="country2222 Name" options={options} ></InputRadio>
                            </div>
                            <div className="col-md-4">
                                <InputText name="lastName" required={required} lable="Last Name" placeholder="Last Name" ></InputText>
                                <InputSelect name="country" required={required} lable="Country Name" placeholder="Country Name" options={options} ></InputSelect>
                                <InputMultiSelect name="country23" required={required} lable="Country Name" placeholder="Country Name" options={options} ></InputMultiSelect>
                            </div>
                            <div className="col-md-4">
                                <InputText name="age" required={composeValidators(required, mustBeNumber, minValue(18), maxValue(100))} lable="Age" placeholder="Age" ></InputText>
                                <Field
                                    name="age"
                                    validate={composeValidators(required, mustBeNumber, minValue(18))}
                                >
                                    {({ input, meta }) => (
                                        <div className="form-floating mb-3">
                                            <input {...input} type="text" className={`form-control ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""} `} id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">Age <div className={`invalid-feedback ${meta.error ? "d-inline" : ""} `} > {meta.error && meta.touched && <span>({meta.error})</span>}</div> </label>
                                        </div>
                                    )}
                                </Field>
                            </div>
                            <div className="buttons">
                                <button type="submit" className={`btn btn-primary ${submitting ? "" : " "}`}>
                                    Submit
                                </button>

                                <button
                                    type="button"
                                    onClick={form.reset}
                                    disabled={submitting || pristine}
                                    className="btn "  >
                                    Reset
                                </button>
                            </div>
                            <pre>{JSON.stringify(values, 0, 2)}</pre>
                        </form>
                    </div>
                )} />
            <br />

            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <div className="card ">
                        <form onSubmit={handleSubmit} className="row g-3 needs-validation form-floating card-body" >
                            <h5 className="card-title">Controls Types</h5>
                            <hr />
                            <div className="col-md-4">
                                <Field name="firstName" validate={required}>
                                    {({ input, meta }) => (
                                        <>
                                            <div className="form-floating mb-3">
                                                <input {...input} type="text" className={`form-control ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""} `} id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">First Name <div className={`invalid-feedback ${meta.error ? "d-inline" : ""} `} > {meta.error && meta.touched && <span>({meta.error})</span>}</div> </label>
                                            </div>
                                            <div>
                                                <label>First Name</label>
                                                <input {...input} type="text" placeholder="First Name" className="form-control" />
                                                <div className={`invalid-feedback ${meta.error ? "d-block" : ""} `} > {meta.error && meta.touched && <span>{meta.error}</span>}</div>
                                            </div>
                                        </>
                                    )}
                                </Field>
                            </div>
                            <div className="col-md-4">
                                <Field name="lastName" validate={required}>
                                    {({ input, meta }) => (
                                        <div className="form-floating mb-3">
                                            <input {...input} type="text" className={`form-control ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""} `} id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">Last Name <div className={`invalid-feedback ${meta.error ? "d-inline" : ""} `} > {meta.error && meta.touched && <span>({meta.error})</span>}</div> </label>
                                        </div>
                                    )}
                                </Field></div><div className="col-md-4">
                                <Field
                                    name="age"
                                    validate={composeValidators(required, mustBeNumber, minValue(18))}
                                >
                                    {({ input, meta }) => (
                                        <div className="form-floating mb-3">
                                            <input {...input} type="text" className={`form-control ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""} `} id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">Age <div className={`invalid-feedback ${meta.error ? "d-inline" : ""} `} > {meta.error && meta.touched && <span>({meta.error})</span>}</div> </label>
                                        </div>
                                    )}
                                </Field></div>
                            <div className="buttons">
                                <button type="submit" className={`btn btn-primary ${submitting ? "" : " "}`}>
                                    Submit
                                </button>

                                <button
                                    type="button"
                                    onClick={form.reset}
                                    disabled={submitting || pristine}
                                    className="btn "  >
                                    Reset
                                </button>
                            </div>
                            <pre>{JSON.stringify(values, 0, 2)}</pre>
                        </form>
                    </div>
                )} />
            <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" defaultValue="Mark" required />
                    <div className="invalid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" defaultValue="Otto" required />
                    <div className="invalid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                        <div className="ininvalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">City</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                    <div className="ininvalid-feedback">
                        Please provide a valid city.
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom04" className="form-label">State</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option selected disabled value>Choose...</option>
                        <option>...</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid state.
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom05" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="validationCustom05" required />
                    <div className="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
                        <label className="form-check-label" htmlFor="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
            <div className="row">
                <div className="col-md-6">
                    <div className="main-card mb-3 card">
                        <div className="card-body">
                            <h5 className="card-title">Controls Types</h5>
                            <form className>
                                <div className="position-relative form-group">
                                    <label htmlFor="exampleEmail" className>Email</label>
                                    <input name="email" id="exampleEmail" placeholder="with a placeholder" type="email" className="form-control" />
                                </div>
                                <div className="position-relative form-group">
                                    <label htmlFor="examplePassword" className>Password</label>
                                    <input name="password" id="examplePassword" placeholder="password placeholder" type="password" className="form-control" />
                                </div>
                                <div className="position-relative form-group">
                                    <label htmlFor="exampleSelect" className>Select</label>
                                    <select name="select" id="exampleSelect" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="position-relative form-group">
                                    <label htmlFor="exampleSelectMulti" className>Select Multiple</label>
                                    <select multiple name="selectMulti" id="exampleSelectMulti" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="position-relative form-group">
                                    <label htmlFor="exampleText" className>Text Area</label>
                                    <textarea name="text" id="exampleText" className="form-control" defaultValue={""} />
                                </div>
                                <div className="position-relative form-group">
                                    <label htmlFor="exampleFile" className>File</label>
                                    <input name="file" id="exampleFile" type="file" className="form-control-file" />
                                    <small className="form-text text-muted">This is some placeholder block-level help
                                        text for the above input. It's a bit lighter and easily wraps to a new
                                        line.
                                    </small>
                                </div>
                                <button className="mt-1 btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="main-card mb-3 card">
                        <div className="card-body">
                            <h5 className="card-title">Sizing</h5>
                            <form className>
                                <input placeholder="lg" type="text" className="mb-2 form-control-lg form-control" />
                                <input placeholder="default" type="text" className="mb-2 form-control" />
                                <input placeholder="sm" type="text" className="mb-2 form-control-sm form-control" />
                                <div className="divider" />
                                <select className="mb-2 form-control-lg form-control">
                                    <option>Large Select</option>
                                </select>
                                <select className="mb-2 form-control">
                                    <option>Default Select</option>
                                </select>
                                <select className="form-control-sm form-control">
                                    <option>Small Select</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    <div className="main-card mb-3 card">
                        <div className="card-body">
                            <h5 className="card-title">Checkboxes &amp; Radios</h5>
                            <form className>
                                <fieldset className="position-relative form-group">
                                    <div className="position-relative form-check">
                                        <label className="form-check-label">
                                            <input name="radio1" type="radio" className="form-check-input" />
                                            Option one is this and that—be sure to include why it's great
                                        </label>
                                    </div>
                                    <div className="position-relative form-check">
                                        <label className="form-check-label">
                                            <input name="radio1" type="radio" className="form-check-input" />
                                            Option two can be something else and selecting it will deselect option one
                                        </label>
                                    </div>
                                    <div className="position-relative form-check disabled">
                                        <label className="form-check-label">
                                            <input name="radio1" disabled type="radio" className="form-check-input" /> Option three is disabled
                                        </label>
                                    </div>
                                </fieldset>
                                <div className="position-relative form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" /> Check me out
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}