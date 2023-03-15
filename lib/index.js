"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.group = exports.Animate = exports.update = exports.add = void 0;
const animate_1 = require("./animate");
exports.Animate = animate_1.default;
const group_1 = require("./group");
const group = new group_1.default();
exports.group = group;
const add = group.add.bind(group);
exports.add = add;
const update = group.update.bind(group);
exports.update = update;
exports.default = {
    add,
    update,
    Animate: animate_1.default,
    group,
};
