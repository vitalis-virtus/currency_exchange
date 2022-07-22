import React from "react";

interface IProps {
  id: string;
};

export const GlobalSvgSelector = ({id}: IProps) => {
  switch (id) {
    case "arrows":
      return (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 50 50"
        >
          <path d="M8 7.5c-3.4 3.5-4.1 4.8-3.2 5.7.9.9 1.7.6 3.7-1.2l2.4-2.3.3 12.4c.3 10.2.6 12.4 1.8 12.4 1.2 0 1.5-2.2 1.8-12.4l.3-12.4 2.4 2.3c2 1.8 2.8 2.1 3.7 1.2.9-.9.2-2.2-3.2-5.7C15.6 5 13.3 3 13 3c-.3 0-2.6 2-5 4.5zM35.4 4.1c-1 1.7 1.3 3.6 2.7 2.2C39.3 5.1 38.5 3 37 3c-.5 0-1.2.5-1.6 1.1zM35.4 10.1c-1 1.7 1.3 3.6 2.7 2.2 1.2-1.2.4-3.3-1.1-3.3-.5 0-1.2.5-1.6 1.1zM35.7 15.6c-.4.4-.7 6.1-.7 12.7v12L32.5 38c-2-1.9-2.8-2.1-3.7-1.2-1 1-.2 2.3 3.5 6l4.7 4.7 4.7-4.7c3.7-3.7 4.5-5 3.5-6-.9-.9-1.7-.7-3.7 1.2l-2.4 2.3-.3-12.3c-.3-11.5-1-14.4-3.1-12.4zM11.4 38.1c-1 1.7 1.3 3.6 2.7 2.2 1.2-1.2.4-3.3-1.1-3.3-.5 0-1.2.5-1.6 1.1zM11.4 44.1c-1 1.7 1.3 3.6 2.7 2.2 1.2-1.2.4-3.3-1.1-3.3-.5 0-1.2.5-1.6 1.1z" />
        </svg>
      );

    default:
      return null;
  }
};