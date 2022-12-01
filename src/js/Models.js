import * as THREE from 'three'
import * as textures from './Textures.js'
import * as loaders from './Loaders.js'
import * as script from '../script.js'

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
tipCircle.position.z = 2

export let tipCircleTwitter = null
export let tipCircleBlog = null
export let tipCircleGenesis = null
export let tipCircleOG = null
export let tipCircleMeowrush = null
export let tipCircleTokenomeelks = null


export const createAllTipCircles = () => {
    tipCircleTwitter = tipCircle.clone()
    tipCircleTwitter.position.set(-1.05, .8, 2.2)

    tipCircleBlog = tipCircle.clone()
    tipCircleBlog.position.set(1.05, .8, 2.2)

    tipCircleGenesis = tipCircle.clone()
    tipCircleGenesis.position.x = genesisCard1.position.x + 0.3
    tipCircleGenesis.position.y = genesisCard1.position.y + 0.9
    tipCircleGenesis.position.z = genesisCard1.position.z + 0.4
    tipCircleGenesis.name = 'tipCircleGenesis'
    tipCircleGenesis.children[0].name = 'tipCircleGenesis1'
    tipCircleGenesis.children[1].name = 'tipCircleGenesis2'

    tipCircleOG = tipCircle.clone()
    tipCircleOG.position.x = OGIslandLand.children[0].position.x 
    tipCircleOG.position.y = OGIslandLand.children[0].position.y + .6
    tipCircleOG.position.z = OGIslandLand.children[0].position.z + .3
    tipCircleOG.name = 'tipCircleOG'
    tipCircleOG.children[0].name = 'tipCircleOG1'
    tipCircleOG.children[1].name = 'tipCircleOG2'

    tipCircleMeowrush = tipCircle.clone()
    tipCircleMeowrush.position.x = meowrushIslandGun.children[0].position.x + 1
    tipCircleMeowrush.position.y = meowrushIslandGun.children[0].position.y + 1
    tipCircleMeowrush.position.z = meowrushIslandGun.children[0].position.z + .9
    tipCircleMeowrush.name = 'tipCircleMeowrush'
    tipCircleMeowrush.children[0].name = 'tipCircleMeowrush1'
    tipCircleMeowrush.children[1].name = 'tipCircleMeowrush2'

    tipCircleTokenomeelks = tipCircle.clone()
    tipCircleTokenomeelks.position.x = meelkFactoryX1.position.x - .3
    tipCircleTokenomeelks.position.y = meelkFactoryX1.position.y + 1
    tipCircleTokenomeelks.position.z = meelkFactoryX1.position.z + .9
    tipCircleTokenomeelks.name = 'tipCircleTokenomeelks'
    tipCircleTokenomeelks.children[0].name = 'tipCircleTokenomeelks1'
    tipCircleTokenomeelks.children[1].name = 'tipCircleTokenomeelks2'

    menuMainPawGroup.add(tipCircleTwitter, tipCircleBlog)
    genesisIslandGroup.add(tipCircleGenesis)
    OGIslandGroup.add(tipCircleOG)
    meowrushIslandGroup.add(tipCircleMeowrush)
    meelkIslandGroup.add(tipCircleTokenomeelks)
}


//menu island
export const menuGroup = new THREE.Group()
menuGroup.name = 'menuIsland'

const menuMainPawGroup = new THREE.Group()
menuMainPawGroup.name = 'menuIsland'
menuMainPawGroup.add(tipCircle)
menuGroup.add(menuMainPawGroup)

const bakedMaterialMenu = new THREE.MeshBasicMaterial({ map: textures.menuMainBaked })
textures.menuMainBaked.flipY = false

const bakedMaterialNFTsFinger = new THREE.MeshBasicMaterial({ map: textures.menuNFTsBaked })
textures.menuNFTsBaked.flipY = false
const bakedMaterialGamesMeowverseFinger = new THREE.MeshBasicMaterial({ map: textures.menuGamesMeowverseBaked })
textures.menuGamesMeowverseBaked.flipY = false
const bakedMaterialRoadmapFinger = new THREE.MeshBasicMaterial({ map: textures.menuRoadmapBaked })
textures.menuRoadmapBaked.flipY = false
const bakedMaterialPartnersFinger = new THREE.MeshBasicMaterial({ map: textures.menuPartnersBaked })
textures.menuPartnersBaked.flipY = false

export let twitter = null;
export let twitterPlate = null;

export let discord = null;
export let discordPlate = null;

export let blog = null;
export let blogPlate = null;

export let menuIslandLand = null;
export let menuPaw1 = null;
export let menuPaw2 = null;

