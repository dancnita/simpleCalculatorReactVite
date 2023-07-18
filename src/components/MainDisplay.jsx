function MainDisplay({ input }) {
  return (
    <>
      <div>
        <div>{input === '' ? 0 : input}</div>
      </div>
    </>
  );
}

export default MainDisplay;
