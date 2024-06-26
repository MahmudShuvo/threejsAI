import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import CameraRig from './CameraRig';
import Backdrop from './Backdrop';
import Shirt from './Shirt';

const CanvasModel = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className='w-full max-w-full h-full transition-all ease-in'>
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <CameraRig>
          <Backdrop />
          <Center>
            <Shirt />
          </Center>
        </CameraRig>
      </Canvas>
    </div>
  );
};

export default CanvasModel;