export let NFTsFinger = null;
export let NFTsFingerToken = null;
export let NFTsFingerSign = null;
export let NFTsFingerGenCard = null;
export let NFTsFingerOgCard = null;

export let gamesMeowverseFinger = null;
export let gamesMeowverseFingerKart = null;
export let gamesMeowverseFingerMushroom = null;
export let gamesMeowverseFingerSign = null;

export let roadmapFinger = null;
export let roadmapFingerSign = null;
export let roadmapPaw1 = null;
export let roadmapPaw2 = null;

export let partnersFinger = null;
export let partnersFingerSign = null;


// GENESIS Islnad
export const genesisIslandGroup = new THREE.Group()
genesisIslandGroup.position.set(0, 0, 1.3)
genesisIslandGroup.name = 'genesisIsland'
const genesisIslandMaterial = new THREE.MeshBasicMaterial({ map: textures.genesisIslandBacked })
textures.genesisIslandBacked.flipY = false

const genesisGen1Material = new THREE.MeshBasicMaterial({ map: textures.genesisIslandGen1Backed })
textures.genesisIslandGen1Backed.flipY = false

const genesisGen2Material = new THREE.MeshBasicMaterial({ map: textures.genesisIslandGen2Backed })
textures.genesisIslandGen2Backed.flipY = false

const genesisGen3Material = new THREE.MeshBasicMaterial({ map: textures.genesisIslandGen3Backed })
textures.genesisIslandGen3Backed.flipY = false

const genesisBoatMaterial = new THREE.MeshBasicMaterial({ map: textures.genesisIslandBoatBacked })
textures.genesisIslandBoatBacked.flipY = false

export let genesisIslandLand = null;
export let genesisBoat = null;
export let genesisCard1 = null;
export let genesisCard2 = null;
export let genesisCard3 = null;


// MEELK Islnad
export const meelkIslandGroup = new THREE.Group()
meelkIslandGroup.position.set(0, 0, 0)
meelkIslandGroup.name = 'meelkIsland'
const meelkIslandMaterial = new THREE.MeshBasicMaterial({ map: textures.meelkIslandBacked })
textures.meelkIslandBacked.flipY = false


export let meelkIslandLand = null;
export let meelkFactoryX1 = null;
export let meelkFactoryX2 = null;
export let meelkToken1 = null;
export let meelkToken2 = null;
export let meelkToken3 = null;
export let meelkTokenTower1 = null;
export let meelkTokenTower2 = null;
export let meelkTokenTower3 = null;
export let meelkTokenTower4 = null;
export let meelkTokenTower5 = null;


// OG Islnad
export const OGIslandGroup = new THREE.Group()
OGIslandGroup.position.set(0, 0, 0)
OGIslandGroup.name = 'OGIsland'
const OGIslandMaterial = new THREE.MeshBasicMaterial({ map: textures.OGIslandBacked })
textures.OGIslandBacked.flipY = false

const OG1IslandMaterial = new THREE.MeshBasicMaterial({ map: textures.OG1IslandBacked })
textures.OG1IslandBacked.flipY = false

const OG2IslandMaterial = new THREE.MeshBasicMaterial({ map: textures.OG2IslandBacked })
textures.OG2IslandBacked.flipY = false

const OG3IslandMaterial = new THREE.MeshBasicMaterial({ map: textures.OG3IslandBacked })
textures.OG3IslandBacked.flipY = false

let OGIslandLand = null


// Meowrush island
export const meowrushIslandGroup = new THREE.Group()
meowrushIslandGroup.name = 'meowrushIslandGroup'
const backedMaterialMeowrush = new THREE.MeshBasicMaterial({ map: textures.meowrushIslandBaked })
textures.meowrushIslandBaked.flipY = false

const backedMaterialMeowrushGun = new THREE.MeshBasicMaterial({ map: textures.meowrushGunBaked })
textures.meowrushGunBaked.flipY = false

const backedMaterialMeowrushKart = new THREE.MeshBasicMaterial({ map: textures.meowrushKartBaked })
textures.meowrushKartBaked.flipY = false

export let meowrushIslandLand = null;
export let meowrushIslandGun = null;
export let meowrushIslandKart = null;
export let meowrushIslandMushroom = null;
export let meowrushIslandWheel = null;


// MeowVerse Island
export const meowverseIslandGroup = new THREE.Group()
meowverseIslandGroup.name = 'meowverseIslandGroup'

const backedMaterialMeowverse = new THREE.MeshBasicMaterial({ map: textures.meowverseIslandBaked })
textures.meowverseIslandBaked.flipY = false

