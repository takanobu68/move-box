import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov
    1, // aspect (dummy)
    0.1, // near
    100 // far
  );

  camera.position.set(10, 10, 10);

  return camera;
}

export { createCamera };
