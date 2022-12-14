import * as models from './Models.js';
import gsap from 'gsap';
// import { LightningStrike } from 'three/examples/jsm/geometries/LightningStrike.js'
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
let strikeCreated = false
export let strike = null

//animation flag
let btnFlag = true

// Roadmap
const roadmapDiv = document.querySelector('.roadmap-container')
const roadmapPicturesArray = document.querySelectorAll('.roadmap-item')

export function animateIsland(obj, elapsedTime) {
    groupIntersected.position.y = Math.sin(elapsedTime * 2) * 0.1
}

export const hovering = (intersects, elapsedTime, outlinePass) => {
    if (intersects[0]) {
        $('html,body').css('cursor', 'pointer'); // Меняет курсор
                
        // console.log(intersects[0].object.name)

        let obj = intersects[0].object

        hoveredObj = obj

        getParent(obj)

        outlineObj(obj, outlinePass)

        if (models.tipCircleTwitter && groupIntersected === models.menuGroup) {
            gsap.to(models.tipCircle.scale, { duration: 2, delay: 0, x: 1, y: 1, z: 1 })
        }
        if (models.tipCircleTwitter && groupIntersected === models.menuGroup) {
            gsap.to(models.tipCircleTwitter.scale, { duration: 2, delay: 0, x: 1, y: 1, z: 1 })
        }
        if (models.tipCircleBlog && groupIntersected === models.menuGroup) {
            gsap.to(models.tipCircleBlog.scale, { duration: 2, delay: 0, x: 1, y: 1, z: 1 })
        } 
        if (models.tipCircleGenesis && groupIntersected === models.genesisIslandGroup) {
            gsap.to(models.tipCircleGenesis.scale, { duration: 2, delay: 0, x: 1, y: 1, z: 1 })
        }
        if (models.tipCircleOG && groupIntersected === models.OGIslandGroup) {
            gsap.to(models.tipCircleOG.scale, { duration: 2, delay: 0, x: 1, y: 1, z: 1 })
        }
        if (models.tipCircleMeowrush && groupIntersected === models.meowrushIslandGroup) {
            gsap.to(models.tipCircleMeowrush.scale, { duration: 2, delay: 0, x: 1, y: 1, z: 1 })
        }
        if (models.tipCircleTokenomeelks && groupIntersected === models.meelkIslandGroup) {
            gsap.to(models.tipCircleTokenomeelks.scale, { duration: 2, delay: 0, x: 1, y: 1, z: 1 })
        }

    } else {
        $('html,body').css('cursor', 'default'); //меняет курсор назад
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
        if (models.tipCircleGenesis) {
            gsap.to(models.tipCircleGenesis.scale, { duration: 2, delay: 0, x: 0, y: 0, z: 0 })
        }
        if (models.tipCircleOG) {
            gsap.to(models.tipCircleOG.scale, { duration: 2, delay: 0, x: 0, y: 0, z: 0 })
        }
        if (models.tipCircleMeowrush) {
            gsap.to(models.tipCircleMeowrush.scale, { duration: 2, delay: 0, x: 0, y: 0, z: 0 })
        }
        if (models.tipCircleTokenomeelks) {
            gsap.to(models.tipCircleTokenomeelks.scale, { duration: 2, delay: 0, x: 0, y: 0, z: 0 })
        }
    }
}

function outlineObj(obj, outlinePass) {

    let model = getModelByMeshName(obj)
    let objArr = []

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
    if (groupIntersected) {

        for (const child of groupIntersected.children) {
            if (child.name.includes('IslandLand')) {
                gsap.to(controls.target, { duration: 2, delay: 0, x: child.children[0].position.x, })
                gsap.to(controls.target, { duration: 2, delay: 0, y: child.children[0].position.y, })
                gsap.to(controls.target, { duration: 2, delay: 0, z: child.children[0].position.z, })
        
                gsap.to(camera.position, { duration: 2, delay: 0, x: child.children[0].position.x, })
                gsap.to(camera.position, { duration: 2, delay: 0, z: child.children[0].position.z + 7, })
                gsap.to(camera.position, { duration: 2, delay: 0, y: child.children[0].position.y + 5, })
            } else if (child.name === 'menuIsland') {
                gsap.to(controls.target, { duration: 2, delay: 0, x: child.children[0].position.x, })
                gsap.to(controls.target, { duration: 2, delay: 0, y: child.children[0].position.y, })
                gsap.to(controls.target, { duration: 2, delay: 0, z: child.children[0].position.z, })
        
                gsap.to(camera.position, { duration: 2, delay: 0, x: child.children[0].position.x, })
                gsap.to(camera.position, { duration: 2, delay: 0, z: child.children[0].position.z + 7, })
                gsap.to(camera.position, { duration: 2, delay: 0, y: child.children[0].position.y + 5, })
            }
        }

        focusedOnIsland = true

        setTimeout(() => {
            showCloseBtn()
        }, 1500);
    }
}

