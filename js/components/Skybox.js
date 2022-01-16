
function Skybox(scene, height) {
	
	const textureLoader = new THREE.TextureLoader()
	
	var geometry = new THREE.CubeGeometry(3000, 3000, 3000)

	var cubeMaterials = 
	[
		new THREE.MeshBasicMaterial({ map: textureLoader.load("../../assets/textures/space/bg6.png"), side: THREE.DoubleSide }),
		new THREE.MeshBasicMaterial({ map: textureLoader.load("../../assets/textures/space/bg5.png"), side: THREE.DoubleSide }),
		new THREE.MeshBasicMaterial({ map: textureLoader.load("../../assets/textures/space/bg1.png"), side: THREE.DoubleSide }),
		new THREE.MeshBasicMaterial({ map: textureLoader.load("../../assets/textures/space/bg2.png"), side: THREE.DoubleSide }),
		new THREE.MeshBasicMaterial({ map: textureLoader.load("../../assets/textures/space/bg4.png"), side: THREE.DoubleSide }),
		new THREE.MeshBasicMaterial({ map: textureLoader.load("../../assets/textures/space/bg3.png"), side: THREE.DoubleSide }),
	]
	var material = new THREE.MeshFaceMaterial(cubeMaterials)

	var cube = new THREE.Mesh(geometry, material)

	cube.rotation.x = Math.PI / 2;
	cube.position.z = -1490;
	// bg.position.y = 1000;

	scene.add(cube)

}

