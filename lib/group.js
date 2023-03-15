"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Group {
    constructor() {
        this.group = [];
    }
    add(animation) {
        this.group.push(animation);
    }
    update() {
        if (this.group.length > 0) {
            this.group.forEach((animation) => {
                animation.update();
            });
        }
    }
}
exports.default = Group;