export const onFingerClickFocus = (camera, controls, group) => {
    if (group === models.menuGroup) {
        if (window.innerWidth > 800) {
            gsap.to(controls.target, { duration: 2, delay: 0, x: 0, })
            gsap.to(controls.target, { duration: 2, delay: 0, y: 0.75, })
            gsap.to(controls.target, { duration: 2, delay: 0, z: -3.18, })

            gsap.to(camera.position, { duration: 2, delay: 0, x: -0.2, })
            gsap.to(camera.position, { duration: 2, delay: 0, z: 11, })
            gsap.to(camera.position, { duration: 2, delay: 0, y: 6.15, })
        } else {
            gsap.to(controls.target, { duration: 2, delay: 0, x: 0, })
            gsap.to(controls.target, { duration: 2, delay: 0, y: 2.8805, })
            gsap.to(controls.target, { duration: 2, delay: 0, z: -2, })
            
            gsap.to(camera.position, { duration: 2, delay: 0, x: -0.2, })
            gsap.to(camera.position, { duration: 2, delay: 0, y: 13, })
            gsap.to(camera.position, { duration: 2, delay: 0, z: 9.15, })
        }
    } else if (group === models.genesisIslandGroup) {
        gsap.to(controls.target, { duration: 2, delay: 0, x: -6.2, })
        gsap.to(controls.target, { duration: 2, delay: 0, y: 0.25 , })
        gsap.to(controls.target, { duration: 2, delay: 0, z: -7, })

        gsap.to(camera.position, { duration: 2, delay: 0, x: -7, })
        gsap.to(camera.position, { duration: 2, delay: 0, y: 16, })
        gsap.to(camera.position, { duration: 2, delay: 0, z: 4, })
    } else {
        for (const child of group.children) {
            if (child.name.includes('IslandLand')) {
                gsap.to(controls.target, { duration: 2, delay: 0, x: child.children[0].position.x, })
                gsap.to(controls.target, { duration: 2, delay: 0, y: child.children[0].position.y, })
                gsap.to(controls.target, { duration: 2, delay: 0, z: child.children[0].position.z, })
        
                gsap.to(camera.position, { duration: 2, delay: 0, x: child.children[0].position.x, })
                gsap.to(camera.position, { duration: 2, delay: 0, z: child.children[0].position.z + 7, })
                gsap.to(camera.position, { duration: 2, delay: 0, y: child.children[0].position.y + 7, })
            } 
        }
    }
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
            obj.name === "Sphere003_1" ||
            obj.name === "Cylinder063" ||
            obj.name === "Cylinder063_1" ||
            obj.name === "NFTsFingerGenCard" ||
            obj.name === "NFTsFingerOgCard" ||
            obj.name === "Sign_stick002" ||
            obj.name === "Sign002" ||
            obj.name === "Text002" 
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
            obj.name === "Sphere001_2" ||
            obj.name === "Sign_stick003" ||
            obj.name === "Sign003" ||
            obj.name === "Text003" ||
            obj.name === "Cylinder070" ||
            obj.name === "RetopoFlow004" ||
            obj.name === "RetopoFlow004_1" ||
            obj.name === "Cylinder071" ||
            obj.name === "Cylinder069" ||
            obj.name === "Cylinder068"    
        ) {
            object = models.gamesMeowverseFinger
            shortName = "gamesMeowverseFinger"
        }
        if (
            obj.name === "roadmapFingerSign" ||
            obj.name === "Sphere005" ||
            obj.name === "roadmapPaw1" ||
            obj.name === "Sphere005_1" ||
            obj.name === "roadmapPaw2" ||
            obj.name === "Sign_stick004" ||
            obj.name === "Sign004" ||
            obj.name === "Text005"
           
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
            object = models.genesisIslandGroup
            shortName = "genesisLand"
        }
        if (obj.name === "tipCircleTwitter1" || obj.name === "tipCircleTwitter2") {
            object = models.tipCircleTwitter
            shortName = "tipCircleTwitter"
        }
        if (obj.name === "tipCircleDiscord1" || obj.name === "tipCircleDiscord2") {
            object = models.tipCircle
            shortName = "tipCircleDiscord"
        }
        if (obj.name === "tipCircleBlog1" || obj.name === "tipCircleBlog1") {
            object = models.tipCircleBlog
            shortName = "tipCircleBlog"
        }
        if (obj.name === "tipCircleGenesis1" || obj.name === "tipCircleGenesis2") {
            object = models.tipCircleGenesis
            shortName = "tipCircleGenesis"
        }
        if (obj.name === "tipCircleOG1" || obj.name === "tipCircleOG2") {
            object = models.tipCircleOG
            shortName = "tipCircleOG"
        }
        if (obj.name === "tipCircleMeowrush1" || obj.name === "tipCircleMeowrush2") {
            object = models.tipCircleMeowrush
            shortName = "tipCircleMeowrush"
        }
        if (obj.name === "tipCircleTokenomeelks1" || obj.name === "tipCircleTokenomeelks2") {
            object = models.tipCircleTokenomeelks
            shortName = "tipCircleTokenomeelks"
        }
    }

    return ({ model: object, name: shortName })
}

