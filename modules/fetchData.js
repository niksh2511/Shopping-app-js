const fetchData = async (url) => {
  let fetchData;

  await fetch(url)
    .then((res) => res.json())
    .then((data) => (fetchData = data));

  return fetchData;
};

export default fetchData;
