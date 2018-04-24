// The dimensions are: 2.5" H x 3.25" Deep x 3.75" W
// 63.5, 82.55, 95.25
var container, stats ,objFan1,objFan2,arrData,objStream;

            var camera, cameraTarget, scene, renderer,controls;

            init();
            animate();

            function init() {

                container = document.createElement( 'div' );
                container.id="model";
                document.body.appendChild( container );

                camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 15 );
                camera.position.set( 0, 2, 2 );


                cameraTarget = new THREE.Vector3( 0, 0.5, 0 );
                controls = new THREE.OrbitControls( camera );
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

                objCase1Sensor = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0x66AA66, specular: 0x111111, shininess: 200 } ) );
                objCase1Sensor.position.set( -0.3, 1.1, 0.3 );
                scene.add( objCase1Sensor );

                objBotSensor = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0x66AA66, specular: 0x111111, shininess: 200 } ) );
                objBotSensor.position.set( -0.05, 0.35, -0.05 );
                scene.add( objBotSensor );

                objCase2Sensor = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0x66AA66, specular: 0x111111, shininess: 200 } ) );
                objCase2Sensor.position.set( 0.4, 0.35, 0 );
                scene.add( objCase2Sensor );

                objBlackSensor = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0x66AA66, specular: 0x111111, shininess: 200 } ) );
                objBlackSensor.position.set( 0.25, 0.35, -0.4 );
                scene.add( objBlackSensor );

                objWhiteSensor = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0x66AA66, specular: 0x111111, shininess: 200 } ) );
                objWhiteSensor.position.set( 0.1, 0.35, -0.4 );
                scene.add( objWhiteSensor );

                objBackSensor = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0x66AA66, specular: 0x111111, shininess: 200 } ) );
                objBackSensor.rotation.set(0,0,Math.PI/2);
                objBackSensor.position.set( -0.475, 0.65, -0.05 );
                scene.add( objBackSensor );

                objFrontSensor = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0x66AA66, specular: 0x111111, shininess: 200 } ) );
                objFrontSensor.rotation.set(0,0,Math.PI/2);
                objFrontSensor.position.set( 0.3, 0.65, -0.05 );
                scene.add( objFrontSensor );

                objRightSensor = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0x66AA66, specular: 0x111111, shininess: 200 } ) );
                objRightSensor.rotation.set(Math.PI/2,0,0);
                objRightSensor.position.set( -0.05, 0.65, -0.48 );
                scene.add( objRightSensor );

                objLeftSensor = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0x66AA66, specular: 0x111111, shininess: 200 } ) );
                objLeftSensor.rotation.set(Math.PI/2,0,0);
                objLeftSensor.position.set( -0.05, 0.65, 0.425 );
                scene.add( objLeftSensor );

                objCSensor1 = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0x66AA66, specular: 0x111111, shininess: 200 } ) );
                objCSensor1.rotation.set(Math.PI/2,0,0);
                objCSensor1.position.set( -0.16, 0.855, -0.48 );
                scene.add( objCSensor1 );

                objCSensor2 = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0x66AA66, specular: 0x111111, shininess: 200 } ) );
                objCSensor2.rotation.set(Math.PI/2,0,0);
                objCSensor2.position.set( -0.35, 0.855, -0.48 );
                scene.add( objCSensor2 );

                // Lights
var bulbGeometry = new THREE.SphereGeometry( 0.02, 16, 8 );
                bulbLight = new THREE.PointLight( 0xffee88, 1, 100, 2 );
                bulbMat = new THREE.MeshStandardMaterial( {
                    emissive: 0xffffee,
                    emissiveIntensity: 1,
                    color: 0x000000
                });
                bulbLight.add( new THREE.Mesh( bulbGeometry, bulbMat ) );
                bulbLight.position.set( 0.2, 0.65, -0.48 );
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
                controls.update();
                
                render();
                //stats.update();

            }

            function render() {

                var timer = Date.now() * 0.0005;
                if(objFan1){ objFan1.rotation.set( Math.PI/2, 0, objFan1.rotation.z+=1 ); }
                if(objFan2){ objFan2.rotation.set( Math.PI/2, 0, objFan2.rotation.z-=1); }
                

                //camera.position.x = Math.cos( timer ) * 3;
                //camera.position.z = Math.sin( timer ) * 3;
                camera.lookAt( cameraTarget );

                renderer.render( scene, camera );

            }

