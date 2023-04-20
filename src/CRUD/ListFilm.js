import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function ListFilm() {
    const [APIData, setAPIData] = useState([]);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => {
        setOpen(true);
           };
    const baseURL=`https://6415d1f8351c4aed491075d3.mockapi.io/product`;
    useEffect(() => {
        fetch(baseURL)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setAPIData(data);
        })
        .catch((error) => console.log(error.message));
    }, []);
        const handleDelete = (id) => {
            fetch(`${baseURL}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'same-origin'
              })
              .then(response => {
                if (!response.ok) {
                  throw new Error(`HTTP Status: ${response.status}`)
                }
                return response.json()
              })
              .then(userData => setOpen(true))
              .catch(error => console.log(error.message));
          
              // Dispatch delete action and update local storage
              // dispatch(deleteFilm({ id: id }));
            };
        
        return (
        <div>
        <h2>Films List</h2>
        <table>
        <thead>
        <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Category</th>
        <th>Rating</th>
        <th>Price</th>
        <th>Description</th>
        
        
      
        </tr>
        </thead>
        <tbody>
        {APIData.map((data) => (
        <tr key={data.id}>
        <td>{data.image}</td>
        <td>{data.name}</td>
        <td>{data.category}</td>
        <td>{data.rating}</td>
        <td>{data.price}</td>
        <td>{data.description}</td>
        
        <td>
        <Link to={`/detail/${data.id}`}>View</Link>
        <Link to={`/edit/${data.id}/edit`}>Edit</Link>
        <button onClick={() => handleDelete(data.id)}>Delete</button>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 );
};
