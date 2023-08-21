import React from "react";

export const Button = ({
  alt,
  imageSrc,
  name,
  onClick,
  buttonClass,
  round,
  squar,
  semiRounded,
  small,
  medium,
  large,
  color,
  vSmall,
  textColor,
  iconStyle,
  icon
}) => {
  let buttonSize;
  if (small) {
    buttonSize = "w-24 h-24 ";
  } else if (medium) {
    buttonSize = "w-32 h-32";
  } else if (large) {
    buttonSize = " w-40 h-40 ";
  } else if (vSmall) {
    buttonSize = "w-8 h-8";
  } else {
    buttonSize = "w-48 h-48";
  }

  let buttonShape;
  if (round) {
    buttonShape = "rounded-full";
  } else if (semiRounded) {
    buttonShape = "!w-36 !h-12 rounded-full";
  } else if (squar) {
    buttonShape = " w-12 h-12 rounded-md";
  }
  let buttonColor = `bg-${color}`;

  return (
    <button
      onClick={onClick}
      className={`${buttonClass} ${buttonShape} ${buttonSize} ${buttonColor}`}
      style={{ color: `${iconStyle}` }}
    >
      {icon && (
        <FontAwesomeIcon icon={faBriefcase} className="text-white fa-2x" />
      )}
      {imageSrc && <img src={imageSrc} alt={alt} />}
      <div className={`${textColor} text-sm normal-case`}>{name}</div>
    </button>
  );
};
