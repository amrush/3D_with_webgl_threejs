function initEffects() {
    //effect = new THREE.StereoEffect(renderer);
    //effect = new THREE.OculusRiftEffect(renderer, {worldScale: 100, scale: 0.5});
    //effect = new THREE.AnaglyphEffect(renderer);
    //effect = new THREE.CardboardEffect(renderer);
    effect = new THREE.WebGLRenderer(renderer);
    effect.setSize(window.innerWidth, window.innerHeight);
}
