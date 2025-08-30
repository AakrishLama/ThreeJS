import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// initializing scene
const scene = new THREE.Scene();

// sphere creation for sun
const sunGeometry = new THREE.SphereGeometry(1, 32, 10);
const sunMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 , wireframe: true });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
// adding sun to scene
scene.add(sun);

// camera
const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
)
camera.position.z = 5;
scene.add(camera);


// ambient lights
const ambientLight = new THREE.AmbientLight(0x404040, 0.3); // soft white light
scene.add(ambientLight);

// directional light
const directionalLights = new THREE.DirectionalLight("white", 2);
directionalLights.position.set(5, 5, 5);
scene.add(directionalLights);

// ppoint light
const pointLight = new THREE.PointLight("white", 2);
pointLight.position.set(2, 2, 2);
scene.add(pointLight);

// orbit controls
const controls = new OrbitControls(camera, document.querySelector(".threejs"));
controls.enableDamping = true


// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector(".threejs"),
    antialias: true
})
renderer.setSize(window.innerWidth, window.innerHeight);

// animate for orbit control to function.
const animate = ()=>{
    renderer.render(scene, camera);
    controls.update();
    requestAnimationFrame(animate);
}

animate();