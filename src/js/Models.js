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




//Big island    //Таблички поправить, тут 2 разных накладываются друг на друга
export const bigIslandGroup = new THREE.Group()
bigIslandGroup.position.set(-9, 0, -2)
bigIslandGroup.name = 'bigIsland'
const bakedMaterial = new THREE.MeshBasicMaterial({ map:  textures.bakedTexture})
textures.bakedTexture.flipY = false

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
export let bigIslandToken2 = null;
export let bigIslandToken3 = null;
export let bigIslandToken4 = null;

// Meowverse island
export const meowverseIslandGroup = new THREE.Group()
meowverseIslandGroup.position.set(6, 0, -7)
const backedMaterialMeowverse = new THREE.MeshBasicMaterial({ map:  textures.backedTextureMeowverse})
textures.backedTextureMeowverse.flipY = false


export let meowverseIslandLand = null;
export let meowverseIslandCliff = null;
export let meowverseIslandGun = null;
export let meowverseIslandKart = null;
export let meowverseIslandMushroom = null;
export let meowverseIslandSign1 = null;
export let meowverseIslandSign2 = null;
export let meowverseIslandTree1 = null;
export let meowverseIslandTree2 = null;
export let meowverseIslandWheel1 = null;
export let meowverseIslandWheel2 = null;


//Roadmap island
export const roadmapGroup = new THREE.Group()
roadmapGroup.position.set(6.5, 0, 1.5)

const backedMaterialRoadmap = new THREE.MeshBasicMaterial({ map:  textures.backedTextureRoadmap})
textures.backedTextureRoadmap.flipY = false


export let roadmapIslandA = null;
export let roadmapIslandB = null;
export let roadmapIslandBaseButton = null;
export let roadmapIslandButton = null;
export let roadmapIslandLand = null;
export let roadmapIslandPaw1 = null;
export let roadmapIslandPaw2 = null;
export let roadmapIslandSign = null;



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



// Big island
gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/bigisland_island.glb',

    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterial
        })
        bigIslandGroup.add(gltf.scene)
        bigIslandLand = gltf.scene
        bigIslandLand.name = 'bigIslandLand'

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
    'models/WEB3_BIGISLAND/PLAN_B/bigisland_sign1.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterial
        })
        
        bigIslandGroup.add(gltf.scene)
        bigIslandSign1 = gltf.scene
        bigIslandSign1.name = 'bigIslandSign1'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/bigisland_sign2.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterial
        })

        bigIslandGroup.add(gltf.scene)
        bigIslandSign2 = gltf.scene
        bigIslandSign2.name = 'bigIslandSign2'

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/bigisland_sign3.glb',
    (gltf) => {

        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterial
        })

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

    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_TOKEN.gltf',
    (gltf) => {
        gltf.scene.position.set(1, .2, 0)
        bigIslandGroup.add(gltf.scene)
        bigIslandToken2 = gltf.scene
        bigIslandToken2.name = 'bigIslandToken2'
    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_TOKEN.gltf',
    (gltf) => {
        gltf.scene.position.set(1, 0, 1)
        bigIslandGroup.add(gltf.scene)
        bigIslandToken3 = gltf.scene
        bigIslandToken3.name = 'bigIslandToken3'
    },
)

gltfLoader.load(
    'models/WEB3_BIGISLAND/PLAN_B/WEB3_BIGISLAND_REMESHED_TOKEN.gltf',
    (gltf) => {
        gltf.scene.position.set(1, 0, 2.5)
        bigIslandGroup.add(gltf.scene)
        bigIslandToken4 = gltf.scene
        bigIslandToken4.name = 'bigIslandToken4'
    },
)


//Meowverse island

gltfLoader.load(
    'models/WEB3_MEOWVERSE/meowverse-devided/meowverse_island.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = backedMaterialMeowverse
        })
        meowverseIslandGroup.add(gltf.scene)
    },
)

gltfLoader.load(
    'models/WEB3_MEOWVERSE/meowverse-devided/meowverse_cliff.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = backedMaterialMeowverse
        })
        meowverseIslandGroup.add(gltf.scene)
        meowverseIslandCliff = gltf.scene
        meowverseIslandCliff.name = 'meowverseIslandCliff'
    },
)

gltfLoader.load(
    'models/WEB3_MEOWVERSE/meowverse-devided/meowverse_gun.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = backedMaterialMeowverse
        })
        meowverseIslandGroup.add(gltf.scene)
        meowverseIslandGun = gltf.scene
        meowverseIslandGun.name = 'meowverseIslandGun'
    },
)

gltfLoader.load(
    'models/WEB3_MEOWVERSE/meowverse-devided/meowverse_Kart.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = backedMaterialMeowverse
        })
        meowverseIslandGroup.add(gltf.scene)
        meowverseIslandKart = gltf.scene
        meowverseIslandKart.name = 'meowverseIslandKart'
    },
)

