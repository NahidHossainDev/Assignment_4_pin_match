function catchElement(id){
    return document.getElementById(id);
}
// Generating pin :
function pinGenerator(){
    let pin = Math.ceil(1000 + Math.random()*9000);
    catchElement("display-1").value = pin;
    catchElement("notify-2").style.display = "none";
    catchElement("notify-1").style.display = "none";
}

// Adding Handler option with buttons:
(function addingEventHandler() {
    let btn = document.getElementsByClassName("button");
    for(i = 0; i < btn.length; i++){
        btn[i].addEventListener("click",function(){
            let txt = this.innerHTML;
            if(txt == "C"){               // clear all;
                catchElement("display-2").value = "";
            }else if(txt == "&lt;"){    // clear last digit;
                let txt = catchElement("display-2").value;
                let text = txt.slice(0, -1);
                catchElement("display-2").value = text;
            }
            else{
                catchElement("display-2").value += txt; 
            }
        });
    }
}) ();
 
// Matching pins:
let count = 3;
function matchingPin(){
    let pin1 = catchElement("display-1").value;
    let pin2 = catchElement("display-2").value;
    
    if(pin1 == pin2){
        catchElement("notify-2").style.display = "block";
    }
    else{ 
        if(count == 1){
            document.getElementById("submit-btn").disabled = true;
        }
        count--;
        document.querySelector("span").innerText = count;  
        catchElement("notify-1").style.display = "block";   
    }
}


