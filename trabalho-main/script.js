// Função para inicializar a cena 3D
function init3DScene(containerId, modelPath) {
    const container = document.getElementById(containerId);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    // Carregar o modelo 3D
    const loader = new THREE.GLTFLoader();
    loader.load(modelPath, function (gltf) {
        scene.add(gltf.scene);
        gltf.scene.scale.set(0.5, 0.5, 0.5); // Ajuste o tamanho do modelo

        // Posicionar a câmera
        camera.position.z = 3;

        // Função de animação
        function animate() {
            requestAnimationFrame(animate);
            gltf.scene.rotation.y += 0.01; // Rotacionar o modelo
            renderer.render(scene, camera);
        }

        animate();
    }, undefined, function (error) {
        console.error('Erro ao carregar o modelo 3D', error);
    });
}

// Inicializar modelos 3D nos containers
document.addEventListener("DOMContentLoaded", function() {
    init3DScene("product-1", "models/smartphone.glb");
    init3DScene("product-2", "models/cyberpunk_laptop_concept_design.glb");
    init3DScene("product-3", "models/headphone_with_stand.glb");
    init3DScene("product-4", "models/wrist_watch_smartwatch.glb");
    init3DScene("product-5", "models/super_retro_game_console.glb.glb");
    init3DScene("product-6", "models/low_poly_sci-fi_tablet.glb");
    init3DScene("product-7", "models/canon_at-1_retro_camera.glb");
    init3DScene("product-8", "models/drone_design.glb");
    init3DScene("product-9", "models/headset_bluetooth.glb");
    init3DScene("product-10", "models/wrist_watch_smartwatch.glb");
    init3DScene("product-12", "models/super_retro_game_console.glb");
    init3DScene("product-13", "models/mitosis.glb");
    init3DScene("product-14", "models/sony_bravia_x900c_4k_tv.glb");
    init3DScene("product-15", "models/wrist_watch_smartwatch.glb");
});
