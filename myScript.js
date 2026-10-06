            function myFunction() {
                document.getElementById("demo").innerHTML="Hello Javascript";
                document.getElementById("button").textContent = "Click me Again";
            }
            function my2ndFunction() {
                document.title="Generated Title";
            }
            let clickCount=0;
            function titleChanging(){
                clickCount=clickCount+1;
                document.title="Clicked "+clickCount + " times!";
            }
            function my3rdFunction() {
                alert("What's brown and sticky?                                      A stick.")
            }
            