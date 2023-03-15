import * as THREE from 'three'

class Raycaster {
  raycaster = new THREE.Raycaster()
  pointer = new THREE.Vector2()

  meshArray = []

  mesh: any
  camera: any
  screenElement: any
  intersects: any

  constructor(camera: any, mesh: any) {
    this.mesh = mesh
    this.camera = camera
    this.screenElement = document.getElementsByTagName('iframe')

    this.intersects = false
    window.addEventListener('mousemove', (event) => this.onHover(event))
  }

  onHover(event: any) {
    this.intersects = !!this.raycaster.intersectObject(this.mesh)[0]

    if (this.intersects === true && this.screenElement[0]) {
      this.screenElement[0].style.pointerEvents = 'initial'
    } else if (this.intersects === false && this.screenElement[0]) {
      this.screenElement[0].style.pointerEvents = 'none'
    }
    this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1
    this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
  }

  render() {
    this.raycaster.setFromCamera(this.pointer, this.camera)
  }
}

export default Raycaster
