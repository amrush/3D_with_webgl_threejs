if (!Detector.webgl) Detector.addGetWebGLMessage();

THREE.Cache.enabled = true;

var scene, camera, renderer;
var geometry, materialBox, materialKnot, meshBox, meshKnot;
var effect, controls, stats, VRMode;
var element, container;
var groundMaterial, planeGeometry, ground;

var clock = new THREE.Clock();

init();
animate();

function init() {

    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 250, 1400);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // CAMRERA
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 500;

    // GEOMETRY
    geometryBox = new THREE.BoxGeometry(200, 200, 200);
    geometryKnot = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    planeGeometry = new THREE.PlaneBufferGeometry(16000, 16000);

    initTexture();

    // MESH
    meshBox = new THREE.Mesh(geometryBox, materialBox);
    meshKnot = new THREE.Mesh(geometryKnot, materialKnot);
    meshGround = new THREE.Mesh(planeGeometry, groundMaterial);
    meshGround.position.set(0, -200, 0);
    meshGround.rotation.x = -Math.PI / 2;

    scene.add(meshGround);
    scene.add(meshBox);
    scene.add(meshKnot);

    element = renderer.domElement;

    initEffects();
    initControls();
    addLights();

    container = document.getElementById('test');
    container.appendChild(element);

    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    container.appendChild(stats.domElement);

    window.addEventListener('resize', resize, false);
    setTimeout(resize, 1);
    VRMode = false;
}

function animate() {
    requestAnimationFrame(animate);

    meshBox.rotation.x += 0.01;
    meshBox.rotation.y += 0.02;

    meshKnot.rotation.x += 0.01;
    meshKnot.rotation.y += 0.02;

    update(clock.getDelta());
    render(clock.getDelta());
}

function resize() {
    var width = container.offsetWidth;
    var height = container.offsetHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    effect.setSize(width, height);
}

function update(dt) {
    resize();
    camera.updateProjectionMatrix();
    controls.update(dt);
}

function render(dt) {
    effect.render(scene, camera);
}

function fullscreen() {
    if (container.requestFullscreen) {
        container.requestFullscreen();
    } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
    } else if (container.mozRequestFullScreen) {
        container.mozRequestFullScreen();
    } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
    }
}

function toggleMode() {
    if (VRMode) {
        effect = new THREE.WebGLRenderer(renderer);
        VRMode = false;
        update();
        render();
    } else {
        effect = new THREE.CardboardEffect(renderer);
        effect.eyeSeparation = 0;
        VRMode = true;
        update();
        render();
    }
}
