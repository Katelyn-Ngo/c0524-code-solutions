import './App.css';
import { RegistrationFormControlled } from './RegistrationFormControlled';
import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled';
function App() {
  return (
    <div>
      <h1>Registration form uncontrolled</h1>
      <RegistrationFormUncontrolled />
      <h1>Registration form controlled</h1>
      <RegistrationFormControlled />
    </div>
  );
}

export default App;
