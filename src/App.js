
import { useEffect, useLayoutEffect, useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import './App.css';
import AnimatedRoute from './components/animatedRoute';

function App() {

  const [size, setSize] = useState([0, 0]);
  const [mouseDetected, setMouseDetected] = useState(matchMedia('(pointer:fine)').matches)

  const checkIfMouse = () => {
    if (matchMedia('(pointer:fine)').matches) {
      setMouseDetected(true)
    } else {
      setMouseDetected(false)
    }
  }

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    checkIfMouse()
  }, [size])

  return (
    <>
      {mouseDetected &&
        <AnimatedCursor
          innerSize={20}
          outerSize={40}
          color="17, 163, 231"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={4}
          trailingSpeed={5}
        />
      }
      <AnimatedRoute />
    </>
  );
}

export default App;
