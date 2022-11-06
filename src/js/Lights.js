import * as THREE from 'three'
import { Vector3 } from 'three'

export const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)

export const directionalLight = new THREE.DirectionalLight(0xFF7F50, 0.6)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.left = - 7
directionalLight.shadow.camera.top = 7
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(5, 5, 5)

export const pointLightBigIsland = new THREE.PointLight(0xFF9933, 1)
pointLightBigIsland.position.set(-8, 3.5, -3.3)
pointLightBigIsland.castShadow = true
pointLightBigIsland.intensity = .5

export const pointLightmenuIsland = new THREE.PointLight(0xFF9933, 1)
pointLightmenuIsland.position.set(0.5, 2.5, 2.7)
pointLightmenuIsland.castShadow = true
pointLightmenuIsland.intensity = .5
pointLightmenuIsland.lookAt(new Vector3(0, 0, 4))

export const spotlight = new THREE.SpotLight("#Ff9889", .5, 6, Math.PI * .13, 0.25, 1)
spotlight.position.set(0,2,2)

spotlight.target.position.set(-.8, -.5, 0)
spotlight.intensity = 3

//Helpers 
export const helper = new THREE.DirectionalLightHelper(directionalLight, 5);
export const helper1 = new THREE.PointLightHelper(pointLightBigIsland, 1);
export const helper2 = new THREE.PointLightHelper(pointLightmenuIsland, 1);
export const spotlightHelper = new THREE.SpotLightHelper(spotlight, 1)