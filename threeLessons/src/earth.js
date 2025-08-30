// creating earth with three.js.
// });
import * as THREE from "three";

// sphere creation for earth
const earthGeometry = new THREE.SphereGeometry(0.5, 32, 10);
const earthMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff , wireframe: true });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
// positioning earth
earth.position.x=2;
// scaling earth
earth.scale.set(0.5,0.5,0.5);
// exporting earth to main.js
export default earth;