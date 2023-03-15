import Animate from './animate'
import Group from './group'

const group = new Group()

const add = group.add.bind(group)
const update = group.update.bind(group)

export { add, update, Animate, group }

export default {
  add,
  update,
  Animate,
  group,
}
