import * as THREE from "three";

// initialize scene
const scene = new THREE.Scene();

// create cube
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial  = new THREE.MeshBasicMaterial({color: 0x00ff00});

const cube = new THREE.Mesh(
    cubeGeometry, cubeMaterial
);

scene.add(cube);

// camera
console.log(window.innerHeight, window.innerWidth);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 30);
camera.position.z = 5;
scene.add(camera);

// initialize renderer
const canvas = document.querySelector(".threejs")
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);