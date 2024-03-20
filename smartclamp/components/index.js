import { useEffect } from 'react';
import { Circle } from 'react-awesome-shapes';

const MyCircle = () => {
  return (
    useEffect (() => {
        <Circle
      color="#5271FF" // Cor do círculo
      size={200}   // Tamanho do círculo em pixels
    />
    }, [])
  );
}

export default MyCircle;