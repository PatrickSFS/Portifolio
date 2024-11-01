import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

CardF.propTypes = {
  text: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  buttonContent: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

function CardF(props) {
  return (
    <Card className='bg-neutral-900' style={{ width: '18rem' }}>
    <i className={`${props.icon} text-white size-3 p-2`}></i>
      <Card.Body>
        <Card.Title className='text-orange-500 opacity-90 '>{props.title}</Card.Title>
        <Card.Text className='text-white opacity-80 text-justify'>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardF;