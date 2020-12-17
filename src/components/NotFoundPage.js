import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
    <div>
        <p>404! Page not in App! - <Link className="link" to="/">Go home</Link></p>
    </div>
)

export default NotFoundPage