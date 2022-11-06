import * as models from './Models.js'


const myGroups = [models.menuGroup, models.bigIslandGroup, models.roadmapGroup]
let groupIntersected = null

export function intersectAnimation(intersects) {
    if(intersects[0]) {

        console.log(intersects[0].object.name)

        let obj = intersects[0].object

        if(obj.name == "TW" || obj.name == "TW_2" || obj.name == "TW_1") {
            models.twitter.children[0].rotation.z -= .01
        }

        if(obj.name == "Cube000_Cube005_1" || obj.name == "Cube000_Cube005_2" || obj.name == "Cube000_Cube005_4" || obj.name == "Cube000_Cube005_3" ) {
            models.discord.children[0].rotation.z += .01
            models.discord.children[1].rotation.z += .01
        }

        if(obj.name == "Cube033_3" || obj.name == "Cube033_2" || obj.name == "Cube033_1" || obj.name == "Cube033") {
            models.blog.children[0].rotation.y += .01
            models.blog.children[1].rotation.y += .01
        }
    }
}


export function getParent(obj) {
    
    let element = obj
    if(element.parent === null){
        // console.log('got to scene')
        
    } else {
        // console.log('else happened')
        for(let i = 0; i < myGroups.length; i++) {

            if(element.uuid === myGroups[i].uuid){
                groupIntersected = myGroups[i]
            } else {
            }
        }
        element = element.parent
        getParent(element)
    }
};
