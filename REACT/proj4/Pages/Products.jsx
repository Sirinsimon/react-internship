import { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';

const API_URL = 'https://sample-e-1.onrender.com/product/getproducts';
const BASE_URL = 'https://sample-e-1.onrender.com';

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(API_URL);
                setProducts(Array.isArray(response.data) ? response.data : []);
            } catch (err) {
                console.error('Error fetching products:', err);
                setError('Failed to load products. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const getImageUrl = (image) => {
        if (!image) return '';
        if (image.startsWith('http')) return image;
        return `${BASE_URL}/${image.replace(/^\/+/, '')}`;
    };

    return (
        <div className="products-page">
            <section className="products-section">
                <div className="products-container">
                    <div className="section-header">
                        <h2>All Products</h2>
                        <p>Browse our full collection</p>
                    </div>

                    {loading ? (
                        <p className="section-header">Loading products...</p>
                    ) : error ? (
                        <p className="section-header">{error}</p>
                    ) : (
                        <div className="products-grid">
                            {products.map((product) => (
                                <div key={product._id} className="product-card">
                                    <div className="product-image">
                                        {product.image ? (
                                            <img
                                                src={getImageUrl(product.image)}
                                                alt={product.name}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover'
                                                }}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        ) : (
                                            <div className="product-placeholder">
                                                <span className="product-icon">📦</span>
                                            </div>
                                        )}
                                        {product.category && (
                                            <span className="product-category">
                                                {product.category}
                                            </span>
                                        )}
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product-name">{product.name}</h3>
                                        <p className="product-description">
                                            {product.description}
                                        </p>
                                        <div className="product-footer">
                                            <span className="product-price">₹{product.price}</span>
                                            <button className="add-to-cart-btn">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default ProductsPage;