export function animateBoat(elapsedTime) {
    if(models.genesisBoat) {
        models.genesisBoat.position.y = Math.sin(elapsedTime * 2) * 0.02 + 1.41
        models.genesisBoat.rotation.z = Math.cos(elapsedTime * 2) * 0.02
    }
}


export const handleClick = (camera, controls, scene) => {
    if (groupIntersected != models.cloudsGroup) {
        focusCamera(camera, controls)
    }

    let model = getModelByMeshName(hoveredObj)

    if (model.name === "NFTsFinger") {
        onFingerClickFocus(camera, controls, models.genesisIslandGroup)
    }
    if (model.name === "gamesMeowverseFinger") {
        onFingerClickFocus(camera, controls, models.meowverseIslandGroup)
    }
    if (model.name === "roadmapFinger") {
        onFingerClickFocus(camera, controls, models.roadmapGroup)
    }
    if (model.name === "partnersFinger") {
        onFingerClickFocus(camera, controls, models.partnersIslandGroup)
    }
    if(model.name === "red_button") {
        let redBtn = model.model[1]
        if(btnFlag) {
            btnFlag = false

            gsap.to(redBtn.position, { duration: 0.5, delay: 0, y: redBtn.position.y - 0.18 })
            gsap.to(redBtn.position, { duration: 0.5, delay: 0.5, y: redBtn.position.y })

            if (roadmapDiv.style.display !== 'flex') {
                roadmapDiv.style.display = 'flex'
                if(roadmapPicturesArray) {
                    roadmapPicturesArray[0].style.opacity = 1
                    roadmapPicturesArray[1].style.opacity = 1
                    roadmapPicturesArray[2].style.opacity = 1

                    gsap.to(roadmapPicturesArray[0].style, { duration: 0.3, delay: 0, scale: 1.1, ease: true})
                    gsap.to(roadmapPicturesArray[0].style, { duration: 0.3, delay: .3, scale: .9, ease: true})
                    gsap.to(roadmapPicturesArray[0].style, { duration: 0.3, delay: .6, scale: 1, ease: true})

                    gsap.to(roadmapPicturesArray[1].style, { duration: 0.3, delay: .4, scale: 1.1, ease: true})
                    gsap.to(roadmapPicturesArray[1].style, { duration: 0.3, delay: .7, scale: .9, ease: true})
                    gsap.to(roadmapPicturesArray[1].style, { duration: 0.3, delay: 1, scale: 1, ease: true})

                    gsap.to(roadmapPicturesArray[2].style, { duration: 0.3, delay: .8, scale: 1.1, ease: true})
                    gsap.to(roadmapPicturesArray[2].style, { duration: 0.3, delay: 1.1, scale: .9, ease: true})
                    gsap.to(roadmapPicturesArray[2].style, { duration: 0.3, delay: 1.4, scale: 1, ease: true})
                } 
            } else if (roadmapDiv.style.display === 'flex') {
                gsap.to(roadmapPicturesArray[0].style, { duration: .7, delay: 0, scale: 0, ease: true})
                gsap.to(roadmapPicturesArray[1].style, { duration: .5, delay: 0, scale: 0, ease: true})
                gsap.to(roadmapPicturesArray[2].style, { duration: .3, delay: 0, scale: 0, ease: true})
                
                gsap.to(roadmapDiv.style, { duration: .1, delay: .7, display: 'none', ease: true})
            }

            setTimeout(() => {
                btnFlag = true
            }, 1000);
        }
    }

    if(model.name === "cloud") {
        // createLightningStrike(model.model,scene)
    }

    if (model.name === "tipCircleTwitter") {
        window.open('https://twitter.com/DoliaCats', '_blank');
    }
    if (model.name === "tipCircleDiscord") {
        window.open('https://discord.com/invite/RetekYNarD', '_blank');
    }
    if (model.name === "tipCircleBlog") {
        window.open('https://medium.com/', '_blank');
    }
    if (model.name === "tipCircleGenesis") {
        window.open('https://opensea.io/collection/doliacatsgenesis', '_blank');
    }
    if (model.name === "tipCircleOG") {
        window.open('https://original.doliacats.xyz/', '_blank');
    }
    if (model.name === "tipCircleMeowrush") {
        window.open('https://meowrush.com/', '_blank');
    }
    if (model.name === "tipCircleTokenomeelks") {
        window.open('https://dolia-cats.gitbook.io/tokenomeelks', '_blank');
    }
}

