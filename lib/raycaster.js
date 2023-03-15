"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const three_1 = require("three");
class RaycasterEvent {
    constructor(camera, mesh) {
        this.raycaster = new three_1.Raycaster();
        this.pointer = new three_1.Vector2();
        this.meshArray = [];
        this.mesh = mesh;
        this.camera = camera;
        this.screenElement = document.getElementsByTagName('iframe');
        this.intersects = false;
        window.addEventListener('mousemove', (event) => this.onHover(event));
    }
    onHover(event) {
        this.intersects = !!this.raycaster.intersectObject(this.mesh)[0];
        if (this.intersects === true && this.screenElement[0]) {
            this.screenElement[0].style.pointerEvents = 'initial';
        }
        else if (this.intersects === false && this.screenElement[0]) {
            this.screenElement[0].style.pointerEvents = 'none';
        }
        this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    render() {
        this.raycaster.setFromCamera(this.pointer, this.camera);
    }
}
exports.default = RaycasterEvent;
