import React, { lazy, useEffect, useState } from 'react';
import shortid from 'shortid';
import { BrowserRouter, Routes, Route, Outlet, Link, useParams } from "react-router-dom";
import  {Router1,Router2}  from "./Router";


const importView = subreddit =>
    lazy(() =>
        import(`../views/${subreddit}View`)
            .catch(() => import(`../views/NullView`))
    );

export default function Controller({ subredditsToShow }) { 
    const [views, setViews] = useState([]);
    useEffect(() => {
        async function loadViews() {
            const componentPromises = subredditsToShow.map(async subreddit => {
                console.log(subreddit);
                const View = await importView(subreddit);
                return <View key={shortid.generate()} />;
            });

            Promise.all(componentPromises).then(setViews);
        }

        loadViews();
    }, [subredditsToShow]);

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
                    <Route element={<AdminLayout />}>
                        {/* <Route path="/user/:userId" element={<UserPage />} /> */}
                        <Route path="/:userId" element={<Router1 />} />
                        <Route path="/:router1/:router2" element={<Router2 />} />
                        {/* <Route path="/users" element={<UsersPage />} /> */}
                    </Route>
                    {/* </section> */}
                </Routes>
            </BrowserRouter> 
        </>
    );
} 
const LoginLayout = () => (
    <div /* layout props & styling */ >
        LoginLayout
        {/* local layout UI */}
        <Outlet />
        admin End
    </div>
);

const AdminLayout = () => (
    <div /* layout props & styling */ >
        <Outlet />
    </div>
);
 