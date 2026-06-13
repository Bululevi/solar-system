import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

let scene, camera, renderer, controls;
let planetMeshes = [];

init();

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000010);
  createStarfield();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  camera.position.set(0, 20, 60);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  const container = document.getElementById("space3D");
  renderer.setSize(container.clientWidth, container.clientHeight);
  window.addEventListener("resize", () => {
    const container = document.getElementById("space3D");

    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
  });
  document.getElementById("space3D").appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  /* LIGHTS */
  scene.add(new THREE.AmbientLight(0xffffff, 1));

  const light = new THREE.PointLight(0xffffff, 2);
  light.position.set(10, 10, 10);
  scene.add(light);

  /* SUN */
  const sun = new THREE.Mesh(
    new THREE.SphereGeometry(5, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0xffcc00 }),
  );
  scene.add(sun);

  /* PLANETS */
  createPlanet(8, 0.6, "/textures/mercury.jpg");
  createPlanet(10, 1.2, "/textures/venus.jpg");
  createPlanet(14, 1.3, "/textures/earth.jpg");
  createPlanet(18, 1.0, "/textures/mars.jpg");
  createPlanet(26, 2.5, "/textures/jupiter.jpg");
  createPlanet(34, 2.2, "/textures/saturn.jpg");
  createPlanet(42, 1.8, "/textures/uranus.jpg");
  createPlanet(50, 1.8, "/textures/neptune.jpg");

  animate();
}
function createStarfield() {
  const starGeometry = new THREE.BufferGeometry();
  const starCount = 8000;

  const positions = [];

  for (let i = 0; i < starCount; i++) {
    positions.push(
      (Math.random() - 0.5) * 2000,
      (Math.random() - 0.5) * 2000,
      (Math.random() - 0.5) * 2000,
    );
  }

  starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );

  const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.7,
    sizeAttenuation: true,
  });

  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);
}

function createPlanet(distance, size, texturePath) {
  const texture = new THREE.TextureLoader().load(texturePath);

  const planet = new THREE.Mesh(
    new THREE.SphereGeometry(size, 32, 32),
    new THREE.MeshStandardMaterial({ map: texture }),
  );

  planet.userData.distance = distance;

  scene.add(planet);
  planetMeshes.push(planet);
}

function animate() {
  requestAnimationFrame(animate);

  planetMeshes.forEach((p, i) => {
    const speed = 0.001 + i * 0.0002;

    p.position.x = Math.cos(Date.now() * speed) * p.userData.distance;
    p.position.z = Math.sin(Date.now() * speed) * p.userData.distance;
  });

  controls.update();
  renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
