import { Canvas } from '@react-three/fiber';
import DummyElem from './components/DummyElem';

function App() {
  return (
   <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <DummyElem position={[-1.2, 0, 0]} />
    <DummyElem position={[1.2, 0, 0]} />
   </Canvas>
  );
}

export default App;
