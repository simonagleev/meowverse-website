import * as models from './Models.js';
import gsap from 'gsap';

let groupIntersected = null;
const myGroups = [
    models.menuGroup, 
    models.genesisIslandGroup, 
    models.meelkIslandGroup, 
    models.OGIslandGroup, 
    models.meowrushIslandGroup,
    models.meowverseIslandGroup,
    models.partnersIslandGroup,
    models.roadmapGroup,
]


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

    groupIntersected.position.y = Math.sin(elapsedTime * 2) * 0.1

}

export const hovering = (intersects, elapsedTime, outlinePass) => {
    if (intersects[0]) {

        console.log(intersects[0].object.name)

        let obj = intersects[0].object

        hoveredObj = obj

        getParent(obj)

        // animateIsland(obj, elapsedTime)

        outlineObj(obj, outlinePass)


        gsap.to(models.tipCircle.scale, { duration: 2, delay: 0, x: 1, y: 1, z: 1 })
        if (models.tipCircleTwitter) {
            gsap.to(models.tipCircleTwitter.scale, { duration: 2, delay: 0, x: 1, y: 1, z: 1 })

        }
        if (models.tipCircleBlog) {
            gsap.to(models.tipCircleBlog.scale, { duration: 2, delay: 0, x: 1, y: 1, z: 1 })

        }

    } else {
        hoveredObj = null
        groupIntersected = null
        outlinePass.selectedObjects = []
        gsap.to(models.tipCircle.scale, { duration: 1.5, delay: 0, x: 0, y: 0, z: 0 })

        if (models.tipCircleTwitter) {
            gsap.to(models.tipCircleTwitter.scale, { duration: 2, delay: 0, x: 0, y: 0, z: 0 })
        }
        if (models.tipCircleBlog) {
            gsap.to(models.tipCircleBlog.scale, { duration: 2, delay: 0, x: 0, y: 0, z: 0 })
        }

    }
}

function outlineObj(obj, outlinePass) {

    let model = getModelByMeshName(obj)
    let objArr = []
    // console.log(model.model)

    if (model.model !== null) {

        objArr.push(model.model)

    } else {
        objArr.push(groupIntersected)
    }

    outlinePass.selectedObjects = objArr
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


const getParent = (obj) => {

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

        gsap.to(controls.target, { duration: 2, delay: 0, x: groupIntersected.children[0].children[0].position.x, })
        gsap.to(controls.target, { duration: 2, delay: 0, y: groupIntersected.children[0].children[0].position.y, })
        gsap.to(controls.target, { duration: 2, delay: 0, z: groupIntersected.children[0].children[0].position.z, })


        gsap.to(camera.position, { duration: 2, delay: 0, x: groupIntersected.children[0].children[0].position.x, })
        gsap.to(camera.position, { duration: 2, delay: 0, z: groupIntersected.children[0].children[0].position.z + 5, })
    }
}

export const onFingerClickFocus = (camera, controls, group) => {
    gsap.to(controls.target, { duration: 2, delay: 0, x: group.position.x, })
    gsap.to(controls.target, { duration: 2, delay: 0, y: group.position.y, })
    gsap.to(controls.target, { duration: 2, delay: 0, z: group.position.z, })

    gsap.to(camera.position, { duration: 2, delay: 0, x: group.position.x, })
    gsap.to(camera.position, { duration: 2, delay: 0, z: group.position.z + 5, })
}

