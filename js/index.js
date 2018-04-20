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

                    objFan2.position.set( 0.325, 0.55, -0.25 );
                    objFan2.rotation.set( 0, Math.PI / 2, 0 );
                    objFan2.scale.set( 0.01, 0.01, 0.01 );

                    objFan2.castShadow = true;
                    objFan2.receiveShadow = true;

                    scene.add( objFan2 );

                } );
                loader.load( './models/fan.stl', function ( geometry ) {

                    var meshMaterial = material;
                    if (geometry.hasColors) {
                        meshMaterial = new THREE.MeshPhongMaterial({ transparent:true, opacity: 0.5, vertexColors: THREE.VertexColors });
                    }

                    objFan1 = new THREE.Mesh( geometry, meshMaterial );

                    objFan1.position.set( 0.325, 0.75, 0.25 );
                    objFan1.rotation.set( 0, Math.PI / 2, 0 );
                    objFan1.scale.set( 0.01, 0.01, 0.01 );

                    objFan1.castShadow = true;
                    objFan1.receiveShadow = true;

                    scene.add( objFan1 );

                } );

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
                if(objFan1){ objFan1.rotation.set( 0, - Math.PI / 2, Math.cos( timer ) * 30 ); }
                if(objFan2){ objFan2.rotation.set( 0, - Math.PI / 2, Math.cos( timer ) * 30 ); }
                

                camera.position.x = Math.cos( timer ) * 3;
                camera.position.z = Math.sin( timer ) * 3;

                camera.lookAt( cameraTarget );

                renderer.render( scene, camera );

            }