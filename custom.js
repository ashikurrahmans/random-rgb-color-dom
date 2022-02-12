document.getElementById('button').addEventListener('click',changeBackground)


function changeBackground(){
   
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255)
    const red = Math.floor(Math.random() * 255)
    console.log(blue,red,green);


    const color = `rgb(${red},${green},${blue})`
    const changeColor = document.getElementById('bg-color').style.background = color;
    return changeColor;
    

}

