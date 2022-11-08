import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
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

// Test island
scene.add(models.testIslandGroup)

// BIGisland 
scene.add(models.bigIslandGroup)

// Meowverse island
scene.add(models.meowverseIslandGroup)

const createToken = (x, y, z, group) => {
    if (bigIslandToken) {
        let coin = bigIslandToken.clone()
        coin.position.x = x
        coin.position.y = y
        coin.position.z = z
        group.add(coin)
    }
}

// Roadmap island
scene.add(models.roadmapGroup)



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


// // Events

// window.addEventListener('touchcancel', (event) => {
//     event.preventDefault();
//     if (currentIntersect) {
//         getParent(currentIntersect.object)  // Получвем родителя меша, на кторый навели курсор (группу)

//         // Сделать что-то с group при клике
//         if (groupIntersected) {
//             // Click по соц. сетям
//             if (groupIntersected.name === 'menuIsland') {
//                 const menuIslandMeshesArray = [
//                     ...models.twitter.children,
//                     ...models.discord.children,
//                     ...models.blog.children,
//                     ...models.NFTsFinger.children,
//                     ...models.roadmapFinger.children,
//                     ...models.gamesMeowverseFinger.children,
//                 ]

//                 for (const mesh of menuIslandMeshesArray) {
//                     if (currentIntersect.object === mesh) {
//                         if (mesh.parent === models.twitter) {
//                             window.open('https://twitter.com/DoliaCats_eth', '_blank');
//                         } else if (mesh.parent === models.discord) {
//                             window.open('https://discord.com/invite/RetekYNarD', '_blank');
//                         } else if (mesh.parent === models.blog) {
//                             window.open('https://medium.com/', '_blank');
//                         } else if (mesh.parent === models.NFTsFinger) {
//                             focuseIsland(models.bigIslandGroup)
//                         } else if (mesh.parent === models.roadmapFinger) {
//                             focuseIsland(models.roadmapGroup)
//                         } else if (mesh.parent === models.gamesMeowverseFinger) {
//                             focuseIsland(models.meowverseIslandGroup)
//                         }
//                     }
//                 }
//             } else if (groupIntersected.name === 'bigIsland') {   // Click по big-island
//                 const bigIslandMeshesArray = [
//                     ...models.bigIslandLand.children[0].children,
//                     ...models.bigIslandBath.children[0].children,
//                     ...models.bigIslandBoat.children[0].children,
//                     models.bigIslandGenCard1.children[0],
//                     models.bigIslandGenCard2.children[0],
//                     models.bigIslandOrigCard1.children[0],
//                     models.bigIslandOrigCard2.children[0],
//                     models.bigIslandOrigCard3.children[0],
//                     models.bigIslandOrigCard4.children[0],
//                     models.bigIslandOrigCard5.children[0],
//                     ...models.bigIslandSign1.children[0].children,
//                     ...models.bigIslandSign2.children[0].children,
//                     ...models.bigIslandSign3.children[0].children,
//                     ...models.bigIslandToken.children[0].children,
//                 ]
//                 for (const mesh of bigIslandMeshesArray) {
//                     if (currentIntersect.object.parent.name === mesh.parent.name) {
//                         if (mesh.parent.name === 'bigIslandSign1' || mesh.parent.parent.name === 'bigIslandSign1') {
//                             window.open('https://doliacats.com#tokenomiks', '_blank')
//                         } else if (mesh.parent.name === 'bigIslandSign2' || mesh.parent.parent.name === 'bigIslandSign2') {
//                             window.open('https://doliacats.com', '_blank')
//                         } else if (mesh.parent.name === 'bigIslandSign3' || mesh.parent.parent.name === 'bigIslandSign3') {
//                             window.open('http://genesis.doliacats.com', '_blank')
//                         }
//                     }
//                 }
//             }
//         }

//         if (groupIntersected && groupIntersected.name !== 'menuIsland') {
//             for (const group of myGroups) {
//                 if (group === groupIntersected) {

//                     focuseIsland(group)

//                 } else {
//                     console.log('wrong group')
//                 }
//             }
//         }
//     }

//     currentIntersect = null;
// })

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 8, 7)
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
 * DEBUG
 */
const gui = new dat.GUI()
gui.close()
// gui.add(controls, 'maxAzimuthAngle').min(0).max(Math.PI * 2).step(0.1)


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
            models.discord,
            models.blog,
            models.pawBig,
            models.NFTsFinger,
            models.roadmapFinger,
            models.partnersFinger,
            models.gamesMeowverseFinger,
            models.bigIslandLand,
            models.bigIslandBath,
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
        ]

        intersects = raycaster.intersectObjects(objectsToTest)   //тут все меши под курсором

        raycasterCount = 0
    }

    // Social Media animation
    utils.intersectAnimationMedia(intersects, elapsedTime)

    //Boat animation
    utils.animateBoat(elapsedTime)

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

// setTimeout(() => {
//     tick()
//     progressBarontainer.style.display = 'none'
// }, 7000);



