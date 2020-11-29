import {
  PlaneBufferGeometry,
  MeshBasicMaterial,
  Mesh,
  DoubleSide,
} from "three";

let min = 0.3;
let max = 5;

const randomRange = (min: number = 0, max: number = 0): number => {
  return min + (max - min) * Math.random();
};

export const createPlane = (id: number) => {
  const geometry = new PlaneBufferGeometry(1, 1);
  const material = new MeshBasicMaterial({
    side: DoubleSide,
    color: Math.random() * 0xffffff,
    opacity: 0.4,
    transparent: true,
  });
  const plane = new Mesh(geometry, material);

  plane.scale.x = randomRange(min, max);
  plane.scale.y = randomRange(min, max);

  plane.position.x = randomRange(min, max);
  plane.position.y = randomRange(min, max);
  plane.position.z = randomRange(min, max);

  plane.rotation.x = id % 3 === 2 ? 0.5 * Math.PI : 0;
  plane.rotation.y = id % 3 === 0 ? 0.5 * Math.PI : 0;

  return plane;
};
