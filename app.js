function team1(){
	let t1=prompt("enter the team1",'');
	let team1=document.getElementById('team1');
	team1.innerHTML=t1.toUpperCase();
}


function team2(){
	let t2=prompt("enter the team1",'');
	let team2=document.getElementById('team2');
	team2.innerHTML=t2.toUpperCase();
}

function format(){
	let form=prompt("enter the format",'');
	let format=document.getElementById('format');
	format.innerHTML=form.toUpperCase();
}

function fullTotal(){
	let c1=parseInt(document.getElementById('one').value);
	let c2=parseInt(document.getElementById('two').value);
	let c3=parseInt(document.getElementById('three').value);
	let c4=parseInt(document.getElementById('four').value);
	let c5=parseInt(document.getElementById('six').value);
	let c6=parseInt(document.getElementById('extra').value);

	console.log(c1,c2,c3 ,c4 ,c5, c6);


	let ones=c1*1;
	console.log( "ones " +ones);
	let twos=c2*2;
	console.log("twos " +twos);
	let threes=c3*3;
	console.log("threes " +threes);
	let fours=c4*4;
	console.log("fours " +fours);
	let sixes=c5*6;
	console.log("sixes " +sixes);
	let extras=c6*1;
	console.log("extras " +extras);

	let total=ones+twos+threes+fours+sixes+extras;
	console.log("total runs is "+total);

	let newtotal=document.getElementById('totalrunsdistributes');
	newtotal.innerHTML=`${total}`

	/*let ones = (c1) 	=>	c1*1;
	const twos = (c2) 	=>	c2*2;
	const threes = (c3) =>	c3*3;
	const fours = (c4) 	=>	c4*4;
	const sixes = (c5) 	=>  c5*6;


	console.log(ones,twos,threes)

	const total=function(ones,twos,threes,fours,sixes){
		const tot=ones+twos+threes+fours+sixes;
		return tot;
		
	}*/
	
	
}



const over=[0];

function total(){
	let b1=parseInt(document.getElementById('b1').value);
	let b2=parseInt(document.getElementById('b2').value);
	let b3=parseInt(document.getElementById('b3').value);
	let b4=parseInt(document.getElementById('b4').value);
	let b5=parseInt(document.getElementById('b5').value);
	let b6=parseInt(document.getElementById('b6').value);
	
	over.push(b1);
	over.push(b2);
	over.push(b3);
	over.push(b4);
	over.push(b5);
	over.push(b6);
	
	
	const totalrunOver=function(a,b,c,d,e,f,g){
		let total = a+b+c+d+e+f+g;
		return total;
	}


	const addition=totalrunOver(...over);
	console.log(addition);


	let tot=document.getElementById('total');
	tot.innerHTML=addition; 	
}


function towin(){
	let in1=parseInt(document.getElementById('ing1').value);
	let in2=parseInt(document.getElementById('ing2').value);
	const needed = (in1,in2) =>  in1 - in2;
	let total=needed(in1,in2)+1;
	let new1=document.getElementById('need');
	new1.innerHTML=total;
}


function wicket(){
	let wic=parseInt(document.getElementById('wicket').value);
	let wicAll=10;
	const reamin=(wicAll,wic)=>wicAll-wic;
	let newvalue=reamin(wicAll,wic);
	
	let newwic=document.getElementById('wic');
	newwic.innerHTML=newvalue;

}

function overBall(){
	let ovrs=parseInt(document.getElementById('overs').value);
	let over=6;
	const overstoBalls=(over,ovrs)=>ovrs*over;
	let newovr=overstoBalls(over,ovrs);
	
	let newballs=document.getElementById('ball');
	newballs.innerHTML=newovr;

}
/*	overs<input type="number" id="overs">
	<button onclick="overBall()">Calc-balls</button>
	balls remaining is :<h1 id="ball"></h1>
	</div>
	*/



/*function formatter(x){
	
	
var format=	x.toLocaleString();
return format;
//"34,523,453.345"
};

console.log(formatter(3455678346.56));*/