var fnAddData=function(objData){
    console.log(objData);
    if(objData.T11_CNV_LF > 100){ objLeftSensor.material.color = new THREE.Color(0xFF3333); }
    if(objData.T11_CNV_LF < 100){ objLeftSensor.material.color = new THREE.Color(0x333333); }
};

// https://www.chartkick.com/vue
Vue.use(VueChartkick, {adapter: Chart})
new Vue({ 
    "el": '#sparklines',
    data(){
        return {
            "intMin":90, "intMax":100, "intRecords":0, "objChartData":[],
            "objConfig":{
                "T11_CNV_LF":{ "label":"Left" , "values":[], "model":objLeftSensor },
                "T42_CNV_RT":{ "label":"Right" , "values":[], "model":objRightSensor },
                "T12_CNV_FR":{ "label":"Front" , "values":[], "model":objFrontSensor },
                "T13_CNV_BK":{ "label":"Back" , "values":[], "model":objBackSensor },
                "T14_CNV_BT":{ "label":"Bottom" , "values":[], "model":objBotSensor },
                "T41_CNV_TP":{ "label":"Top" , "values":[], "model":objTopSensor },
                "T31_RAD_BL":{ "label":"Black" , "values":[], "model":objBlackSensor },
                "T32_RAD_WH":{ "label":"White" , "values":[], "model":objWhiteSensor },
                "T33_CASE1":{ "label":"Case 1" , "values":[], "model":objCase1Sensor },
                "T34_CASE2":{ "label":"Case 2" , "values":[], "model":objCase2Sensor },
                "T43_CND_BR":{ "label":"Conduction 1" , "values":[], "model":objCSensor1 },
                "T44_CND_CO":{ "label":"Conduction 2" , "values":[], "model":objCSensor2 }
            }
        }
    },
    created(){},
    "methods":{
        fnReset(){
            clearInterval(objStream);
            this.intRecords=0
            var arrKeys=Object.keys(this.objConfig);
            for(var i=0;i<arrKeys.length;i++){
                this.objConfig[arrKeys[i]].values=[];
            }
        },
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
            var intTimeStamp = Date.now();
            for( var i=0;i<arrKeys.length;i++ ){
                if(typeof self.objConfig[arrKeys[i]] !== 'undefined'){ 
                    var intValue = parseInt(objData[arrKeys[i]]);
                    //adjust ranges
                    if(intValue > self.intMax){ self.intMax=intValue; }
                    else if(intValue < self.intMin){ self.intMin=intValue; }
                    //add data to charts
                    var arrDataPoint=[ parseInt(objData[arrKeys[0]]), parseInt(objData[arrKeys[i]])];
                    self.objConfig[arrKeys[i]].values.push(arrDataPoint);
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
                    for(var i=0;i<intCount;i++){
                        self.fnAddData(arrData[i]);
                    }
                    var arrKeys=Object.keys(self.objConfig);
                    for(var i=0;i<arrKeys.length;i++){
                        self.objChartData.push({"name":self.objConfig[arrKeys[i]].label, "data":self.objConfig[arrKeys[i]].values });
                    }
                    console.log(self.objChartData);
                    /*
                    objStream=setInterval(function(){ 
                        if(i<intCount){ self.fnAddData(arrData[i]); i++;}
                        else{ clearInterval(objStream); }
                    }, 1000);
                    */
                }
            });
        },fnGetColor(intStart,hexStart,intEnd,hexEnd,intValue){
            //take the begin and end of range with colors, calc the inbetween given a value
            //find the range/diff between values, this is the full rnage for the color transition
            var intRange = intEnd-intStart;

        }
    }
});