import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { prototype } from 'postcss/lib/previous-map';

CardF.propTypes = {
  text: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  buttonContent: PropTypes.string.isRequired,
};

function CardF(props) {
  return (
    <Card className='bg-gray-700' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='text-white opacity-90'>{props.title}</Card.Title>
        <Card.Text className='text-white opacity-80'>
          {props.text}
        </Card.Text>
        <Button variant="dark">{props.buttonContent}</Button>
      </Card.Body>
    </Card>
  );
}

export default CardF;