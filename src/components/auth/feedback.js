/* eslint-disable react/forbid-prop-types */

import PropType from 'prop-types';
import { TiTick, TiTimes } from 'react-icons/ti';

const ValidationFeedback = ({ errs, field }) => {
  if (errs[field]) {
    return (
      <span className="absolute right-3 top-5 text-red-500">
        <TiTimes />
      </span>
    );
  }
  return (
    <span className="absolute right-3 top-5 text-green-500">
      <TiTick />
    </span>
  );
};

ValidationFeedback.propTypes = {
  errs: PropType.object.isRequired,
  field: PropType.string.isRequired,
};

export default ValidationFeedback;
