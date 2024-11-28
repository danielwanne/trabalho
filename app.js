// Create scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add light to the scene
const light = new THREE.AmbientLight(0x404040); // Ambient light
scene.add(light);

// Load 3D models
const loader = new THREE.GLTFLoader();

// Function to load and display 3D models
function loadModel(modelPath, elementId) {
    loader.load(modelPath, function (gltf) {
        const model = gltf.scene;
        const element = document.getElementById(elementId);
        scene.add(model);
        model.scale.set(1, 1, 1);
        model.position.set(0, -1, 0);
    });
}

// Load models for each product
loadModel('path_to_smartphone_x1.glb', 'smartphone-x1-3d');
loadModel('path_to_laptop_y5.glb', 'laptop-y5-3d');
loadModel('path_to_headphones_z3.glb', 'headphones-z3-3d');
loadModel('path_to_smartwatch_w8.glb', 'smartwatch-w8-3d');
loadModel('path_to_gaming_console_g7.glb', 'gaming-console-g7-3d');

// Set camera position
camera.position.z = 5;

// Render the scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
