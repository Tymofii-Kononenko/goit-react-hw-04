
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
    return (
        <ul className={styles.imageGallery}>
            {images.map(image => (
                <li key={image.id} className={styles.imageGalleryItem} onClick={() => onImageClick(image)}>
                    <img src={image.urls.small} alt={image.alt_description} className={styles.image} />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;