import React from 'react';
import './Icon.scss';

function Icon(Props) {
  const mobileWidth = window.innerWidth;

  return (
    <svg
      className="bi bi-chevron-down text-white"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Icon;