// Закрытие roadmap по клику
if(roadmapDiv && window.innerWidth > 800) {
    roadmapDiv.addEventListener('click', () => {
        gsap.to(roadmapPicturesArray[0].style, { duration: .7, delay: 0, scale: 0, ease: true})
        gsap.to(roadmapPicturesArray[1].style, { duration: .5, delay: 0, scale: 0, ease: true})
        gsap.to(roadmapPicturesArray[2].style, { duration: .3, delay: 0, scale: 0, ease: true})

        gsap.to(roadmapDiv.style, { duration: 1, delay: .9, display: 'none', ease: true})
    })
} else if (roadmapDiv && window.innerWidth <= 800) {
    roadmapDiv.addEventListener('touchend', () => {
        gsap.to(roadmapPicturesArray[0].style, { duration: .7, delay: 0, scale: 0, ease: true})
        gsap.to(roadmapPicturesArray[1].style, { duration: .5, delay: 0, scale: 0, ease: true})
        gsap.to(roadmapPicturesArray[2].style, { duration: .3, delay: 0, scale: 0, ease: true})
        gsap.to(roadmapDiv.style, { duration: 1, delay: .9, display: 'none', ease: true})
    })
}

export const mushroomAnimation = () => {
    let mushroomBody;
    let mushroomDots;
    for(const child of models.meowrushIslandMushroom.children) {
        if (child.type === 'Group') {
            mushroomBody = child.children[0]
            mushroomDots = child.children[1]
        } 
    }
    
    let timeLine = gsap.timeline({ repeat: -1, repeatDelay: 0 });
       
    timeLine.to([mushroomBody.scale, mushroomDots.scale, ], {duration: 1, delay: 0, y: 1.1, x: .9 });
    timeLine.to([mushroomBody.scale, mushroomDots.scale, ], {duration: 1,  y: 1, x: 1})
}

export const coinFlipAnimation = () => {
    const coin = models.NFTsFingerToken;
    let timeLine = gsap.timeline({ repeat: -1, repeatDelay: 3 });

    timeLine.to(coin.position, {duration: .01, delay: 0, y: .7 });
    timeLine.to(coin.rotation, {duration: .3, delay: 0, z: -Math.PI * 2 });
    timeLine.to(coin.position, {duration: .05, delay: 0, y: 0.44 });
}

export const kartAnimation = () => {
    const kart = models.gamesMeowverseFingerKart;
    let timeLine = gsap.timeline({ repeat: -1, repeatDelay: 0 });
    
    timeLine.to(kart.rotation, {duration: .1, delay: 0, z: .01 });
}

function showCloseBtn() {
    let closeBtn = document.querySelector('.m-experienceHeader__cta')
    closeBtn.classList.add("active")
}

