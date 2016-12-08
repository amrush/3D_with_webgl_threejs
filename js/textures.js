function initTexture() {

    var texture = THREE.ImageUtils.loadTexture(
        //'textures/Pearson_logo.png'
        'textures/colorful-checks.jpg'
    );

    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat = new THREE.Vector2(1, 1);
    texture.anisotropy = renderer.getMaxAnisotropy();

    materialBox = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        specular: 0xffffff,
        shininess: 20,
        shading: THREE.FlatShading,
        map: texture,
        wireframe: false
    });

    materialKnot = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        specular: 0xffffff,
        shininess: 20,
        shading: THREE.FlatShading,
        map: texture,
        wireframe: true
    });

    groundMaterial = new THREE.MeshPhongMaterial({
        color: 0x0d0840,
        specular: 0xffffff,
        shininess: 10,
        shading: THREE.FlatShading,
        emissive: 0xbbbbbb
    });
}

function initTexture2() {
    // instantiate a loader
    var loader = new THREE.TextureLoader();

    // load a resource
    loader.load(
        // resource URL
        'textures/colorful-checks.jpg',
        function() {
            loadTexture();
        });
}

function loadTexture() {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat = new THREE.Vector2(1, 1);
    texture.anisotropy = renderer.getMaxAnisotropy();

    materialBox = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        specular: 0xffffff,
        shininess: 20,
        shading: THREE.FlatShading,
        map: texture,
        wireframe: false
    });

    materialKnot = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        specular: 0xffffff,
        shininess: 20,
        shading: THREE.FlatShading,
        map: texture,
        wireframe: true
    });
}
