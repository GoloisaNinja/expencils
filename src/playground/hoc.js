//HIGHER ORDER COMPONENT (HOC) => A COMPONENT THAT RENDERS ANOTHER COMPONENT

//ALLOWS US TO RESUSE CODE
//ALLOWS RENDER HIJACKING
//ALLOWS PROP MANIPULATION
//ABSTRACT STATE

import React from 'react'
import ReactDOM from 'react-dom'


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This info is sensitive - do not share</p> }
            <WrappedComponent {...props} />
        </div>
    )
}

const withAuthDetails = (WrappedComponent) => {
    return (props) => (
            <div>
                { props.isAuthenticated ? (
                    <div>
                    <p>Thank you for logging in! Here is your info!</p>
                    <WrappedComponent {...props} />
                    </div>
                ) : (
                    <p>Sorry - authentication failed....try again</p>
                )}
                
            </div>
        
    )
}


const AdminInfo = withAdminWarning(Info)
const AuthInfo = withAuthDetails(Info)

ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />, document.getElementById('app'))