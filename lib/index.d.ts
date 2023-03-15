import Animate from './animate';
import Group from './group';
declare const group: Group;
declare const add: (animation: any) => void;
declare const update: () => void;
export { add, update, Animate, group };
declare const _default: {
    add: (animation: any) => void;
    update: () => void;
    Animate: typeof Animate;
    group: Group;
};
export default _default;
