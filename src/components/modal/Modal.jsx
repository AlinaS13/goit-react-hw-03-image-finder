import { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalPage, Overlay } from './Modal.styled';

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
    document.addEventListener('keydown', this.handlePressKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePressKey);
  }

  render() {
    const { largeImg } = this.props;
    return (
      <Overlay onClick={this.closeModalBackdrop}>
        <ModalPage>
          <img src={largeImg} alt="" />
        </ModalPage>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