export let meowverseIslandLand = null;
export let meowverseIslandCliff = null;
export let meowverseIslandMushroom1 = null;
export let meowverseIslandMushroom2 = null;
export let meowverseIslandTree1 = null;
export let meowverseIslandTree2 = null;
export let meowverseIslandTree3 = null;
export let meowverseIslandTree4 = null;
export let meowverseIslandTree5 = null;
export let meowverseIslandTree6 = null;
export let meowverseIslandTree7 = null;


// Partners Island
export const partnersIslandGroup = new THREE.Group()
const backedMaterialPartners = new THREE.MeshBasicMaterial({ map: textures.partnersIslandBaked })
textures.partnersIslandBaked.flipY = false

let partnersIslandLand = null;


//Roadmap island
export const roadmapGroup = new THREE.Group()

// let roadmapMaterial = script.roadmapMaterial

const backedMaterialRoadmap = new THREE.MeshBasicMaterial({ map: textures.backedTextureRoadmap })
textures.backedTextureRoadmap.flipY = false

export let roadmapIslandA = null;
export let roadmapIslandB = null;
export let roadmapIslandBaseButton = null;
export let roadmapIslandButton = null;
export let roadmapIslandLand = null;
export let roadmapIslandPaw1 = null;
export let roadmapIslandPaw2 = null;
export let roadmapIslandMore = null;


// CLOUDS
export const cloudsGroup = new THREE.Group()
const backedMaterialClouds = new THREE.MeshBasicMaterial({ map: textures.cloudsBaked, transparent: true, opacity: 0.9 })
textures.cloudsBaked.flipY = false

cloudsGroup.position.y = 3

export let cloud1 = null;
export let cloud2 = null;
export let cloud3 = null;
export let cloud4 = null;
export let cloud5 = null;
export let cloud6 = null;
export let cloud7 = null;
export let cloud8 = null;
export let cloud9 = null;
export let cloud10 = null;


// LOGO
export const logoGroup = new THREE.Group()
const logoGeometry = new THREE.PlaneGeometry(10, 7)

const logoMaterial = new THREE.MeshStandardMaterial({
    alphaMap: textures.logoBaked,
    transparent: true,
    alphaTest: 0.001
})
export const logo = new THREE.Mesh(
    logoGeometry,
    logoMaterial
)
logo.position.set(0, 0, -7)
logo.rotation.x = -Math.PI / 2
logo.rotation.z = -0.05


// CATS
const backedMaterialCat9 = new THREE.MeshBasicMaterial({ map: textures.cat9Baked })
textures.cat9Baked.flipY = false

const backedMaterialCat2 = new THREE.MeshBasicMaterial({ map: textures.cat2Baked })
textures.cat2Baked.flipY = false

const backedMaterialCat1 = new THREE.MeshBasicMaterial({ map: textures.cat1Baked })
textures.cat1Baked.flipY = false

const backedMaterialCat3 = new THREE.MeshBasicMaterial({ map: textures.cat3Baked })
textures.cat3Baked.flipY = false

const backedMaterialCat4 = new THREE.MeshBasicMaterial({ map: textures.cat4Baked })
textures.cat4Baked.flipY = false

const backedMaterialCat5 = new THREE.MeshBasicMaterial({ map: textures.cat5Baked })
textures.cat5Baked.flipY = false

const backedMaterialCat6 = new THREE.MeshBasicMaterial({ map: textures.cat6Baked })
textures.cat6Baked.flipY = false

export let cat1 = null;
export let mixerCat1 = null;
export let cat1Mushroom = null;

export let cat2 = null;
export let mixerCat2 = null;

export let cat3 = null;
export let mixerCat3 = null;

export let cat4 = null;

export let cat5 = null;
export let mixerCat5 = null;

export let cat6 = null;
export let mixerCat6 = null;

export let cat9 = null;
export let mixerCat9 = null;


/**
 * Models
 */

//menu island
gltfLoader.load(
    'models/menu-island/menu_island.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)

        menuIslandLand = gltf.scene.children[0]
        menuIslandLand.name = 'menuIslandLand'
    },
)

gltfLoader.load(
    'models/menu-island/menu_twitter.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)
        twitter = gltf.scene.children[1]
        twitter.name = 'twitter'
        twitterPlate = gltf.scene.children[0]
        twitterPlate.name = 'twitterPlate'
    },
)

gltfLoader.load(
    'models/menu-island/menu_discord.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)

        discord = gltf.scene.children[1]
        discord.name = 'dscord'
        discordPlate = gltf.scene.children[0]
        discordPlate.name = 'discordPlate'
    },
)

gltfLoader.load(
    'models/menu-island/menu_blog.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)
        blog = gltf.scene.children[1]    // Group
        blog.name = 'blog'
        blogPlate = gltf.scene.children[0]
        blogPlate.name = 'blogPlate'
    },
)

