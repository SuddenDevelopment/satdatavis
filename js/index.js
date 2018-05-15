// The dimensions are: 2.5" H x 3.25" Deep x 3.75" W
// 63.5, 82.55, 95.25
var container, stats ,objFan1,objFan2,arrData,objStream;
var camera, cameraTarget, scene, renderer, controls, objRes1, objRes2,material;

            init();
            animate();

            function init() {
                //this id is already in the html, just find it
                container = document.getElementById( 'model' );
                //add the camera
                camera = new THREE.PerspectiveCamera( 35, window.innerWidth / (window.innerHeight/2), 1, 15 );
                camera.position.set( 0, 2, 2 );
                cameraTarget = new THREE.Vector3( 0, 0.5, 0 );
                controls = new THREE.OrbitControls( camera );
                scene = new THREE.Scene();

                var loader = new THREE.STLLoader();

                material = new THREE.MeshPhongMaterial( { color: 0xAAAAAA, specular: 0x111111, shininess: 200 } );

                //this is the model that outlines the edges of the box
                loader.load( './models/box.stl', function ( geometry ) {
                    var meshMaterial = material;
                    if (geometry.hasColors) {
                        meshMaterial = new THREE.MeshPhongMaterial({ transparent:true, opacity: 0.5, vertexColors: THREE.VertexColors });
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
                bulbLight = new THREE.PointLight( 0xffffff, 1, 100, 2 );
                bulbMat = new THREE.MeshStandardMaterial( {
                    emissive: 0xffffff,
                    emissiveIntensity: 1
                });
                bulbLight.add( new THREE.Mesh( bulbGeometry, bulbMat ) );
                bulbLight.position.set( 0.2, 0.65, -0.48 );
                bulbLight.castShadow = true;
                scene.add( bulbLight );

                scene.add( new THREE.HemisphereLight( 0x443333, 0x111122 ) );

                renderer = new THREE.WebGLRenderer( { antialias: true } );
                renderer.setPixelRatio( window.devicePixelRatio );
                renderer.setSize( window.innerWidth, window.innerHeight/2 );
                renderer.gammaInput = true;
                renderer.gammaOutput = true;
                renderer.shadowMap.enabled = true;

                container.appendChild( renderer.domElement );

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {
                camera.aspect = window.innerWidth / (window.innerHeight/2);
                camera.updateProjectionMatrix();
                renderer.setSize( window.innerWidth, (window.innerHeight/2) );
            }

            function animate() {
                requestAnimationFrame( animate );
                controls.update();                
                render();
            }

            function render() {
                var timer = Date.now() * 0.0005;
                if(objFan1){ objFan1.rotation.set( Math.PI/2, 0, objFan1.rotation.z+=1 ); }
                if(objFan2){ objFan2.rotation.set( Math.PI/2, 0, objFan2.rotation.z-=1); }
                
                //uncomment for rotation
                //camera.position.x = Math.cos( timer ) * 3;
                //camera.position.z = Math.sin( timer ) * 3;
                camera.lookAt( cameraTarget );
                renderer.render( scene, camera );
            }

var fnAddData=function(objData){
    //console.log(objData);
    if(objData.T11_CNV_LF > 100){ objLeftSensor.material.color = new THREE.Color(0xFF3333); }
    if(objData.T11_CNV_LF < 100){ objLeftSensor.material.color = new THREE.Color(0x333333); }
};

// https://www.chartkick.com/vue

new Vue({ 
    "el": '#sparklines',
    "components": { },
    data(){
        // a lot is driven from the config arrays/ objects before. grouping of sensors, mapping of lables to objects, and placeholder for the data arrays
        return {
            "intMin":90, "intMax":100, "intRecords":0, "arrChartData":[],"experiment":'',
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
            },"arrButtons":[
                {"label":'Exp1',"sensors":['T31_RAD_BL','T32_RAD_WH','T33_CASE1','T34_CASE2'],"heater":'bulbLight',"selected":false},
                {"label":'Exp2&3',"sensors":['T11_CNV_LF','T42_CNV_RT','T12_CNV_FR','T13_CNV_BK','T14_CNV_BT','T41_CNV_TP','T33_CASE1','T34_CASE2'],"heater":'objRes2',"selected":false},
                {"label":'Exp4',"sensors":['T43_CND_BR','T44_CND_CO','T33_CASE1','T34_CASE2'],"heater":'objRes1',"selected":false}
            ]
        }
    },
    created(){
         var self=this;
         // http://c3js.org/reference.html
         // http://c3js.org/
         this.chart = c3.generate({
            bindto: '#chart',
            data: { columns:[] },
            legend: {
              item: {
                onclick: function (strLabel) { 
                    //toggle the model color
                    var strId='';
                    var objModel={};
                    var arrKeys=Object.keys(self.objConfig);
                    for(var i=0; i<arrKeys.length;i++){
                        if(self.objConfig[arrKeys[i]].label === strLabel){ 
                            //found the object we were looking for, the objConfig that matches the legend item clicked
                            strId=arrKeys[i] ;objModel=self.objConfig[arrKeys[i]].model; 
                        }
                    }
                    if(objModel.material.color.r===0.3 && objModel.material.color.g===0.3 && objModel.material.color.b===0.3){
                        //this one is already grey
                        self.fnUpdateColor(strId,self.objConfig[strId].values[self.objConfig[strId].values.length-1]);
                    }else{ objModel.material.color={r:0.3,g:0.3,b:0.3}; }
                }
              }
            },
            axis: {
                y: { min: 95 }
            },point: { show: false }
        });
    },
    "methods":{
        fnFilter(intKey){
            var self=this;
            var arrShow=[];
            var arrHide=[];
            /*
            Exp1=enables Black,White,Case1,Case2; 
            Exp2&3=enables Top,Bot,Left,Right,Front,Back,Case1,Case2; 
            Exp4=enables Brass,Copper,Case1,Case2.
            - also if an Exp filter is set, we color the heating element red in the model 
            (Exp1=bulb, Exp2&3=center resistor, Exp4=far resistor w/ 2 wires conn). 
            If they unset the Exp filter or custom hide indiv settings, the heating elem goes back to orig color.
            */
            //hide all
            /*
            var arrKeys=Object.keys(self.objConfig);
            for(var i=0; i<arrKeys.length;i++){  
                arrHide.push(self.objConfig[arrKeys[i]].label); 
                //and grey out the sensors
                self.objConfig[arrKeys[i]].model.material.color={r:0.3,g:0.3,b:0.3};
            }
            self.chart.hide(arrHide, {withLegend: true});
            */
            var arrKeys=Object.keys(self.objConfig);
            for(var i=0; i<arrKeys.length;i++){ arrHide.push(self.objConfig[arrKeys[i]].label); }
            self.fnReset();
            //console.log(arrHide);
            //get the filter/button config
            var objBtn=self.arrButtons[intKey];
            objBtn.selected=true;
            for(var i=0;i<self.arrButtons[intKey].sensors.length;i++){ 
                arrShow.push(self.objConfig[self.arrButtons[intKey].sensors[i]].label); 
                //highlight the sensors
                self.objConfig[self.arrButtons[intKey].sensors[i]].model.material.color={r:1,g:0,b:0};
                //remove from the hide array
                var intIndex = arrHide.indexOf(self.objConfig[self.arrButtons[intKey].sensors[i]].label)
                if(intIndex > -1){ arrHide.splice(intIndex,1); }
            }

            //must be lazy loaded because its not availabel until stlloaders complete, messy
            var objHeater=window[self.arrButtons[intKey].heater];
            //the pkintligh / bulb has a different color path
            if(typeof objHeater.type !== 'undefined' && objHeater.type==='PointLight'){ 
                objHeater.children[0].material.emissive={r:1,g:0,b:0}; 
            }else{ objHeater.material.color={r:1,g:0,b:0}; }
            //and show them
            self.chart.hide(arrHide, {withLegend: true});
        },
        fnReset(){
            var self=this,arrShow=[];
            //reset all the buttons
            for(var i=0;i<self.arrButtons.length;i++){ self.arrButtons[i].selected=false; }
            //reset the heater colors:
            objRes1.material.color={r:0.3,g:0.3,b:0.3}; objRes2.material.color={r:0.3,g:0.3,b:0.3}; bulbLight.children[0].material.emissive={r:1,g:1,b:1};
            var arrKeys=Object.keys(self.objConfig);
            for(var i=0; i<arrKeys.length;i++){  
                arrShow.push(self.objConfig[arrKeys[i]].label); 
                //and grey out the sensors
                self.objConfig[arrKeys[i]].model.material.color={r:0.3,g:0.3,b:0.3};
            }
            self.chart.show(arrShow, {withLegend: true});
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
                    //var arrDataPoint=[ parseInt(objData[arrKeys[0]]), parseInt(objData[arrKeys[i]])];
                    self.objConfig[arrKeys[i]].values.push(intValue);
                    //set color 
                    self.fnUpdateColor(arrKeys[i],intValue);
                    //update record count
                    self.intRecords++;
                }
                //console.log(objData[arrKeys[i]],parseInt(objData[arrKeys[i]]));
            }
        },fnLoadFile(objEvent){
            //this is what is called after a file is selected
            var self=this;
            self.arrChartData=[];
            //this is expecting Exp1 Exp2 etc
            self.experiment = objEvent.target.files[0].name.substring(0, 4);
            Papa.parse(objEvent.target.files[0], {
                "header": true,
                "complete": function(objResults) {
                    //this fires after the file is loaded into memory by papaparse
                    var arrData=objResults.data;
                    var intCount=arrData.length; var i=0;
                    //run this for each row/record
                    for(var i=0;i<intCount;i++){ self.fnAddData(arrData[i]); }
                    var arrKeys=Object.keys(self.objConfig);
                    //all records are loaded, now run through each of the series
                    for(var i=0;i<arrKeys.length;i++){
                        //put the series label at the beginning for C3
                        self.objConfig[arrKeys[i]].values.unshift(self.objConfig[arrKeys[i]].label);
                        //add it to the array of series data
                        self.arrChartData.push(self.objConfig[arrKeys[i]].values);
                    }
                    //load the data into the c3 chart
                    self.chart.load({ columns: self.arrChartData });
                    //set the filter
                    if(self.experiment==='Exp1'){ self.fnFilter(0); }
                    else if(self.experiment==='Exp2' || self.experiment==='Exp3'){ self.fnFilter(1); }
                    else if(self.experiment==='Exp3'){ self.fnFilter(2); }
                }
            });
        },fnGetColor(intStart,hexStart,intEnd,hexEnd,intValue){
            //take the begin and end of range with colors, calc the inbetween given a value
            //find the range/diff between values, this is the full rnage for the color transition
            var intRange = intEnd-intStart;

        }
    }
});