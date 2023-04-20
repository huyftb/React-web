import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateNewsForm = () => {
    const { id } = useParams();
    const [title,setNewTitle]=useState('');
    const [image,setNewImage]=useState('');
    const [nation,setNewNation]=useState('');
    const [year,setNewYear]=useState('');
    const [info,setNewInfo]=useState('');
    const [clip,setNewClip]=useState('');
    const [errors, setErrors] = useState([]);
    useEffect(() => {
    fetch(`https://6415d1f8351c4aed491075d3.mockapi.io/films/${id}`)
    .then((response) => response.json())
    .then((data) => {
        setNewTitle(data.title);
        setNewImage(data.image);
        setNewNation(data.nation);
        setNewYear(data.year);
        setNewInfo(data.info);
        setNewClip(data.clip);
    
    })
    .catch((error) => console.error(error));
    }, [id]);
    const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (errors.length > 0) {
    setErrors(errors);
    return;
    }
    const updatedNews = {
      title,
            image,
            nation,
            year,
            info,
            clip,
    };
    fetch(`https://6415d1f8351c4aed491075d3.mockapi.io/product/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedNews),
    })
    .then((response) => {
    if (response.ok) {
    setErrors([]);
    alert('News updated successfully!');
    window.location.href = '/dashboard';
    } else {
    throw new Error('Failed to update news');
    }
    })
    .catch((error) => console.error(error));
    };

    const validateForm = () => {
    const errors = [];
    if (title === '') {
    errors.push('Title is required');
    }
    if (image === '') {
    errors.push('Description is required');
    }
    if (nation === '') {
    errors.push('Nation is required');
    }
    if (year === '') {
    errors.push('Year is required');
    }
    if (info === '') {
        errors.push('Info is required');
        }
        if (clip === '') {
            errors.push('Video is required');
            }
  };
}