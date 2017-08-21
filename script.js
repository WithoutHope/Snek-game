var msg1 = "velikost pole 10-100. \nVychozi velikost je 20.";
var field;
var li_field;
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
			console.log(field[x][y] + "   vygenerováno");
			thh.setAttribute("id",x + "," + y);
            trr.appendChild(thh);
        }
    }
};
function live(x, y){
	var bunka = document.getElementById(x + "," + y);
	bunka.style.background = "black";
	bunka.removeAttribute("onclick");
	bunka.setAttribute("onclick","die(" + x + ", " + y + ")");
	field[x][y] = 1;
	//console.log(field[x][y]);
}
function die(x, y){
	var bunka = document.getElementById(x + "," + y);
	bunka.style.background = "#eee";
	bunka.removeAttribute("onclick");
	bunka.setAttribute("onclick","live(" + x + ", " + y + ")");
	field[x][y] = 0;
	//console.log(field[x][y]);
}
function x_gen(){
	var limit = prompt("Generations..");
	for(x = 1; x <= limit; x++){
		setTimeout(n_gen,200*x);
		console.log("gen....");
	}
}
function y_gen(){
	setInterval(n_gen,200);
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
						if((k + m) >= 0 && (k + m ) <= velikost){
							for(n = -1; n <= 1; n++){
								if((l + n) >= 0 && (l + n) <= velikost){
									if((k + m) !== k || (l + n) !== l){
										if(field[(k + m)][(l + n)] === 1){
											life_count++;
											console.log("ja " + k + ", " + l + "\
		 kontroluju: " + (k + m) + ", " + (l + n) + "\
		 je tam? " + field[(k + m)][(l + n)] + "\
		 mam spocitano " + life_count);
											li_field[k][l] = life_count; //tenhle øádek dìlá potíže;
										}
									}
								}
							}
						}
					}
				}
				else if(j === 2){
					if(field[k][l] === 1){
						if(li_field[k][l] < 2){
							console.log("umírá políèko: " + k + ", " + l + "málo sousedù...");
							die(k,l);
						}
						else if(li_field[k][l] > 3){
							console.log("umírá políèko: " + k + ", " + l + "pøemnoženo");
							die(k,l);
						}
					}
					else if(field[k][l] === 0){
						if(li_field[k][l] === 3){
							console.log("narodilo se políèko: " + k + ", " + l);
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