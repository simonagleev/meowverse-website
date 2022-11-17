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
tipCircle.position.z = 2

export let tipCircleTwitter = null
export let tipCircleBlog = null

export const createAllTipCircles = () => {
    tipCircleTwitter = tipCircle.clone()
    tipCircleTwitter.position.set(-1.05, .8, 2.2)

    tipCircleBlog = tipCircle.clone()
    tipCircleBlog.position.set(1.05, .8, 2.2)

    menuMainPawGroup.add(tipCircleTwitter, tipCircleBlog)
}




//menu island
export const menuGroup = new THREE.Group()
menuGroup.name = 'menuIsland'
// menuGroup.position.set(0, 0, 4)

const menuMainPawGroup = new THREE.Group()
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

export let pawBig = null;
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
genesisIslandGroup.name = 'genesisIsland'
const genesisIslandMaterial = new THREE.MeshBasicMaterial({ map:  textures.genesisIslandBacked})
textures.genesisIslandBacked.flipY = false

const genesisGen1Material = new THREE.MeshBasicMaterial({ map:  textures.genesisIslandGen1Backed})
textures.genesisIslandGen1Backed.flipY = false

const genesisGen2Material = new THREE.MeshBasicMaterial({ map:  textures.genesisIslandGen2Backed})
textures.genesisIslandGen2Backed.flipY = false

const genesisGen3Material = new THREE.MeshBasicMaterial({ map:  textures.genesisIslandGen3Backed})
textures.genesisIslandGen3Backed.flipY = false

const genesisBoatMaterial = new THREE.MeshBasicMaterial({ map:  textures.genesisIslandBoatBacked})
textures.genesisIslandBoatBacked.flipY = false

export let genesisLand = null;
export let genesisBoat = null;
export let genesisCard1 = null;
export let genesisCard2 = null;
export let genesisCard3 = null;


// MEELK Islnad
export const meelkIslandGroup = new THREE.Group()
meelkIslandGroup.position.set(0, 0, 2)
meelkIslandGroup.name = 'meelkIsland'
const meelkIslandMaterial = new THREE.MeshBasicMaterial({ map:  textures.meelkIslandBacked})
textures.meelkIslandBacked.flipY = false


export let meelkLand = null;
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
OGIslandGroup.position.set(0, 0, 2)
OGIslandGroup.name = 'OGIsland'
const OGIslandMaterial = new THREE.MeshBasicMaterial({ map:  textures.OGIslandBacked})
textures.OGIslandBacked.flipY = false

const OG1IslandMaterial = new THREE.MeshBasicMaterial({ map:  textures.OG1IslandBacked})
textures.OG1IslandBacked.flipY = false

const OG2IslandMaterial = new THREE.MeshBasicMaterial({ map:  textures.OG2IslandBacked})
textures.OG2IslandBacked.flipY = false

const OG3IslandMaterial = new THREE.MeshBasicMaterial({ map:  textures.OG3IslandBacked})
textures.OG3IslandBacked.flipY = false

// Meowrush island
export const meowrushIslandGroup = new THREE.Group()
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

//Roadmap island
export const roadmapGroup = new THREE.Group()

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
const backedMaterialClouds= new THREE.MeshBasicMaterial({ map: textures.cloudsBaked, transparent: true, opacity: 0.9 })
textures.cloudsBaked.flipY = false

cloudsGroup.position.y = 3

export let cloud1 = null;
export let cloud2 = null;
export let cloud3 = null;
export let cloud4 = null;
export let cloud5 = null;
export let cloud6 = null;
export let cloud7 = null;


// LOGO
export const logoGroup = new THREE.Group()
const backedMaterialLogo= new THREE.MeshBasicMaterial({ map: textures.logoBaked })
textures.logoBaked.flipY = false

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

        pawBig = gltf.scene.children[0]
        pawBig.name = 'pawBig'
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
        NFTsFingerSign = gltf.scene.children[0]
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
        gamesMeowverseFingerKart = gltf.scene.children[0]
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
        gamesMeowverseFingerSign = gltf.scene.children[0]
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
        roadmapFingerSign = gltf.scene.children[0]
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
        genesisLand = gltf.scene
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
        meelkLand = gltf.scene
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

//OG island
gltfLoader.load(
    'models/OG-island/OG_island.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = OGIslandMaterial
        })
        OGIslandGroup.add(gltf.scene)

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
        
    },
)

//Roadmap island 
gltfLoader.load(
    'models/Roadmap-island/roadmap_island.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialRoadmap
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
const ringGeometry = new THREE.RingGeometry(.1, .125, 12, 12)
const ringTexture = new THREE.MeshBasicMaterial({ color: "#ec64f7", side: THREE.DoubleSide })
const dotGeometry = new THREE.CircleGeometry(.025, 12)
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

// Logo
gltfLoader.load(
    'models/logo/logo.glb',
    (gltf) => {
        gltf.scene.traverse((child) => {
            child.material = backedMaterialLogo
        })
        logoGroup.add(gltf.scene)
    },
)