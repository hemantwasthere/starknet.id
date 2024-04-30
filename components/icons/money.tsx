import React, { FunctionComponent } from "react";
import { IconProps } from "../../types/frontTypes";

const Money: FunctionComponent<IconProps> = ({ width, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={width}
      height={width}
      fill="none"
    >
      <rect width="16" height="16" rx="8" fill="#402D28" />
      <path
        d="M7.90719 2.5C7.63104 2.5 7.40719 2.72386 7.40719 3V3.74844H6.50898C5.69461 3.74844 5.01198 4.46005 5.01198 5.30899V5.93321C5 7.5 5.52695 8.21429 6.5 8.21429H8.75C8.91766 8.26422 9.5 8.21429 9.49102 9.06679L9.5 9.64286C9.11962 10.0031 8.75 9.64286 8 9.64286H6.5C6.5 9.64286 6.29048 9.65383 6.1976 9.605V9.25468C6.1976 8.97854 5.97375 8.75468 5.6976 8.75468H5.5C5.22386 8.75468 5 8.97854 5 9.25468V10.0031C5 10.4276 5.23952 10.7896 5.52695 10.9769C5.8024 11.1767 6.1497 11.2516 6.49701 11.2516H7.39521V12C7.39521 12.2761 7.61907 12.5 7.89521 12.5H8.09281C8.36896 12.5 8.59281 12.2761 8.59281 12V11.2516H9.49102C10.3174 11.2516 10.988 10.5524 10.988 9.69101V9.06679C10.988 8.21785 11 6.78571 9.5 6.78571H6.5C6.33234 6.73578 6.20958 6.12047 6.20958 5.93321L6.1976 5.37203C6.1976 5.37203 6.33234 5.30899 6.5 5.30899H9.49102C9.62275 5.30899 9.75449 5.28402 9.8024 5.30899V5.74532C9.8024 6.02146 10.0263 6.24532 10.3024 6.24532H10.5C10.7761 6.24532 11 6.02146 11 5.74532V4.99688C11 4.57241 10.7605 4.21036 10.4731 4.0231C10.1976 3.82335 9.8503 3.74844 9.50299 3.74844H8.60479V3C8.60479 2.72386 8.38093 2.5 8.10479 2.5H7.90719Z"
        fill="#FFF9F0"
      />
    </svg>
  );
};

export default Money;
