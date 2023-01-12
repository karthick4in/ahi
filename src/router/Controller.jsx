import React, { lazy, useEffect, useState } from 'react';
import shortid from 'shortid';
import { BrowserRouter, Routes, Route, Outlet, Link, useParams } from "react-router-dom";
import { Router1, Router2, Router3 } from "./Router";
import AdminLayout from '../component/AdminLayout';
import Home from '../pages/view/Home';
import Docs from '../pages/view/Docs';
import Orders from '../pages/view/Orders';
import Login from '../pages/Login';


export default function Controller() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route element={<LoginLayout />}>
                        <Route path="/a" element={<SignInForm />} />
                        <Route path="/signin" element={<SignInForm />} />
                        <Route path="/newpassword" element={<NewPassword />} />
                        <Route path="/phoneverification" element={<PhoneVerification />} />
                        <Route path="/continuewithphone" element={<ContWithPhone />} />
                        <Route path="/resetpassword" element={<ResetPassword />} />
                        <Route path="/confirm-resetpassword" element={<ConfirmResetPassword />} />
                    </Route> */}
                    {/* <section> */}
                    <Route>
                        {/* <Route index path="/login" element={<Router1 />} /> */}
                        <Route path="/" element={<Login />} />
                        <Route path="/:userId" element={<Router1 />} />
                    </Route>
                    <Route path="/view" element={<AdminLayout />}>
                        {/* <Route index element={<Orders />} /> */}
                        {/* <Route path="/user/:userId" element={<UserPage />} /> */}
                        {/* <Route path="/:router1/:router2" element={<Router2 />} /> */}
                        <Route path=":router2" element={<Router3 />} />
                        <Route path="docs" element={<Docs />} />
                        {/* <Route path="/users" element={<UsersPage />} /> */}
                    </Route>
                    {/* </section> */}
                </Routes>
            </BrowserRouter>
        </>
);
} 
