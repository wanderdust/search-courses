import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
 
const LoadingPage = () => (
    <div className="loader">
        <CircularProgress color="inherit"/>
    </div>
);

export default LoadingPage;