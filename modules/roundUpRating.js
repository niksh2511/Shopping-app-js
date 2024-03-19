const roundUpRating = (rating) => {
  const curRating = Math.floor(rating);
  let htmlElem = '';

  for (let i = 1; i <= 5; i++) {
    const strokeColor = i <= curRating ? 'fill-yellow-500' : 'fill-gray-500';
    htmlElem += `<svg class=${strokeColor} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960"
          width="24">
              <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
          </svg>`;
  }

  return htmlElem;
};

export default roundUpRating;
