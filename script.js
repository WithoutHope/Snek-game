var field;
var field_done = false;
var current_move;
var current_dir;
var interval_speed;
var sidescroll;
function keyCode(event) {
	var x = event.keyCode;
	switch(x){
		case 27://esc
			console.log("You pressed the Escape key!");
			break;
		case 32://space
			console.log("You pressed the spacebar!");
			clearInterval(current_move);
			console.log("cleared interval");
			break;
		case 13://enter
			console.log("You pressed the enter!");
			if (document.getElementById("sidescroll_in").checked == true){
				sidescroll = true;
			}
			else {
				sidescroll = false;
			}
			interval_speed = 400;
			lifespan += 1;
			if(field_done == false){
				make_field();
			}
			else{
			move(current_dir);
			}
			break;
		case 119://w
			current_dir = "up";
			clearInterval(current_move);
			console.log("cleared interval");
			current_move = setInterval(move, interval_speed, "up");
			move("up");
			console.log("You go UP");
			break;
		case 97://a
			current_dir = "left";
			clearInterval(current_move);
			console.log("cleared interval");
			current_move = setInterval(move, interval_speed, "left");
			move("left");
			console.log("You go LEFT");
			break;
		case 115://s
			current_dir = "down";
			clearInterval(current_move);
			console.log("cleared interval");
			current_move = setInterval(move, interval_speed, "down");
			move("down");
			console.log("You go DOWN");
			break;
		case 100://d
			current_dir = "right";
			clearInterval(current_move);
			console.log("cleared interval");
			current_move = setInterval(move, interval_speed, "right");
			move("right");
			console.log("You go RIGHT");
			break;
		case 38://up
			current_dir = "up";
			clearInterval(current_move);
			console.log("cleared interval");
			current_move = setInterval(move, interval_speed, "up");
			move("up");
			console.log("You go UP");
			break;
		case 37://left
			current_dir = "left";
			clearInterval(current_move);
			console.log("cleared interval");
			current_move = setInterval(move, interval_speed, "left");
			move("left");
			console.log("You go LEFT");
			break;
		case 40://down
			current_dir = "down";
			clearInterval(current_move);
			console.log("cleared interval");
			current_move = setInterval(move, interval_speed, "down");
			move("down");
			console.log("You go DOWN");
			break;
		case 39://right
			current_dir = "right";
			clearInterval(current_move);
			console.log("cleared interval");
			current_move = setInterval(move, interval_speed, "right");
			move("right");
			console.log("You go RIGHT");
			break;
	}
}
var size = 16;
function make_field(){
		field_done = true;
		document.getElementById("start").style.display = "none";
		var grid = document.getElementById("grid");
    field = new Array(size);
    for (x = 0; x <= size; x++) {
        var trr = document.createElement("tr");
        grid.appendChild(trr);
        field[x] = new Array(size);
        for (y = 0; y <= size; y++) {
            var thh = document.createElement("th");
            field[x][y] = 0;
			console.log(field[x][y] + "   vygenerováno");
			thh.setAttribute("id",x + "," + y);
            trr.appendChild(thh);
        }
    }
}
var img = document.getElementById("img");
var pos_x = 0;
var pos_y = 0;
var lifespan = 2;
var food_eaten = true;
var aging = 1;
function move(dir){
	var field_now = document.getElementById(pos_x + "," + pos_y);
	switch(dir){
		case "up":
			var pos_x_after = pos_x -1;
			if (pos_x_after >= 0){
				//field_now.style.background = "#aaf";
				pos_x--;
				field_now = document.getElementById(pos_x + "," + pos_y);
				//field_now.style.background = "green";
				console.log("Jsi na x " + pos_x);
				let random_img = Math.floor((Math.random() * 3)+1);
				img.setAttribute("src", "grafics/move_" + random_img + ".png");
			}
			else{
				img.setAttribute("src", "grafics/wall.png");
				if(sidescroll = false) {
					pos_x--;
				}
				else {
					pos_x = size+1;
				}
			}
			if(field[pos_x_after][pos_y] > 100){
				lifespan += 2;
				food_eaten = true;
				img.setAttribute("src", "grafics/eat.png");
			}
			else if(field[pos_x_after][pos_y] > 1 && field[pos_x_after][pos_y] < 101){
				lifespan -= 2;
				aging = 2;
				img.setAttribute("src", "grafics/eat_ys.png");
			}
			break;
		case "down":
			var pos_x_after = pos_x +1;
			if (pos_x_after <= size){
				//field_now.style.background = "#aaf";
				pos_x++;
				field_now = document.getElementById(pos_x + "," + pos_y);
				//field_now.style.background = "green";
				console.log("Jsi na x " + pos_x);
				let random_img = Math.floor((Math.random() * 3)+1);
				img.setAttribute("src", "grafics/move_" + random_img + ".png");
			}
			else{
				img.setAttribute("src", "grafics/wall.png");
				if(sidescroll = false) {
					pos_x++;
				}
				else {
					pos_x = -1;
				}
			}
			if(field[pos_x_after][pos_y] > 100){
				lifespan += 1;
				food_eaten = true;
				img.setAttribute("src", "grafics/eat.png");
			}
			else if(field[pos_x_after][pos_y] > 1 && field[pos_x_after][pos_y] < 101){
				lifespan -= 2;
				aging = 2;
				img.setAttribute("src", "grafics/eat_ys.png");
			}
			break;
		case "left":
			var pos_y_after = pos_y -1;
			if (pos_y_after >= 0){
				//field_now.style.background = "#aaf";
				pos_y--;
				field_now = document.getElementById(pos_x + "," + pos_y);
				//field_now.style.background = "green";
				console.log("Jsi na y " + pos_y);
				let random_img = Math.floor((Math.random() * 3)+1);
				img.setAttribute("src", "grafics/move_" + random_img + ".png");
			}
			else{
				img.setAttribute("src", "grafics/wall.png");
				if(sidescroll = false) {
					pos_y--;
				}
				else {
					pos_y = size+1;
				}
			}
			if(field[pos_x][pos_y_after] > 100){
				lifespan += 2;
				food_eaten = true;
				img.setAttribute("src", "grafics/eat.png");
			}
			else if(field[pos_x][pos_y_after] > 1 && field[pos_x][pos_y_after] < 101){
				lifespan -= 2;
				aging = 2;
				img.setAttribute("src", "grafics/eat_ys.png");
			}
			break;
		case "right":
			var pos_y_after = pos_y +1;
			if (pos_y_after <= size){
				//field_now.style.background = "#aaf";
				pos_y++;
				field_now = document.getElementById(pos_x + "," + pos_y);
				//field_now.style.background = "green";
				console.log("Jsi na y " + pos_y);
				let random_img = Math.floor((Math.random() * 3)+1);
				img.setAttribute("src", "grafics/move_" + random_img + ".png");
			}
			else{
				img.setAttribute("src", "grafics/wall.png");
				if(sidescroll = false) {
					pos_y++;
				}
				else {
					pos_y = 0;
				}
			}
			if(field[pos_x][pos_y_after] > 100){
				lifespan += 2;
				food_eaten = true;
				img.setAttribute("src", "grafics/eat.png");
			}
			else if(field[pos_x][pos_y_after] > 1 && field[pos_x][pos_y_after] < 101){
				lifespan -= 2;
				aging = 2;
				img.setAttribute("src", "grafics/eat_ys.png");
			}
			break;
	}
	field[pos_x][pos_y] = lifespan;
	console.log(field[pos_x][pos_y]);
	for (x = 0; x <= size; x++) {
		for (y = 0; y <= size; y++) {
			field[x][y] -= aging;
			console.log(field[x][y] + "   odebráno");
			if(field[x][y] < 1){
				document.getElementById(x + "," + y).style.background = "#ffffff";
			}
			else if(field[x][y] > 0 && field[x][y] < 100 ){
				document.getElementById(x + "," + y).style.background = "blue";
			}
		}
	}
	aging = 1;
	if (food_eaten == true) {
		var food_x;
		var food_y;
		do {
			food_x = Math.floor((Math.random() * size));
			food_y = Math.floor((Math.random() * size));
			console.log("generuju bobuli");
		}
		while (field[food_x][food_y] > 0);
		field[food_x][food_y] = 1000000;
		document.getElementById(food_x + "," + food_y).style.background = "red";
		food_eaten = false;
	}
}