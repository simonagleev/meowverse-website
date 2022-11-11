import * as THREE from 'three'
import * as textures from './Textures.js'
import * as loaders from './Loaders.js'



const dracoLoader = loaders.dracoLoader
dracoLoader.setDecoderPath('/draco/')

const gltfLoader = loaders.gltfLoader
gltfLoader.setDRACOLoader(dracoLoader)

/**
 * Composer
 */


// Tip circle
export const tipCircle = new THREE.Group()

tipCircle.position.x = -0.05
tipCircle.position.y = .8
tipCircle.position.z = 1

export let tipCircleTwitter = null
export let tipCircleBlog = null

export const createAllTipCircles = () => {
    tipCircleTwitter = tipCircle.clone()
    tipCircleTwitter.position.set(-1.05, .8, 1.2)

    tipCircleBlog = tipCircle.clone()
    tipCircleBlog.position.set(1.05, .8, 1.2)

    menuMainPawGroup.add(tipCircleTwitter, tipCircleBlog)
}
    



//menu island
export const menuGroup = new THREE.Group()
menuGroup.name = 'menuIsland'
menuGroup.position.set(0, 0, 4)

const menuMainPawGroup = new THREE.Group()
menuMainPawGroup.add(tipCircle)
menuGroup.add(menuMainPawGroup)

const bakedMaterialMenu = new THREE.MeshBasicMaterial({ map:  textures.backedTextureMenu})
textures.backedTextureMenu.flipY = false

export let twitter = null;
export let twitterPlate = null;

export let discord = null;
export let discordPlate = null;

export let blog = null;
export let blogPlate = null;

export let pawBig = null;
export let roadmapPaw1 = null;
export let roadmapPaw2 = null;
export let menuPaw1 = null;
export let menuPaw2 = null;

export let NFTsFinger = null;
export let NFTsFingerToken = null;
export let NFTsFingerSign = null;

export let gamesMeowverseFinger = null;
export let gamesMeowverseFingerKart = null;
export let gamesMeowverseFingerMushroom = null;
export let gamesMeowverseFingerSign = null;

export let roadmapFinger = null;
export let roadmapFingerSign = null;

export let partnersFinger = null;
export let partnersFingerQuestion = null;
export let partnersFingerSign = null;




//Big island 
export const bigIslandGroup = new THREE.Group()
bigIslandGroup.position.set(-9, 0, -2)
bigIslandGroup.name = 'bigIsland'
const bakedMaterial = new THREE.MeshBasicMaterial({ map:  textures.bakedTexture})
textures.bakedTexture.flipY = false

export let bigIslandLand = null;
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
    'models/WEB3_MENU/menu-backed/menu_main_island.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)

        pawBig = gltf.scene.children[0]
        pawBig.name = 'pawBig'
    },
)

gltfLoader.load(
    'models/WEB3_MENU/menu-backed/menu_twitter.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)

        twitter = gltf.scene.children[0]
        twitter.name = 'twitter'
    },
)

gltfLoader.load(
    'models/WEB3_MENU/menu-backed/menu_plate1.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)

        twitterPlate = gltf.scene.children[0]
        twitterPlate.name = 'twitterPlate'
    
    },
)

gltfLoader.load(
    'models/WEB3_MENU/menu-backed/menu_discord.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)

        discord = gltf.scene.children[0]
        discord.name = 'dscord'
    },
)

gltfLoader.load(
    'models/WEB3_MENU/menu-backed/menu_plate2.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)

        discordPlate = gltf.scene.children[0]
        discordPlate.name = 'discordPlate'
    
    },
)

gltfLoader.load(
    'models/WEB3_MENU/menu-backed/menu_blog.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)

        blog = gltf.scene.children[0]
        blog.name = 'blog'
    },
)

gltfLoader.load(
    'models/WEB3_MENU/menu-backed/menu_plate3.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)

        blogPlate = gltf.scene.children[0]
        blogPlate.name = 'blogPlate'
    
    },
)

gltfLoader.load(
    'models/WEB3_MENU/menu-backed/menu_paw.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)
        roadmapPaw1 = gltf.scene.children[0]
        roadmapPaw1.name = 'roadmapPaw1'
    
    },
)

gltfLoader.load(
    'models/WEB3_MENU/menu-backed/menu_paw2.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)
        roadmapPaw2 = gltf.scene.children[0]
        roadmapPaw2.name = 'roadmapPaw2'
    
    },
)

gltfLoader.load(
    'models/WEB3_MENU/menu-backed/menu_paw3.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)
        menuPaw1 = gltf.scene.children[0]
        menuPaw1.name = 'menuPaw1'
    
    },
)

