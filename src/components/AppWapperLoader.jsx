"use client"

import React, { useEffect, useState } from 'react';
import Loader from './Loader';


const AppWapperLoader = ({ children }) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000)
        return () => clearTimeout(timer)
    }, [])


    if (loading) {
        return <Loader></Loader>
    }

    return children;
};

export default AppWapperLoader;