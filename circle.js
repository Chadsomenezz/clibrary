function Circles(num){

    this.generateColor = function (){
        return Math.floor(Math.random() * 256);
    }

    this.draw_circles = function (el){
        const element = document.querySelector(el);
        const elementW = element.clientWidth;
        const elementH = element.clientHeight;

        for (let i=0;i<num;i++){
            //Random Radius from 10px - 200 px;
            const radius = Math.floor(Math.random() * 201) + 10;
            //Random position X,Y axis relative to the selected element 0 - 100%
            let positionX = Math.floor(Math.random() * 101)
            let positionY = Math.floor(Math.random() * 101)

            /**IF POSITION X PLUS CONTAINER WIDTH OR POSITION Y PLUS CONTAINER HEIGHT IS GREATER, THEN IT IS ALREADY OUTSIDE THE CONTAINER THEREFORE
             * DO THIS CALCULATION, IF POSITION Y,X PLUS RADIUS IS LARGER THAN THE CONTAINER, MEANING IT IS OUTSIDE ALREADY OF THE CONTAINER
             *GET THE DIFFERENCE OF THE POSITION Y,X TO THE CURRENT CONTAINER WIDTH
             *AND SET THE NEW WIDTH/HEIGHT , NEED TO CONVERT THE POSITION % TO PIXEL IN RELATION TO THE ELEMENT HEIGHT/WIDTH
             *AND THEN CONVERT IT BACK AGAIN TO PERCENTAGE RELATIVE TO THE ELEMENT HEIGHT/WIDTH**/

            if(((elementW * positionX / 100) + radius) > elementW){
                let newPositionX = (elementW - (elementW * positionX / 100) + radius);
                newPositionX = elementW - newPositionX;
                positionX = (newPositionX/elementW) * 100;
            }

            if(((elementH * positionY / 100) + radius) > elementH){
                let newPositionY = (elementH - (elementH * positionY / 100) + radius);
                newPositionY = elementH - newPositionY;
                positionY = (newPositionY/elementH) * 100;
            }


            //GENERATE RANDOM RGB COLOR 0 -255
            let r = this.generateColor();
            let g = this.generateColor();
            let b = this.generateColor();
            //Create the Circle element
            const circle = document.createElement("div");
            circle.setAttribute(`style`,`position:absolute;left:${positionX}%;top:${positionY}%;width:${radius}px;height:${radius}px;border-radius:100%;border:5px solid #000;background-color:rgb(${r},${g},${b});`);
            element.appendChild(circle)

        }

    }
}


let cLib = new Circles(100);
cLib.draw_circles("#canvas");