intX=82.55;
cube([10,30,10]);
translate([0,5,5])cube([intX,1,1]);
translate([0,25,5])cube([intX,1,1]);

translate([0,0,5])difference(){
        intersection(){
            translate([0,-5,0])cube([5,5,5]);
            cylinder(r=5,h=1);
        }
        cylinder(r=4,h=1);
}

translate([0,30,5])difference(){
        intersection(){
            translate([0,0,0])cube([5,5,5]);
            cylinder(r=5,h=1);
        }
        cylinder(r=4,h=1);
}