import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';


ModalF.propTypes = {
  title: PropTypes.string.isRequired,
  content:PropTypes.string.isRequired,
  tec: PropTypes.string.isRequired,
  data: PropTypes.stringisRequired,
  site: PropTypes.string.isRequired,
  img: PropTypes.string,

};

function ModalF(props) {
  return (
  
    <Modal 
    {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className='bg-neutral-700 text-white'>
        <Modal.Title id="contained-modal-title-vcenter" className='text-3xl font-bold text-center m-auto'>
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='bg-neutral-700 text-white'>

        <div className='grid grid-cols-2'>
          <img src={props.img} alt="" />
          <div>

            <h4 className='text-2xl font-bold'>Informações do projeto</h4>
            <p className='opacity-70'>
            {props.content}
            </p>
            <h4 className='text-2xl font-bold'>Detalhes do projeto</h4>
            <h2 className='text-base font-bold'>Tecnologias: <span className='opacity-70'>{props.tec}</span></h2>
            <h4 className='text-base font-bold'>Data <span className='opacity-70'>{props.data}</span></h4>
            <h4 className='text-base font-bold'>URL: <span className='opacity-70'> {props.site}</span></h4>
            <h4 className='text-base font-bold'>Share <span className='opacity-70'>Icons</span></h4>

          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

 export default ModalF;