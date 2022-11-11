import CANNON from 'cannon' 
import * as models from './Models.js'



export const world = new CANNON.World()

world.gravity.set(0, - 9.82, 0)

const sphereShape = new CANNON.Sphere(0.5)

export const sphereBody = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(6, 3, 1.5),
    shape: sphereShape
})
world.addBody(sphereBody)



const floorShape = new CANNON.Cylinder(1.3, 1, 2, 5)

export const roadmapIslandFloorBody = new CANNON.Body( {
    mass: 0,
    position: new CANNON.Vec3(6.5, 0, 1.5),
    shape: floorShape
})
roadmapIslandFloorBody.quaternion.setFromAxisAngle(
    new CANNON.Vec3(-1, 0, 0),
    Math.PI / 2
)
world.addBody(roadmapIslandFloorBody)

const roadmapAShape = new CANNON.Cylinder(.1, .1, 1, 5)

export let roadmapABody = null;
// setTimeout(() => {
//     let x = models.roadmapIslandA.parent.position.x + models.roadmapIslandA.children[0].position.x
//     let y = models.roadmapIslandA.parent.position.y + models.roadmapIslandA.children[0].position.y
//     let z = models.roadmapIslandA.parent.position.z + models.roadmapIslandA.children[0].position.z


        roadmapABody = new CANNON.Body({
        mass: 2,
        position: new CANNON.Vec3(6, 6, 1.5),
        shape: roadmapAShape
    })
    world.addBody(roadmapABody)
// }, 1)
