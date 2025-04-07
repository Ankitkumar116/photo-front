import React, { useState } from 'react';
import axios from 'axios';
import '../styles/App.css';

function ImageUploader() {
    const [image, setImage] = useState<File | null>(null);
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [resizedImage, setResizedImage] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!image) return;
        const formData = new FormData();
        formData.append('image', image);
        formData.append('width', width);
        formData.append('height', height);

        const response = await axios.post('https://photo-resizer-backend1.onrender.com/upload', formData);
        setResizedImage(response.data.url);
    };

    return (
        <div className='container'>
            <input type='file' onChange={handleImageChange} />
            <input type='number' placeholder='Width' onChange={(e) => setWidth(e.target.value)} />
            <input type='number' placeholder='Height' onChange={(e) => setHeight(e.target.value)} />
            <button onClick={handleUpload}>Resize</button>
            {resizedImage && <img src={resizedImage} alt='Resized' />}
        </div>
    );
}

export default ImageUploader;
