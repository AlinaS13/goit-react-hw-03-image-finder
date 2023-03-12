import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/imageGalleryItem';
import { ImgGallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, toggleModal, onClickImage }) => {
  return (
    <ImgGallery>
      <ImageGalleryItem
        images={images}
        onClickImage={onClickImage}
        toggleModal={toggleModal}
      />
    </ImgGallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickImage: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
