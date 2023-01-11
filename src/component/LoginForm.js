import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react';

const LoginForm = () => {

    return (<>
       
            <div className="d-flex flex-column align-content-end">
                <div className="app-auth-body mx-auto">
                    <div className="app-auth-branding mb-4"><a className="app-logo" href="index.html">
                        <img className="logo-icon me-2" src="assets/images/app-logo.svg" alt="logo" /></a></div>
                    <h2 className="auth-heading text-center mb-5">Log in to Portal</h2>
                    <div className="auth-form-container text-start">
                        <form className="auth-form login-form">
                            <div className="email mb-3">
                                <label className="sr-only" for="signin-email">Email</label>
                                <input id="signin-email" name="signin-email" type="email" className="form-control signin-email" placeholder="Email address" required="required" />
                            </div>
                            <div className="password mb-3">
                                <label className="sr-only" for="signin-password">Password</label>
                                <input id="signin-password" name="signin-password" type="password" className="form-control signin-password" placeholder="Password" required="required" />
                                <div className="extra mt-3 row justify-content-between">
                                    <div className="col-6">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="RememberPassword" />
                                            <label className="form-check-label" for="RememberPassword">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="forgot-password text-end">
                                            <a href="reset-password.html">Forgot password?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn app-btn-primary w-100 theme-btn mx-auto">Log In</button>
                            </div>
                        </form>

                        <div className="auth-option text-center pt-5">No Account? Sign up <a className="text-link" target="_self"  href="sign_up">here</a>.</div>
                    </div>
                </div>

                <footer className="app-auth-footer">
                    <div className="container text-center py-3">

                        <small className="copyright">Designed with <span className="sr-only">love</span><svg className="svg-inline--fa fa-heart" style={{color: "#fb866a"}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"></path></svg> by <a className="app-link" href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>

                    </div>
                </footer>
            </div>
    </>);
}
export default LoginForm;