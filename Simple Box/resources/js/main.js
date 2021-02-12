import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.125.2/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.125.2/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 0, 10);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

const geometry = new THREE.BoxGeometry(3, 3, 3);

// IF you want to set a color, UNCOMMENT BELOW LINE.
// const material = new THREE.MeshBasicMaterial({color: 0xffffff});

const texture = new THREE.TextureLoader().load(
    "https://lh3.ggpht.com/bKFEEKEiEGXY98xO8Jh8VUuNoaVdU2XitFS-d4ayn-TCJm7HheOfYhOUHK-DN7uTKg=w300"
);
const material = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
controls.update();

let animateId;
function animate() {
    animateId = requestAnimationFrame(animate);
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    controls.update();
    renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
    document.querySelector("canvas").width = window.innerWidth;
    document.querySelector("canvas").height = window.innerHeight;
    cancelAnimationFrame(animateId);
    animate();
});
