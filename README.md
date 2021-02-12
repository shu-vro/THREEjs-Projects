# THREEjs-Projects
THREEjs Projects || HTML || CSS || JavaScript. A library of javascript 3d models.
`buy me a coffee`

```
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.125.2/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.125.2/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 0, 10);

const renderer = new THREE.WebGL1Renderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 35;
controls.maxDistance = 5000;
controls.enableDamping = true;
controls.dampingFactor = 0.05;
// controls.maxPolarAngle = Math.PI / 2;
controls.update();

const geometry = new THREE.SphereGeometry(15, 64, 64);
const texture = new THREE.TextureLoader().load(
    "resources/img/earth_atmos_4096.jpg"
);
const material = new THREE.MeshBasicMaterial({ map: texture });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    sphere.rotation.y += 0.002;
    controls.update();
}
animate();

```
