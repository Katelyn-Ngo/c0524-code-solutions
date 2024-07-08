import { ChangeEvent, useState } from 'react';

import { FaCheck, FaTimes } from 'react-icons/fa';
export function ValidatedInput() {
  const [password, setPassword] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const getValidationMessage = () => {
    if (!password) {
      return 'A password is required.';
    } else if (password.length < 6) {
      return 'Your password is too short.';
    } else {
      return 'Your password is valid.';
    }
  };
  const isPasswordValid = () => {
    return password.length >= 6;
  };

  return (
    <div>
      <label>Password</label>
      <div>
        <input type="password" value={password} onChange={handleChange} />
        {isPasswordValid() ? (
          <FaCheck style={{ color: 'green' }} />
        ) : (
          <FaTimes style={{ color: 'red' }} />
        )}
      </div>
      <div style={{ color: isPasswordValid() ? 'green' : 'red' }}>
        {getValidationMessage()}
      </div>
    </div>
  );
}
