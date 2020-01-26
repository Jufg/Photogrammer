let number0 = false, number1 = false, number2 = false, number3 = false, number4 = false, number5 = false;

function listButton(linkName1, linkName2, number) {

    let newObjButton1 = document.createElement("button");
    let newObjButton2 = document.createElement("button");

    newObjButton1.className = "btn btn1";
    newObjButton1.type = "button";
    newObjButton1.id = number + "Btn1";
    newObjButton1.innerHTML = "Download 16:9";

    newObjButton2.className = "btn btn2";
    newObjButton2.type = "button";
    newObjButton2.id = number + "Btn2";
    newObjButton2.innerHTML = "Download 21:9";

    let oldObj1 = document.getElementById(linkName1);
    let oldObj2 = document.getElementById(linkName2);

    switch (number) {
        case 0:
            if (!number0) {
                number0 = true;

                appendChild();
            } else if (number0) {
                number0 = false;

                removeChild();
            }
            break;
        case 1:
            if (!number1) {
                number1 = true;

                appendChild();
            } else if (number1) {
                number1 = false;

                removeChild();
            }
            break;
        case 2:
            if (!number2) {
                number2 = true;

                appendChild();
            } else if (number2) {
                number2 = false;

                removeChild();
            }
            break;
        case 3:
            if (!number3) {
                number3 = true;

                appendChild();
            } else if (number3) {
                number3 = false;

                removeChild();
            }
            break;
        case 4:
            if (!number4) {
                number4 = true;

                appendChild();
            } else if (number4) {
                number4 = false;

                removeChild();
            }
            break;
        case 5:
            if (!number5) {
                number5 = true;

                appendChild();
            } else if (number5) {
                number5 = false;

                removeChild();
            }
            break;
        default:
            console.log("Error: falsche Zahl übergeben!");
    }

    function removeChild() {
        document.getElementById(linkName1).removeChild(document.getElementById(number + "Btn1"));
        document.getElementById(linkName2).removeChild(document.getElementById(number + "Btn2"));
    }

    function appendChild() {
        oldObj1.appendChild(newObjButton1);
        oldObj2.appendChild(newObjButton2);
    }
}