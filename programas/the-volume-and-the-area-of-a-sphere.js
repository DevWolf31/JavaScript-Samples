// This program calculate the area and the volume of a sphere and print it in your screen.
// Created by: MarcosMD09
var pi = 3.14159265;
var r = window.prompt("Input the radius of the sphere: ");
var a = 4 * pi * r * r; // Calculate the area
var v = 4 * pi * r * r * r / 3; // Calculate the volume
window.alert("The area of the sphere with the radius "+ r +" is "+ a +" and the volume is "+ v +".");
