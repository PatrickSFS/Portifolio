import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
          Modal heading pipipopopo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='bg-neutral-700 text-white'>

        <div className='grid grid-cols-2'>
          <img src="" alt="" />
          <div>

            <h4 className='text-2xl font-bold'>Informações do projeto</h4>
            <p className='opacity-70'>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
            <h4 className='text-2xl font-bold'>Detalhes do projeto</h4>
            <h2 className='text-base font-bold'>Tecnologias: <span className='opacity-70'>HTML5, CSS3, Javascript</span></h2>
            <h4 className='text-base font-bold'>Data <span className='opacity-70'>Nov, 2024</span></h4>
            <h4 className='text-base font-bold'>URL: <span className='opacity-70'> htts://.....</span></h4>
            <h4 className='text-base font-bold'>Share <span className='opacity-70'>Icons</span></h4>

          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

 export default ModalF;