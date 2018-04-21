// The dimensions are: 2.5" H x 3.25" Deep x 3.75" W
// 63.5, 82.55, 95.25

var container, stats ,objFan1,objFan2;

            var camera, cameraTarget, scene, renderer;

            init();
            animate();

            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 15 );
                camera.position.set( 0, 2, 2 );

                cameraTarget = new THREE.Vector3( 0, 0.5, 0 );

                scene = new THREE.Scene();
                //scene.background = new THREE.Color( 0x72645b );
                //scene.fog = new THREE.Fog( 0x72645b, 2, 15 );


                var loader = new THREE.STLLoader();

                var material = new THREE.MeshPhongMaterial( { color: 0xAAAAAA, specular: 0x111111, shininess: 200 } );

                loader.load( './models/box.stl', function ( geometry ) {

                    var meshMaterial = material;
                    if (geometry.hasColors) {
                        meshMaterial = new THREE.MeshPhongMaterial({ transparent:true, opacity: 0.5, vertexColors: THREE.VertexColors });
                        //var material = new THREE.MeshPhongMaterial ({ color: 0xFF0000, opacity: 0.2, transparent: true });

                    }

                    objBox = new THREE.Mesh( geometry, meshMaterial );

                    objBox.position.set( -0.5, 1, -0.5 );
                    objBox.rotation.set( Math.PI / 2, 0, 0 );
                    objBox.scale.set( 0.01, 0.01, 0.01 );

                    scene.add( objBox );

                } );


                loader.load( './models/fan.stl', function ( geometry ) {

                    var meshMaterial = material;
                    if (geometry.hasColors) {
                        meshMaterial = new THREE.MeshPhongMaterial({ transparent:true, opacity: 0.5, vertexColors: THREE.VertexColors });
                        //var material = new THREE.MeshPhongMaterial ({ color: 0xFF0000, opacity: 0.2, transparent: true });

                    }

                    objFan2 = new THREE.Mesh( geometry, meshMaterial );

                    objFan2.position.set( -0.3, 1, -0.3 );
                    objFan2.rotation.set( 0, Math.PI / 2, 0 );
                    objFan2.scale.set( 0.01, 0.01, 0.01 );

                    scene.add( objFan2 );

                } );
                loader.load( './models/fan.stl', function ( geometry ) {

                    var meshMaterial = material;
                    if (geometry.hasColors) {
                        meshMaterial = new THREE.MeshPhongMaterial({ transparent:true, opacity: 0.5, vertexColors: THREE.VertexColors });
                    }

                    objFan1 = new THREE.Mesh( geometry, meshMaterial );

                    objFan1.position.set( 0.15, 1, 0.25 );
                    objFan1.rotation.set( 0, Math.PI / 2, 0 );
                    objFan1.scale.set( 0.01, 0.01, 0.01 );

                    scene.add( objFan1 );

                } );

                loader.load( './models/resistor2.stl', function ( geometry ) {

                    var meshMaterial = new THREE.MeshPhongMaterial( { color: 0xAA6666, specular: 0x111111, shininess: 200 } );

                    objRes2 = new THREE.Mesh( geometry, meshMaterial );

                    objRes2.position.set( 0, 0.6, -0.15 );
                    objRes2.rotation.set( 0, Math.PI / 4, Math.PI / 2 );
                    objRes2.scale.set( 0.01, 0.01, 0.01 );

                    scene.add( objRes2 );

                } );

                loader.load( './models/resistor1.stl', function ( geometry ) {

                    var meshMaterial = new THREE.MeshPhongMaterial( { color: 0xAA6666, specular: 0x111111, shininess: 200 } );

                    objRes1 = new THREE.Mesh( geometry, meshMaterial );

                    objRes1.position.set( -0.1, 0.8, 0.45 );
                    objRes1.rotation.set( -Math.PI / 2, 0, Math.PI / 2 );
                    objRes1.scale.set( 0.01, 0.01, 0.01 );

                    scene.add( objRes1 );

                } );

                //sensors
                var geometry = new THREE.BoxBufferGeometry( 0.05, 0.025, 0.05 );
                var objSensorMaterial = new THREE.MeshPhongMaterial( { color: 0x66AA66, specular: 0x111111, shininess: 200 } );
                objTopSensor = new THREE.Mesh( geometry, objSensorMaterial );
                objTopSensor.position.set( -0.05, 0.95, -0.05 );
                scene.add( objTopSensor );

                objBotSensor = new THREE.Mesh( geometry, objSensorMaterial );
                objBotSensor.position.set( -0.05, 0.35, -0.05 );
                scene.add( objBotSensor );

                objLeftSensor = new THREE.Mesh( geometry, objSensorMaterial );
                objLeftSensor.rotation.set(0,0,Math.PI/2);
                objLeftSensor.position.set( -0.45, 0.65, -0.05 );
                scene.add( objLeftSensor );

                objRightSensor = new THREE.Mesh( geometry, objSensorMaterial );
                objRightSensor.rotation.set(0,0,Math.PI/2);
                objRightSensor.position.set( 0.3, 0.65, -0.05 );
                scene.add( objRightSensor );

                objFrontSensor = new THREE.Mesh( geometry, objSensorMaterial );
                objFrontSensor.rotation.set(Math.PI/2,0,0);
                objFrontSensor.position.set( -0.05, 0.65, -0.45 );
                scene.add( objFrontSensor );

                objBackSensor = new THREE.Mesh( geometry, objSensorMaterial );
                objBackSensor.rotation.set(Math.PI/2,0,0);
                objBackSensor.position.set( -0.05, 0.65, 0.4 );
                scene.add( objBackSensor );

                // Lights
var bulbGeometry = new THREE.SphereGeometry( 0.02, 16, 8 );
                bulbLight = new THREE.PointLight( 0xffee88, 1, 100, 2 );
                bulbMat = new THREE.MeshStandardMaterial( {
                    emissive: 0xffffee,
                    emissiveIntensity: 1,
                    color: 0x000000
                });
                bulbLight.add( new THREE.Mesh( bulbGeometry, bulbMat ) );
                bulbLight.position.set( -0.4, 0.5, -0.48 );
                bulbLight.castShadow = true;
                scene.add( bulbLight );




                scene.add( new THREE.HemisphereLight( 0x443333, 0x111122 ) );

               // addShadowedLight( 1, 1, 1, 0xffffff, 1.35 );
                //addShadowedLight( 0.5, 1, -1, 0xffaa00, 1 );
                // renderer

                renderer = new THREE.WebGLRenderer( { antialias: true } );
                renderer.setPixelRatio( window.devicePixelRatio );
                renderer.setSize( window.innerWidth, window.innerHeight );

                renderer.gammaInput = true;
                renderer.gammaOutput = true;

                renderer.shadowMap.enabled = true;

                container.appendChild( renderer.domElement );

                // stats

                //stats = new Stats();
                //container.appendChild( stats.dom );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            function animate() {

                requestAnimationFrame( animate );

                render();
                //stats.update();

            }

            function render() {

                var timer = Date.now() * 0.0005;
                if(objFan1){ objFan1.rotation.set( Math.PI/2, 0, objFan1.rotation.z+=1 ); }
                if(objFan2){ objFan2.rotation.set( Math.PI/2, 0, objFan2.rotation.z-=1); }
                

                camera.position.x = Math.cos( timer ) * 3;
                camera.position.z = Math.sin( timer ) * 3;

                camera.lookAt( cameraTarget );

                renderer.render( scene, camera );

            }