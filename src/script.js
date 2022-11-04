import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Color, Group, Vector3 } from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

/**
 * Base
 */


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


/**
 * Loaders
 */

const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

const textureLoader = new THREE.TextureLoader()

/**
 *  Models
 */

let meowverseIsland;



// menu
const menuGroup = new THREE.Group()
menuGroup.name = 'menuIsland'
menuGroup.position.set(0, 0, 4)

const menuMainPawGroup = new THREE.Group()
menuGroup.add(menuMainPawGroup)
scene.add(menuGroup)

let twitter = null;
let discord = null;
let blog = null;

let NFTsFinger = null;
let gamesMeowverseFinger = null;
let roadmapFinger = null;
let partnersFinger = null;

// load models
// Menu island
gltfLoader.load(
    'models/WEB3_MENU/WEB3_MENU(1MESH)_MAIN.gltf',
    (gltf) => {
        console.log('gltf.scene.children')
        gltf.scene.children[0].children[1].material.wireframe = false

        menuMainPawGroup.add(gltf.scene)
    },
)
gltfLoader.load(
    'models/WEB3_MENU/WEB3_MENU(1MESH)_T.gltf',
    (gltf) => {
        menuMainPawGroup.add(gltf.scene)

        console.log('TWITTER')
        console.log(gltf.scene.children)
        twitter = gltf.scene.children[0]

    },
)
gltfLoader.load(
    'models/WEB3_MENU/WEB3_MENU(1MESH)_D.gltf',
    (gltf) => {

        menuMainPawGroup.add(gltf.scene)

        discord = gltf.scene.children[0]
    },
)
gltfLoader.load(
    'models/WEB3_MENU/WEB3_MENU(1MESH)_B.gltf',
    (gltf) => {

        menuMainPawGroup.add(gltf.scene)

        blog = gltf.scene.children[0]
        console.log("BLOG")
        console.log(blog)
    },
)

gltfLoader.load(
    'models/WEB3_MENU/WEB3_MENU(1MESH)_NM.gltf',
    (gltf) => {

        menuGroup.add(gltf.scene)

        NFTsFinger = gltf.scene.children[0].children
    },
)
gltfLoader.load(
    'models/WEB3_MENU/WEB3_MENU(1MESH)_GM.gltf',
    (gltf) => {

        menuGroup.add(gltf.scene)
    },
)
gltfLoader.load(
    'models/WEB3_MENU/WEB3_MENU(1MESH)_P.gltf',
    (gltf) => {

        menuGroup.add(gltf.scene)
    },
)
gltfLoader.load(
    'models/WEB3_MENU/WEB3_MENU(1MESH)_R.gltf',
    (gltf) => {

        menuGroup.add(gltf.scene)
    },
)


// BIGisland 

const bigIslandGroup = new THREE.Group()
bigIslandGroup.position.set(-9, 0, -2)
bigIslandGroup.name = 'bigIsland'
scene.add(bigIslandGroup)

// gltfLoader.load(
//     'models/WEB3_BIGISLAND/WEB3_BIGISLAND_BOAT.gltf',
//     (gltf) => {
//         gltf.scene.children[0].children[0].material.wireframe = false
//         // gltf.scene.children[0].children[0].material.color = {b: 0.123, g: 0.105, r: 0.55}

//         bigIslandGroup.add(gltf.scene)


//     },
// )
// gltfLoader.load(
//     'models/WEB3_BIGISLAND/WEB3_BIGISLAND(1MESH).gltf',
//     (gltf) => {

//         bigIslandGroup.add(gltf.scene)

