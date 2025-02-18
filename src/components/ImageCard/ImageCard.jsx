
import './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
    return (
        <li className="image-card" onClick={() => onClick(image)}>
            <img src={image.urls.small} alt={image.alt_description} />
        </li>
    );
};

export default ImageCard;