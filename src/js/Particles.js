import * as THREE from 'three'
import * as loaders from './Loaders.js'


const particleTexture = loaders.textureLoader.load('/textures/particles/8.png')

const particlesGeometry = new THREE.BufferGeometry()
const count = 5000

const positions = new Float32Array(count * 3)
const colors = new Float32Array(count * 3)

for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 100
    colors[i] = Math.random()
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

const particlesMaterial = new THREE.PointsMaterial()

particlesMaterial.size = 0.1
particlesMaterial.sizeAttenuation = true

particlesMaterial.color = new THREE.Color('#ffffff')

particlesMaterial.transparent = true
particlesMaterial.alphaMap = particleTexture
// particlesMaterial.alphaTest = 0.01
// particlesMaterial.depthTest = false
particlesMaterial.depthWrite = false
particlesMaterial.blending = THREE.AdditiveBlending

particlesMaterial.vertexColors = false

// Points
export const particles = new THREE.Points(particlesGeometry, particlesMaterial)