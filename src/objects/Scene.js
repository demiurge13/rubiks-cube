import { Group, Geometry, LineBasicMaterial, Line, Vector3, Float32BufferAttribute, Object3D } from 'three';
import Cube from './Cube/Cube';
import BasicLights from './Lights';

export default class SeedScene extends Group {
  constructor() {
    super();

    const lights = new BasicLights();
    const cube = new Cube();

    this.add(cube, lights);
  }

  update(timeStamp) {
    this.rotation.set(timeStamp / 1000, timeStamp / 1000, timeStamp / 1000);
  }
}