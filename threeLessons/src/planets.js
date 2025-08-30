// creating earth with three.js.
// });
import * as THREE from "three";

const planets = [{
    name: "earth",
    color: 0x0000ff,
    size: 0.5,
    positionX: 2,
    positionY: 0,
    positionZ: 0
},
{
    name: "mars",
    color: 0xff0000,
    size: 0.3,
    positionX: 4,
    positionY: 0,
    positionZ: 0
},
{
    name: "venus",
    color: 0xffff00,
    size: 0.4,
    positionX: 6,
    positionY: 0,
    positionZ: 0
},
{
    name: "jupiter",
    color: 0xffa500,
    size: 0.7,
    positionX: 8,
    positionY: 0,
    positionZ: 0
}];

const planetMeshes = planets.map((planet)=>{
    const geometry = new THREE.SphereGeometry(planet.size, 32, 10);
    const material = new THREE.MeshStandardMaterial({ color: planet.color , wireframe: true });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(planet.positionX, planet.positionY, planet.positionZ);
    return mesh;
})
export default planetMeshes; 