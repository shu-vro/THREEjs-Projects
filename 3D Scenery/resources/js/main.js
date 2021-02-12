// IMPORT NECESSARY FILES.
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.125.2/build/three.module.js';
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.125.2/examples/jsm/controls/OrbitControls.js";

// ADD SCENE, CAMERA, RENDERER AS ALWAYS.
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 75, 50000);
camera.position.set(-900, -200, -900);		// HERE, WE WILL HAVE A BIG CANVAS SO WE ARE SETTING THE SWEETABLE POSITION

const renderer = new THREE.WebGL1Renderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 500;
controls.maxDistance = 5000;
controls.update();

let materialArray = [];

// LOAD TEXTURES FROM IMAGE FILE.
// SEQUENCE IS: ft, bk, up, dn, rt, lf. CASE SENSETIVE.
let texture_ft = new THREE.TextureLoader().load('resources/img/valley_ft.jpg');
let texture_bk = new THREE.TextureLoader().load('resources/img/valley_bk.jpg');
let texture_up = new THREE.TextureLoader().load('resources/img/valley_up.jpg');
let texture_dn = new THREE.TextureLoader().load('resources/img/valley_dn.jpg');
let texture_rt = new THREE.TextureLoader().load('resources/img/valley_rt.jpg');
let texture_lf = new THREE.TextureLoader().load('resources/img/valley_lf.jpg');

// PUSH ALL THE TEXTURES TO MATERIAL_ARRAY.
materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}));
materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}));
materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}));
materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}));
materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}));
materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}));

// SHOW BACKSIDE OF THE MATERIAL. IT'S BECAUSE WE ARE SEEING THE INNER PART OF THE BOX.
materialArray.forEach(material => {
    material.side = THREE.BackSide;
});

// CREATE A BIG BOX.
let geometry = new THREE.BoxGeometry(10000, 10000, 10000);
let skyBox = new THREE.Mesh(geometry, materialArray);
scene.add(skyBox);

function animate() {
    requestAnimationFrame(animate);		// ANIMATION LOOP.
    renderer.render(scene, camera);
    controls.update();
}
animate();