function cone(radius, h) {
    let l = Math.sqrt(h*h + radius*radius);
    let volume = Math.PI*radius*radius*h/3;
    let area = (Math.PI*radius*radius)+ (Math.PI*radius*l);
    console.log("volume = "+volume);
    console.log("area = "+area);
}
cone(3,5)