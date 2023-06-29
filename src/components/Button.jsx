function Button({ value, onClick }) {
  return (
    <>
      {/* de verificat daca e ok sa pun if/else  in className     */}
      <button onClick={onClick} className={value === '=' ? 'equal-btn' : null}>
        {value}
      </button>
    </>
  );
}

export default Button;
