import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import earth from earth.js.
import earth from "./earth.js";

// initializing scene
const scene = new THREE.Scene();

// sphere creation for sun
const sunGeometry = new THREE.SphereGeometry(1, 32, 10);
const sunMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 , wireframe: true });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.scale.set(1,1,1);
// adding sun to scene
scene.add(sun);

// adding earth to scene as child of sun from earth.js.
sun.add(earth);

// camera
const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
)
camera.position.z = 10;
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
controls.enableZoom = true


// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector(".threejs"),
    antialias: true
})
renderer.setSize(window.innerWidth, window.innerHeight);

// animate for orbit control to function.
const animate = ()=>{
    sun.rotation.y += 0.005;
    earth.rotation.y += 0.01;
    renderer.render(scene, camera);
    controls.update();
    requestAnimationFrame(animate);

}

animate();