//     },
// )
let bigIslandLand = null;
let bigIslandBath = null;
let bigIslandBoat = null;
let bigIslandGenCard1 = null;
let bigIslandGenCard2 = null;
let bigIslandOrigCard1 = null;
let bigIslandOrigCard2 = null;
let bigIslandOrigCard3 = null;
let bigIslandOrigCard4 = null;
let bigIslandOrigCard5 = null;
let bigIslandSign1 = null;
let bigIslandSign2 = null;
let bigIslandSign3 = null;
let bigIslandToken = null;

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_ISLAND.gltf',
    (gltf) => {

        bigIslandGroup.add(gltf.scene)
        bigIslandLand = gltf.scene
        bigIslandLand.name = 'bigIslandLand'
        for (const child of bigIslandLand.children) {
            child.name = 'bigIslandLand'
        }
    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_BATH.gltf',
    (gltf) => {
        gltf.scene.position.y += .1

        bigIslandGroup.add(gltf.scene)
        bigIslandBath = gltf.scene
        bigIslandBath.name = 'bigIslandBath'
    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_BOAT.gltf',
    (gltf) => {

        bigIslandGroup.add(gltf.scene)
        bigIslandBoat = gltf.scene
        bigIslandBoat.position.y = .5
        bigIslandBoat.position.x = -.3
        bigIslandBoat.rotation.z = .1
        bigIslandBoat.name = 'bigIslandBoat'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_GEN1.gltf',
    (gltf) => {
        gltf.scene.position.y += .1

        bigIslandGroup.add(gltf.scene)
        bigIslandGenCard1 = gltf.scene
        bigIslandGenCard1.name = 'bigIslandGenCard1'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_GEN2.gltf',
    (gltf) => {
        gltf.scene.position.y += .1

        bigIslandGroup.add(gltf.scene)
        bigIslandGenCard2 = gltf.scene
        bigIslandGenCard2.name = 'bigIslandGenCard2'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_OG1.gltf',
    (gltf) => {
        gltf.scene.position.y += .1

        bigIslandGroup.add(gltf.scene)
        bigIslandOrigCard1 = gltf.scene
        bigIslandOrigCard1.name = 'bigIslandOrigCard1'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_OG2.gltf',
    (gltf) => {
        gltf.scene.position.y += .1

        bigIslandGroup.add(gltf.scene)
        bigIslandOrigCard2 = gltf.scene
        bigIslandOrigCard2.name = 'bigIslandOrigCard2'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_OG3.gltf',
    (gltf) => {
        gltf.scene.position.y += .1

        bigIslandGroup.add(gltf.scene)
        bigIslandOrigCard3 = gltf.scene
        bigIslandOrigCard3.name = 'bigIslandOrigCard3'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_OG4.gltf',
    (gltf) => {
        gltf.scene.position.y += .1

        bigIslandGroup.add(gltf.scene)
        bigIslandOrigCard4 = gltf.scene
        bigIslandOrigCard4.name = 'bigIslandOrigCard4'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_OG5.gltf',
    (gltf) => {
        gltf.scene.position.y += .1

        bigIslandGroup.add(gltf.scene)
        bigIslandOrigCard5 = gltf.scene
        bigIslandOrigCard5.name = 'bigIslandOrigCard5'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_SIGN1.gltf',
    (gltf) => {
        gltf.scene.position.y += .1

        bigIslandGroup.add(gltf.scene)
        bigIslandSign1 = gltf.scene
        bigIslandSign1.name = 'bigIslandSign1'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_SIGN2.gltf',
    (gltf) => {
        gltf.scene.position.y += .1

        bigIslandGroup.add(gltf.scene)
        bigIslandSign2 = gltf.scene
        bigIslandSign2.name = 'bigIslandSign2'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_SIGN3.gltf',
    (gltf) => {
        gltf.scene.position.y += .1

        bigIslandGroup.add(gltf.scene)
        bigIslandSign3 = gltf.scene
        bigIslandSign3.name = 'bigIslandSign3'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_TOKEN.gltf',
    (gltf) => {
        gltf.scene.position.y += .1

        bigIslandGroup.add(gltf.scene)
        bigIslandToken = gltf.scene
        bigIslandToken.name = 'bigIslandToken'

        createToken(1, .2, 0, bigIslandGroup)
        createToken(1, 0, 1, bigIslandGroup)
        createToken(1, 0, 2.5, bigIslandGroup)
    },
)

// Meowverse island

gltfLoader.load(
    'models/WEB3_MEOWVERSE/WEB3_MEOWVERSE(1MESH).gltf',
    (gltf) => {
        meowverseIsland = gltf.scene
        meowverseIsland.position.set(6, 0, -7)

        scene.add(gltf.scene)
    },
)
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
const roadmapGroup = new THREE.Group()
roadmapGroup.position.set(6.5, 0, 1.5)

scene.add(roadmapGroup)

gltfLoader.load(
    'models/WEB3_ROADMAP/WEB3_ROADMAP_MAIN(1MESH).gltf',
    (gltf) => {
        roadmapGroup.add(gltf.scene)
    },
)

gltfLoader.load(
    'models/WEB3_ROADMAP/WEB3_ROADMAP_BUTTON.gltf',
    (gltf) => {
        roadmapGroup.add(gltf.scene)
    },
)

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
 *  PARTICLES
 */

const particleTexture = textureLoader.load('/textures/particles/1.png')

// Geometry
const particlesGeometry = new THREE.BufferGeometry()
const count = 5000

const positions = new Float32Array(count * 3)
const colors = new Float32Array(count * 3)

for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 100
    colors[i] = Math.random()
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

// Material
const particlesMaterial = new THREE.PointsMaterial()

particlesMaterial.size = 0.1
particlesMaterial.sizeAttenuation = true

particlesMaterial.color = new THREE.Color('#ffffff')

particlesMaterial.transparent = true
particlesMaterial.alphaMap = particleTexture
// particlesMaterial.alphaTest = 0.01
// particlesMaterial.depthTest = false
particlesMaterial.depthWrite = false
particlesMaterial.blending = THREE.AdditiveBlending

particlesMaterial.vertexColors = false

// Points
const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)


/**
 * GEOMETRIES
 */

// const spaceBoxGeometry = new THREE.BoxGeometry(1, 1, 1)
// const spaceBox = new THREE.Mesh(spaceBoxGeometry, environmentMapTexture)
// scene.add(spaceBox)

/**
 * FOG
 */

const fog = new THREE.Fog(0x8C97F4, 1, 50)
scene.fog = fog

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xFF7F50, 0.6)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.left = - 7
directionalLight.shadow.camera.top = 7
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(5, 5, 5)
scene.add(directionalLight)

const pointLightBigIsland = new THREE.PointLight(0xFF9933, 1)
pointLightBigIsland.position.set(-8, 3.5, -3.3)
pointLightBigIsland.castShadow = true
pointLightBigIsland.intensity = .5
scene.add(pointLightBigIsland)


const pointLightmenuIsland = new THREE.PointLight(0xFF9933, 1)
pointLightmenuIsland.position.set(0.5, 2.5, 2.7)
pointLightmenuIsland.castShadow = true
pointLightmenuIsland.intensity = .5
pointLightmenuIsland.lookAt(new Vector3(0, 0, 4))
scene.add(pointLightmenuIsland)

const spotlight = new THREE.SpotLight("#Ff9889", .5, 6, Math.PI * .13, 0.25, 1)
spotlight.position.set(0, 2, 2)

scene.add(spotlight)
spotlight.target.position.set(-.8, -.5, 0)
spotlight.intensity = 3
scene.add(spotlight.target)
// console.log(spotlight.target)

/**
 * 
 * HELPERS 
 */
const helper = new THREE.DirectionalLightHelper(directionalLight, 5);
const helper1 = new THREE.PointLightHelper(pointLightBigIsland, 1);
const helper2 = new THREE.PointLightHelper(pointLightmenuIsland, 1);
const spotlightHelper = new THREE.SpotLightHelper(spotlight, 1)
// scene.add(spotlightHelper)
//  scene.add( helper, helper1, helper2 );


/**
 * Raycaster
 */

const raycaster = new THREE.Raycaster()

let currentIntersect = null

let currentIntersectLength = null



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
const myGroups = [menuGroup, bigIslandGroup, roadmapGroup]

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


// Events
window.addEventListener('click', () => {
    if (currentIntersect) {
        getParent(currentIntersect.object)  // Получвем родителя меша, на кторый навели курсор (группу)

        console.log(currentIntersect.object.parent.parent.name)
        console.log(currentIntersect.object.parent)

        // Сделать что-то с group при клике
        if (groupIntersected) {
            // Click по соц. сетям
            if (groupIntersected.name === 'menuIsland') {
                const menuIslandMeshesArray = [...twitter.children, ...discord.children, ...blog.children]
                for (const mesh of menuIslandMeshesArray) {
                    if (currentIntersect.object === mesh) {
                        if (mesh.parent === twitter) {
                            location.href = 'https://twitter.com/DoliaCats_eth'
                        } else if (mesh.parent === discord) {
                            location.href = 'https://discord.com/invite/RetekYNarD'
                        } else if (mesh.parent === blog) {
                            location.href = 'https://medium.com/'
                        }
                    }
                }
            } else if (groupIntersected.name === 'bigIsland') {
                const bigIslandMeshesArray = [
                    ...bigIslandLand.children[0].children,
                    ...bigIslandBath.children[0].children,
                    ...bigIslandBoat.children[0].children,
                    bigIslandGenCard1.children[0],
                    bigIslandGenCard2.children[0],
                    bigIslandOrigCard1.children[0],
                    bigIslandOrigCard2.children[0],
                    bigIslandOrigCard3.children[0],
                    bigIslandOrigCard4.children[0],
                    bigIslandOrigCard5.children[0],
                    ...bigIslandSign1.children[0].children,
                    ...bigIslandSign2.children[0].children,
                    ...bigIslandSign3.children[0].children,
                    ...bigIslandToken.children[0].children,
                ]
                console.log(bigIslandMeshesArray)
                console.log(currentIntersect.object)
                for (const mesh of bigIslandMeshesArray) {
                    if (currentIntersect.object.parent.name === mesh.parent.name) {
                        if (mesh.parent.name === 'bigIslandLand') {
                            mesh.position.y = 4
                        } else if (mesh.parent.name === 'bigIslandGenCard1') {
                            mesh.position.z = 4

                        } 
                    }
                }
            }
        }

        if (groupIntersected) {
            for (const group of myGroups) {
                if (group === groupIntersected) {
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

gui.add(ambientLight, 'intensity').min(-10).max(10).step(0.1)
gui.add(directionalLight, 'intensity').min(-10).max(10).step(0.1)

gui.add(spotlight.target.position, 'x').min(-10).max(10).step(0.1)
gui.add(spotlight.target.position, 'y').min(-10).max(10).step(0.1)
gui.add(spotlight.target.position, 'z').min(-10).max(10).step(0.1)
gui.add(spotlight, 'intensity').min(-10).max(10).step(0.1)



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

const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Cast a ray from the mouse and handle events
    setTimeout(() => {
        raycaster.setFromCamera(mouse, camera)

        const objectsToTest = [
            roadmapGroup,
            meowverseIsland,
            twitter,
            discord,
            blog,
            bigIslandLand,
            bigIslandBath,
            bigIslandBoat,
            bigIslandGenCard1,
            bigIslandGenCard2,
            bigIslandOrigCard1,
            bigIslandOrigCard2,
            bigIslandOrigCard3,
            bigIslandOrigCard4,
            bigIslandOrigCard5,
            bigIslandSign1,
            bigIslandSign2,
            bigIslandSign3,
            bigIslandToken,
        ]

        const intersects = raycaster.intersectObjects(objectsToTest)   //тут все меши под курсором

        if (intersects.length) {

            if (!currentIntersect) {
                console.log('mouse enter')

                isHoweredIsland = !isHoweredIsland

                currentIntersect = intersects[0]
                
                getParent(currentIntersect.object)

                if (groupIntersected.name === 'menuIsland') {
                    console.log('menu hovered')

                    for (const obj of twitter.children) {
                        if (currentIntersect.object === obj) {
                            twitterTrigger = !twitterTrigger
                        }
                    }

                    for (const obj of discord.children) {
                        if (currentIntersect.object === obj) {
                            discordTrigger = !discordTrigger
                        }
                    }

                    for (const obj of blog.children) {
                        if (currentIntersect.object === obj) {
                            blogTrigger = !blogTrigger
                        }
                    }
                }

            } else if (currentIntersect && (currentIntersect.object !== intersects[0].object)) {
                console.log('mesh hovered changed')
                
                currentIntersect = intersects[0]
            }

        } else {
             if (currentIntersect) {
                console.log('mouse leave')
                isHoweredIsland = !isHoweredIsland

                if (groupIntersected.name === 'menuIsland') {
                    console.log('menu hovered')

                    for (const obj of twitter.children) {
                        if (currentIntersect.object === obj) {
                            twitterTrigger = !twitterTrigger
                        }
                    }

                    for (const obj of discord.children) {
                        if (currentIntersect.object === obj) {
                            discordTrigger = !discordTrigger
                        }
                    }

                    for (const obj of blog.children) {
                        if (currentIntersect.object === obj) {
                            blogTrigger = !blogTrigger
                        }
                    }
                }
            }

            currentIntersect = null
            
        }
    }, 10000)

    // Islandfloating animations
    if (isHoweredIsland) {
        if (groupIntersected) {
            groupIntersected.position.y = Math.sin(elapsedTime * 2) * .1
        }
    }

    // Twitter,discord and blog animations
    if (twitterTrigger) {
        twitter.children[0].rotation.z -= .01
    }

    if (discordTrigger) {
        discord.children[0].rotation.z += .01
        discord.children[1].rotation.z += .01
    }

    if (blogTrigger) {
        blog.children[0].rotation.z += .01
        blog.children[1].rotation.z += .01
    }

    // Boat animation 
    if (bigIslandBoat) {
        bigIslandBoat.position.y = Math.sin(elapsedTime * 2) * .02
        bigIslandBoat.rotation.z = Math.cos(elapsedTime * 2) * .02
    }

    spotlightHelper.update()
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()




