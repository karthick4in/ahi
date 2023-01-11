import React, { lazy, useEffect, useState } from 'react';
import shortid from 'shortid';
// import { Outlet } from 'react-router-dom';

import { BrowserRouter, Routes, Route, Outlet, Link, useParams } from "react-router-dom";
import Layout from "./component/Layout.js";
import Home from "./pages/Home.js";
import Blogs from "./pages/Blogs.js";
import Contact from "./pages/Contact.js";
import NoPage from "./pages/NoPage.js";
import Pages from "./router/pages.jsx";
import  {Router1,Router2}  from "./router/Router.jsx";


const importView = subreddit =>
    lazy(() =>
        import(`./views/${subreddit}View`)
            .catch(() => import(`./views/NullView`))
    );

export default function App({ subredditsToShow }) { 
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
                {/* <AdminLayout> */}
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
                {/* </AdminLayout> */}
                <Routes>
                    <Route element={<LoginLayout />}>
                        <Route path="/" element={<SignInForm />} />
                        <Route path="/signin" element={<SignInForm />} />
                        <Route path="/newpassword" element={<NewPassword />} />
                        <Route path="/phoneverification" element={<PhoneVerification />} />
                        <Route path="/continuewithphone" element={<ContWithPhone />} />
                        <Route path="/resetpassword" element={<ResetPassword />} />
                        <Route path="/confirm-resetpassword" element={<ConfirmResetPassword />} />
                    </Route>
                    {/* <section> */}
                    <Route element={<AdminLayout />}>
                        <Route path="/user/:userId" element={<UserPage />} />
                        <Route path="/page/:userId" element={<Router1 />} />
                        <Route path="/:router1/:router2" element={<Router2 />} />
                        <Route path="/users" element={<UsersPage />} />
                    </Route>
                    {/* </section> */}
                </Routes>
            </BrowserRouter>
            <React.Suspense fallback="Loading views...">
                <div className="container">  {views}</div>
            </React.Suspense>
        </>
    );
}
const AdminLayout2 = ({ children }) => (
    <div>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/guides">Guides</NavLink>
        </nav>
        <div>
            {children}
        </div>
    </div>
);
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
        Admin layout  {/* local layout UI */}
        <Outlet />
        admin End
    </div>
);

const SignInForm = () => (<div>SignINform</div>)
const NewPassword = () => { return <div>NewPassword</div> }
const PhoneVerification = () => { return <div>PhoneVerification</div> }
const ContWithPhone = () => { return <div>ContWithPhone</div> }
const ConfirmResetPassword = () => { return <div>ConfirmResetPassword </div> }
const ResetPassword = () => { return <div>ResetPassword</div> }

const UserPage = ({ match, location }) => {
    debugger;
    var params = useParams();
    var userId = params.userId;

    return (
        <>eee
            <p>
                <strong>User ID: </strong>
                {userId}
            </p>
            <p>
                <strong>User Name: </strong>
                {users[userId - 1].name}
            </p>
            <Link to={`/users`}>Users </Link> <hr />
        </>
    );
};

const users = [
    {
        name: `Param`
    },
    {
        name: `Vennila`
    },
    {
        name: `Afrin`
    }
];

const UsersPage = () => {
    return (
        <> welcome  333
            {users.map((user, index) => (
                <h5 key={index}>
                    <Link to={`/user/${index + 1}`}>{user.name}'s Page</Link>
                </h5>
            ))}
        </>
    );
};