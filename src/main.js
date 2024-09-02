import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry( 15, 32, 16 );
const material = new THREE.MeshBasicMaterial( { 
	map: new THREE.TextureLoader().load(
		'https://t3.ftcdn.net/jpg/01/96/89/34/360_F_196893434_tE0PIrFSWibtYTYbRSTqYvyvZ893O6L7.webp'
	)
 } );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

camera.position.z = 150;

function animate() {

	sphere.rotation.z += 0.01;
	sphere.rotation.y += 0.01;

	renderer.render( scene, camera );
}
