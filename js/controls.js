function initControls() {
    controls = new THREE.OrbitControls(camera, element);
    controls.rotateUp = Math.PI / 4;
    /*
    controls.target.set(
        camera.position.x,
        camera.position.y,
        camera.position.z
    ); 
    */
    controls.enableZoom = true;
    controls.enablePan = true;

    function setOrientationControls(e) {
        if (!e.alpha) {
            return;
        }

        controls = new THREE.DeviceOrientationControls(camera, true);
        controls.connect();
        controls.update();

        element.addEventListener('click', fullscreen, false);

        window.removeEventListener('deviceorientation', setOrientationControls, true);
    }
    window.addEventListener('deviceorientation', setOrientationControls, true);
}
