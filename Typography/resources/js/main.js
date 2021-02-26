import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.126.0/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.126.0/examples/jsm/controls/OrbitControls.js";

let scene, camera, renderer, controls, loader, geometry, material, text;
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 0, 45);
renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

controls = new OrbitControls(camera, renderer.domElement);
loader = new THREE.FontLoader();
loader.load(
    "https://cdn.jsdelivr.net/npm/three@0.126.0/examples/fonts/droid/droid_serif_bold.typeface.json",
    function (font) {
        geometry = new THREE.TextGeometry("Shuvro", {
            font: font,
            size: window.innerWidth / 180,
            height: 6.7,
            curveSegments: 40,
            bevelEnabled: true,
            bevelThickness: 3,
            bevelSize: 3,
            bevelOffset: 0,
            bevelSegments: 3,
        });
        geometry.center();
        material = new THREE.MeshNormalMaterial();
        text = new THREE.Mesh(geometry, material);
        scene.add(text);
    }
);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
}
animate();

// Making the page responsive.
window.addEventListener("resize", () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize(width, height);    // UPDATING THE RENDERER SIZE.
    camera.aspect = width / height;     // UPDATING THE CAMERA ASPECT.
    camera.updateProjectionMatrix();
});
