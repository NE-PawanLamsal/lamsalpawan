import { useState } from "react";

const InputField = ({ type, placeholder, icon, onChange, value }) => {
  // State to toggle password visibility
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div className="input-wrapper">
      <input
        type={isPasswordShown ? 'text' : type} // Toggle password visibility
        placeholder={placeholder}
        className="input-field"
        required
        onChange={onChange} // Add onChange here
        value={value} // Add value here to make it a controlled component
      />
      <i className="material-symbols-rounded">{icon}</i>
      {type === 'password' && (
        <i onClick={() => setIsPasswordShown(prevState => !prevState)} className="material-symbols-rounded eye-icon">
          {isPasswordShown ? 'visibility' : 'visibility_off'}
        </i>
      )}
    </div>
  );
}

export default InputField;