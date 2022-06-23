/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */

import PropType from 'prop-types';
import ValidationFeedback from './feedback';

const InputField = ({
  type,
  placeholder,
  register,
  config,
  errs,
  showErrors,
}) => {
  const { field, options } = config;

  return (
    <div className="relative">
      <input
        className={
          errs[field]
            ? 'border border-red-400 text-red-400 outline-none rounded-full my-3 px-2 py-1'
            : 'border border-gray-400 outline-none rounded-full my-3 px-2 py-1'
        }
        type={type}
        placeholder={placeholder}
        {...register(field, options)}
        defaultValue=""
      />
      {showErrors && <ValidationFeedback errs={errs} field={field} />}
    </div>
  );
};

InputField.propTypes = {
  type: PropType.string.isRequired,
  placeholder: PropType.string.isRequired,
  register: PropType.func.isRequired,
  config: PropType.object.isRequired,
  errs: PropType.object.isRequired,
  showErrors: PropType.bool.isRequired,
};

export default InputField;
