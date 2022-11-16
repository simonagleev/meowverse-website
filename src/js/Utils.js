import * as models from './Models.js';
import gsap from 'gsap';
import * as THREE from 'three'
import { LightningStrike } from 'three/examples/jsm/geometries/LightningStrike.js'
import $ from "jquery";

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
    models.cloudsGroup
]


let hoveredObj = null
let focusedOnIsland = false


// strike flag
var strikeCreated = false
export var strike = null

//animation flag
var btnFlag = true


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

        // console.log(intersects[0].object.name)

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

        if(Array.isArray(model.model)) {
            objArr = model.model

        } else {
            objArr.push(model.model)
        }

        

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
    if (groupIntersected && !focusedOnIsland) {

        gsap.to(controls.target, { duration: 2, delay: 0, x: groupIntersected.children[0].children[0].position.x, })
        gsap.to(controls.target, { duration: 2, delay: 0, y: groupIntersected.children[0].children[0].position.y, })
        gsap.to(controls.target, { duration: 2, delay: 0, z: groupIntersected.children[0].children[0].position.z, })


        gsap.to(camera.position, { duration: 2, delay: 0, x: groupIntersected.children[0].children[0].position.x, })
        gsap.to(camera.position, { duration: 2, delay: 0, z: groupIntersected.children[0].children[0].position.z + 5, })

        focusedOnIsland = true

        setTimeout(() => {
            showCloseBtn()
        }, 1500);
        
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
        if(obj.name === "OG1001") {
            object = hoveredObj
            shortName = "OriginalNFT002"
        }

        if(obj.name === "OG1") {
            object = hoveredObj
            shortName = "OriginalNFT001"
        }

        if(obj.name === "OG1002") {
            object = hoveredObj
            shortName = "OriginalNFT003"
        }

        if(obj.name === "Mball002" || obj.name === "Mball003" || obj.name === "Mball004" || obj.name === "Mball005" || obj.name === "Mball006" || obj.name === "Mball007") {
            object = obj
            shortName = "cloud"
        }



        if(obj.name == "Cylinder014" || obj.name == "Cylinder013" || obj.name == "Text011") {
            object = [models.roadmapIslandBaseButton,models.roadmapIslandButton]
            shortName = "red_button"
        }

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


export const handleClick = (camera, controls,scene) => {
    if(groupIntersected != models.cloudsGroup) {
        focusCamera(camera, controls)
    }
    
    
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

    // if(model.name === "OriginalNFT002") {
       
    // }
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

    if(model.name === "red_button") {
        let redBtn = model.model[1]

        if(btnFlag) {
            btnFlag = false

            gsap.to(redBtn.position, { duration: 0.5, delay: 0, y: redBtn.position.y - 0.18 })
            gsap.to(redBtn.position, { duration: 0.5, delay: 0.5, y: redBtn.position.y })

            setTimeout(() => {
                btnFlag = true
            }, 1000);
        }
    }

    if(model.name === "cloud") {
        // createLightningStrike(model.model,scene)
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


function showCloseBtn() {
    let closeBtn = document.querySelector('.m-experienceHeader__cta')
    closeBtn.classList.add("active")
}

export function hideCloseBtn() {
    let closeBtn = document.querySelector('.m-experienceHeader__cta')
    closeBtn.classList.remove('hover')
    closeBtn.classList.remove('active')

    focusedOnIsland = false
}


export function animateClouds(elapsedTime) {
    let clouds = models.cloudsGroup.children

    

    let cloud1Angle = elapsedTime * 0.12
    clouds[0].position.x = Math.cos(cloud1Angle) * 4
    clouds[0].position.z = Math.sin(cloud1Angle) * 4
    clouds[0].position.y = Math.sin(cloud1Angle)

    let cloud2Angle = -elapsedTime * 0.05
    clouds[1].position.x = Math.cos(cloud2Angle) * 4
    clouds[1].position.z = Math.sin(cloud2Angle) * 4
    clouds[1].position.y = Math.sin(cloud2Angle)

    let cloud3Angle = elapsedTime * 0.07
    clouds[2].position.x = Math.cos(cloud3Angle) * 6
    clouds[2].position.z = Math.sin(cloud3Angle) * 5
    clouds[2].position.y = Math.sin(cloud3Angle)

    let cloud4Angle = elapsedTime * 0.1
    clouds[3].position.x = Math.cos(cloud4Angle) * 7
    clouds[3].position.z = Math.sin(cloud4Angle) * 5
    clouds[3].position.y = Math.sin(cloud4Angle)

    let cloud5Angle = elapsedTime * 0.03
    clouds[4].position.x = Math.cos(cloud5Angle) * 3
    clouds[4].position.z = Math.sin(cloud5Angle) * 6
    clouds[4].position.y = Math.sin(cloud5Angle)

    let cloud6Angle = -elapsedTime * 0.14
    clouds[5].position.x = Math.cos(cloud6Angle) * 6
    clouds[5].position.z = Math.sin(cloud6Angle) * 5
    clouds[5].position.y = Math.sin(cloud6Angle)

    let cloud7Angle = -elapsedTime * 0.01
    clouds[6].position.x = Math.cos(cloud7Angle) * 6
    clouds[6].position.z = Math.sin(cloud7Angle) * 5
    clouds[6].position.y = Math.sin(cloud7Angle)

}


// function createLightningStrike(obj,scene) {
    
//     // const rayParams = {
//     //     sourceOffset: obj.position,
//     //     destOffset: new THREE.Vector3(obj.position.x, obj.position.y - 3,obj.position.z),
//     //     isEternal: true,
//     //     // birthTime: 0,
//     //     // deathTime: 0.7,
//     //     radius0: 2,
// 	// 				radius1: 1,
// 	// 				minRadius: 2.5,
//     //                 radius1Factor: 0.5,
//     //                 radius1Factor: 0.2,
// 	// 				maxIterations: 7,
//     //     propagationTimeFactor: 0.05,
// 	// 				vanishingTimeFactor: 0.95,
// 	// 				subrayPeriod: 3.5,
// 	// 				subrayDutyCycle: 0.6,
// 	// 				maxSubrayRecursion: 3,
// 	// 				ramification: 7,
// 	// 				recursionProbability: 0.6,
//     //                 timeScale: 0.7,

// 	// 				roughness: 0.85,
// 	// 				straightness: 0.6,

//     // }

//     const rayParams = {
//         sourceOffset: new THREE.Vector3(1,1,1),
// 					destOffset: new THREE.Vector3(1,1,1),
// 					radius0: 4,
// 					radius1: 4,
// 					minRadius: 2.5,
// 					maxIterations: 7,
// 					isEternal: true,

// 					timeScale: 0.7,

// 					propagationTimeFactor: 0.05,
// 					vanishingTimeFactor: 0.95,
// 					subrayPeriod: 3.5,
// 					subrayDutyCycle: 0.6,
// 					maxSubrayRecursion: 3,
// 					ramification: 7,
// 					recursionProbability: 0.6,

// 					roughness: 0.85,
// 					straightness: 0.6
//     }

//     const lightningStrike = new LightningStrike(rayParams)
//     const lightningMaterial = new THREE.MeshBasicMaterial()

//     const strikeMesh = new THREE.Mesh(lightningStrike,lightningMaterial)

//     scene.add(strikeMesh)

//     strike = lightningStrike
//     strikeCreated = true

    
    
// }

// export function animateLightningStrike(elapsedTime) {
//     if(strikeCreated) {
//         strike.update()
//     }
// }