gltfLoader.load(
    'models/menu-island/menu_paw1.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)
        menuPaw1 = gltf.scene.children[0]
        menuPaw1.name = 'menuPaw1'

    },
)

gltfLoader.load(
    'models/menu-island/menu_paw2.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = bakedMaterialMenu
        })
        menuMainPawGroup.add(gltf.scene)
        menuPaw2 = gltf.scene.children[0]
        menuPaw2.name = 'menuPaw2'

    },
)

// NFTsFinger
gltfLoader.load(
    'models/menu-island/NM_island.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = bakedMaterialNFTsFinger
        })
        menuMainPawGroup.add(gltf.scene)
        NFTsFinger = gltf.scene.children[0]
        NFTsFinger.name = 'NFTsFinger'
    },
)
gltfLoader.load(
    'models/menu-island/NM_coin.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = meelkIslandMaterial
        })
        menuMainPawGroup.add(gltf.scene)
        NFTsFingerToken = gltf.scene.children[0]
        NFTsFingerToken.name = 'NFTsFingerToken'

    },
)
gltfLoader.load(
    'models/menu-island/NM_sign.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = bakedMaterialNFTsFinger
        })
        menuMainPawGroup.add(gltf.scene)
        NFTsFingerSign = gltf.scene
        NFTsFingerSign.name = 'NFTsFingerSign'
    },
)

gltfLoader.load(
    'models/menu-island/NM_gen.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = genesisGen3Material
        })
        menuMainPawGroup.add(gltf.scene)
        NFTsFingerOgCard = gltf.scene.children[0]
        NFTsFingerOgCard.name = 'NFTsFingerOgCard'
    },
)

gltfLoader.load(
    'models/menu-island/NM_gen1.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = OG2IslandMaterial
        })
        menuMainPawGroup.add(gltf.scene)
        NFTsFingerGenCard = gltf.scene.children[0]
        NFTsFingerGenCard.name = 'NFTsFingerGenCard'
    },
)


// GamesMeowverseFinger
gltfLoader.load(
    'models/menu-island/GM_island.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = bakedMaterialGamesMeowverseFinger
        })
        menuMainPawGroup.add(gltf.scene)
        gamesMeowverseFinger = gltf.scene.children[0]
        gamesMeowverseFinger.name = 'gamesMeowverseFinger'

    },
)

gltfLoader.load(
    'models/menu-island/GM_kart.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialMeowrushKart
        })
        menuMainPawGroup.add(gltf.scene)
        gamesMeowverseFingerKart = gltf.scene
        gamesMeowverseFingerKart.name = 'gamesMeowverseFingerKart'

    },
)

gltfLoader.load(
    'models/menu-island/GM_mush.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialMeowrush
        })

        menuMainPawGroup.add(gltf.scene)
        gamesMeowverseFingerMushroom = gltf.scene
        gamesMeowverseFingerMushroom.name = 'gamesMeowverseFingerMushroom'
    },
)

gltfLoader.load(
    'models/menu-island/GM_sign.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = bakedMaterialGamesMeowverseFinger
        })
        menuMainPawGroup.add(gltf.scene)
        gamesMeowverseFingerSign = gltf.scene
        gamesMeowverseFingerSign.name = 'gamesMeowverseFingerSign'
    },
)


// Roadmap Finger
gltfLoader.load(
    'models/menu-island/R_island.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = bakedMaterialRoadmapFinger
        })
        menuMainPawGroup.add(gltf.scene)
        roadmapFinger = gltf.scene.children[0]
        roadmapFinger.name = 'roadmapFinger'
    },
)

gltfLoader.load(
    'models/menu-island/R_sign.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = bakedMaterialRoadmapFinger
        })
        menuMainPawGroup.add(gltf.scene)
        roadmapFingerSign = gltf.scene
        roadmapFingerSign.name = 'roadmapFingerSign'
    },
)

gltfLoader.load(
    'models/menu-island/R_paw1.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialRoadmap
        })
        menuMainPawGroup.add(gltf.scene)
        roadmapPaw1 = gltf.scene.children[0]
        roadmapPaw1.name = 'roadmapPaw1'
    },
)

gltfLoader.load(
    'models/menu-island/R_paw2.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialRoadmap
        })
        menuMainPawGroup.add(gltf.scene)
        roadmapPaw2 = gltf.scene.children[0]
        roadmapPaw2.name = 'roadmapPaw2'
    },
)


// Partners Finger
gltfLoader.load(
    'models/menu-island/P_island.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = bakedMaterialPartnersFinger
        })
        menuMainPawGroup.add(gltf.scene)
        partnersFinger = gltf.scene.children[0]
        partnersFinger.name = 'partnersFinger'

    },
)

