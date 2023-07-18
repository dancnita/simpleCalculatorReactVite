function Button({ value, onClick }) {
  return (
    <>
      <button onClick={onClick} className={value === '=' ? 'equal-btn' : null}>
        {value}
      </button>
    </>
  );
}

export default Button;
