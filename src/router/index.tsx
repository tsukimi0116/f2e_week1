import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomePage from '../pages/home'

export default () => {
    const router = useRoutes([
        {
            path: '/',
            element: <HomePage />,
        }
    ])
    return router;
}