gltfLoader.load(
    'models/menu-island/P_sign.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = bakedMaterialPartnersFinger
        })
        menuMainPawGroup.add(gltf.scene)
        partnersFingerSign = gltf.scene.children[0]
        partnersFingerSign.name = 'partnersFingerSign'

    },
)


// GENESIS Island
gltfLoader.load(
    'models/GEN-island/GEN_island.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = genesisIslandMaterial
        })
        genesisIslandGroup.add(gltf.scene)
        genesisIslandLand = gltf.scene
        genesisIslandLand.name = 'genesisIslandLand'
    },
)

gltfLoader.load(
    'models/GEN-island/GEN_1.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = genesisGen1Material
        })
        genesisIslandGroup.add(gltf.scene)
        genesisCard1 = gltf.scene.children[0]
    },
)

gltfLoader.load(
    'models/GEN-island/GEN_2.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = genesisGen2Material
        })
        genesisIslandGroup.add(gltf.scene)
        genesisCard2 = gltf.scene.children[0]
    },
)

gltfLoader.load(
    'models/GEN-island/GEN_3.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = genesisGen3Material
        })
        genesisIslandGroup.add(gltf.scene)
        genesisCard3 = gltf.scene.children[0]
    },
)

gltfLoader.load(
    'models/GEN-island/GEN_boat.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = genesisBoatMaterial
        })
        genesisIslandGroup.add(gltf.scene)
        genesisBoat = gltf.scene.children[0]
    },
)


// MEELK Island
gltfLoader.load(
    'models/Meelk-island/meelk_island.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = meelkIslandMaterial
        })
        meelkIslandGroup.add(gltf.scene)
        meelkIslandLand = gltf.scene
        meelkIslandLand.name = 'meelkIslandLand'
    },
)

gltfLoader.load(
    'models/Meelk-island/meelk_factoryx1.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = meelkIslandMaterial
        })
        meelkIslandGroup.add(gltf.scene)
        meelkFactoryX1 = gltf.scene.children[0]

    },
)

gltfLoader.load(
    'models/Meelk-island/meelk_factoryx2.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = meelkIslandMaterial
        })
        meelkIslandGroup.add(gltf.scene)
        meelkFactoryX2 = gltf.scene.children[0]

    },
)

gltfLoader.load(
    'models/Meelk-island/meelk_token1.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = meelkIslandMaterial
        })
        gltf.scene.children[0].children[0].name = 'cylinderToken1'
        gltf.scene.children[0].children[1].name = 'cylinderToken1_1'

        meelkIslandGroup.add(gltf.scene)
        meelkToken1 = gltf.scene.children[0]

    },
)

gltfLoader.load(
    'models/Meelk-island/meelk_token2.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = meelkIslandMaterial
        })
        meelkIslandGroup.add(gltf.scene)
        meelkToken2 = gltf.scene.children[0]

    },
)

gltfLoader.load(
    'models/Meelk-island/meelk_token3.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = meelkIslandMaterial
        })
        meelkIslandGroup.add(gltf.scene)
        meelkToken3 = gltf.scene.children[0]

    },
)

gltfLoader.load(
    'models/Meelk-island/meelk_tokentower1.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = meelkIslandMaterial
        })
        meelkIslandGroup.add(gltf.scene)
        meelkTokenTower1 = gltf.scene.children[0]
    },
)

gltfLoader.load(
    'models/Meelk-island/meelk_tokentower2.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = meelkIslandMaterial
        })
        meelkIslandGroup.add(gltf.scene)
        meelkTokenTower2 = gltf.scene.children[0]

    },
)

gltfLoader.load(
    'models/Meelk-island/meelk_tokentower3.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = meelkIslandMaterial
        })
        meelkIslandGroup.add(gltf.scene)
        meelkTokenTower3 = gltf.scene.children[0]

    },
)

gltfLoader.load(
    'models/Meelk-island/meelk_tokentower4.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = meelkIslandMaterial
        })
        meelkIslandGroup.add(gltf.scene)
        meelkTokenTower4 = gltf.scene.children[0]

    },
)

gltfLoader.load(
    'models/Meelk-island/meelk_tokentower5.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = meelkIslandMaterial
        })
        meelkIslandGroup.add(gltf.scene)
        meelkTokenTower5 = gltf.scene.children[0]

    },
)


// OG island
gltfLoader.load(
    'models/OG-island/OG_island.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = OGIslandMaterial
        })
        OGIslandGroup.add(gltf.scene)
        OGIslandLand = gltf.scene
        OGIslandLand.name = 'OGIslandLand'
    },
)

