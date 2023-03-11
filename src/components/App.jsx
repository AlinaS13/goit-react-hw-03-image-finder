import { Component } from 'react';
import { AppSection } from './App.styled';

import { getImages } from '../api/api';

import { Searchbar } from './searchbar';
import { ImageGallery } from './imageGallery';
import { Button } from './button';
import { Modal } from './modal/Modal.styled';
import { Dna } from 'react-loader-spinner';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    searchQuery: '',
    error: null,
    showModal: false,
    page: 1,
    isOpen: false,
    largeImg: '',
  };

  async componentDidUpdate(_, prevState) {
    if (
      this.state.searchQuery !== prevState.searchQuery ||
      this.state.page !== prevState.page
    ) {
      try {
        this.setState({ isLoading: true });
        const images = await getImages(this.state.searchQuery, this.state.page);
        this.setState(prev => ({
          images: [...prev.images, ...images.hits],
          isLoading: false,
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const searchQuery = event.target.elements.searchfield.value;
    this.setState({
      images: [],
      isLoading: true,
      searchQuery,
      page: 1,
    });

    event.target.reset();
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
  };
  toggleModal = () => {
    console.log('sdsa');
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  setImg = largeImg => {
    this.setState({ largeImg });
  };
  render() {
    const { images } = this.state;
    return (
      <AppSection>
        <Searchbar
          onSubmit={this.handleSubmit}
          value={this.searchQuery}
          // onChange={this.handleChangeInput}
        />
        <Dna />

        <ImageGallery
          images={images}
          onClickImage={this.setImg}
          toggleModal={this.props.toggleModal}
        />
        {this.state.images.length !== 0 && (
          <Button onHandleClick={this.loadMore} />
        )}

        {this.state.isOpen && (
          <Modal
            onModalClose={this.toggleModal}
            largeImg={this.state.largeImg}
          />
        )}
      </AppSection>
    );
  }
}
