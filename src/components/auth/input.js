import PropTypes from 'prop-types';

const InputField = ({
  type,
  placeholder,
  value,
  onChange,
}) => (
  <div>
    <input
      type={type}
      //   className={
      //     'auth-input ' + p.customStyle + (!p.errors ? '' : 'border-red-500')
      //   }
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  </div>
);

export default InputField;

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};
