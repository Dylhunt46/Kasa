import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function useAccommodation() {
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const location = useLocation();
  useEffect(() => {
    fetch('logements.json')
      .then((res) => res.json())
      .then((accommodations) => {
        const accommodation = accommodations.find(
          (accommodation) => accommodation.id === location.state.accommodationId
        );
        setSelectedAccommodation(accommodation);
      })
      .catch(console.error);
  }, [location.state.accommodationId]);
  return selectedAccommodation;
}

export default useAccommodation;