gltfLoader.load(
    'models/WEB3_MEOWVERSE/meowverse-devided/meowverse_Mushroom.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = backedMaterialMeowverse
        })
        meowverseIslandGroup.add(gltf.scene)
        meowverseIslandMushroom = gltf.scene
        meowverseIslandMushroom.name = 'meowverseIslandMushroom'
    },
)

gltfLoader.load(
    'models/WEB3_MEOWVERSE/meowverse-devided/meowverse_Sign1.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = backedMaterialMeowverse
        })
        meowverseIslandGroup.add(gltf.scene)
        meowverseIslandSign1 = gltf.scene
        meowverseIslandSign1.name = 'meowverseIslandSign1'
    },
)

gltfLoader.load(
    'models/WEB3_MEOWVERSE/meowverse-devided/meowverse_Sign2.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = backedMaterialMeowverse
        })
        meowverseIslandGroup.add(gltf.scene)
        meowverseIslandSign2 = gltf.scene
        meowverseIslandSign2.name = 'meowverseIslandSign2'
    },
)

gltfLoader.load(
    'models/WEB3_MEOWVERSE/meowverse-devided/meowverse_Tree1.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = backedMaterialMeowverse
        })
        meowverseIslandGroup.add(gltf.scene)
        meowverseIslandTree1 = gltf.scene
        meowverseIslandTree1.name = 'meowverseIslandTree1'
    },
)

gltfLoader.load(
    'models/WEB3_MEOWVERSE/meowverse-devided/meowverse_Tree2.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = backedMaterialMeowverse
        })
        meowverseIslandGroup.add(gltf.scene)
        meowverseIslandTree2 = gltf.scene
        meowverseIslandTree2.name = 'meowverseIslandTree2'
    },
)

gltfLoader.load(
    'models/WEB3_MEOWVERSE/meowverse-devided/meowverse_Wheel1.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = backedMaterialMeowverse
        })
        meowverseIslandGroup.add(gltf.scene)
        meowverseIslandWheel1 = gltf.scene
        meowverseIslandWheel1.name = 'meowverseIslandWheel1'
    },
)

gltfLoader.load(
    'models/WEB3_MEOWVERSE/meowverse-devided/meowverse_Wheel2.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = backedMaterialMeowverse
        })
        meowverseIslandGroup.add(gltf.scene)
        meowverseIslandWheel2 = gltf.scene
        meowverseIslandWheel2.name = 'meowverseIslandWheel2'
    },
)


//Roadmap island 
gltfLoader.load(
    'models/WEB3_ROADMAP/roadmap-backed/roadmap_island.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = backedMaterialRoadmap
        })
        roadmapGroup.add(gltf.scene)
        roadmapIslandLand = gltf.scene
        roadmapIslandLand.name = 'roadmapIslandLand'
    },
)

gltfLoader.load(
    'models/WEB3_ROADMAP/roadmap-backed/roadmap_a.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = backedMaterialRoadmap
        })
        roadmapGroup.add(gltf.scene)
        roadmapIslandA = gltf.scene
        roadmapIslandA.name = 'roadmapIslandA'
    },
)

gltfLoader.load(
    'models/WEB3_ROADMAP/roadmap-backed/roadmap_b.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = backedMaterialRoadmap
        })
        roadmapGroup.add(gltf.scene)
        roadmapIslandB = gltf.scene
        roadmapIslandB.name = 'roadmapIslandB'
    },
)

gltfLoader.load(
    'models/WEB3_ROADMAP/roadmap-backed/roadmap_basebutton.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = backedMaterialRoadmap
        })
        roadmapGroup.add(gltf.scene)
        roadmapIslandBaseButton = gltf.scene
        roadmapIslandBaseButton.name = 'roadmapIslandBaseButton'
    },
)

gltfLoader.load(
    'models/WEB3_ROADMAP/roadmap-backed/roadmap_button.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = backedMaterialRoadmap
        })
        roadmapGroup.add(gltf.scene)
        roadmapIslandButton = gltf.scene
        roadmapIslandButton.name = 'roadmapIslandButton'
    },
)

gltfLoader.load(
    'models/WEB3_ROADMAP/roadmap-backed/roadmap_paw1.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = backedMaterialRoadmap
        })
        roadmapGroup.add(gltf.scene)
        roadmapIslandPaw1 = gltf.scene
        roadmapIslandPaw1.name = 'roadmapIslandPaw1'
    },
)

gltfLoader.load(
    'models/WEB3_ROADMAP/roadmap-backed/roadmap_paw2.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = backedMaterialRoadmap
        })
        roadmapGroup.add(gltf.scene)
        roadmapIslandPaw2 = gltf.scene
        roadmapIslandPaw2.name = 'roadmapIslandPaw2'
    },
)

gltfLoader.load(
    'models/WEB3_ROADMAP/roadmap-backed/roadmap_sign.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = backedMaterialRoadmap
        })
        roadmapGroup.add(gltf.scene)
        roadmapIslandSign = gltf.scene
        roadmapIslandSign.name = 'roadmapIslandSign'
    },
)