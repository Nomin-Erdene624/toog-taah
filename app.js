//for loop-> davtalt ->neg codiig olon dahin ashiglahad
//for(hedees ehleh; head hurtel,nemegdeh/hasagdah){}
for(var i=1;i<=10; i++){
	console.log(i+"bat");
}
for(var i=10;i>=1; i--){
	console.log(i+"bat");
}
for(var i=1;i<=20; i++){
	if(i%2==0){
		console.log("tegsh "+i);
	}
}
for(var i=1;i<=100; i++){
	if(i%3==0 && i%5==0){
		console.log("zereg huvaagdana "+i);
	}
}
var too=8
for(var i=1;i<=10; i++){
		console.log(too+"x"+i+"="+too*i);
}
var niilber=0
var urjver=1
for(var i=1; i<=10; i++){
	niilber=niilber+i;
	urjver=urjver*i;
}
console.log(niilber);
console.log(urjver);
for(var i=1; i<=3; i++){
	var random = Math.floor(Math.random()*10)+1;
	console.log(random);
	var too=+prompt("1-10 hoorond toog taana uu");
	if(random==too){
		alert("zuv taalaa.");
		alert("Ta "+ i + "dahi udaagaar hojloo");
			break;
	}else if(too>10|| too<0){
		alert("Buruu utga oruullaa");
	}else if(too>random){
		alert("ih baina");
	}else if(too<random){
		alert("baga baina");
	}else{
		alert("buruu taalaa");
	}
	if(i==3){
		alert("Ami duuslaa");
	}
}