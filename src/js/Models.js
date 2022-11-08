import * as THREE from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as textures from './Textures.js'
import * as loaders from './Loaders.js'



const dracoLoader = loaders.dracoLoader
dracoLoader.setDecoderPath('/draco/')

const gltfLoader = loaders.gltfLoader
gltfLoader.setDRACOLoader(dracoLoader)


//menu island
export const menuGroup = new THREE.Group()
menuGroup.name = 'menuIsland'
menuGroup.position.set(0, 0, 4)

const menuMainPawGroup = new THREE.Group()
menuGroup.add(menuMainPawGroup)

export let twitter = null;
export let discord = null;
export let blog = null;
export let pawBig = null;

export let NFTsFinger = null;
export let gamesMeowverseFinger = null;
export let roadmapFinger = null;
export let partnersFinger = null;

//test island
export const testIslandGroup = new THREE.Group()
const bakedMaterial = new THREE.MeshBasicMaterial({ map:  textures.bakedTexture})

//Big island
export const bigIslandGroup = new THREE.Group()
bigIslandGroup.position.set(-9, 0, -2)
bigIslandGroup.name = 'bigIsland'

export let bigIslandLand = null;
export let bigIslandBath = null;
export let bigIslandBoat = null;
export let bigIslandGenCard1 = null;
export let bigIslandGenCard2 = null;
export let bigIslandOrigCard1 = null;
export let bigIslandOrigCard2 = null;
export let bigIslandOrigCard3 = null;
export let bigIslandOrigCard4 = null;
export let bigIslandOrigCard5 = null;
export let bigIslandSign1 = null;
export let bigIslandSign2 = null;
export let bigIslandSign3 = null;
export let bigIslandToken = null;

// Meowverse island
export const meowverseIslandGroup = new THREE.Group()
meowverseIslandGroup.position.set(6, 0, -7)

//Roadmap island
export const roadmapGroup = new THREE.Group()
roadmapGroup.position.set(6.5, 0, 1.5)



/**
 * Models
 */

//menu island
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

// test island

gltfLoader.load(
    'models/WEB3_BIGISLAND/WEB3_BIGISLAND_BAKING.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterial
        })
        testIslandGroup.add(gltf.scene)
    })



// Big island
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

        // createToken(1, .2, 0, bigIslandGroup,)
        // createToken(1, 0, 1, bigIslandGroup)
        // createToken(1, 0, 2.5, bigIslandGroup)
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