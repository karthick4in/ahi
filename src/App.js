import React, { lazy, useEffect, useState } from 'react';
// import shortid from 'shortid'; 
// import { Outlet } from 'react-router-dom';

import { BrowserRouter, Routes, Route, Outlet, Link, useParams } from "react-router-dom"; 
import Controller from "./Router/Controller"

export default function App() { 
    return (
        <>
            <Controller />
        </>
    );
};