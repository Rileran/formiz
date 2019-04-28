import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from './context';

export const propTypes = {
  children: PropTypes.node,
};

export const defaultProps = {
  children: '',
};

export const Form = ({ children }) => {
  const { state } = useFormContext();

  const getValues = fields => fields
    .filter(field => field.isEnabled)
    .reduce((prev, cur) => ({
      ...prev,
      [cur.name]: cur.value,
    }), {});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted', getValues(state.fields)); // eslint-disable-line
  };

  return (
    <form onSubmit={handleSubmit}>
      { children }
    </form>
  );
};


Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
