var msg1 = "velikost pole 10-100. \nVychozi velikost je 20.";
var field;
var li_field;
var gen_speed = 200;
var velikost;
window.onload = function() {
    var tabulka = document.getElementById("tab");
	var c = prompt(msg1);
    if (c >= 100){
        velikost = 99;
    }
    else if(c <= 9){
        velikost = 20;
    }
    else{
        velikost = c-1;
    }
    field = new Array(velikost);
    li_field = new Array(velikost);

    for (x = 0; x <= velikost; x++) {
        var trr = document.createElement("tr");
        tabulka.appendChild(trr);
        field[x] = new Array(velikost);
        li_field[x] = new Array(velikost);

        for (y = 0; y <= velikost; y++) {
            var thh = document.createElement("th");
            thh.setAttribute("onclick", "live(" + x + "," + y + ")");
            field[x][y] = 0;
            li_field[x][y] = 0;
			console.log(field[x][y] + "   vygenerov�no");
			thh.setAttribute("id",x + "," + y);
            trr.appendChild(thh);
        }
    }
};
var pop = 0;
function live(x, y){
	var bunka = document.getElementById(x + "," + y);
	bunka.style.background = "black";
	bunka.removeAttribute("onclick");
	bunka.setAttribute("onclick","die(" + x + ", " + y + ")");
	field[x][y] = 1;
	pop += 1;
	document.getElementById("population").innerHTML = pop;
	//console.log(field[x][y]);
}
function die(x, y){
	var bunka = document.getElementById(x + "," + y);
	bunka.style.background = "#eee";
	bunka.removeAttribute("onclick");
	bunka.setAttribute("onclick","live(" + x + ", " + y + ")");
	field[x][y] = 0;
	pop -= 1;
	document.getElementById("population").innerHTML = pop;
	//console.log(field[x][y]);
}
function x_gen(){
	var limit = prompt("Generations..");
	for(x = 1; x <= limit; x++){
		setTimeout(n_gen,gen_speed*x);
		console.log("gen....");
	}
}
function y_gen(){
	setInterval(n_gen,gen_speed);
	console.log("gen....");
}
function n_gen(){
	for(j = 1; j <= 3; j++){
		for(k = 0; k <= velikost; k++){
			console.log("radek " + k + " ... " + field[(k)]);
			for(l = 0; l <= velikost; l++){
				if(j == 1){
					var life_count = 0;
					for(m = -1; m <= 1; m++){
						var updown_case;
						var leftright_case;
						if((k + m) < 0){
							updown_case = velikost;
						}
						else if((k + m) > velikost){
							updown_case = 0;
						}
						else{
							updown_case = (k + m);
						}
						for(n = -1; n <= 1; n++){
							if((l + n) < 0 ){
								leftright_case = velikost;
							}
							else if((l + n) > velikost){
								leftright_case = 0;				
							}
							else{
								leftright_case = (l + n);		
							}
							if((k + m) !== k || (l + n) !== l){
								if(field[updown_case][leftright_case] === 1){
									life_count++;
									console.log("ja " + k + ", " + l + "\
						 kontroluju: " + (k + m) + ", " + (l + n) + "\
						 je tam? " + field[updown_case][leftright_case] + "\
						 mam spocitano " + life_count);
									li_field[k][l] = life_count; //tenhle ��dek d�l� pot�e;
								}
							}
						}
					}
				}
				else if(j === 2){
					if(field[k][l] === 1){
						if(li_field[k][l] < 2){
							console.log("um�r� pol��ko: " + k + ", " + l + "m�lo soused�...");
							die(k,l);
						}
						else if(li_field[k][l] > 3){
							console.log("um�r� pol��ko: " + k + ", " + l + "p�emno�eno");
							die(k,l);
						}
					}
					else if(field[k][l] === 0){
						if(li_field[k][l] === 3){
							console.log("narodilo se pol��ko: " + k + ", " + l);
							live(k,l);
						}
					}
				}
				else{
					li_field[k][l] = 0;
				}
			}
		}
	}
	console.log(li_field);
}
function r_gen(b){
		var r_ch = prompt("More means more rare living dots.. 1=everything lives");
    for (x = 0; x <= velikost; x++) {
        for (y = 0; y <= velikost; y++) {
						var r = Math.floor((Math.random() * r_ch) + 1);
						if(r < 2) {
							live(x, y);
						}
						if(b == 1) {
							if(r >= 2) {
								die(x, y);
								pop += 1;
							}
						}
        }
    }	
}
function h_gen(){
		var r_ch = prompt("More means more rare living dots.. 1=everything lives");
    for (x = 0; x <= velikost; x++) {
        for (y = 0; y <= velikost; y++) {
						var r = Math.floor((Math.random() * r_ch) + 1);
						if(r < 2) {
							live(x, y);
						}
						if(b == 1) {
							if(r >= 2) {
								die(x, y);
							}
						}
        }
    }	
}
function s_gen(){
		var s_ch = prompt(">50 recomended (in miliseconds)");
    gen_speed = s_ch;
}