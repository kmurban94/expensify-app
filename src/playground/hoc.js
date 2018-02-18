// Higher order component (HOC)- A component (HOC) that renders another component
// reuse code, render hijacking, prop manipulation, abstract state

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>  
            {props.isAdmin && <p>This is private info, please don't share.</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>  
            {props.isAuthenticated ? 
            (<WrappedComponent {...props}/>) :
            <p>Please login to view info</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={true} info="details" />, document.getElementById('app'));
//ReactDOM.render(<AdminInfo isAdmin={true} info="details" />, document.getElementById('app'));