import { Vector2, Raycaster } from 'three';
declare class RaycasterEvent {
    raycaster: Raycaster;
    pointer: Vector2;
    meshArray: never[];
    mesh: any;
    camera: any;
    screenElement: any;
    intersects: any;
    constructor(camera: any, mesh: any);
    onHover(event: any): void;
    render(): void;
}
export default RaycasterEvent;
