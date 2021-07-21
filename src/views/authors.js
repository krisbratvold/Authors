import React, { useEffect, useState } from "react";
import { Link } from "@reach/router"
import axios from "axios";

const Authors = (props) => {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/api/authors/")
            .then((res) => {
                console.log(res);
                const sortedAuthors = res.data.authors.sort((a,b) =>
                a.name.localeCompare(b.name));
                setAuthors(sortedAuthors);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const handleDelete = (id) => {
        axios.delete("http://localhost:5000/api/authors/delete/" + id)
            .then((res) => {
                console.log(res);
                const filteredProducts = authors.filter((prod) => {
                    return (prod._id !== id);
                })
                setAuthors(filteredProducts);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (<div className="p-5">
        <h2>Favorite Authors</h2>
        <Link to={"/authors/new"}>Add an Author</Link>
        <p>We have quotes by:</p>
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th className="col">Author</th>
                    <th className="col">Actions Available</th>
                </tr>
            </thead>
            {authors.map((prod) => {
                return (
                    <tbody key={prod._id}>
                        <tr>
                        <td>{prod.name}</td>
                        <td><button onClick={(e) => {
                            handleDelete(prod._id);
                        }} className="btn btn-primary">Delete</button> <Link to={"/authors/" + prod._id + "/edit"} className="btn btn-primary">Edit</Link>
                        </td>
                        </tr>
                    </tbody>
                );
            })}
        </table>
    </div>
    )
}

export default Authors;