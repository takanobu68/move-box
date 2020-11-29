// 作成時に使用、公開時には削除

import { AxesHelper, GridHelper } from 'three';

function createAxesHelper(size: number, x: number = 0, y: number = 0, z: number = 0,): THREE.AxesHelper {
	const axes = new AxesHelper(size);
	axes.position.set(x, y, z);
	return axes;
}

function createGridHelper(size: number): THREE.GridHelper {
	const grid = new GridHelper(size);
	return grid;
}

export { createAxesHelper, createGridHelper };
