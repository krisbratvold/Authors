import React, {useState, useEffect} from "react";
import {navigate, Link} from "@reach/router"
import axios from "axios";


const EditAuthor = (props) => {

    const [name, setName] = useState("");

    const [errors, setErrors] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/authors/" + props.id)
        .then((res) => {
            console.log(res);
            setName(res.data.author.name);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [props.id]);

    const editAuthor = e => {
        e.preventDefault();
        const editedAuthor = {
            name : name
        };
        axios.put("http://localhost:5000/api/authors/update/" + props.id, editedAuthor)
        .then((res)=>{
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
            editAuthor(e);
        }}>
            <label className="form-label">Name:</label>
            {errors?.name && (
                <span style={{ color: "red" }}>{errors.name.message}</span>
            )}
            <div className="col-s-3">
                <input className="form-control mb-4" id="short" type="text" onChange={(e) => { setName(e.target.value) }} value={name} />
            </div>
            <div>
                <Link to="/" className="btn btn-primary">Cancel</Link> {(" ")}
                <button className="btn btn-primary">Submit</button>
            </div>
            
        </form>
    </div>
}

export default EditAuthor