import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Vector3 } from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'



/**
 * HTML
 */

const menuBtn = document.querySelector('.menu')
menuBtn.addEventListener('click', () => {
    focuseIsland(menuGroup)
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
const loadingManager = new THREE.LoadingManager()
const progressBar = document.getElementById('progress-bar')
const progressBarontainer = document.querySelector('.progress-bar-container')

let isLoaded = false

loadingManager.onProgress = (url, loaded, total) => {
    progressBar.value = (loaded / total) * 100
}

loadingManager.onLoad = () => {
    console.log('LOADED')
    isLoaded = true
    tick()
    progressBarontainer.style.display = 'none'
}

/**
 * Loaders
 */

const dracoLoader = new DRACOLoader(loadingManager)
dracoLoader.setDecoderPath('/draco/')

const gltfLoader = new GLTFLoader(loadingManager)
gltfLoader.setDRACOLoader(dracoLoader)

const textureLoader = new THREE.TextureLoader(loadingManager)


/**
 *  Models
 */


// menu Island
const menuGroup = new THREE.Group()
menuGroup.name = 'menuIsland'
menuGroup.position.set(0, 0, 4)

const menuMainPawGroup = new THREE.Group()
menuGroup.add(menuMainPawGroup)

scene.add(menuGroup)

let twitter = null;
let discord = null;
let blog = null;
let pawBig = null;

let NFTsFinger = null;
let gamesMeowverseFinger = null;
let roadmapFinger = null;
let partnersFinger = null;

gltfLoader.load(
    'models/WEB3_MENU/WEB3_MENU(1MESH)_MAIN.gltf',
    (gltf) => {
        menuMainPawGroup.add(gltf.scene)

        pawBig = gltf.scene.children[0]
        pawBig.name = 'pawBig'
    },
)
gltfLoader.load(
    'models/WEB3_MENU/WEB3_MENU(1MESH)_T.gltf',
    (gltf) => {
        menuMainPawGroup.add(gltf.scene)

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
    },
)

gltfLoader.load(
    'models/WEB3_MENU/WEB3_MENU(1MESH)_NM.gltf',
    (gltf) => {

        menuGroup.add(gltf.scene)

        NFTsFinger = gltf.scene.children[0]
        NFTsFinger.name = 'NFTsFinger'
    },
)
gltfLoader.load(
    'models/WEB3_MENU/WEB3_MENU(1MESH)_GM.gltf',
    (gltf) => {

        menuGroup.add(gltf.scene)

        gamesMeowverseFinger = gltf.scene.children[0]
        gamesMeowverseFinger.name = 'gamesMeowverseFinger'

    },
)
gltfLoader.load(
    'models/WEB3_MENU/WEB3_MENU(1MESH)_P.gltf',
    (gltf) => {

        menuGroup.add(gltf.scene)

        partnersFinger = gltf.scene.children[0]
        partnersFinger.name = 'partnersFinger'


    },
)
gltfLoader.load(
    'models/WEB3_MENU/WEB3_MENU(1MESH)_R.gltf',
    (gltf) => {

        menuGroup.add(gltf.scene)

        roadmapFinger = gltf.scene.children[0]
        roadmapFinger.name = 'roadmapFinger'

    },
)

// Test island
// const bakedMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })

// gltfLoader.load(
//     'models/WEB3_BIGISLAND/WEB3_BIGISLAND_BAKING.glb',
//     (gltf) => {
//         gltf.scene.traverse((child) =>
//         {
//             child.material = bakedMaterial
//         })
//         scene.add(gltf.scene)
//     }
// )

// BIGisland 

const bigIslandGroup = new THREE.Group()
bigIslandGroup.position.set(-9, 0, -2)
bigIslandGroup.name = 'bigIsland'
scene.add(bigIslandGroup)

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
        // for (const child of bigIslandLand.children) { 
        //     child.name = 'bigIslandLand'
        // }
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

        bigIslandGroup.add(gltf.scene)
        bigIslandGenCard1 = gltf.scene
        bigIslandGenCard1.name = 'bigIslandGenCard1'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_GEN2.gltf',
    (gltf) => {

        bigIslandGroup.add(gltf.scene)
        bigIslandGenCard2 = gltf.scene
        bigIslandGenCard2.name = 'bigIslandGenCard2'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_OG1.gltf',
    (gltf) => {

        bigIslandGroup.add(gltf.scene)
        bigIslandOrigCard1 = gltf.scene
        bigIslandOrigCard1.name = 'bigIslandOrigCard1'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_OG2.gltf',
    (gltf) => {

        bigIslandGroup.add(gltf.scene)
        bigIslandOrigCard2 = gltf.scene
        bigIslandOrigCard2.name = 'bigIslandOrigCard2'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_OG3.gltf',
    (gltf) => {

        bigIslandGroup.add(gltf.scene)
        bigIslandOrigCard3 = gltf.scene
        bigIslandOrigCard3.name = 'bigIslandOrigCard3'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_OG4.gltf',
    (gltf) => {

        bigIslandGroup.add(gltf.scene)
        bigIslandOrigCard4 = gltf.scene
        bigIslandOrigCard4.name = 'bigIslandOrigCard4'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_OG5.gltf',
    (gltf) => {

        bigIslandGroup.add(gltf.scene)
        bigIslandOrigCard5 = gltf.scene
        bigIslandOrigCard5.name = 'bigIslandOrigCard5'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_SIGN1.gltf',
    (gltf) => {

        bigIslandGroup.add(gltf.scene)
        bigIslandSign1 = gltf.scene
        bigIslandSign1.name = 'bigIslandSign1'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_SIGN2.gltf',
    (gltf) => {

        bigIslandGroup.add(gltf.scene)
        bigIslandSign2 = gltf.scene
        bigIslandSign2.name = 'bigIslandSign2'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_SIGN3.gltf',
    (gltf) => {

        bigIslandGroup.add(gltf.scene)
        bigIslandSign3 = gltf.scene
        bigIslandSign3.name = 'bigIslandSign3'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_TOKEN.gltf',
    (gltf) => {

        bigIslandGroup.add(gltf.scene)
        bigIslandToken = gltf.scene
        bigIslandToken.name = 'bigIslandToken'

        createToken(1, .2, 0, bigIslandGroup)
        createToken(1, 0, 1, bigIslandGroup)
        createToken(1, 0, 2.5, bigIslandGroup)
    },
)

// Meowverse island
const meowverseIslandGroup = new THREE.Group()
meowverseIslandGroup.position.set(6, 0, -7)
scene.add(meowverseIslandGroup)
gltfLoader.load(
    'models/WEB3_MEOWVERSE/WEB3_MEOWVERSE(1MESH).gltf',
    (gltf) => {
        meowverseIslandGroup.add(gltf.scene)
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


//  UTILS


// Находит родителей вплоть до Scene
const myGroups = [menuGroup, bigIslandGroup, meowverseIslandGroup, roadmapGroup]

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
if (window.innerWidth > 920) {


    window.addEventListener('click', (event) => {
        event.preventDefault()
        if (currentIntersect) {
            getParent(currentIntersect.object)  // Получвем родителя меша, на кторый навели курсор (группу)

            // Сделать что-то с group при клике
            if (groupIntersected) {
                // Click по соц. сетям
                if (groupIntersected.name === 'menuIsland') {
                    const menuIslandMeshesArray = [
                        ...twitter.children,
                        ...discord.children,
                        ...blog.children,
                        ...NFTsFinger.children,
                        ...roadmapFinger.children,
                        ...gamesMeowverseFinger.children,
                    ]

                    for (const mesh of menuIslandMeshesArray) {
                        if (currentIntersect.object === mesh) {
                            if (mesh.parent === twitter) {
                                window.open('https://twitter.com/DoliaCats_eth', '_blank');
                            } else if (mesh.parent === discord) {
                                window.open('https://discord.com/invite/RetekYNarD', '_blank');
                            } else if (mesh.parent === blog) {
                                window.open('https://medium.com/', '_blank');
                            } else if (mesh.parent === NFTsFinger) {
                                focuseIsland(bigIslandGroup)
                            } else if (mesh.parent === roadmapFinger) {
                                focuseIsland(roadmapGroup)
                            } else if (mesh.parent === gamesMeowverseFinger) {
                                focuseIsland(meowverseIslandGroup)
                            }
                        }
                    }
                } else if (groupIntersected.name === 'bigIsland') {   // Click по big-island
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
                    for (const mesh of bigIslandMeshesArray) {
                        if (currentIntersect.object.parent.name === mesh.parent.name) {
                            if (mesh.parent.name === 'bigIslandSign1' || mesh.parent.parent.name === 'bigIslandSign1') {
                                window.open('https://doliacats.com#tokenomiks', '_blank')
                            } else if (mesh.parent.name === 'bigIslandSign2' || mesh.parent.parent.name === 'bigIslandSign2') {
                                window.open('https://doliacats.com', '_blank')
                            } else if (mesh.parent.name === 'bigIslandSign3' || mesh.parent.parent.name === 'bigIslandSign3') {
                                window.open('http://genesis.doliacats.com', '_blank')
                            }
                        }
                    }
                }
            }

            if (groupIntersected && groupIntersected.name !== 'menuIsland') {
                for (const group of myGroups) {
                    if (group === groupIntersected) {

                        focuseIsland(group)

                    } else {
                        console.log('wrong group')
                    }
                }
            }
        }
    })
}

window.addEventListener('touchcancel', (event) => {
    event.preventDefault();
    if (currentIntersect) {
        getParent(currentIntersect.object)  // Получвем родителя меша, на кторый навели курсор (группу)

        // Сделать что-то с group при клике
        if (groupIntersected) {
            // Click по соц. сетям
            if (groupIntersected.name === 'menuIsland') {
                const menuIslandMeshesArray = [
                    ...twitter.children,
                    ...discord.children,
                    ...blog.children,
                    ...NFTsFinger.children,
                    ...roadmapFinger.children,
                    ...gamesMeowverseFinger.children,
                ]

                for (const mesh of menuIslandMeshesArray) {
                    if (currentIntersect.object === mesh) {
                        if (mesh.parent === twitter) {
                            window.open('https://twitter.com/DoliaCats_eth', '_blank');
                        } else if (mesh.parent === discord) {
                            window.open('https://discord.com/invite/RetekYNarD', '_blank');
                        } else if (mesh.parent === blog) {
                            window.open('https://medium.com/', '_blank');
                        } else if (mesh.parent === NFTsFinger) {
                            focuseIsland(bigIslandGroup)
                        } else if (mesh.parent === roadmapFinger) {
                            focuseIsland(roadmapGroup)
                        } else if (mesh.parent === gamesMeowverseFinger) {
                            focuseIsland(meowverseIslandGroup)
                        }
                    }
                }
            } else if (groupIntersected.name === 'bigIsland') {   // Click по big-island
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
                for (const mesh of bigIslandMeshesArray) {
                    if (currentIntersect.object.parent.name === mesh.parent.name) {
                        if (mesh.parent.name === 'bigIslandSign1' || mesh.parent.parent.name === 'bigIslandSign1') {
                            window.open('https://doliacats.com#tokenomiks', '_blank')
                        } else if (mesh.parent.name === 'bigIslandSign2' || mesh.parent.parent.name === 'bigIslandSign2') {
                            window.open('https://doliacats.com', '_blank')
                        } else if (mesh.parent.name === 'bigIslandSign3' || mesh.parent.parent.name === 'bigIslandSign3') {
                            window.open('http://genesis.doliacats.com', '_blank')
                        }
                    }
                }
            }
        }

        if (groupIntersected && groupIntersected.name !== 'menuIsland') {
            for (const group of myGroups) {
                if (group === groupIntersected) {

                    focuseIsland(group)

                } else {
                    console.log('wrong group')
                }
            }
        }
    }
    
    currentIntersect = null;
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


/**
 * DEBUG
 */
const gui = new dat.GUI()
gui.close()
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

let isHoweredIsland = false

let twitterTrigger = false
let discordTrigger = false
let blogTrigger = false


/**
 * Action FUNCTIONS
 */

const animateSocialMediaEnterAndChange = () => {
    if (currentIntersect.object.parent === twitter || currentIntersect.object.parent.parent === twitter) {
        twitterTrigger = true
    } else {
        twitterTrigger = false
    }

    if (currentIntersect.object.parent === discord || currentIntersect.object.parent.parent === discord) {
        discordTrigger = true
    } else {
        discordTrigger = false
    }

    if (currentIntersect.object.parent === blog || currentIntersect.object.parent.parent === blog) {
        blogTrigger = true
    } else {
        blogTrigger = false
    }
}

const animateSocialMediaLeave = () => {
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

const focuseIsland = (group) => {
    controls.target.x = group.position.x
    controls.target.y = group.position.y
    controls.target.z = group.position.z

    camera.position.x = group.position.x
    // camera.position.y = group.position.y + 4
    camera.position.z = group.position.z + 5
    // тут нужен плавный переход камеры на остров

}

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

    raycaster.setFromCamera(mouse, camera)

    const objectsToTest = [
        roadmapGroup,
        meowverseIslandGroup,
        twitter,
        discord,
        blog,
        pawBig,
        NFTsFinger,
        roadmapFinger,
        partnersFinger,
        gamesMeowverseFinger,
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

            currentIntersect = intersects[0]

            isHoweredIsland = !isHoweredIsland

            getParent(currentIntersect.object)

            if (groupIntersected && groupIntersected.name === 'menuIsland') {
                console.log('menu hovered')
                animateSocialMediaEnterAndChange()
            }

        } else if (currentIntersect && (currentIntersect.object !== intersects[0].object)) {
            console.log('mesh hovered changed')

            currentIntersect = intersects[0]

            if (groupIntersected && groupIntersected.name === 'menuIsland') {
                animateSocialMediaEnterAndChange()
            }

        }

    } else {
        if (currentIntersect) {
            console.log('mouse leave')

            isHoweredIsland = !isHoweredIsland

            if (groupIntersected && groupIntersected.name === 'menuIsland') {
                animateSocialMediaLeave()
            }
        }

        groupIntersected = null

        currentIntersect = null
    }


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