var score=0;
var mas=new Array(10);
var mass=new Array(10);
var m=0;

function load(){
	neww();
    for(var i=1;i<26;i++){
	var vkl=getRandom(0,2);
		if(vkl==1){
			var ell=document.getElementById(i);
			offon(ell);
		}
	}
}

document.querySelector('#game').addEventListener('click', function(e){
var id = e.target.id;
var p1=2;
var p2 = 0;
var s=0;

if(id<26&&id>0){
score++;
document.getElementById('sch').innerHTML=score;
}

if(id%5!=0){p1=3;}
if(id!=21&&id!=16&&id!=11&&id!=6&&id!=1)
{id--;}	
else{p2++;}

for(var i=p2;i<p1;i++){
if(id>5){
var ell=document.getElementById(id-5);
offon(ell);
}
ell=document.getElementById(id++);
offon(ell);
if(id<22){
ell=document.getElementById(id+4);
offon(ell);
}
}
	
var l=getRandom(1,26);
if(l==25){
	l=getRandom(1,26);
	l=document.getElementById(l);
	if(l.classList=="on"){
	l.classList.remove('on');
	l.classList.add('off');
	}
}

for(var i=1;i<26;i++){
var v=document.getElementById(i);
if(v.classList=="on"){
s++;
}
}
if(s==25){
	var name=window.prompt("Ваше количество ходов-"+score+". Введите имя:",);
	mas[m]=name+" - "+score;
	mass[m]=score;
	rating();
	m++;
	neww();
}
});

function offon(elem)
{
if(elem.classList=="off"){
elem.classList.remove('off');
elem.classList.add('on');
}
else{
elem.classList.remove('on');
elem.classList.add('off');
}
}

function getRandom(min,max){
	return Math.floor(Math.random()*(max-min)+min);
}

function rating(){
var vrem1=mas[m];
var vrem2=mass[m];
var a=0;
if(m!=0){
mas[m]=undefined;
mass[m]=undefined;
}
for(var i=0;i<mas.length;i++){
if(vrem2<=mass[i]){
for(var x=0;x<10;x++){
mass[10-x]=mass[9-x]
mas[10-x]=mas[9-x]
a++;
}
mas[i]=vrem1;
mass[i]=vrem2;
break;
}
}
if(m==0){
mas[1]=undefined;
mass[1]=undefined;
}
if(a==0){
mas[m]=vrem1;
mass[m]=vrem2;
}
}

function toop(){
	window.alert("РЕЙТИНГ\n 1.  "+mas[0]+"\n 2.  "+mas[1]+"\n 3.  "+mas[2]+"\n 4.  "+mas[3]+"\n 5.  "+mas[4]
	+"\n 6.  "+mas[5]+"\n 7.  "+mas[6]+"\n 8.  "+mas[7]+"\n 9.  "+mas[8]+"\n 10. "+mas[9]);
}

function neww(){
	score=0;
	document.getElementById('sch').innerHTML=score;
	for(var x=1;x<26;x++){
	var em=document.getElementById(x);
	em.classList.remove('on');
	em.classList.add('off');
	}
}