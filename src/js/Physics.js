import CANNON from 'cannon' 

const world = new CANNON.World()

world.gravity.set(0, - 9.82, 0)

const sphereShape = new CANNON.Sphere(0.5)

const sphereBody = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(0, 3, 0),
    shape: sphereShape
})

world.addBody(sphereBody)