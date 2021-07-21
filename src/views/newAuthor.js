import React, { useState } from "react";
import { Link, navigate } from "@reach/router"
import axios from "axios";


const NewAuthor = (props) => {
    const [name, setName] = useState("");

    const [errors, setErrors] = useState(null);

    const createAuthor = e => {
        e.preventDefault();
        const newAuthor = {
            name: name,
        };
        axios.post("http://localhost:5000/api/authors/new", newAuthor)
            .then((res) => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response?.data?.errors);
            })
    }

    return <div className="p-4">
        <h1>Favorite Authors</h1>
        <Link to="/">Home</Link>
        <p>Add a new author:</p>
        <form onSubmit={(e) => {
            createAuthor(e);
        }}>
            <label className="form-label">Name:</label>
            {errors?.name && (
                <span style={{ color: "red" }}>{errors.name.message}</span>
            )}
            <div className="col-s-3">
                <input className="form-control mb-4" id="short" type="text" onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div>
                <Link to="/" className="btn btn-primary">Cancel</Link> {(" ")}
                <button className="btn btn-primary">Submit</button>
            </div>
            
        </form>
    </div>
}

export default NewAuthor;