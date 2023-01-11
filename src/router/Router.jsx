import React, { lazy, useEffect, useState } from 'react';
import shortid from 'shortid';
import { BrowserRouter, Routes, Route, Outlet, Link, useParams } from "react-router-dom";

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

const importView = page =>
    lazy(() => {
        page = page || "";
        page = page.replaceAll(" ", "_").split("_")?.map(a => capitalizeFirstLetter(a)).join("");
        return import(`../pages/${page}`)
            .catch(() => import(`../pages/NoPage`))
    }
    );

const importView2 = (folder, page) =>
    lazy(() => {
        page = page || "";
        page = page.replaceAll(" ", "_").split("_")?.map(a => capitalizeFirstLetter(a)).join("");
        return import(`../pages/${folder}/${page}`)
            .catch(() => import(`../pages/NoPage`))
    }
    );

const Router1 = () => {

    var params = useParams();
    // var params = 1;
    var userId = params.userId;
    const subredditsToShow = [
        userId
    ];
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
    }, []);

    return <>
        {/* <h1>Pages {userId} sss</h1>; */}
        <React.Suspense fallback="Loading views...">
            <div className="container">  {views}</div>
        </React.Suspense>
    </>
};

const Router2 = () => {
    var params = useParams();
    var folder = params.router1;
    var router2 = params.router2;
    const subredditsToShow = [
        router2
    ];
    const [views, setViews] = useState([]);
    useEffect(() => {
        async function loadViews() {
            const componentPromises = subredditsToShow.map(async subreddit => {
                console.log(subreddit);
                const View = await importView2(folder, subreddit);
                return <View key={shortid.generate()} />;
            });
            Promise.all(componentPromises).then(setViews);
        }
        loadViews();
    }, []);

    return <>
        <React.Suspense fallback="Loading views...">
            <div className="container">  {views}</div>
        </React.Suspense>
    </>
};

// export default Router1 ;
export { Router1, Router2 };