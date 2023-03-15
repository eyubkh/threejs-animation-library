"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const THREE = require("three");
const raycaster_1 = require("./raycaster");
const index_1 = require("./index");
class Animate {
    constructor() {
        this.object = {};
    }
    animate(mesh) {
        this.object.mesh = mesh;
        this.object.from = new THREE.Vector3().add(mesh.position);
        return this;
    }
    raycaster(mesh, camera) {
        this.object.raycaster = new raycaster_1.default(camera, mesh);
        return this;
    }
    from(x, y, z) {
        this.object.mesh.position.set(x, y, z);
        return this;
    }
    to(x, y, z) {
        this.object.to = new THREE.Vector3(x, y, z);
        return this;
    }
    cameraLookAt(mesh, camera) {
        camera.lookAt(mesh.position);
        this.object.lookAt = this.cameraLookAt.bind(this, mesh, camera);
        return this;
    }
    start() {
        this.object.start = true;
        this.object.update = this.update.bind(this);
        index_1.group.add(this.object);
    }
    delay(time) {
        this.object.delay = time;
        return this;
    }
    update() {
        if (this.object.raycaster) {
            this.object.raycaster.render();
            if (this.object.raycaster.intersects) {
                this.object.mesh.position.lerp(this.object.to, 0.02);
                this.object.lookAt();
            }
            else {
                this.object.mesh.position.lerp(this.object.from, 0.01);
            }
        }
    }
}
exports.default = Animate;
