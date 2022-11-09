import * as THREE from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


export const loadingManager = new THREE.LoadingManager()

export const textureLoader = new THREE.TextureLoader(loadingManager)

export const dracoLoader = new DRACOLoader(loadingManager)

export const gltfLoader = new GLTFLoader(loadingManager)
