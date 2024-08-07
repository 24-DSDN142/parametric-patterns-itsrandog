//your parameter variables go here!
let flower_on = false;
let flower_size = 0.65;
let flower_x = 0;
let flower_y = 0;

let heart_on = false;
let heart_size = 0.7;
let heart_x = 90;
let heart_y = 60;

let star_on = true;
let star_size = 1;
let star_x = 100;
let star_y = 100;

let heart_colour;
let star_colour;
let flower_colour;
let flower_mid_colour;
let back_colour;

let pink;
let yellow;
let orange;
let hot_pink;
let white;
let tanish_pink;
let red;

function setup_wallpaper(pWallpaper) {
  //DEVELOP_GLYPH, GRID_WALLPAPER, GLIDE_WALLPAPER
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  //FIT_TO_SCREEN, NINE_LANDSCAPE, NINE_PORTRAIT, A3
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;

  //Colours
  pink = color(255, 176, 241);
  yellow =color(253, 251, 120);
  orange = color(252, 166, 36);
  hot_pink = color(250, 55, 87);
  white = color(255, 255, 255);
  tanish_pink = color (248, 105, 93);
  red = color (250,11, 11);

  heart_colour = hot_pink;
  star_colour = yellow;
  flower_colour = tanish_pink;
  flower_mid_colour = white;
  back_colour = orange;
}

function wallpaper_background() {
  background(back_colour); 
}

function flower() {
  //petals
  fill(flower_colour)
  bezier(100, 100, -40, 140, 140, 240, 100, 100); //bot left
  bezier(100, 100, 60, 240, 240, 140, 100, 100) //bot right
  bezier(100, 100, 180, -20, 220, 180, 100, 100); //top right
  bezier(100, 100, 20, -20, -20, 180, 100, 100); //top left
  bezier(100, 100, 0, 0, 200, 0, 100, 100); //top 

  fill(flower_mid_colour)
  ellipse(100, 100, 50, 50); //centre
}

function heart() {
  fill(heart_colour)
  ellipse(70, 80, 60, 60); //left circ
  ellipse(130, 80, 60, 60); //right circ
  triangle(70, 105, 130, 105, 100, 80); //middle filler
  triangle(50, 103, 150, 103, 100, 150); //bottom point
}

function star() {
  fill(star_colour)
  noStroke();
  triangle(125, 115, 100, 135, 75, 115); //fill in bot
  triangle(75, 115, 85, 85, 115, 85); //fill in top left
  triangle(75, 115, 115, 85, 125, 115); //fill in top right

  stroke(1);
  triangle(85, 85, 100, 40, 115, 85); //top
  triangle(115, 85, 160, 85, 125, 115); //top right
  triangle(85, 85, 40, 85, 75, 115); //top left
  triangle(100, 135, 140, 160, 125, 115); //bot right
  triangle(75, 115, 60, 160, 100, 135); //bot left
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  if (flower_on == true) {
  push();
  translate(flower_x, flower_y);
  scale(flower_size);
  flower();
  pop();
  }

  if (heart_on == true) {
  push();
  translate(heart_x, heart_y);
  scale(heart_size);
  heart();
  pop();
  }

  if (star_on == true) {
  push();
  translate(star_x, star_y);
  scale(star_size);
  star();
  pop();
  }
}
