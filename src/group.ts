class Group {
  private group: any[] = []

  add(animation: any) {
    this.group.push(animation)
  }

  update() {
    if (this.group.length > 0) {
      this.group.forEach((animation) => {
        animation.update()
      })
    }
  }
}

export default Group
