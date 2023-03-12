import PropTypes from 'prop-types';
import { ImageItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images, onClickImage, toggleModal }) => {
  const handle = e => {
    toggleModal();
    onClickImage(e.currentTarget.dataset.largeImage);
  };
  return (
    <>
      {images.map(image => (
        <ImageItem
          key={image.id}
          onClick={handle}
          data-large-image={image.largeImageURL}
        >
          <Image src={image.webformatURL} alt={image.name} />
        </ImageItem>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickImage: PropTypes.func,
  toggleModal: PropTypes.func,
};
