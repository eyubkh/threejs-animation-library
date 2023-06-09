import { Vector3 } from 'three'
import { group } from './index'
import Raycaster from './raycaster'

type ObjectTypes = {
  mesh?: any
  from?: any
  raycaster?: any
  to?: any
  lookAt?: any
  start?: boolean
  update?: () => void
  delay?: number
}

class Animate {
  object: ObjectTypes = {}
  vector: any = new Vector3(0,0,-1)

  animate(mesh: any) {
    this.object.mesh = mesh
    this.object.from = new Vector3().add(mesh.position)

    return this
  }

  raycaster(mesh: any, camera: any) {
    this.object.raycaster = new Raycaster(camera, mesh)

    return this
  }

  from(x: number, y: number, z: number) {
    this.object.mesh.position.set(x, y, z)

    return this
  }

  to(x: number, y: number, z: number) {
    this.object.to = new Vector3(x, y, z)

    return this
  }

  lookAt(mesh: any, camera: any) {
    camera.lookAt(mesh.position)

    this.object.lookAt = this.lookAt.bind(this, mesh, camera)
    return this
  }

  start() {
    this.object.start = true

    this.object.update = this.update.bind(this)
    group.add(this.object)
  }

  delay(time: any) {
    this.object.delay = time

    return this
  }

  update() {
    if (this.object.raycaster) {
      this.object.raycaster.render()
      if (this.object.raycaster.intersects) {
        this.object.mesh.position.lerp(this.object.to, 0.02)
        this.object.lookAt()
      } else {
        this.object.mesh.position.lerp(this.object.from, 0.01)
      }
    }
  }
}

export default Animate