gltfLoader.load(
    'models/OG-island/OG_1.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = OG1IslandMaterial
        })
        OGIslandGroup.add(gltf.scene)

    },
)

gltfLoader.load(
    'models/OG-island/OG_2.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = OG2IslandMaterial
        })
        OGIslandGroup.add(gltf.scene)

    },
)

gltfLoader.load(
    'models/OG-island/OG_3.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = OG3IslandMaterial
        })
        OGIslandGroup.add(gltf.scene)

    },
)


// Meowrush island
gltfLoader.load(
    'models/meowrush-island/meowrush_island.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialMeowrush
        })
        meowrushIslandGroup.add(gltf.scene)
        meowrushIslandLand = gltf.scene
        meowrushIslandLand.name = 'meowrushIslandLand'
    },
)

gltfLoader.load(
    'models/meowrush-island/meowrush_gun.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialMeowrushGun
        })
        meowrushIslandGroup.add(gltf.scene)
        meowrushIslandGun = gltf.scene
        meowrushIslandGun.name = 'meowrushIslandGun'
    },
)

gltfLoader.load(
    'models/meowrush-island/meowrush_kart.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialMeowrushKart
        })
        meowrushIslandGroup.add(gltf.scene)
        meowrushIslandKart = gltf.scene
        meowrushIslandKart.name = 'meowrushIslandKart'
    },
)

gltfLoader.load(
    'models/meowrush-island/meowrush_mushroom.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialMeowrush
        })
        meowrushIslandGroup.add(gltf.scene)
        meowrushIslandMushroom = gltf.scene
        meowrushIslandMushroom.name = 'meowrushIslandMushroom'
    },
)

gltfLoader.load(
    'models/meowrush-island/meowrush_wheel.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialMeowrush
        })
        meowrushIslandGroup.add(gltf.scene)
        meowrushIslandWheel = gltf.scene
        meowrushIslandWheel.name = 'meowrushIslandWheel'
    },
)


// MeowVERSE Island
gltfLoader.load(
    'models/Meowverse-island/meowverse_island.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialMeowverse
        })
        meowverseIslandGroup.add(gltf.scene)
        meowverseIslandLand = gltf.scene
        meowverseIslandLand.name = 'meowverseIslandLand'
    },
)

gltfLoader.load(
    'models/Meowverse-island/meowverse_cliff.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialMeowverse
        })
        meowverseIslandGroup.add(gltf.scene)
        meowverseIslandCliff = gltf.scene
        meowverseIslandCliff.name = 'meowverseIslandCliff'
    },
)

gltfLoader.load(
    'models/Meowverse-island/meowverse_mush1.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialMeowverse
        })
        meowverseIslandGroup.add(gltf.scene)
        meowverseIslandMushroom1 = gltf.scene
        meowverseIslandMushroom1.name = 'meowverseIslandMushroom1'
    },
)

gltfLoader.load(
    'models/Meowverse-island/meowverse_mush2.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialMeowverse
        })
        meowverseIslandGroup.add(gltf.scene)
        meowverseIslandMushroom2 = gltf.scene
        meowverseIslandMushroom2.name = 'meowverseIslandMushroom2'
    },
)

gltfLoader.load(
    'models/Meowverse-island/meowverse_tree1.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialMeowverse
        })
        meowverseIslandGroup.add(gltf.scene)
        meowverseIslandTree1 = gltf.scene
        meowverseIslandTree1.name = 'meowverseIslandTree1'
    },
)

gltfLoader.load(
    'models/Meowverse-island/meowverse_tree2.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialMeowverse
        })
        meowverseIslandGroup.add(gltf.scene)
        meowverseIslandTree2 = gltf.scene
        meowverseIslandTree2.name = 'meowverseIslandTree2'
    },
)

gltfLoader.load(
    'models/Meowverse-island/meowverse_tree3.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialMeowverse
        })
        meowverseIslandGroup.add(gltf.scene)
        meowverseIslandTree3 = gltf.scene
        meowverseIslandTree3.name = 'meowverseIslandTree3'
    },
)

gltfLoader.load(
    'models/Meowverse-island/meowverse_tree4.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialMeowverse
        })
        meowverseIslandGroup.add(gltf.scene)
        meowverseIslandTree4 = gltf.scene
        meowverseIslandTree4.name = 'meowverseIslandTree4'
    },
)

gltfLoader.load(
    'models/Meowverse-island/meowverse_tree5.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialMeowverse
        })
        meowverseIslandGroup.add(gltf.scene)
        meowverseIslandTree5 = gltf.scene
        meowverseIslandTree5.name = 'meowverseIslandTree5'
    },
)

