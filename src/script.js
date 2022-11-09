import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js'
import * as dat from 'lil-gui'
import { Vector3 } from 'three'
import * as models from './js/Models.js'
import * as particles from './js/Particles.js'
import * as light from './js/Lights.js'
import * as utils from './js/Utils.js'
import * as loaders from './js/Loaders.js'

/**
 * HTML
 */

const menuBtn = document.querySelector('.menu')
menuBtn.addEventListener('click', (event) => {
    event.preventDefault()
    utils.onFingerClickFocus(camera, controls, models.menuGroup)
})

/**
 * Base
 */


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Loading manager (loading process and screen)
 */

const progressBar = document.getElementById('progress-bar')
const progressBarontainer = document.querySelector('.progress-bar-container')

loaders.loadingManager.onProgress = (url, loaded, total) => {
    progressBar.value = (loaded / total) * 100
}

loaders.loadingManager.onLoad = () => {
    console.log('LOADED')
    tick()
    progressBarontainer.style.display = 'none'
}


/**
 *  Models
 */

// menu Island
scene.add(models.menuGroup)

// BIGisland 
scene.add(models.bigIslandGroup)

// Meowverse island
scene.add(models.meowverseIslandGroup)

// Roadmap island
scene.add(models.roadmapGroup)


// Tip circle
scene.add(models.tipCircle)

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
    mouse.x = event.clientX / sizes.width * 2 - 1
    mouse.y = - (event.clientY / sizes.height) * 2 + 1
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
window.addEventListener('click', (event) => {
    event.preventDefault()
    utils.handleClick(camera, controls)
})


/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 6, 6.5)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.target.set(0, 0.75, 0)
controls.enableDamping = true
controls.maxDistance = 10
controls.minDistance = 1
controls.maxPolarAngle = 1.4
controls.minAzimuthAngle = 0

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
 * Post-processing
 */
 const effectComposer = new EffectComposer(renderer)
 effectComposer.setSize( sizes.width, sizes.height );
 const renderPass = new RenderPass(scene, camera)
 effectComposer.addPass(renderPass)

 const outlinePass = new OutlinePass(new THREE.Vector2(sizes.width, sizes.height), scene, camera);
 outlinePass.edgeStrength = 8;
 outlinePass.edgeThickness = 1;
 outlinePass.visibleEdgeColor = "#ffffff"
 outlinePass.hiddenEdgeColor = "#190a05"
 outlinePass.usePatternTexture = false
 effectComposer.addPass( outlinePass )
 


/**
 * DEBUG
 */
const gui = new dat.GUI()
gui.close()
// gui.add(controls, 'maxAzimuthAngle').min(0).max(Math.PI * 2).step(0.1)

gui.add(models.tipCircle.position, 'x').min(-10).max(10).step(0.01)
gui.add(models.tipCircle.position, 'y').min(-10).max(10).step(0.01)
gui.add(models.tipCircle.position, 'z').min(-10).max(10).step(0.01)

// gui.add(camera.position, 'x').min(-10).max(10).step(0.1)
// gui.add(camera.position, 'y').min(-10).max(10).step(0.1)
// gui.add(camera.position, 'z').min(-10).max(10).step(0.1)

// gui.add(ambientLight, 'intensity').min(-10).max(10).step(0.1)
// gui.add(directionalLight, 'intensity').min(-10).max(10).step(0.1)

// gui.add(spotlight.target.position, 'x').min(-10).max(10).step(0.1)
// gui.add(spotlight.target.position, 'y').min(-10).max(10).step(0.1)
// gui.add(spotlight.target.position, 'z').min(-10).max(10).step(0.1)
// gui.add(spotlight, 'intensity').min(-10).max(10).step(0.1)


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
    if (raycasterCount === 15) {

        raycaster.setFromCamera(mouse, camera)

        const objectsToTest = [
            models.roadmapGroup,
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

            models.roadmapFinger,
            models.roadmapPaw1,
            models.roadmapPaw1,
            models.roadmapFingerSign,
            
            models.partnersFinger,
            models.partnersFingerQuestion,
            models.partnersFingerSign,

            models.gamesMeowverseFinger,
            models.gamesMeowverseFingerKart,
            models.gamesMeowverseFingerMushroom,
            models.gamesMeowverseFingerSign,

            models.bigIslandLand,
            models.bigIslandBoat,
            models.bigIslandGenCard1,
            models.bigIslandGenCard2,
            models.bigIslandOrigCard1,
            models.bigIslandOrigCard2,
            models.bigIslandOrigCard3,
            models.bigIslandOrigCard4,
            models.bigIslandOrigCard5,
            models.bigIslandSign1,
            models.bigIslandSign2,
            models.bigIslandSign3,
            models.bigIslandToken,
            models.bigIslandToken2,
            models.bigIslandToken3,
            models.bigIslandToken4,

            // models.meowverseIslandCliff,
            // models.meowverseIslandGun,
            // models.meowverseIslandKart,
            // models.meowverseIslandLand,
            // models.meowverseIslandMushroom,
            // models.meowverseIslandSign1,
            // models.meowverseIslandSign2,
            // models.meowverseIslandTree1,
            // models.meowverseIslandTree2,
            // models.meowverseIslandWheel1,
            // models.meowverseIslandWheel2
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


    // Update camera position 
    

    // Update controls
    controls.update()

    // Render
    // renderer.render(scene, camera)
    effectComposer.render()

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

// setTimeout(() => {
//     tick()
//     progressBarontainer.style.display = 'none'
// }, 7000);



