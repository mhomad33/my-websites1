// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a particle system
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 5000;
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 5;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.005,
    color: '#ffffff',
    transparent: true,
    opacity: 0.8
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

camera.position.z = 2;

// Mouse movement effect
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Button click handlers
document.getElementById('facebook-button').addEventListener('click', () => {
    window.location.href = 'https://www.facebook.com/share/1C3fPY9UWw/';
});

document.getElementById('tiktok-button').addEventListener('click', () => {
    window.location.href = 'https://www.tiktok.com/@1k.mxr?_t=ZS-8v1MBlzPr5W&_r=1';
});

document.getElementById('instagram-button').addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/mohamed.7sh?igsh=MThpNmJ3cDhqNGIwaw==';
});

document.getElementById('whatsapp-button').addEventListener('click', () => {
    window.location.href = 'https://wa.me/message/AF6XYIOMZLUFA1';
});

// Animation
function animate() {
    requestAnimationFrame(animate);

    // Rotate particles
    particlesMesh.rotation.x += 0.001;
    particlesMesh.rotation.y += 0.001;

    // Mouse interaction
    particlesMesh.rotation.x += mouseY * 0.0003;
    particlesMesh.rotation.y += mouseX * 0.0003;

    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate(); 