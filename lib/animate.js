"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const three_1 = require("three");
const index_1 = require("./index");
const raycaster_1 = require("./raycaster");
class Animate {
    constructor() {
        this.object = {};
        this.vector = new three_1.Vector3(0,0,-1)
    }
    animate(mesh) {
        this.object.mesh = mesh;
        this.object.from = new three_1.Vector3().add(mesh.position);
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
        this.object.to = new three_1.Vector3(x, y, z);
        return this;
    }
    cameraLookAt(mesh, camera) {

        const  q1 = new three_1.Quaternion().copy( camera.quaternion );

        camera.lookAt( mesh.position );
        const q2 = new three_1.Quaternion().copy( camera.quaternion );
        
        function render() {
            camera.quaternion.slerpQuaternions( q1, q2, 0.01 );
        }

        // console.log(this.vector)
        this.object.lookAt = render
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
