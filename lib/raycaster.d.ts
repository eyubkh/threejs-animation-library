import * as THREE from 'three';
declare class Raycaster {
    raycaster: THREE.Raycaster;
    pointer: THREE.Vector2;
    meshArray: never[];
    mesh: any;
    camera: any;
    screenElement: any;
    intersects: any;
    constructor(camera: any, mesh: any);
    onHover(event: any): void;
    render(): void;
}
export default Raycaster;