gltfLoader.load(
    'models/Meowverse-island/meowverse_tree6.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialMeowverse
        })
        meowverseIslandGroup.add(gltf.scene)
        meowverseIslandTree6 = gltf.scene
        meowverseIslandTree6.name = 'meowverseIslandTree6'
    },
)

gltfLoader.load(
    'models/Meowverse-island/meowverse_tree7.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialMeowverse
        })
        meowverseIslandGroup.add(gltf.scene)
        meowverseIslandTree7 = gltf.scene
        meowverseIslandTree7.name = 'meowverseIslandTree7'
    },
)


//PARTNERS island 
gltfLoader.load(
    'models/partners-island/partners_island.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialPartners
        })
        partnersIslandGroup.add(gltf.scene)
        partnersIslandLand = gltf.scene
        partnersIslandLand.name = 'partnersIslandLand'
    },
)


//Roadmap island 
gltfLoader.load(
    'models/Roadmap-island/roadmap_island.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialRoadmap
            // child.material = roadmapMaterial
        })
        roadmapGroup.add(gltf.scene)
        roadmapIslandLand = gltf.scene
        roadmapIslandLand.name = 'roadmapIslandLand'
    },
)

gltfLoader.load(
    'models/Roadmap-island/roadmap_a.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialRoadmap
        })
        roadmapGroup.add(gltf.scene)
        roadmapIslandA = gltf.scene
        roadmapIslandA.name = 'roadmapIslandA'
    },
)

gltfLoader.load(
    'models/Roadmap-island/roadmap_b.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialRoadmap
        })
        roadmapGroup.add(gltf.scene)
        roadmapIslandB = gltf.scene
        roadmapIslandB.name = 'roadmapIslandB'
    },
)

gltfLoader.load(
    'models/Roadmap-island/roadmap_bottom.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialRoadmap
        })
        roadmapGroup.add(gltf.scene)
        roadmapIslandBaseButton = gltf.scene
        roadmapIslandBaseButton.name = 'roadmapIslandBaseButton'
    },
)

gltfLoader.load(
    'models/Roadmap-island/roadmap_button.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialRoadmap
        })
        roadmapGroup.add(gltf.scene)
        roadmapIslandButton = gltf.scene
        roadmapIslandButton.name = 'roadmapIslandButton'
    },
)

gltfLoader.load(
    'models/Roadmap-island/roadmap_paw1.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialRoadmap
        })
        roadmapGroup.add(gltf.scene)
        roadmapIslandPaw1 = gltf.scene
        roadmapIslandPaw1.name = 'roadmapIslandPaw1'
    },
)

gltfLoader.load(
    'models/Roadmap-island/roadmap_paw2.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialRoadmap
        })
        roadmapGroup.add(gltf.scene)
        roadmapIslandPaw2 = gltf.scene
        roadmapIslandPaw2.name = 'roadmapIslandPaw2'
    },
)

gltfLoader.load(
    'models/Roadmap-island/roadmap_more.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialRoadmap
        })
        roadmapGroup.add(gltf.scene)
        roadmapIslandMore = gltf.scene
        roadmapIslandMore.name = 'roadmapIslandMore'
    },
)


// Tip Circle 
const ringGeometry = window.innerWidth > 800 ? new THREE.RingGeometry(.1, .125, 12, 12) : new THREE.RingGeometry(.3, .225, 12, 12)
const ringTexture = new THREE.MeshBasicMaterial({ color: "#ffffff", side: THREE.DoubleSide })
const dotGeometry = window.innerWidth > 800 ? new THREE.CircleGeometry(.075, 12) : new THREE.CircleGeometry(.175, 12)
const dotTexture = new THREE.MeshBasicMaterial({ color: "#ffffff", side: THREE.DoubleSide })

const tipCircleRing = new THREE.Mesh(
    ringGeometry,
    ringTexture
)

const tipCircleDot = new THREE.Mesh(
    dotGeometry,
    dotTexture
)
tipCircle.add(tipCircleRing, tipCircleDot)


// CLOUDS
gltfLoader.load(
    'models/clouds/cloud1.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialClouds
        })
        cloudsGroup.add(gltf.scene)
        cloud1 = gltf.scene
    },
)

gltfLoader.load(
    'models/clouds/cloud2.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialClouds
        })

        cloudsGroup.add(gltf.scene)
        cloud2 = gltf.scene
    },
)

gltfLoader.load(
    'models/clouds/cloud3.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialClouds
        })
        cloudsGroup.add(gltf.scene)
        cloud3 = gltf.scene
    },
)

gltfLoader.load(
    'models/clouds/cloud4.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialClouds
        })
        gltf.scene.position.y = -3

        cloudsGroup.add(gltf.scene)
        cloud4 = gltf.scene
    },
)

