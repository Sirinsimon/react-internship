import { useState } from 'react';
import axios from 'axios';
import './addproduct.css';

const API_URL = 'https://sample-e-1.onrender.com/product/addproduct';

function AddProduct() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: ''
    });
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            // Create preview URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('price', formData.price);
            formDataToSend.append('category', formData.category);
            formDataToSend.append('stock', formData.stock);
            if (imageFile) {
                formDataToSend.append('image', imageFile);
            }

            const response = await axios.post(API_URL, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            setMessage({ type: 'success', text: 'Product added successfully!' });
            // Reset form
            setFormData({
                name: '',
                description: '',
                price: '',
                category: '',
                stock: ''
            });
            setImageFile(null);
            setImagePreview('');
        } catch (err) {
            console.error('Error adding product:', err);
            setMessage({ 
                type: 'error', 
                text: err.response?.data?.message || 'Failed to add product. Please try again.' 
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="add-product-page">
            <div className="add-product-container">
                <div className="add-product-card">
                    <div className="add-product-header">
                        <h1>Add New Product</h1>
                        <p>Fill in the details to add a new product to your store</p>
                    </div>
                    
                    {message.text && (
                        <div className={`message-alert ${message.type === 'error' ? 'error-message' : 'success-message'}`}>
                            {message.text}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="add-product-form">
                        <div className="form-group">
                            <label htmlFor="name">Product Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter product name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description *</label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                placeholder="Enter product description"
                                rows="4"
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="price">Price (₹) *</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    required
                                    placeholder="0.00"
                                    min="0"
                                    step="0.01"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="stock">Stock Quantity *</label>
                                <input
                                    type="number"
                                    id="stock"
                                    name="stock"
                                    value={formData.stock}
                                    onChange={handleChange}
                                    required
                                    placeholder="0"
                                    min="0"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="category">Category *</label>
                            <input
                                type="text"
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                placeholder="e.g., Electronics, Clothing, Books"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="image">Product Image</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                onChange={handleFileChange}
                                accept="image/*"
                                className="file-input"
                            />
                            {imagePreview && (
                                <div className="image-preview">
                                    <img src={imagePreview} alt="Preview" />
                                </div>
                            )}
                        </div>

                        <button 
                            type="submit" 
                            className="add-product-button"
                            disabled={loading}
                        >
                            {loading ? 'Adding Product...' : 'Add Product'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
