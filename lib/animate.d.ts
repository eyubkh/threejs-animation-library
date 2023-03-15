type ObjectTypes = {
    mesh?: any;
    from?: any;
    raycaster?: any;
    to?: any;
    lookAt?: any;
    start?: boolean;
    update?: () => void;
    delay?: number;
};
declare class Animate {
    object: ObjectTypes;
    animate(mesh: any): this;
    raycaster(mesh: any, camera: any): this;
    from(x: number, y: number, z: number): this;
    to(x: number, y: number, z: number): this;
    cameraLookAt(mesh: any, camera: any): this;
    start(): void;
    delay(time: any): this;
    update(): void;
}
export default Animate;
