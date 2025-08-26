import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// initialize scene
const scene = new THREE.Scene();

// create cube
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial  = new THREE.MeshBasicMaterial({color: "red", wireframe: true});

const cube = new THREE.Mesh(
    cubeGeometry, cubeMaterial
);

scene.add(cube);

// camera
console.log(window.innerHeight, window.innerWidth);
const camera = new THREE.PerspectiveCamera(75,
     window.innerWidth / window.innerHeight,
     0.1,
       100);
camera.position.z = 5;
scene.add(camera);

// initialize renderer
const canvas = document.querySelector(".threejs")
const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);




// intitialize the controls for orbit.
const controls = new OrbitControls(camera, canvas);
controls.enableDamping= true;
// controls.enableRotate= true;
controls.enableZoom= true;

// resizing the camera aspect and window size in the browser.
window.addEventListener("resize", ()=>{
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

})

// Animation loop: continuously renders the scene from the camera's perspective,
// updates the orbit controls for smooth interaction, and requests the next frame.
const renderloop = () => {
    renderer.render(scene, camera);
    controls.update();
    cube.rotation.y += 0.01;
    window.requestAnimationFrame(renderloop);

}

renderloop();


