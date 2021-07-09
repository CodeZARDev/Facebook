import { useState } from 'react';

interface UseLoadingData {
  isLoading: boolean;
  setIsLoading(isLoading): void;
}
const useLoading = (init?: boolean): UseLoadingData => {
  const [isLoading, setIsLoading] = useState(() => {
    return !!init
  });

  return {
    isLoading,
    setIsLoading
  }
}

export default useLoading;
