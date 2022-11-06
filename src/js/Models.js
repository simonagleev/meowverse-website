import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'three'


/**
 * Loaders
 */


const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)



/**
 * Menu
 */

 export const menuGroup = new THREE.Group()
 menuGroup.name = 'menuIsland'
 menuGroup.position.set(0, 0, 4)
 
 const menuMainPawGroup = new THREE.Group()
 menuGroup.add(menuMainPawGroup)


//Variables
export var twitter = null;
export var discord = null;
export var blog = null;

let NFTsFinger = null;
let gamesMeowverseFinger = null;
let roadmapFinger = null;
let partnersFinger = null;

// BIGisland
export const bigIslandGroup = new THREE.Group()
bigIslandGroup.position.set(-9, 0, -2)

//Meowverse island
export const meowverseIslandGroup = new THREE.Group()
meowverseIslandGroup.position.set(6, 0, -7)

//Roadmap island
export const roadmapGroup = new THREE.Group()
roadmapGroup.position.set(6.5, 0, 1.5)



/**
 * Models
 */


 gltfLoader.load(
    'models/WEB3_MENU/WEB3_MENU(1MESH)_MAIN.gltf',
    (gltf) => {
        // console.log('gltf.scene.children')
        gltf.scene.children[0].children[1].material.wireframe = false
        
        menuMainPawGroup.add(gltf.scene)
    },
)

gltfLoader.load(
    'models/WEB3_MENU/WEB3_MENU(1MESH)_MAIN.gltf',
    (gltf) => {
        // console.log('gltf.scene.children')
        gltf.scene.children[0].children[1].material.wireframe = false
        
        menuMainPawGroup.add(gltf.scene)
    },
)
gltfLoader.load(
    'models/WEB3_MENU/WEB3_MENU(1MESH)_T.gltf',
    (gltf) => {
        menuMainPawGroup.add(gltf.scene)
        
        // console.log('TWITTER')
        // console.log(gltf.scene.children)
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
        // console.log("BLOG")
        // console.log(blog)
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

//BIGisland

gltfLoader.load(
    'models/WEB3_BIGISLAND/WEB3_BIGISLAND_BOAT.gltf',
    (gltf) => {
        gltf.scene.children[0].children[0].material.wireframe = false
        // gltf.scene.children[0].children[0].material.color = {b: 0.123, g: 0.105, r: 0.55}

        bigIslandGroup.add(gltf.scene)
        
        
    },
)
gltfLoader.load(
    'models/WEB3_BIGISLAND/WEB3_BIGISLAND(1MESH).gltf',
    (gltf) => {
        
        bigIslandGroup.add(gltf.scene)

    },
)

//Meowverse island

gltfLoader.load(
    'models/WEB3_MEOWVERSE/WEB3_MEOWVERSE(1MESH).gltf',
    (gltf) => {
       

        meowverseIslandGroup.add(gltf.scene)
    },
)

//Roadmap island

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




