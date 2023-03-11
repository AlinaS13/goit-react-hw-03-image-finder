import PropTypes from 'prop-types';
import { ImageItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  images,
  onClickImage,
  toggleModal,
  largeImage,
}) => {
  // const handle = () => {
  //   onClickImage(largeImage);
  // };
  return (
    <>
      {images.map(image => (
        <ImageItem key={image.id} onClick={toggleModal}>
          <Image src={image.webformatURL} alt={image.name} />
        </ImageItem>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
