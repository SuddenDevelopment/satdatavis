intX=82.55;
cube([10,30,10]);
translate([10,-5,5])cube([30,1,1]);
translate([10,34,5])cube([30,1,1]);

difference(){
intersection(){
    translate([10,0,5])cylinder(r=5,h=1);
    translate([5,-5,1])cube([5,5,5]);
}
    translate([10,0,5])cylinder(r=4,h=1);
}

difference(){
     
intersection(){
    translate([10,30,5])cylinder(r=5,h=1);
    translate([5,30,1])cube([5,5,5]);
}
    translate([10,30,5])cylinder(r=4,h=1);
}