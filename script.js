var createcontainer = document.createElement("div");
createcontainer.className = "container"

var createwrap = document.createElement("div");
createwrap.className = "wrapper";

var create_display = document.createElement("div")
create_display.id = "create_display";

var create_display1 = document.createElement("div")
create_display1.id = "create_display1";

var create_buttons_div = document.createElement("div");
create_buttons_div.id = "buttonsgroup";


function createbutton(id_val, but_val) {
    var create_button = document.createElement("button")
    create_button.setAttribute("type", 'button')
    create_button.id = id_val;
    create_button.innerHTML = but_val;
    return create_button;
}

var button7 = createbutton("7", "7");
var button8 = createbutton("8", "8");
var button9 = createbutton("9", "9");
var buttonplus = createbutton("plus", "+");

var button4 = createbutton("4", "4");
var button5 = createbutton("5", "5");
var button6 = createbutton("6", "6");
var buttonminus = createbutton("minus", "-");

var button1 = createbutton("1", "1");
var button2 = createbutton("2", "2");
var button3 = createbutton("3", "3");
var buttonmulti = createbutton("multi", "*");

var buttonclear = createbutton("clear", "C");
var buttonzero = createbutton("0", "0");
var buttonequal = createbutton("equals", "=");
var buttondivide = createbutton("divide", "/");

var create_row1 = document.createElement("div")
create_row1.id = "create_row1";

var create_row2 = document.createElement("div")
create_row2.id = "create_row2";

var create_row3 = document.createElement("div")
create_row3.id = "create_row3";

var create_row4 = document.createElement("div")
create_row4.id = "create_row4";

create_row1.append(button7, button8, button9, buttonplus);
create_row2.append(button4, button5, button6, buttonminus);
create_row3.append(button1, button2, button3, buttonmulti);
create_row4.append(buttonclear, buttonzero, buttonequal, buttondivide);


button7.addEventListener("click", () => {
    var sendval = document.getElementById("create_display");
    sendval.innerHTML += 7;
})

button8.addEventListener("click", () => {
    var sendval = document.getElementById("create_display");
    sendval.innerHTML += 8;
})

button9.addEventListener("click", () => {
    var sendval = document.getElementById("create_display");
    sendval.innerHTML += 9;
})

buttonplus.addEventListener("click", () => {
    var sendval = document.getElementById("create_display");
    sendval.innerHTML += "+";
})


button4.addEventListener("click", () => {
    var sendval = document.getElementById("create_display");
    sendval.innerHTML += 4;
})

button5.addEventListener("click", () => {
    var sendval = document.getElementById("create_display");
    sendval.innerHTML += 5;
})

button6.addEventListener("click", () => {
    var sendval = document.getElementById("create_display");
    sendval.innerHTML += 6;
})

buttonminus.addEventListener("click", () => {
    var sendval = document.getElementById("create_display");
    sendval.innerHTML += "-";
})

button1.addEventListener("click", () => {
    var sendval = document.getElementById("create_display");
    sendval.innerHTML += 1;
})

button2.addEventListener("click", () => {
    var sendval = document.getElementById("create_display");
    sendval.innerHTML += 2;
})

button3.addEventListener("click", () => {
    var sendval = document.getElementById("create_display");
    sendval.innerHTML += 3;
})

buttonzero.addEventListener("click", () => {
    var sendval = document.getElementById("create_display");
    sendval.innerHTML += 0;
})

buttonmulti.addEventListener("click", () => {
    var sendval = document.getElementById("create_display");
    sendval.innerHTML += "*";
})

buttonclear.addEventListener("click", () => {
    var sendval = document.getElementById("create_display");
    sendval.innerHTML = " ";
})


buttonequal.addEventListener("click", () => {
    var sendval = document.getElementById("create_display").innerHTML;

    if (sendval.includes("+")) {
        var sendval1 = sendval.split("+");
        var dom1 = 0;

        for (var i = 0; i < sendval1.length; i++) {
            dom1 += Number(sendval1[i]);
        }

        document.getElementById("create_display").innerHTML = dom1;

        console.log(dom1);
    }

    if (sendval.includes("-")) {
        var sendval1 = sendval.split("-");
        var dom1 = 0;
        for (var i = 0; i < sendval1.length; i++) {
    
            console.log(Number(sendval1[i]));
            dom1 = Number(sendval1[i])-dom1;
        }

        document.getElementById("create_display").innerHTML = dom1;

        console.log(dom1);
    }


    if (sendval.includes("*")) {
        var sendval1 = sendval.split("*");
        var dom1 = 1;

        for (var i = 0; i < sendval1.length; i++) {
            dom1 *= Number(sendval1[i]);
        }

        document.getElementById("create_display").innerHTML = dom1;

        console.log(dom1);
    }


    if (sendval.includes("/")) {
        var sendval1 = sendval.split("/");
        var dom1 = 1;

        for (var i = 0; i < sendval1.length; i++) {
            dom1 = Number(sendval1[i])/dom1;
        }

        document.getElementById("create_display").innerHTML = dom1;

        console.log(dom1);
    }

})

buttondivide.addEventListener("click", () => {
    var sendval = document.getElementById("create_display");
    sendval.innerHTML = "/";
})


create_buttons_div.append(create_row1, create_row2, create_row3, create_row4);

createwrap.append(create_display, create_buttons_div);

createcontainer.append(createwrap);

document.body.append(createcontainer);