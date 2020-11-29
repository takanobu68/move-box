import { PerspectiveCamera } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface addTick {
	[prop: string]: any;
}

function createControls(camera: PerspectiveCamera, canvas) {

	const controls: addTick = new OrbitControls(camera, canvas);

	controls.enableDamping = true;

	controls.enablePan = false;

	controls.tick = () => controls.update();

	return controls;
}

export { createControls };
