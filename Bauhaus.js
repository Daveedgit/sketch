let colors2 = ['#ef233c', '#d90429', '#2274a5', '#e6af2e', '#e8e8e8s', '#2e282a'];
let colors = ['#0477bf', '#f2b705', '#f2e2c4', '#261d11' ,'#a6290d']
function setup() {
	createCanvas(700, 700);
	angleMode(DEGREES);
	rectMode(CENTER);
	let seg = 9;
	let w = width/seg;
	translate(width/2, height/2);
	scale(0.8);
	//scale(1);
	translate(-width/2, -height/2);
	noStroke();
	background(random(colors2));
	for(let i=0; i<seg; i++){
		for(let j=0; j<seg; j++){
			let x = i * w + w/2;
			let y = j * w + w/2;
			let a = int(random(2)) * 180;
			form(x, y, w, a);
		}
	}
}

function draw() {
	
}
//let shape
function form(x, y, w, a){
	let col1 = random(colors);
	let col2 = random(colors);
	let col3 = random(colors);
	if(col1 == col2 || col1 == col3 || col2 == col3){
		col2 = random(colors);
	    col3 = random(colors);
	}
	push();
	translate(x, y);
	scale(random(1,1));
	//scale(random()<0.5?-1:1, 1);
	//rotate(1,10)
	rotate(a);
	//stroke(col1)
	fill(col1);
	//line(w,w/2,3,2);
	//ellipse(0,0,w,10);
	square(0, 0, w);
	fill(col2);
	//arc(w/2, w/2, w/1, w*2, 180, 270);
	fill(col3);
	arc(w/2, 0, w, w, 90, 270);
	fill(col2);
	//circle(w*0.3, -w*0.25, w*0.25);
	//circle(-w*0.25, w*0.25, w*0.3); 
	pop();
}