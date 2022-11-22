import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { LightningStrike } from 'three/examples/jsm/geometries/LightningStrike.js'
import * as dat from 'lil-gui'
import { Vector3 } from 'three'
import * as models from './js/Models.js'
import * as particles from './js/Particles.js'
import * as light from './js/Lights.js'
import * as utils from './js/Utils.js'
import * as loaders from './js/Loaders.js'
import gsap from 'gsap';
import * as physics from './js/Physics.js'
import './app.js'

/**
 * HTML
 */

const closeBtn = document.querySelector('.m-experienceHeader__cta')
closeBtn.addEventListener('click', (event) => {
    event.preventDefault()
    utils.onFingerClickFocus(camera, controls, models.menuGroup)
    // camera.position.set(-0.2, 11, 6.15)
    // controls.target.set(0, 0.75, -3.18)
    utils.hideCloseBtn()

    //Костыль для мобилки
    mouse.x = 0
    mouse.y = -0.99
})

/**
 * Base
 */


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
export const scene = new THREE.Scene()

/**
 * Preloader 
 */

const progressBarontainer = document.querySelector('.progress-bar-container')
const pawsArr = document.querySelectorAll('.paw-pic')

loaders.loadingManager.onProgress = (url, loaded, total) => {
    // progressBar.value = (loaded / total) * 100
    if ((loaded / total) * 100 <= 10) {
        gsap.to(pawsArr[0], { duration: .5, delay: 0, opacity: 1 })

    } else if (((loaded / total) * 100) > 10 && ((loaded / total) * 100) <= 20) {
        gsap.to(pawsArr[1], { duration: .5, delay: 0, opacity: 1 })
        gsap.to(pawsArr[0], { duration: 1.5, delay: 0, opacity: .5 })

    } else if (((loaded / total) * 100) > 20 && ((loaded / total) * 100) <= 30) {
        gsap.to(pawsArr[2], { duration: .5, delay: 0, opacity: 1 })
        gsap.to(pawsArr[1], { duration: 1.5, delay: .6, opacity: .5 })

    } else if (((loaded / total) * 100) > 30 && ((loaded / total) * 100) <= 40) {
        gsap.to(pawsArr[3], { duration: .5, delay: 0, opacity: 1 })
        gsap.to(pawsArr[2], { duration: 1.5, delay: .6, opacity: .5 })

    } else if (((loaded / total) * 100) > 40 && ((loaded / total) * 100) <= 50) {
        gsap.to(pawsArr[4], { duration: .5, delay: 0, opacity: 1 })
        gsap.to(pawsArr[3], { duration: 1.5, delay: .6, opacity: .5 })

    } else if (((loaded / total) * 100) > 50 && ((loaded / total) * 100) <= 60) {
        gsap.to(pawsArr[5], { duration: .5, delay: 0, opacity: 1 })
        gsap.to(pawsArr[4], { duration: 1.5, delay: .6, opacity: .5 })

    } else if (((loaded / total) * 100) > 60 && ((loaded / total) * 100) <= 70) {
        gsap.to(pawsArr[6], { duration: .5, delay: 0, opacity: 1 })
        gsap.to(pawsArr[5], { duration: 1.5, delay: .6, opacity: .5 })

    } else if (((loaded / total) * 100) > 70 && ((loaded / total) * 100) <= 80) {
        gsap.to(pawsArr[7], { duration: .5, delay: 0, opacity: 1 })
        gsap.to(pawsArr[6], { duration: 1.5, delay: .6, opacity: .5 })

    } else if (((loaded / total) * 100) > 80 && ((loaded / total) * 100) <= 90) {
        gsap.to(pawsArr[8], { duration: .5, delay: 0, opacity: 1 })
        gsap.to(pawsArr[7], { duration: 1.5, delay: .6, opacity: .5 })

    } else if (((loaded / total) * 100) > 90 && ((loaded / total) * 100) <= 100) {
        gsap.to(pawsArr[9], { duration: .5, delay: 0, opacity: 1 })
        gsap.to(pawsArr[8], { duration: 1.5, delay: .6, opacity: .5 })
    }

}

