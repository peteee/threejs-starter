// RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// CAMERA
// simple & static
const camera = new THREE.PerspectiveCamera( 15, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );


// SCENE
const scene = new THREE.Scene();

// FOG
scene.fog = new THREE.Fog( 0xcccccc, 10, 15 );


// CONTENT
// Light
const light = new THREE.AmbientLight( 0x404040 ); // soft white light


// Lines
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

const points = [];
points.push( new THREE.Vector3( - 20, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
points.push( new THREE.Vector4( 14, 10, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );



// Box
const geometry2 = new THREE.BoxGeometry( 9, 9, 9 );
//const material2 = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const material2 = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh( geometry2, material2 );

// Sphere
const geometry3 = new THREE.SphereGeometry( 5, 30, 12 );
const material3 = new THREE.MeshNormalMaterial( { color: 0xffff00 } );
const sphere = new THREE.Mesh( geometry3, material3 );
// Move Sphere
sphere.translateZ( 14 );

// Torus
const geometry4 = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material4 = new THREE.MeshNormalMaterial( { color: 0xffff00 } );
const torus = new THREE.Mesh( geometry4, material4 );

// Move Torus
torus.translateZ( -14 );






// ADD TO SCENE & RENDER EVERYTHING
scene.add( line );
scene.add( cube );
scene.add( sphere );
scene.add( torus );
scene.add( light );


renderer.setAnimationLoop( animation );
//renderer.render( scene, camera );

function animation( time ) {

    cube.rotation.x = time / 2000;
    cube.rotation.y = time / 1000;
    sphere.rotation.x = time / 2000;
    torus.rotation.y = time / 2000;
    // camera.rotation.x = time /100000;
    renderer.render( scene, camera );

}

