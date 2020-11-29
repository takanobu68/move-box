import { createCamera } from "./components/camera";
import { createPlane } from "./components/plane";
import { createScene } from "./components/scene";
import { createLights } from "./components/lights";
// import { createAxesHelper, createGridHelper } from "./components/helpers";

// import { createStatus } from './systems/statusPanel';
import { createTimeLine } from "./systems/TimeLine";
import { createControls } from "./systems/controls";
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";
import { Loop } from "./systems/Loop";

let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let loop;
let planeArry = [];
let tl;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);
    const light = createLights();
    // const axes = createAxesHelper(3);
    // const grid = createGridHelper(5);

    for (let i = 1; i <= 6; i++) {
      const plane = createPlane(i);
      planeArry.push(plane);
      scene.add(plane);
    }

    loop.updatables.push(controls);

    // scene.add(axes, grid);
    scene.add(light);

		tl = createTimeLine(planeArry);

    const resizer = new Resizer(container, camera, renderer);
  }

  move() {
    tl.play();
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
