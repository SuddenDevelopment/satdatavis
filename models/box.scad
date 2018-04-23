intX=82.55;
    intY=95.25;
    intZ=63.5;
translate([intX,0,intZ])rotate([0,180,0]){
difference(){
    
    //primary, outisde dimensions
    cube([intX, intY, intZ]);
    //subtract X
    translate([-0.5,0.5,0.5])cube([intX+1, intY-1, intZ-1]);
    //subtract Y
    translate([0.5,-0.5,0.5])cube([intX-1, intY+1, intZ-1]);
    //subtract Z
    translate([0.5,0.5,-0.5])cube([intX-1, intY-1, intZ+1]);
}

translate([2,0,2])rotate([90,0,0])linear_extrude(height = 0.5) {text("right");}
translate([2,93,2])rotate([90,0,-90])linear_extrude(height = 0.5) {text("front");}
translate([intX,2,2])rotate([90,0,90])linear_extrude(height = 0.5) {text("back");}
translate([intX-2,intY,2])rotate([90,0,180])linear_extrude(height = 0.5) {text("left");}
translate([2,4,intZ])rotate([0,0,0])linear_extrude(height = 0.5) {text("top");}
}