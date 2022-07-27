var lastPositionOfX, lastPositionOfY;

    color = "black";

    widthOfLine = 2;

    canvas = document.getElementById("myCanvas");

    ctx = canvas.getContext("2d");
    
    widthOfLine = screen.width;

    newWidth = screen.width - 70;

    newHeight = screen.height - 300;

    if (width < 992)
    {
        document.getElementById("myCanvas").width = newWidth;
        document.getElementById("myCanvas").height = newHeight;
        document.body.style.overflow="hidden"
    }

    canvas.addEventListener("touchStart", myTouchStart);

    function myTouchStart(e)
    {
        console.log("myTouchStart");
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        lastPositionOfX = e.touches[0].clientX-canvas.offsetLeft;
        lastPositionOfY = e.touches[0].clientY-canvas.offsetTop;
    }

    canvas.addEventListener("touchMove", myTouchMove);

    function myTouchMove(e)
    {
        console.log("myTouchMove");
        currentPositionOfMouseX = e.touches[0].clientX-canvas.offsetLeft;
        currentPositionOfMouseY = e.touches[0].clientY-canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;

        console.log("Ultima posição das coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Posição atual das coordenadas x e y = ");
        console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
        ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
        ctx.stroke();

        lastPositionOfX = currentPositionOfMouseX;
        lastPositionOfY = currentPositionOfMouseY;
    }

    function clearArea() 
    { 
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    }