gltfLoader.load(
    'models/clouds/cloud5.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialClouds
        })
        cloudsGroup.add(gltf.scene)
        cloud5 = gltf.scene

    },
)

gltfLoader.load(
    'models/clouds/cloud6.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialClouds
        })
        cloudsGroup.add(gltf.scene)
        cloud6 = gltf.scene
    },
)

gltfLoader.load(
    'models/clouds/cloud7.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialClouds
        })
        gltf.scene.position.y = -3

        cloudsGroup.add(gltf.scene)
        cloud7 = gltf.scene
    },
)

gltfLoader.load(
    'models/clouds/cloud6.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialClouds
        })
        gltf.scene.scale.set(.4, .4, .4)
        cloudsGroup.add(gltf.scene)

        cloud8 = gltf.scene
    },
)

gltfLoader.load(
    'models/clouds/cloud4.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialClouds
        })
        // gltf.scene.scale.set(2,2,2)
        gltf.scene.position.x = -11
        cloudsGroup.add(gltf.scene)
        cloud9 = gltf.scene
    },
)

gltfLoader.load(
    'models/clouds/cloud7.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialClouds
        })
        gltf.scene.scale.set(.7, .7, .7)
        gltf.scene.rotation.z = Math.PI / 2.63
        cloudsGroup.add(gltf.scene)
        cloud10 = gltf.scene
    },
)


// CATS
gltfLoader.load(
    'models/cats/CAT_9.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialCat9
        })
        gltf.scene.position.set(0, 2.1, 0)
        script.scene.add(gltf.scene)
        cat9 = gltf.scene

        mixerCat9 = new THREE.AnimationMixer(gltf.scene);
        const fly = mixerCat9.clipAction(gltf.animations[0])
        fly.play()
    },
)

gltfLoader.load(
    'models/cats/CAT_2.gltf',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialCat2
        })
        gltf.scene.position.set(0, 1.64, -10.57)

        script.scene.add(gltf.scene)
        cat2 = gltf.scene

        mixerCat2 = new THREE.AnimationMixer(gltf.scene);
        const cat2Animation = mixerCat2.clipAction(gltf.animations[0])
        cat2Animation.play()
    },
)

gltfLoader.load(
    'models/cats/CAT_1.gltf',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialCat1
        })
        gltf.scene.position.set(-0.36, 1.64, -10.53)
        gltf.scene.rotation.y = 0.6
        script.scene.add(gltf.scene)
        cat1 = gltf.scene

        mixerCat1 = new THREE.AnimationMixer(gltf.scene);
        const cat1Animation = mixerCat1.clipAction(gltf.animations[0])
        cat1Animation.play()
    },
)
gltfLoader.load(
    'models/cats/cat1_mush.gltf',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialMeowverse
        })
        gltf.scene.position.set(-.29, 1.82, -10.51)

        script.scene.add(gltf.scene)
        cat1Mushroom = gltf.scene
    },
)

gltfLoader.load(
    'models/cats/CAT_3.gltf',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialCat3
        })
        gltf.scene.position.set(0.61, 1.64, -10.14)
        gltf.scene.rotation.y = -0.25
        script.scene.add(gltf.scene)
        cat3 = gltf.scene

        mixerCat3 = new THREE.AnimationMixer(gltf.scene);
        const cat3Animation = mixerCat3.clipAction(gltf.animations[0])
        cat3Animation.play()
    },
)

gltfLoader.load(
    'models/cats/CAT_4.gltf',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialCat4
        })
        gltf.scene.position.set(-1.16, 2.08, -10.4)
        script.scene.add(gltf.scene)
        cat4 = gltf.scene
    },
)

gltfLoader.load(
    'models/cats/CAT_5.gltf',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialCat5
        })
        gltf.scene.position.set(5.87, 1.14, -3.62)
        gltf.scene.rotation.y = 0.4
        script.scene.add(gltf.scene)
        cat5 = gltf.scene

        mixerCat5 = new THREE.AnimationMixer(gltf.scene);
        const cat5Animation = mixerCat5.clipAction(gltf.animations[0])
        cat5Animation.play()
    },
)

gltfLoader.load(
    'models/cats/CAT_6.gltf',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialCat6
        })
        gltf.scene.position.set(7.34, 1.35, -3.67)
        script.scene.add(gltf.scene)
        cat6 = gltf.scene

        mixerCat6 = new THREE.AnimationMixer(gltf.scene);
        const cat6Animation = mixerCat6.clipAction(gltf.animations[0])
        cat6Animation.play()
    },
)
