import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import Modal from 'react-modal';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';

const API_KEY = 'BOiyrpoHDNbWrpaeTDZpT5wIjgYKg5_y-fY6ZG6aJWQ';
const API_URL = 'https://api.unsplash.com/search/photos';
Modal.setAppElement('#root');

const App = () => {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!query) {
            setImages([]);
            setPage(1);
            return;
        }

        const fetchImages = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(API_URL, {
                    params: { query, page, per_page: 16, client_id: API_KEY },
                });

                if (response.data.results.length === 0) {
                    toast.error('No results found!');
                }

                setImages(prevImages => (page === 1 ? response.data.results : [...prevImages, ...response.data.results]));
                setTotalPages(response.data.total_pages);
            } catch (error) {
                setError('Something went wrong. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [query, page]);

    const handleSearch = (newQuery, resetInput) => {
        if (!newQuery.trim()) {
            setImages([]);
            setPage(1);
            toast.error('Please enter a search term!');
            return;
        }
        if (newQuery !== query) {
            setImages([]);
            setPage(1);
        }
        setQuery(newQuery);
        resetInput();
    };

    const loadMore = () => setPage(prevPage => prevPage + 1);

    const handleImageClick = (image) => {
        if (!isModalOpen) {
            setSelectedImage(image);
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    return (
        <div className="app">
            <Toaster position="top-right" reverseOrder={false} />
            <header className="header">
                <h1 className="title">Image Finder</h1>
                <SearchBar onSubmit={handleSearch} />
            </header>
            <main className="main-content">
                {error && <ErrorMessage message={error} />}
                <ImageGallery images={images} onImageClick={handleImageClick} />
                {loading && <Loader />}
            </main>
            <footer className="footer">
                {images.length > 0 && page < totalPages && <LoadMoreBtn onClick={loadMore} />}
            </footer>
            <ImageModal image={selectedImage} isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default App;