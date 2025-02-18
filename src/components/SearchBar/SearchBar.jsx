import { useState } from 'react';
import './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
    const [input, setInput] = useState('');

    const handleChange = (e) => setInput(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(input, () => setInput(''));
    };

    return (
        <header className="search-bar">
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                    placeholder="Search images and photos"
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
        </header>
    );
};

export default SearchBar;