import Button from './components/buttons/button';
import CustomButton from './components/buttons/customButton';
import DefaultLogo from './components/defaultLogo';
import Text from './components/text/text';

function App() {
  return (
    <div className='main'>
      <DefaultLogo />
      <Text text='hi'/>
      <Button/>
      <CustomButton text='click'/>
    </div>
  );
}

export default App;
