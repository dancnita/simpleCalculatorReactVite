import MainDisplay from './MainDisplay';
import SecondaryDisplay from './SecondaryDisplay';

function Screen({ input, prevInput }) {
  return (
    <div className='screen'>
      <MainDisplay input={input} />
      <SecondaryDisplay prevInput={prevInput} />
    </div>
  );
}

export default Screen;
