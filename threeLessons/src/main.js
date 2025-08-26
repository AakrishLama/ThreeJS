import * as THREE from "three";

const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial  = new THREE.MeshBasicMaterial({color: 0x00ff00});

const cube = new THREE.Mesh(
    cubeGeometry, cubeMaterial
);

scene.add(cube);
console.log(scene);