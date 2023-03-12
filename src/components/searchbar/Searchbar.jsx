import PropTypes from 'prop-types';

import SearchSVG from '../../assets/searchSVG';
import {
  Button,
  ButtonLabel,
  Input,
  SearchbarElem,
  SearchForm,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit, value }) => {
  return (
    <SearchbarElem onSubmit={onSubmit}>
      <SearchForm>
        <Input
          name={'searchfield'}
          value={value}
          type="text"
          autocomplete="off"
          placeholder="Search images and photos"
        />
        <Button type="submit">
          <SearchSVG></SearchSVG>
          <ButtonLabel>Search</ButtonLabel>
        </Button>
      </SearchForm>
    </SearchbarElem>
  );
};

Searchbar.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
