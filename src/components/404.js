import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page is not found!</p>
            <Link to='/'>Back to Hompage</Link>
        </div>
     );
}
 
export default NotFound;