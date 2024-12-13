import React, { useEffect, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { AnimationMixer, Box3, Vector3 } from 'three';

const FBXModel = ({ url, scale = 0.02, camera }) => {
  const fbx = useLoader(FBXLoader, url);
  const mixer = useRef();
  const boundingBox = new Box3();

  useEffect(() => {
    if (fbx) {
      // Set up the animation mixer
      if (fbx.animations.length > 0) {
        mixer.current = new AnimationMixer(fbx);
        const action = mixer.current.clipAction(fbx.animations[0]);
        action.play();
      }

      // Calculate the bounding box of the model
      boundingBox.setFromObject(fbx);

      // Get the size of the bounding box
      const size = new Vector3();
      boundingBox.getSize(size);

      // Scale down the bounding box width and depth
      size.x *= 0.01; // Shrink the width by 20%
      size.z *= 0.8; // Shrink the depth by 20%

      // Center the model
      const center = new Vector3();
      boundingBox.getCenter(center);
      fbx.position.sub(center); // Move the model to center it around the origin

      // Adjust camera position and field of view
      const maxDim = Math.max(size.x, size.y, size.z);
      const cameraDistance = maxDim * 1; // Adjust multiplier for fit
      camera.current.position.set(0, maxDim * 0.5, cameraDistance);
      camera.current.lookAt(0, 0, 0);

      // Move the model downward
      fbx.position.y -= maxDim * 35; // Adjust downward movement as needed

      // Optionally adjust the field of view for a better fit
      camera.current.fov = 50; // Set to a wider angle if needed
      camera.current.updateProjectionMatrix();
    }
    return () => mixer.current?.stopAllAction();
  }, [fbx, camera]);

  useFrame((state, delta) => {
    mixer.current?.update(delta);
  });

  return <primitive object={fbx} scale={scale} />;
};

export default FBXModel;
