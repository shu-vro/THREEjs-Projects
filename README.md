# THREEjs-Projects
THREEjs Projects || HTML || CSS || JavaScript. A library of javascript 3d models.
`Support me on: ` [facebook](https://www.facebook.com/shuvra.gupta.16/') 

Author: | Information |
------- | ------------- |
First Name: | Shirshen |
Last Name: | Das Gupta |
Nick Name: | Shuvro |
Other Names: | None |

# Common Codes: 
``` Javascript
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
```

### Library That I used: 
* **[cdn.jsdelivr.net](https://www.jsdelivr.com/)**
* **[cdnjs.org](https://cdnjs.com/)**
* **[threejs.org](https://threejs.org/)**
