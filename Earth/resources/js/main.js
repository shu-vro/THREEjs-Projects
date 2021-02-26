// Import necessary packages
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.125.2/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.125.2/examples/jsm/controls/OrbitControls.js";

// MAKE SCENE AND CAMERA
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
// SET CAMERA POSITION
camera.position.set(0, 0, 10);
// SET RENDERER AND NECESSARY PROPERTIES
const renderer = new THREE.WebGL1Renderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// SET THE CONTROLS.
let controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 35;		// MINIMUM FAR THE CAMERA CAN GO.
controls.maxDistance = 5000;	// MAXIMUM FAR THE CAMERA CAN GO.
controls.enableDamping = true;	// MAKING A SOFT MOTION EFFECT.
controls.dampingFactor = 0.05;	// SETTING IT'S VALUE
// controls.maxPolarAngle = Math.PI / 2;	// IF YOU WANT, YOU CAN FIX THE CAMERA ANGULAR MOVEMENT.
controls.update();				// UPDATE THE CAMERA.

// THERE ARE 2 THINGS NEEDED TO MAKE SOMETHING. 1) THE GEOMETRY, 2) THE MATERIAL TO COLORIZE IT.
const geometry = new THREE.SphereGeometry(15, 64, 64);	// PARAMS: RADIUS, WIDTH_SEGMENTS, HEIGHT_SEGMENTS.
// LOAD THE EARTH TEXTURE IMAGE
const texture = new THREE.TextureLoader().load(
    "resources/img/earth_atmos_4096.jpg"
);
const material = new THREE.MeshBasicMaterial({ map: texture });		// REFER THE TEXTURE TO MATERIAL.
const earth = new THREE.Mesh(geometry, material);		// CREATE THE EARTH
scene.add(earth);				// AND ADD TO SCENE.

function animate() {
    requestAnimationFrame(animate);		// ANIMATION LOOP
    renderer.render(scene, camera);		// ADD SCENE AND CAMERA TO RENDERER.
    earth.rotation.y += 0.002;			// SOFT ROTATION OF THE EARTH.
    controls.update();					// UPDATE THE CONTROL EVERY FRAME.
}
animate();

// MAKING THE PAGE RESPONSIVE
window.addEventListener("resize", () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize(width, height);    // UPDATING THE RENDERER SIZE.
    camera.aspect = width / height;     // UPDATING THE CAMERA ASPECT.
    camera.updateProjectionMatrix();
});
