(function(){
    const myNode = document.createElement("div");
const digitlClock = document.getElementById("digitalClock"); 
digitalClock.appendChild(myNode);

//
// show only hours, minutes and seconds
const secondHand = document.getElementById("secondHand");
const minHand = document.getElementById("minHand");
const hrHand = document.getElementById("hrHand");
hrHand.style.backgroundColor = '#0f0';

    const updateTime = () => {
    console.info("tick tock");
    const myDate = new Date();
    myNode.innerHTML = myDate.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const seconds = myDate.getSeconds();
    const rotSeconds = seconds * 6 - 90;
    secondHand.style.transform = `rotate(${rotSeconds}deg)`;

  };

setInterval(updateTime, 1000); 
updateTime(); 

}
)();