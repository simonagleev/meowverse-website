import * as models from './Models.js'

let groupIntersected = null;
const myGroups = [models.menuGroup, models.bigIslandGroup, models.meowverseIslandGroup, models.roadmapGroup]

let hoveredObj = null

const createToken = (x, y, z, group,bigIslandToken) => {
    
    if (bigIslandToken) {
        let coin = bigIslandToken.clone()
        coin.position.x = x
        coin.position.y = y
        coin.position.z = z
        
    }
}


export function intersectAnimationMedia(intersects,elapsedTime) {
    if(intersects[0]) {

        console.log(intersects[0].object.name)

        let obj = intersects[0].object
        hoveredObj = obj

        

        let result = getModelByMeshName(intersects[0].object)

        switch(result.name){
            case "twitter":
                models.twitter.children[0].rotation.z -= .01
                break
            
            case "discord":
                models.discord.children[0].rotation.z += .01
                models.discord.children[1].rotation.z += .01
                break
            
            case "blog":
                models.blog.children[0].rotation.z -= .01
                models.blog.children[1].rotation.z -= .01
                break

        }

        animateIsland(obj, elapsedTime)

    } else {
        groupIntersected = null
    }
}


function animateIsland(obj,elapsedTime){

    getParent(obj)

    groupIntersected.position.y = Math.sin(elapsedTime *2) * 0.1

}

function getParent(obj) {

    let element = obj
    if (element.parent === null) {

    } else {
        for (let i = 0; i < myGroups.length; i++) {

            if (element.uuid === myGroups[i].uuid) {
                groupIntersected = myGroups[i]
            } else {
            }
        }
        element = element.parent
        getParent(element)
    }
};

export function focusCamera(camera,controls){
    if(groupIntersected){

        controls.target.x = groupIntersected.position.x
        controls.target.y = groupIntersected.position.y
        controls.target.z = groupIntersected.position.z

        camera.position.x = groupIntersected.position.x
        // camera.position.y = group.position.y + 4
        camera.position.z = groupIntersected.position.z + 5


    }

    let model = getModelByMeshName(hoveredObj)

    if(model.name == "twitter") {
        window.open('https://twitter.com/DoliaCats_eth', '_blank');
    }

    if(model.name == "discord") {
        window.open('https://discord.com/invite/RetekYNarD', '_blank');
    }

    if(model.name == "blog") {
        window.open('https://medium.com/', '_blank');
    }

}

function getModelByMeshName(obj) {

    let object = null
    let shortName = null
    

    if(obj.name == "TW" || obj.name == "TW_2" || obj.name == "TW_1") {
        object = models.twitter
        shortName = "twitter"
    }

    if(obj.name == "Cube000_Cube005_1" || obj.name == "Cube000_Cube005_2" || obj.name == "Cube000_Cube005_4" || obj.name == "Cube000_Cube005_3" ) {
        object = models.discord
        shortName = "discord"
    }

    if(obj.name == "Cube033_3" || obj.name == "Cube033_2" || obj.name == "Cube033_1" || obj.name == "Cube033") {
        object = models.blog
        shortName = "blog"
    }


    return({model: object, name: shortName})
}

export function animateBoat(elapsedTime) {
    models.bigIslandBoat.position.y = Math.sin(elapsedTime * 2) * 0.02
    models.bigIslandBoat.rotation.z = Math.cos(elapsedTime * 2) * 0.02
}
