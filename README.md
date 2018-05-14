# satdatavis
explore visualizing satellite project data

![](spacevis.png)

## pre requisites
1. npm
2. a web server. You can run a light weight webserver called http-server if needed
3. webgl capable browser

## getting started
```bash
git clone repo
cd satdatavis
npm install
http-server
```

## libraries used
1. Vue js: https://vuejs.org/ , This is just to handle the shared variables and events. no libraries to add a vue interface to something else was used.
2. Three.js: https://threejs.org/ , This is to build the 3d model in webgl. Each object is assigned a variable that can then be modified in events like clicking on the chart legend or experiment buttons
3. C3 charting library: http://c3js.org/ , This is the flexible chart library, tons of options and events available. Styling is a pain to figure out which paths in the svg require assignment.
4. PapaParse: https://www.papaparse.com/ , a very nice library to load and parse csv files

## code notes
- the scene units are non intuitive, I didnt spend a lot of time making the units from openscad match the ones in three.js but for maintenance sanity sake that could help
- use openscad to edit the models in scad form and export them to stl
- there's definitely a lot of code repetition that can be reduced to functions and classes
- three.js inside any of the vue component modules I found failed in one way or another. Especially when stl loading models.
