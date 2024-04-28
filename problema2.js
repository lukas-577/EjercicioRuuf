// repetir el ejercicio 1 pero un techo tirangular isoceles

function maxPanelesEnTecho(a,b,x,y){
    let areaPanel = a*b;
    let areaTecho = (x*y)/2;
    if(a&&b>x&&y){
        return 0;
    }else if(areaPanel==areaTecho){
        return 1;
    }else{
        return Math.floor(areaTecho/areaPanel);
    }
}


console.log("caben:"+maxPanelesEnTecho(1,2,2,4));
console.log("caben:"+maxPanelesEnTecho(2,2,2,4));
console.log("caben:"+maxPanelesEnTecho(2,2,1,10));

