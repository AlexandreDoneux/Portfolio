import React from 'react';

const RedirectButton = ({ url, label }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <button onClick={handleClick}>
      {label}
    </button>
  );
};

export default RedirectButton;