import * as THREE from 'three'
import * as loaders from './Loaders.js'



export const bakedTexture = loaders.textureLoader.load('models/WEB3_BIGISLAND/bigisland2.jpg')
bakedTexture.flipY = false