loaders.loadingManager.onLoad = () => {
    console.log('LOADED')
    tick()
    models.createAllTipCircles()

    gsap.to(progressBarontainer, { duration: 1, delay: 0, opacity: 0, display: 'none', })

    utils.mushroomAnimation()
    utils.coinFlipAnimation()
    utils.kartAnimation()
    // Костыль дял мобилки
    mouse.x = 0
    mouse.y = -0.99

    console.log(camera.position)
    console.log(controls.target)
}


/**
 *  Models
 */

// menu Island
scene.add(models.menuGroup)

// GENESIS Island
scene.add(models.genesisIslandGroup)

// MEELK Island
scene.add(models.meelkIslandGroup)

// OG Island
scene.add(models.OGIslandGroup)

// Meowrush island
scene.add(models.meowrushIslandGroup)

// Meowverse island
scene.add(models.meowverseIslandGroup)

// Partners Island
scene.add(models.partnersIslandGroup)

// Roadmap island
scene.add(models.roadmapGroup)

// CLOUDS
scene.add(models.cloudsGroup)

// LOgo
scene.add(models.logo)

// Tip circle
// scene.add(models.tipCircle)

/**
 * SKYBOX
 */

scene.background = new THREE.CubeTextureLoader()
    .load([
        '/space/px.png',
        '/space/nx.png',
        '/space/py.png',
        '/space/ny.png',
        '/space/pz.png',
        '/space/nz.png'
    ]);


/**
 *  PARTICLES
 */
scene.add(particles.particles)

/**
 * FOG
 */

const fog = new THREE.Fog(0x8C97F4, 1, 50)
// scene.fog = fog

/**
 * Lights
 */
scene.add(light.ambientLight)
scene.add(light.directionalLight)

scene.add(light.pointLightBigIsland)

scene.add(light.pointLightmenuIsland)

scene.add(light.spotlight)
scene.add(light.spotlight.target)


/**
 * 
 * HELPERS 
 */
// const helper = new THREE.DirectionalLightHelper(directionalLight, 5);
// const helper1 = new THREE.PointLightHelper(pointLightBigIsland, 1);
// const helper2 = new THREE.PointLightHelper(pointLightmenuIsland, 1);
// const spotlightHelper = new THREE.SpotLightHelper(spotlight, 1)
// scene.add(spotlightHelper)
//  scene.add( helper, helper1, helper2 );


/**
 * Raycaster
 */

const raycaster = new THREE.Raycaster()

const rayOrigin = new THREE.Vector3(- 3, 0, 0)
const rayDirection = new THREE.Vector3(10, 0, 0)
rayDirection.normalize()


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    //update composer
    effectComposer.setSize(sizes.width, sizes.height)
    effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})



/**
 * Mouse
 */
const mouse = new THREE.Vector2()

window.addEventListener('mousemove', (event) => {
    if (window.innerWidth > 800) {
        mouse.x = event.clientX / sizes.width * 2 - 1
        mouse.y = - (event.clientY / sizes.height) * 2 + 1
    } else {
        // mouse.x = 0
        // mouse.y = 0
    }

})


/**
 * UTILS
 */

// Находит родителей вплоть до Scene
let groupIntersected = null;

let parentBeforScene = null;

