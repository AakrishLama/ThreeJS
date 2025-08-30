// creating earth with three.js.
// });
import * as THREE from "three";

const planets = [{
    name: "earth",
    color: 0x0000ff,
    size: 0.5,
    positionX: 2,
    positionY: 0,
    positionZ: 0,
    moons: [{
        name: "moon",
        color: 0x888888,
        size: 0.1,
        positionX: 1,
        positionY: 0,
        positionZ: 0
    }]
},
{
    name: "mars",
    color: 0xff0000,
    size: 0.3,
    positionX: 4,
    positionY: 0,
    positionZ: 0,
    moons: [{
        name: "phobos",
        color: 0xaaaaaa,
        size: 0.05,
        positionX: 0.5,
        positionY: 0,
        positionZ: 0
    },
    {
        name: "deimos",
        color: 0xcccccc,
        size: 0.03,
        positionX: 0.8,
        positionY: 0,
        positionZ: 0
    }]
},
{
    name: "venus",
    color: 0xffff00,
    size: 0.4,
    positionX: 6,
    positionY: 0,
    positionZ: 0,
    moons: []
},
{
    name: "jupiter",
    color: 0xffa500,
    size: 0.7,
    positionX: 8,
    positionY: 0,
    positionZ: 0,
    moons: []
}];

// create planet meshes.
const planetMeshes = planets.map((planet)=>{
    const geometry = new THREE.SphereGeometry(planet.size, 32, 10);
    const material = new THREE.MeshStandardMaterial({ color: planet.color , wireframe: true });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(planet.positionX, planet.positionY, planet.positionZ);
    // create moons for each planet.
    planet.moons.forEach((moon)=>{
        const moonGeometry = new THREE.SphereGeometry(moon.size, 32, 10);
        const moonMaterial = new THREE.MeshStandardMaterial({ color: moon.color , wireframe: true });
        const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
        moonMesh.position.set(moon.positionX, moon.positionY, moon.positionZ);
        mesh.add(moonMesh);
    })
    return mesh;
})


// export the planet meshes.
export default planetMeshes; 