# THREEjs-Projects
THREEjs Projects || HTML || CSS || JavaScript. A library of javascript 3d models.
`Support me on: `[facebook](https://www.facebook.com/shuvra.gupta.16/)

 Information |Author: |
------- | ------------- |
First Name: | Shirshen |
Last Name: | Das Gupta |
Nick Name: | Shuvro |
Other Names: | None |

## Common Codes: 
``` Javascript
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
controls.update();	

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
}
animate();
```

### Links that I used: 
* **[cdn.jsdelivr.net](https://www.jsdelivr.com/)**
* **[cdnjs.org](https://cdnjs.com/)**
* **[threejs.org](https://threejs.org/)**
