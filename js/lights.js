function addLights() {
    var hemoLight = new THREE.HemisphereLight(0x777777, 0xffffff, 1);

    var dirLight = new THREE.DirectionalLight(0xffffff, 0.125);
    dirLight.position.set(0, 0, 1).normalize();

    var pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(0, 100, 90);

    scene.add(hemoLight);
    scene.add(dirLight);
    scene.add(pointLight);
}
