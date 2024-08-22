import { useState, useEffect } from 'react';

// Custom hook to check if the screen width is at or below the specified value
function useIsScreenWidthBelow(width: number): boolean {
  const [isBelow, setIsBelow] = useState<boolean>(window.innerWidth <= width);

  useEffect(() => {
    // Function to update state based on the window size
    const handleResize = () => {
      setIsBelow(window.innerWidth <= width);
    };

    // Add event listener for resize events
    window.addEventListener('resize', handleResize);

    // Call handler initially to set the correct state
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  return isBelow;
}

export default useIsScreenWidthBelow;
