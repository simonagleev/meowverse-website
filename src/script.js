import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import * as models from './js/Models.js'
import * as particles from './js/Particles.js'
import * as light from './js/Lights.js'

import { Color, Group, Vector3 } from 'three'

import Stats from 'stats.js'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


/**
 * Add models to the scene
 */
scene.add(models.menuGroup)
scene.add(models.bigIslandGroup)
scene.add(models.roadmapGroup)
scene.add(models.meowverseIslandGroup)

/**
 * Add particles to the scene
 */
scene.add(particles.particles)

/**
 * Add lights to the scene
 */

scene.add(light.ambientLight)
scene.add(light.directionalLight)
scene.add(light.pointLightBigIsland)
scene.add(light.pointLightmenuIsland)
scene.add(light.spotlight)
scene.add(light.spotlight.target)

/**
 * TEXTURES
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
 * FOG
 */

const fog = new THREE.Fog(0x8C97F4, 1, 50)
scene.fog = fog



/**
 * Raycaster
 */

const raycaster = new THREE.Raycaster()

let currentIntersect = null

let intersectsArray = null

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

let isHoweredIsland = false

// Находит родителей вплоть до Scene
const myGroups = [models.menuGroup, models.bigIslandGroup, models.roadmapGroup]

let groupIntersected = null

const getParent = (obj) => {
    
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


// Events
window.addEventListener('click', () => {
    // const roadmapMainMeshesArray = roadmapGroup.children[1].children[0].children;
    if (currentIntersect) {
        console.log('currentIntersect.object')
        console.log(currentIntersect.object)

        // Сделать что-то с group при клике
        getParent(currentIntersect.object)
        if (groupIntersected) {
            if(groupIntersected.name === 'menuIsland') {
                const menuIslandMeshesArray = [...twitter.children, ...discord.children, ...blog.children]

                console.log('menuIslandMeshesArray')

                console.log(menuIslandMeshesArray)
            
            }
        }
        
        if(groupIntersected) {
            for(const group of myGroups) {
                if(group === groupIntersected) {
                    console.log('CHILD')
                    // console.log(menuGroup.children[0].children[0].children[0].children[0].material.color.r)
                    // console.log(group.position)
                    // camera.position.set(-9, -0.0008470513057307835, -2)
                    // menuGroup.children[0].children[0].children[0].children[0].material.color = {r: 200, g: 0, b: 0}
                    
                    controls.target.x = group.position.x
                    controls.target.y = group.position.y
                    controls.target.z = group.position.z

                    camera.position.x = group.position.x
                    // camera.position.y = group.position.y + 4
                    camera.position.z = group.position.z + 5
                    // тут нужен плавный переход камеры на остров
                    
                    
                } else {
                    console.log('wrong group')
                }
            }
        }
        // for(let i = 0; i < roadmapMainMeshesArray.length; i++) {
        //     if(currentIntersect.object === roadmapMainMeshesArray[i]) {
        //         console.log('ROADMAP')   
        //     } 
        // }
        // if(currentIntersect.object === roadmapGroup.children[0].children[0]) {
        //     location.href = 'https://www.doliacats.com'
        // }
    }
})

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



// Debug
const gui = new dat.GUI()

gui.add(controls, 'maxAzimuthAngle').min(0).max(Math.PI * 2).step(0.1)


gui.add(camera.position, 'x').min(-10).max(10).step(0.1)
gui.add(camera.position, 'y').min(-10).max(10).step(0.1)
gui.add(camera.position, 'z').min(-10).max(10).step(0.1)

gui.add(light.ambientLight, 'intensity').min(-10).max(10).step(0.1)
gui.add(light.directionalLight, 'intensity').min(-10).max(10).step(0.1)

gui.add(light.spotlight.target.position, 'x').min(-10).max(10).step(0.1)
gui.add(light.spotlight.target.position, 'y').min(-10).max(10).step(0.1)
gui.add(light.spotlight.target.position, 'z').min(-10).max(10).step(0.1)
gui.add(light.spotlight, 'intensity').min(-10).max(10).step(0.1)



/**
 * TRIGGERS
 */

let twitterTrigger = false
let discordTrigger = false
let blogTrigger = false


/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

/**
 * Raycast counter
 */
var raycastCounter = 0

/**
 * Stats
 */
 const stats = new Stats()
 stats.showPanel(0) 
 document.body.appendChild(stats.dom)

const tick = () => {
    stats.begin()

    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

// Cast a ray from the mouse and handle events

    raycastCounter+=1

    if(raycastCounter == 30) {
        raycastCounter = 0
        raycaster.setFromCamera(mouse, camera)

        const objectsToTest = [models.roadmapGroup, models.bigIslandGroup, models.meowverseIslandGroup, models.twitter, models.discord, models.blog]
        const intersects = raycaster.intersectObjects(objectsToTest)

        if (intersects.length) {
            
            if (!currentIntersect) {
                console.log('mouse enter') 
                
                isHoweredIsland = !isHoweredIsland    

                currentIntersect = intersects[0]
                
                getParent(currentIntersect.object)

                if(groupIntersected.name === 'menuIsland') {
                    console.log('menu hovered')
    
                    for(const obj of twitter.children){
                        if(currentIntersect.object === obj) {
                            twitterTrigger = !twitterTrigger
                        }
                    }
    
                    for(const obj of discord.children){
                        if(currentIntersect.object === obj) {
                            discordTrigger = !discordTrigger
                        }
                    }
    
                    for(const obj of blog.children){
                        if(currentIntersect.object === obj) {
                            blogTrigger = !blogTrigger    
                        }
                    }
                }
    
            }
            
            if(isHoweredIsland) {
                if(groupIntersected) {
                    groupIntersected.position.y = Math.sin(elapsedTime * 2) * .1 
                }
            }
            
            
            intersectsArray = intersects
            
        }
        else {
            if (currentIntersect) {
                console.log('mouse leave')
                isHoweredIsland = !isHoweredIsland

                if(groupIntersected.name === 'menuIsland') {
                    console.log('menu hovered')
    
                    for(const obj of twitter.children){
                        if(currentIntersect.object === obj) {
                            twitterTrigger = !twitterTrigger
                        }
                    }
    
                    for(const obj of discord.children){
                        if(currentIntersect.object === obj) {
                            discordTrigger = !discordTrigger
                        }
                    }
    
                    for(const obj of blog.children){
                        if(currentIntersect.object === obj) {
                            blogTrigger = !blogTrigger    
                        }
                    }
                }
            }

            currentIntersect = null
            intersectsArray = null
            
        }
    }
    setTimeout(() => {
        
    }, 10000)

    // Twitter,discord and blog animations
    if(twitterTrigger) {
        twitter.children[0].rotation.z -= .01
    } 

    if(discordTrigger) {
        discord.children[0].rotation.z += .01
        discord.children[1].rotation.z += .01
    }

    if(blogTrigger) {
        blog.children[0].rotation.z += .01
        blog.children[1].rotation.z += .01
    }

    light.spotlightHelper.update()
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    stats.end()

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()




