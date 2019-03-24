import React from 'react';

function Name() {
  return window.location.href.includes('#')
    ? window.location.href.split('#')[1]
    : '';
}

export default Name;
