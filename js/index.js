// The dimensions are: 2.5" H x 3.25" Deep x 3.75" W
// 63.5, 82.55, 95.25
var container, stats ,objFan1,objFan2,arrData;

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
                //var objSensorMaterial = new THREE.MeshPhongMaterial( { color: 0x66AA66, specular: 0x111111, shininess: 200 } );
                objTopSensor = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0x66AA66, specular: 0x111111, shininess: 200 } ) );
                objTopSensor.position.set( -0.05, 0.95, -0.05 );
                scene.add( objTopSensor );

                objBotSensor = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0x66AA66, specular: 0x111111, shininess: 200 } ) );
                objBotSensor.position.set( -0.05, 0.35, -0.05 );
                scene.add( objBotSensor );

                objLeftSensor = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0x66AA66, specular: 0x111111, shininess: 200 } ) );
                objLeftSensor.rotation.set(0,0,Math.PI/2);
                objLeftSensor.position.set( -0.45, 0.65, -0.05 );
                scene.add( objLeftSensor );

                objRightSensor = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0x66AA66, specular: 0x111111, shininess: 200 } ) );
                objRightSensor.rotation.set(0,0,Math.PI/2);
                objRightSensor.position.set( 0.3, 0.65, -0.05 );
                scene.add( objRightSensor );

                objFrontSensor = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0x66AA66, specular: 0x111111, shininess: 200 } ) );
                objFrontSensor.rotation.set(Math.PI/2,0,0);
                objFrontSensor.position.set( -0.05, 0.65, -0.45 );
                scene.add( objFrontSensor );

                objBackSensor = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0x66AA66, specular: 0x111111, shininess: 200 } ) );
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

var fnAddData=function(objData){
    console.log(objData);
    if(objData.T11_CNV_LF > 100){ objLeftSensor.material.color = new THREE.Color(0xFF3333); }
    if(objData.T11_CNV_LF < 100){ objLeftSensor.material.color = new THREE.Color(0x333333); }
};

//load and parse the data from the chosen file
document.getElementById('csv-file').addEventListener('change', function(objEvent){
    //console.log('submit',objEvent);
    
}, false);

new Vue({ 
    "el": '#sparklines',
    data(){
        return {
            "intMin":100, "intMax":100, "intRecords":0,
            "objConfig":{
                "T11_CNV_LF":{ "label":"Temp Left" , "values":[], "model":objFrontSensor },
                "T12_CNV_FR":{ "label":"Temp Right" , "values":[], "model":objLeftSensor }
            }
        }
    },
    created(){},
    "methods":{
        fnUpdateColor(strId,intValue){
            /*
        - BLACK: <70F
        - PURPLE: 70-80
        - BLUE: 80-90
        - PALE YELLOW: 90-95
        - YELLOW: 95-100
        - BRIGHT YELLOW: 100-105
        - ORANGE: 110-115
        - RED: >115F
            */
            var self=this;
            var hexColor=0x222222;
            if(intValue > 70){ hexColor=0xff22ff; }
            if(intValue > 80){ hexColor=0x2222ff; }
            if(intValue > 90){ hexColor=0x666622; }
            if(intValue > 95){ hexColor=0xffff22; }
            if(intValue > 110){ hexColor=0xffa522; }
            if(intValue > 115){ hexColor=0xff2222; }
            self.objConfig[strId].model.material.color = new THREE.Color(hexColor);
        }
        ,fnAddData(objData){
            var self=this;
            var arrKeys = Object.keys(objData);
            //separate each value into its own little array for a chart
            for( var i=0;i<arrKeys.length;i++ ){
                if(typeof self.objConfig[arrKeys[i]] !== 'undefined'){ 
                    var intValue = parseInt(objData[arrKeys[i]]);
                    //adjust ranges
                    if(intValue > self.intMax){ self.intMax=intValue; }
                    else if(intValue < self.intMin){ self.intMin=intValue; }
                    //add data to charts
                    self.objConfig[arrKeys[i]].values.push(parseInt(objData[arrKeys[i]]));
                    //set color 
                    self.fnUpdateColor(arrKeys[i],intValue);
                    //update record count
                    self.intRecords++;
                }
                //console.log(objData[arrKeys[i]],parseInt(objData[arrKeys[i]]));
            }
        },fnLoadFile(objEvent){
            var self=this;
            Papa.parse(objEvent.target.files[0], {
                "header": true,
                "complete": function(objResults) {
                    //console.log(objResults);
                    //file loaded, start the stream, 1 per second
                    var arrData=objResults.data;
                    var intCount=arrData.length; var i=0;
                    var objInterval=setInterval(function(){ 
                        if(i<intCount){ self.fnAddData(arrData[i]); i++;}
                        else{ clearInterval(objInterval); }
                    }, 1000);
                }
            });
        }
    }
});