const getParent = (obj) => {

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

//Events
if (window.innerWidth < 800) {
    window.addEventListener('touchstart', (event) => {
        console.log('touch start')
        console.log(event)

        // event.preventDefault()
        mouse.x = +(event.targetTouches[0].pageX / sizes.width) * 2 + -1
        mouse.y = -(event.targetTouches[0].pageY / sizes.height) * 2 + 1
    })
    window.addEventListener('touchmove', (event) => {
        console.log('touch move')

        event.preventDefault()
        mouse.x = +(event.targetTouches[0].pageX / sizes.width) * 2 + -1
        mouse.y = -(event.targetTouches[0].pageY / sizes.height) * 2 + 1
    })
    window.addEventListener('touchend', (event) => {
        console.log('touch end')

        utils.handleClick(camera, controls, scene)
    })
} else {
    window.addEventListener('click', (event) => {
        event.preventDefault()
        utils.handleClick(camera, controls, scene)
    })
}


/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
if (window.innerWidth > 800) {
    camera.position.set(-0.2, 11, 6.15)
} else {
    camera.position.set(-0.2, 13, 9.15)
}
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
if (window.innerWidth > 800) {
    controls.target.set(0, 0.75, -3.18)

} else {
    controls.target.set(0, 2.8805, -2)
}
controls.enableDamping = true
controls.maxDistance = 15
controls.minDistance = 2
controls.maxPolarAngle = 1.4
controls.minAzimuthAngle = - Math.PI / 4
controls.maxAzimuthAngle = Math.PI / 4

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Post-processing & outline
 */
const effectComposer = new EffectComposer(renderer)
effectComposer.setSize(sizes.width, sizes.height);
const renderPass = new RenderPass(scene, camera)
effectComposer.addPass(renderPass)

const outlinePass = new OutlinePass(new THREE.Vector2(sizes.width, sizes.height), scene, camera);
outlinePass.edgeStrength = 3;
outlinePass.edgeThickness = 2.5;
outlinePass.visibleEdgeColor = new THREE.Color("#ffffff")
outlinePass.hiddenEdgeColor = new THREE.Color("#190a05")
outlinePass.usePatternTexture = false
effectComposer.addPass(outlinePass)




/**
 * DEBUG
 */
const gui = new dat.GUI()
gui.close()
// gui.add(controls, 'maxAzimuthAngle').min(0).max(Math.PI * 2).step(0.1)

gui.add(models.tipCircle.position, 'x').min(-10).max(10).step(0.01)
gui.add(models.tipCircle.position, 'y').min(-10).max(10).step(0.01)
gui.add(models.tipCircle.position, 'z').min(-10).max(10).step(0.01)

gui.add(camera.position, 'x').min(-20).max(20).step(0.01)
gui.add(camera.position, 'y').min(-20).max(20).step(0.01)
gui.add(camera.position, 'z').min(-20).max(20).step(0.01)

gui.add(controls.target, 'x').min(-20).max(20).step(0.01)
gui.add(controls.target, 'y').min(-20).max(20).step(0.01)
gui.add(controls.target, 'z').min(-20).max(20).step(0.01)

gui.add(models.logo.rotation, 'x').min(-20).max(20).step(0.01)
gui.add(models.logo.rotation, 'y').min(-20).max(20).step(0.01)
gui.add(models.logo.rotation, 'z').min(-20).max(20).step(0.01)

setTimeout(() => {
    gui.add(models.cat9.position, 'x').min(-20).max(20).step(0.01)
    gui.add(models.cat9.position, 'y').min(-20).max(20).step(0.01)
    gui.add(models.cat9.position, 'z').min(-20).max(20).step(0.01)
}, 3000)


// const rayParams = {
//     sourceOffset: new THREE.Vector3(1,1,1),
//                 destOffset: new THREE.Vector3(2,3,4),
//                 radius0: 4,
//                 radius1: 4,
//                 minRadius: 2.5,
//                 maxIterations: 7,
//                 isEternal: true,

//                 timeScale: 0.7,

//                 propagationTimeFactor: 0.05,
//                 vanishingTimeFactor: 0.95,
//                 subrayPeriod: 3.5,
//                 subrayDutyCycle: 0.6,
//                 maxSubrayRecursion: 3,
//                 ramification: 7,
//                 recursionProbability: 0.6,

//                 roughness: 0.85,
//                 straightness: 0.6
// }

// var lightningStrike = new LightningStrike(rayParams)
// var lightningMaterial = new THREE.MeshBasicMaterial()

// var strikeMesh = new THREE.Mesh(lightningStrike,lightningMaterial)

// scene.add(strikeMesh)

// gui.add(rayParams, 'straightness',0,1).name('straightness').onFinishChange( function () {

//     recreateRay();

// } );
// gui.add(rayParams, 'roughness',0,1).name('roughness').onFinishChange( function () {

//     recreateRay();

// } );
// gui.add(rayParams, 'radius0',0.1,10).name('radius0').onFinishChange( function () {

//     recreateRay();

// } );
// gui.add(rayParams, 'radius1',0.1,10).name('radius1').onFinishChange( function () {

//     recreateRay();

// } );
// gui.add(rayParams, 'radius0Factor',0.1,10).name('radius0Factor').onFinishChange( function () {

//     recreateRay();

// } );
// gui.add(rayParams, 'radius1Factor',0.1,10).name('radius1Factor').onFinishChange( function () {

//     recreateRay();

// } );
// gui.add(rayParams, 'timeScale',0,5).name('timeScale').onFinishChange( function () {

//     recreateRay();

// } );
// gui.add(rayParams, 'subrayPeriod',0.1,10).name('subrayPeriod').onFinishChange( function () {

//     recreateRay();

// } );
// gui.add(rayParams, 'subrayDutyCycle',0.1,10).name('subrayDutyCycle').onFinishChange( function () {

//     recreateRay();

// } );

// function recreateRay() {
//     scene.remove(strikeMesh)
//     lightningStrike = new LightningStrike( rayParams);
// 	strikeMesh = new THREE.Mesh( lightningStrike, lightningMaterial )
//     scene.add(strikeMesh)
// }






/**
 * PHYSICS
 */

// const test = new THREE.Mesh(
//     new THREE.SphereGeometry(.5, 32,32),
//     new THREE.MeshBasicMaterial({color: '#fff000'})
// )

// const geo = new THREE.CylinderGeometry(2, 1, 2, 5)
// const testFloor = new THREE.Mesh(
//     geo,
//     new THREE.MeshBasicMaterial({color: '#1aff00'})
// )
// const geo2 = new THREE.CylinderGeometry(.1, .1, 1, 5)
// const testFloor2 = new THREE.Mesh(
//     geo2,
//     new THREE.MeshBasicMaterial({color: '#0000ff'})
// )

// scene.add(test, testFloor, testFloor2)



/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

var intersects = []

/**
 * Raycaster counter
 */
var raycasterCount = 0

const tick = () => {

    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Cast a ray from the mouse and handle events
    raycasterCount += 1
    if (raycasterCount === 5) {

        raycaster.setFromCamera(mouse, camera)

        const objectsToTest = [
            models.roadmapGroup,
            models.meowrushIslandGroup,
            models.meowverseIslandGroup,

            models.twitter,
            models.twitterPlate,

            models.discord,
            models.discordPlate,

            models.blog,
            models.blogPlate,

            models.pawBig,
            models.menuPaw1,
            models.menuPaw2,

            models.NFTsFinger,
            models.NFTsFingerSign,
            models.NFTsFingerToken,
            models.NFTsFingerGenCard,
            models.NFTsFingerOgCard,

            models.roadmapFinger,
            models.roadmapPaw1,
            models.roadmapPaw2,
            models.roadmapFingerSign,

            models.partnersFinger,
            models.partnersFingerSign,

            models.gamesMeowverseFinger,
            models.gamesMeowverseFingerKart,
            models.gamesMeowverseFingerMushroom,
            models.gamesMeowverseFingerSign,

            models.genesisIslandGroup,

            models.meelkIslandGroup,

            models.OGIslandGroup,
            models.partnersIslandGroup,
            models.cloudsGroup
        ]

        intersects = raycaster.intersectObjects(objectsToTest)   //тут все меши под курсором

        raycasterCount = 0
    }

    // Islands animation
    utils.hovering(intersects, elapsedTime, outlinePass)

    // Social Media animation
    utils.intersectAnimationMedia(intersects)

    //Boat animation
    utils.animateBoat(elapsedTime)

    //Clouds animation
    utils.animateClouds(elapsedTime)

    //Cat9 animation
    utils.catAnimation9(deltaTime, elapsedTime)


    // Lightning Strike
    // utils.animateLightningStrike(elapsedTime)
    // lightningStrike.update(elapsedTime)



    //Physics
    // physics.world.step(1/60, deltaTime, 3)
    // test.position.copy(physics.sphereBody.position)
    // testFloor.position.copy(physics.roadmapIslandFloorBody.position)
    // if (physics.roadmapABody) {
    // models.roadmapIslandA.position.copy(physics.roadmapABody.position)
    // models.roadmapIslandA.position.x = physics.roadmapABody.position.x - 6.5
    // models.roadmapIslandA.position.y = physics.roadmapABody.position.y 
    // models.roadmapIslandA.position.z = physics.roadmapABody.position.z - 1.5

    // }




    // Update camera position 


    // Update controls
    controls.update()

    // Render
    // renderer.render(scene, camera)
    effectComposer.render()

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
