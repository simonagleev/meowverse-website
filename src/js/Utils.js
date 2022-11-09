import * as models from './Models.js';
import gsap from 'gsap';

let groupIntersected = null;
const myGroups = [models.menuGroup, models.bigIslandGroup, models.meowverseIslandGroup, models.roadmapGroup]

let hoveredObj = null


// export const createToken = (x, y, z, group) => {
//     if (models.bigIslandToken) {
        
//         let coin = models.bigIslandToken.clone()
//         coin.position.x = x
//         coin.position.y = y
//         coin.position.z = z
//         group.add(coin)
//     } else {
//     }
// }

export function animateIsland(obj, elapsedTime) {

    getParent(obj)

    groupIntersected.position.y = Math.sin(elapsedTime * 2) * 0.1

}

export const hovering = (intersects, elapsedTime) => {
    if (intersects[0]) {

        console.log(intersects[0].object.name)

        let obj = intersects[0].object

        hoveredObj = obj

        animateIsland(obj, elapsedTime)
    } else {
        hoveredObj = null
        groupIntersected = null
    }
}


export function intersectAnimationMedia(intersects) {
    if (intersects[0]) {

        let result = getModelByMeshName(intersects[0].object)

        switch (result.name) {
            case "twitter":
                models.twitter.rotation.z -= .01
                break

            case "discord":
                models.discord.children[0].rotation.z += .01
                models.discord.children[1].rotation.z += .01
                break

            case "blog":
                models.blog.children[0].rotation.y -= .01
                models.blog.children[1].rotation.y -= .01
                break
        }
    } 
}


function getParent(obj) {

    let element = obj
    if (element.parent === null) {

    } else {
        for (let i = 0; i < myGroups.length; i++) {

            if (element.uuid === myGroups[i].uuid) {
                groupIntersected = myGroups[i]
            } 
        }
        element = element.parent
        getParent(element)
    }
};



export function focusCamera(camera, controls) {
    if (groupIntersected) {

        gsap.to(controls.target, {duration: 2, delay: 0, x: groupIntersected.position.x , })
        gsap.to(controls.target, {duration: 2, delay: 0, y: groupIntersected.position.y, })
        gsap.to(controls.target, {duration: 2, delay: 0, z: groupIntersected.position.z, })
        
        // controls.target.x = groupIntersected.position.x
        // controls.target.y = groupIntersected.position.y
        // controls.target.z = groupIntersected.position.z

        // camera.position.x = groupIntersected.position.x
        // camera.position.y = group.position.y + 4
        // camera.position.z = groupIntersected.position.z + 5

        gsap.to(camera.position, {duration: 2, delay: 0, x: groupIntersected.position.x , })
        gsap.to(camera.position, {duration: 2, delay: 0, z: groupIntersected.position.z + 5, })
    }
}

export const onFingerClickFocus = (camera, controls, group) => {
    gsap.to(controls.target, {duration: 2, delay: 0, x: group.position.x , })
    gsap.to(controls.target, {duration: 2, delay: 0, y: group.position.y, })
    gsap.to(controls.target, {duration: 2, delay: 0, z: group.position.z, })

    gsap.to(camera.position, {duration: 2, delay: 0, x: group.position.x , })
    gsap.to(camera.position, {duration: 2, delay: 0, z: group.position.z + 5, })
}

function getModelByMeshName(obj) {
    let object = null
    let shortName = null
    if (hoveredObj) {

        if (obj.name === "Cylinder047" || obj.name === "Cylinder047_1" || obj.name === "twitter" || obj.name === "twitterPlate") {
            object = models.twitter
            shortName = "twitter"
        }

        if (obj.name === "Cube000_Cube005_1" || obj.name === "Cube000_Cube005_2" || obj.name === "Cylinder036"  || obj.name === "Cylinder036_1" ) {
            object = models.discord
            shortName = "discord"
        }

        if (obj.name === "Cube033_1" || obj.name === "Cube033" || obj.name === "Cylinder048"  || obj.name === "Cylinder048_1") {
            object = models.blog
            shortName = "blog"
        }

        if (
            obj.name === "Cube006_1" ||
            obj.name === "Cube006_2" ||
            obj.name === "Cube006_3" ||
            obj.name === "Cube006_4" ||
            obj.name === "Cube006_5" ||
            obj.name === "Cube006_6" ||
            obj.name === "Cube006_7" ||
            obj.name === "Cube006_8" ||
            obj.name === "Cube006_9" ||
            obj.name === "Cube006_10"
        ) {
            object = models.NFTsFinger
            shortName = "NFTsFinger"
        }

        if (
            obj.name === "Cube004_1" ||
            obj.name === "Cube004_2" ||
            obj.name === "Cube004_3" ||
            obj.name === "Cube004_4" ||
            obj.name === "Cube004_5" ||
            obj.name === "Cube004_6" ||
            obj.name === "Cube004_7" ||
            obj.name === "Cube004_8" ||
            obj.name === "Cube004"
        ) {
            object = models.gamesMeowverseFinger
            shortName = "gamesMeowverseFinger"
        }

        if (
            obj.name === "Cube053_1" ||
            obj.name === "Cube053_2" ||
            obj.name === "Cube053_3" ||
            obj.name === "Cube053_4" ||
            obj.name === "Cube053_5" ||
            obj.name === "Cube053_6" ||
            obj.name === "Cube053"
        ) {
            object = models.roadmapFinger
            shortName = "roadmapFinger"
        }

        if (obj.name === "TokenSign_3" || obj.name === "TokenSign_2" || obj.name === "TokenSign_1") {
            object = models.bigIslandSign1
            shortName = "tokenomilksSign"
        }

        if (obj.name === "Bolt_3" || obj.name === "Bolt_4" || obj.name === "Bolt_5") {
            object = models.bigIslandSign2
            shortName = "genesisSign"
        }

        if (obj.name === "OG_Sign_1" || obj.name === "OG_Sign_2" || obj.name === "OG_Sign_3") {
            object = models.bigIslandSign3
            shortName = "originalSign"
        }

    }

    return ({ model: object, name: shortName })
}

export function animateBoat(elapsedTime) {
    models.bigIslandBoat.position.y = Math.sin(elapsedTime * 2) * 0.02
    models.bigIslandBoat.rotation.z = Math.cos(elapsedTime * 2) * 0.02
}


export const handleClick = (camera, controls) => {

    focusCamera(camera, controls)

    let model = getModelByMeshName(hoveredObj)

    if (model.name === "twitter") {
        window.open('https://twitter.com/DoliaCats_eth', '_blank');
    }

    if (model.name === "discord") {
        window.open('https://discord.com/invite/RetekYNarD', '_blank');
    }

    if (model.name === "blog") {
        window.open('https://medium.com/', '_blank');
    }

    if (model.name === "NFTsFinger") {
        onFingerClickFocus(camera, controls, models.bigIslandGroup)
    }

    if (model.name === "gamesMeowverseFinger") {
        onFingerClickFocus(camera, controls, models.meowverseIslandGroup)
    }

    if (model.name === "roadmapFinger") {
        onFingerClickFocus(camera, controls, models.roadmapGroup)
    }

    if (model.name === "tokenomilksSign") {
        window.open('https://doliacats.com#tokenomilks/', '_blank');
    }

    if (model.name === "genesisSign") {
        window.open('http://genesis.doliacats.com/', '_blank');
    }

    if (model.name === "originalSign") {
        window.open('https://doliacats.com/', '_blank');
    }
    
}

