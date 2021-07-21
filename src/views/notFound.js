import { Link} from "@reach/router"

const NotFound = (props) => {
    return <div className="text-center p-5"><h1 >We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</h1>
    <Link to="/authors/new" className="btn btn-primary">Add Author</Link>
    </div>
}

export default NotFound