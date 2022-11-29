import * as THREE from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import { BasisTextureLoader } from "three/examples/jsm/loaders/BasisTextureLoader.js";
import { KTX2Loader} from "three/examples/jsm/loaders/KTX2Loader.js";

export const loadingManager = new THREE.LoadingManager()

export const textureLoader = new THREE.TextureLoader(loadingManager)

export const dracoLoader = new DRACOLoader(loadingManager)

export const gltfLoader = new GLTFLoader(loadingManager)

// export const basisTextureLoader = new BasisTextureLoader(loadingManager)

// export const ktx2Loader = new KTX2Loader(loadingManager);
// ktx2Loader.setTranscoderPath('examples/js/libs/basis');