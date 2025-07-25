import spinner from '../assets/Spinner.gif';

function Spinner() {
   return (
      <img
         src={spinner}
         alt="Loading..."
         style={{ width: '100px', margin: 'auto', display: 'block', borderRadius: '10px' }}
      />
   );
}

export default Spinner;
