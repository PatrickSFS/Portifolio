import Button from 'react-bootstrap/Button';

function CustomButton() {
  return (
    <Button
      href="https://wa.me/5532984017422"
      target='_blank'
      className="bg-orange-600 text-white hover:bg-orange-800 border-none"
      onMouseDown={(e) => e.currentTarget.style.backgroundColor = '#652B19'} // Cor do clique
      onMouseUp={(e) => e.currentTarget.style.backgroundColor = '#CC5801'} // Cor ao soltar
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#CC5801'} // Cor quando o cursor sai do botão
    >
      Contate-me
    </Button>
  );
}

export default CustomButton;