function getModelByMeshName(obj) {
    let object = null
    let shortName = null
    if (hoveredObj) {

        if (obj.name === "Cylinder047" || obj.name === "Cylinder047_1" || obj.name === "twitter" || obj.name === "twitterPlate") {
            object = models.twitter
            shortName = "twitter"
        }

        if (obj.name === "Cube000_Cube005_1" || obj.name === "Cube000_Cube005_2" || obj.name === "Cylinder036" || obj.name === "Cylinder036_1") {
            object = models.discord
            shortName = "discord"
        }

        if (obj.name === "Cube035_1" || obj.name === "Cube035" || obj.name === "Cylinder048" || obj.name === "Cylinder048_1") {
            object = models.blog
            shortName = "blog"
        }

        if (
            obj.name === "NFTsFingerSign" ||
            obj.name === "Sphere003" ||
            obj.name === "Cylinder041" ||
            obj.name === "Cylinder041_1" ||
            obj.name === "Sphere003_1" 
         
        ) {
            object = models.NFTsFinger
            shortName = "NFTsFinger"
        }

        if (
            obj.name === "gamesMeowverseFingerSign" ||
            obj.name === "Sphere001_1" ||
            obj.name === "Cylinder038_1" ||
            obj.name === "Cylinder038" ||
            obj.name === "gamesMeowverseFingerMushroom" ||
            obj.name === "Cylinder025" ||
            obj.name === "gamesMeowverseFingerKart" ||
            obj.name === "Sphere001_2" 
            
        ) {
            object = models.gamesMeowverseFinger
            shortName = "gamesMeowverseFinger"
        }

        if (
            obj.name === "roadmapFingerSign" ||
            obj.name === "Sphere005" ||
            obj.name === "roadmapPaw1" ||
            obj.name === "Sphere005_1" ||
            obj.name === "roadmapPaw2" 
           
        ) {
            object = models.roadmapFinger
            shortName = "roadmapFinger"
        }

        if (
            obj.name === "Sphere004" ||
            obj.name === "partnersFingerSign" ||
            obj.name === "Sphere004_1"
          
        ) {
            object = models.partnersFinger
            shortName = "partnersFinger"
        }

        // if (obj.name === "TokenSign_3" || obj.name === "TokenSign_2" || obj.name === "TokenSign_1") {
        //     object = models.bigIslandSign1
        //     shortName = "tokenomilksSign"
        // }

        // if (obj.name === "Bolt_3" || obj.name === "Bolt_4" || obj.name === "Bolt_5") {
        //     object = models.bigIslandSign2
        //     shortName = "genesisSign"
        // }

        // if (obj.name === "OG_Sign_1" || obj.name === "OG_Sign_2" || obj.name === "OG_Sign_3") {
        //     object = models.bigIslandSign3
        //     shortName = "originalSign"
        // }

        if (
            obj.name === "Genesis1002" ||
            obj.name === "Genesis1001" ||
            obj.name === "Genesis1" ||
            obj.name === "BOAT" ||
            obj.name === "OSbath" ||
            obj.name === "OSbath_1" ||
            obj.name === "Cylinder001" ||
            obj.name === "Cylinder001_1"
        ) {
            object = models.genesisLand
            shortName = "genesisLand"
        }

    }

    return ({ model: object, name: shortName })
}

export function animateBoat(elapsedTime) {
    if(models.genesisBoat) {
        // models.genesisBoat.position.y = Math.sin(elapsedTime * 2) * 0.02
        models.genesisBoat.rotation.z = Math.cos(elapsedTime * 2) * 0.02
        
    }
}


export const handleClick = (camera, controls) => {

    focusCamera(camera, controls)
    console.log(models.genesisLand)
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

    // if (model.name === "NFTsFinger") {
    //     onFingerClickFocus(camera, controls, models.bigIslandGroup)
    // }

    // if (model.name === "gamesMeowverseFinger") {
    //     onFingerClickFocus(camera, controls, models.meowverseIslandGroup)
    // }

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

// export const mushroomAnimation = () => {
//     let mushroomBody = models.meowverseIslandMushroom.children[0].children[0]
//     let mushroomDots = models.meowverseIslandMushroom.children[0].children[1]
//     let mushroomRing = models.meowverseIslandMushroom.children[1]
//     const tree1 = models.meowverseIslandTree1
//     const tree2 = models.meowverseIslandTree2

//     console.log(models.meowverseIslandTree1)

//     let tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
//     let tlRing = gsap.timeline({ repeat: -1, repeatDelay: 0});
//     let tlTree1 = gsap.timeline({ repeat: -1, repeatDelay: 0});
//     let tlTree2 = gsap.timeline({ repeat: -1, repeatDelay: 0});

    
//     tl.to([mushroomBody.scale, mushroomDots.scale], {duration: 1, delay: 0, y: 1.1, x: .9 });
//     tl.to([mushroomBody.scale, mushroomDots.scale], {duration: 1,  y: 1, x: 1})

//     tlTree1.to([tree1.scale,], {duration: .9, y: 1.03 });
//     tlTree1.to([tree1.scale,], {duration: 1, y: 1})

//     tlTree2.to([tree2.scale,], {duration: .8, y: 1.01 });
//     tlTree2.to([tree2.scale,], {duration: .8, y: 1})
// }
