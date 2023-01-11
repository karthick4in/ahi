import React, { lazy, useEffect, useState } from 'react';
import shortid from 'shortid';
import { BrowserRouter, Routes, Route, Outlet, Link, useParams } from "react-router-dom"; 

const importView = subreddit =>
    lazy(() =>
        import(`../pages/${subreddit}`)
            .catch(() => import(`../views/NullView`))
    );


const Pages = () => {
    debugger;

    var params = useParams();
    // var params = 1;
    var userId = params.userId;
    const subredditsToShow = [ 
        'Blogs',userId
    ];
    const [views, setViews] = useState([]);
    useEffect(() => {
        async function loadViews() {
            debugger;
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
        <h1>Pages {userId} sss</h1>;
        <React.Suspense fallback="Loading views...">
            <div className="container">  {views}</div>
        </React.Suspense>
    </>
};

export default Pages;