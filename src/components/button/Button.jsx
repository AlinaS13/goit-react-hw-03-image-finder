import { Btn } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onHandleClick }) => {
  return (
    <Btn type="buton" onClick={onHandleClick}>
      Load More
    </Btn>
  );
};

Button.propTypes = {
  onHandleClick: PropTypes.func.isRequired,
};