export function hideCloseBtn() {
    let closeBtn = document.querySelector('.m-experienceHeader__cta')
    closeBtn.classList.remove('hover')
    closeBtn.classList.remove('active')

    focusedOnIsland = false
    if (roadmapDiv.style.display === 'flex') {
        roadmapDiv.style.display = 'none'
        gsap.to(roadmapDiv.style, { duration: 1, delay: 0, scale: 0})
    }
}


export function animateClouds(elapsedTime) {
    let cloud1Angle = elapsedTime * 0.12
    models.cloud1.position.x = Math.cos(cloud1Angle) * 4
    models.cloud1.position.z = Math.sin(cloud1Angle) * 4
    models.cloud1.position.y = Math.sin(cloud1Angle)

    let cloud2Angle = -elapsedTime * 0.05
    models.cloud2.position.x = Math.cos(cloud2Angle) * 4
    models.cloud2.position.z = Math.sin(cloud2Angle) * 4
    models.cloud2.position.y = Math.sin(cloud2Angle)

    let cloud3Angle = elapsedTime * 0.07
    models.cloud3.position.x = Math.cos(cloud3Angle) * 6
    models.cloud3.position.z = Math.sin(cloud3Angle) * 5
    models.cloud3.position.y = Math.sin(cloud3Angle)

    let cloud5Angle = elapsedTime * 0.03
    models.cloud5.position.x = Math.cos(cloud5Angle) * 3
    models.cloud5.position.z = Math.sin(cloud5Angle) * 6
    models.cloud5.position.y = Math.sin(cloud5Angle)

    let cloud6Angle = -elapsedTime * 0.14
    models.cloud6.position.x = Math.cos(cloud6Angle) * 6
    models.cloud6.position.z = Math.sin(cloud6Angle) * 5
    models.cloud6.position.y = Math.sin(cloud6Angle)

    let cloud8Angle = -elapsedTime * 0.1
    models.cloud8.position.x = Math.cos(cloud8Angle) * 2
    models.cloud8.position.z = Math.sin(cloud8Angle) * 5
    models.cloud8.position.y = Math.sin(cloud8Angle)

    let cloud9Angle = -elapsedTime * 0.034
    models.cloud9.position.x = Math.cos(cloud9Angle) * 3.3 - 7
    models.cloud9.position.z = Math.sin(cloud9Angle) * 3.3
    models.cloud9.position.y = Math.cos(cloud9Angle)
    models.cloud9.rotation.x += Math.cos(Math.random()) / 500
    models.cloud9.rotation.z += Math.cos(Math.random()) / 100

    let cloud10Angle = -elapsedTime * 0.21
    models.cloud10.position.x = -Math.cos(cloud10Angle) * 3.3 - 10
    models.cloud10.position.z = Math.sin(cloud10Angle) * 1.6
    models.cloud10.position.y = Math.cos(cloud10Angle) - 1
}


// CATS ANIMATIONS
export const catAnimation9 = (deltaTime, elapsedTime) => {
    const cat9Angle = deltaTime / 3
    
    if (models.cat9) {
        models.mixerCat9.update(deltaTime)
        const ghostAngle = elapsedTime / 10

        models.cat9.position.x = Math.cos(ghostAngle) * 4
        models.cat9.position.y = Math.cos(deltaTime * 3) + 3
        models.cat9.position.z = Math.sin(ghostAngle) * 4 - 5
    }
}

export const catAnimation1and2 = (deltaTime) => {
    if (models.cat2) {
        models.mixerCat2.update(deltaTime)
    }

    if (models.cat1) {
        models.mixerCat1.update(deltaTime)
    }
}

export const catAnimation3 = (deltaTime) => {
    if (models.cat3) {
        models.mixerCat3.update(deltaTime)
    }
}

export const catAnimation5 = (deltaTime) => {
    if (models.cat5) {
        models.mixerCat5.update(deltaTime)
    }
}

export const catAnimation6 = (deltaTime) => {
    if (models.cat6) {
        models.mixerCat6.update(deltaTime)
    }
}

export const goFullscreen = (elem) => {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
}

export const toggleFullscreen = (elem) => {  
    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen().catch((err) => {
                console.log(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
              })
          } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen().catch((err) => {
                console.log(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
              })
          } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen().catch((err) => {
                console.log(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
              })
          }
    } else {
      document.exitFullscreen();
    }
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
