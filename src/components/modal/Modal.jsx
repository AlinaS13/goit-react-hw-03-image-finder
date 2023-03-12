import { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalPage, Overlay, Img } from './Modal.styled';

export class Modal extends Component {
  closeModalBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.onModalClose();
    }
  };
  handlePressKey = event => {
    if (event.code === 'Escape') {
      this.props.onModalClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handlePressKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressKey);
  }

  render() {
    const { largeImg } = this.props;
    return (
      <Overlay onClick={this.closeModalBackdrop}>
        <ModalPage>
          <Img src={largeImg} alt="" />
        </ModalPage>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
