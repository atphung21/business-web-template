
export const handlePhoneClick = ({ phoneNumber, extension }) => {
  const formattedNumber = extension
    ? `${phoneNumber},${extension}`
    : phoneNumber;

  if (
    window.confirm(
      `Do you want to call ${phoneNumber}${
        extension ? ` ext. ${extension}` : ""
      }?`
    )
  ) {
    window.location.href = `tel:${formattedNumber}`;
  }
};
