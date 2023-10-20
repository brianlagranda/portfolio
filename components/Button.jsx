const Button = ({ text, onClick }) => {
  return (
    <button
      type='button'
      className='py-3 px-6 rounded-lg text-white bg-gradient-to-br from-emerald-400 to-emerald-600
      hover:from-emerald-500 hover:to-emerald-700
      active:from-emerald-600 active:to-emerald-800'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

