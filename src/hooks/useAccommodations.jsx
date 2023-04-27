import { useEffect, useState } from 'react';

const useAccomodations = () => {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    fetch('logements.json')
      .then((res) => res.json())
      .then((res) => setAccommodations(res))
      .catch(console.error);
  }, []);
  return accommodations;
};

export default useAccomodations;