gltfLoader.load(
    'models/WEB3_MENU/menu-backed/menu_paw4.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)
        menuPaw2 = gltf.scene.children[0]
        menuPaw2.name = 'menuPaw2'
    
    },
)

// NFTsFinger
gltfLoader.load(
    'models/WEB3_MENU/menu-backed/menu_island1.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)
        NFTsFinger = gltf.scene.children[0]
        NFTsFinger.name = 'NFTsFinger'
    
    },
)
gltfLoader.load(
    'models/WEB3_MENU/menu-backed/menu_token.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)
        NFTsFingerToken = gltf.scene.children[0]
        NFTsFingerToken.name = 'NFTsFingerToken'
    
    },
)
gltfLoader.load(
    'models/WEB3_MENU/menu-backed/menu_sign1.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)
        NFTsFingerSign = gltf.scene.children[0]
        NFTsFingerSign.name = 'NFTsFingerSign'
    },
)


// GamesMeowverseFinger
gltfLoader.load(
    'models/WEB3_MENU/menu-backed/menu_island2.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)
        gamesMeowverseFinger = gltf.scene.children[0]
        gamesMeowverseFinger.name = 'gamesMeowverseFinger'
    
    },
)

gltfLoader.load(
    'models/WEB3_MENU/menu-backed/menu_kart.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)
        gamesMeowverseFingerKart = gltf.scene.children[0]
        gamesMeowverseFingerKart.name = 'gamesMeowverseFingerKart'
    
    },
)

gltfLoader.load(
    'models/WEB3_MENU/menu-backed/menu_mushroom.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)
        gamesMeowverseFingerMushroom = gltf.scene.children[0]
        gamesMeowverseFingerMushroom.name = 'gamesMeowverseFingerMushroom'
    
    },
)

gltfLoader.load(
    'models/WEB3_MENU/menu-backed/menu_sign2.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)
        gamesMeowverseFingerSign = gltf.scene.children[0]
        gamesMeowverseFingerSign.name = 'gamesMeowverseFingerSign'
    
    },
)


// Roadmap Finger
gltfLoader.load(
    'models/WEB3_MENU/menu-backed/menu_island3.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)
        roadmapFinger = gltf.scene.children[0]
        roadmapFinger.name = 'roadmapFinger'
    
    },
)

gltfLoader.load(
    'models/WEB3_MENU/menu-backed/menu_sign3.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)
        roadmapFingerSign = gltf.scene.children[0]
        roadmapFingerSign.name = 'roadmapFingerSign'
    
    },
)

// Partners Finger
gltfLoader.load(
    'models/WEB3_MENU/menu-backed/menu_island4.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)
        partnersFinger = gltf.scene.children[0]
        partnersFinger.name = 'partnersFinger'
    
    },
)

gltfLoader.load(
    'models/WEB3_MENU/menu-backed/menu_question.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)
        partnersFingerQuestion = gltf.scene.children[0]
        partnersFingerQuestion.name = 'partnersFingerQuestion'
    
    },
)

gltfLoader.load(
    'models/WEB3_MENU/menu-backed/menu_sign4.glb',
    (gltf) => {
        gltf.scene.traverse((child) =>
        {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)
        partnersFingerSign = gltf.scene.children[0]
        partnersFingerSign.name = 'partnersFingerSign'
    
    },
)


// BIG island
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
    'models/WEB3_MEOWVERSE/meowverse-devided/meowverse_kart.glb',
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
    'models/WEB3_MEOWVERSE/meowverse-devided/meowverse_mushroom.glb',
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
    'models/WEB3_MEOWVERSE/meowverse-devided/meowverse_sign1.glb',
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
    'models/WEB3_MEOWVERSE/meowverse-devided/meowverse_sign2.glb',
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
    'models/WEB3_MEOWVERSE/meowverse-devided/meowverse_tree1.glb',
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
    'models/WEB3_MEOWVERSE/meowverse-devided/meowverse_tree2.glb',
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
    'models/WEB3_MEOWVERSE/meowverse-devided/meowverse_wheel1.glb',
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
    'models/WEB3_MEOWVERSE/meowverse-devided/meowverse_wheel2.glb',
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


// Tip Circle 
const ringGeometry = new THREE.RingGeometry(.1, .125, 12, 12)
const ringTexture =  new THREE.MeshBasicMaterial({color: "#ec64f7", side: THREE.DoubleSide })
const dotGeometry = new THREE.CircleGeometry(.025, 12)
const dotTexture = new THREE.MeshBasicMaterial({color: "#ffffff", side: THREE.DoubleSide })

const tipCircleRing = new THREE.Mesh(
    ringGeometry,
    ringTexture
)

const tipCircleDot = new THREE.Mesh(
    dotGeometry,
    dotTexture
)
tipCircle.add(tipCircleRing, tipCircleDot)

