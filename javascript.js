
// gender

function showDivman() {
    document.getElementById("manSubmenu").style.display = "block";
    document.getElementById("offerone").style.display = "grid";
    document.getElementById("offerthree").style.display = "none";
    document.getElementById("offertwo").style.display = "none";
    document.getElementById("womanSubmenu").style.display = "none";
    document.getElementById("kidsSubmenu").style.display = "none";

}
function hideDivman() {
    // document.getElementById("manSubmenu").style.display = "none";
}
function showDivwoman() {
    document.getElementById("womanSubmenu").style.display = "block";
    document.getElementById("manSubmenu").style.display = "none";
    document.getElementById("offerone").style.display = "none";
    document.getElementById("kidsSubmenu").style.display = "none";
}

function hideDivwoman() {
    document.getElementById("manSubmenu").style.display = "none";
    document.getElementById("kidsSubmenu").style.display = "none";

}
function showDivkids() {
    document.getElementById("kidsSubmenu").style.display = "block";
    document.getElementById("manSubmenu").style.display = "none";
    document.getElementById("womanSubmenu").style.display = "none";

}

function hideDivkids() {
    document.getElementById("womanSubmenu").style.display = "none";
    document.getElementById("manSubmenu").style.display = "none";
}

// man-category

function showDivofferone() {
    document.getElementById("offerone").style.display = "grid";
    document.getElementById("offerthree").style.display = "none";
    document.getElementById("offertwo").style.display = "none";
}
function hideDivofferone() {
    document.getElementById("offerthree").style.display = "none";
    document.getElementById("offertwo").style.display = "none";
}
function showDivoffertwo() {
    document.getElementById("offertwo").style.display = "grid";
    document.getElementById("offerone").style.display = "none";
    document.getElementById("offerthree").style.display = "none";
}
function hideDivoffertwo() {
    document.getElementById("offerone").style.display = "none";
    document.getElementById("offerthree").style.display = "none";
}
function showDivofferthree() {
    document.getElementById("offerthree").style.display = "grid";
    document.getElementById("offertwo").style.display = "none";
    document.getElementById("offerone").style.display = "none";
}
function hideDivofferthree() {
    document.getElementById("offertwo").style.display = "none";
    document.getElementById("offerone").style.display = "none";
}


// woman category

function showDivofferonew() {
    document.getElementById("offeronew").style.display = "grid";
    document.getElementById("offerthreew").style.display = "none";
    document.getElementById("offertwow").style.display = "none";
}
function hideDivofferonew() {
    document.getElementById("offerthreew").style.display = "none";
    document.getElementById("offertwow").style.display = "none";
}

function showDivoffertwow() {
    document.getElementById("offertwow").style.display = "grid";
    document.getElementById("offeronew").style.display = "none";
    document.getElementById("offerthreew").style.display = "none";
}
function hideDivoffertwow() {
    document.getElementById("offeronew").style.display = "none";
    document.getElementById("offerthreew").style.display = "none";
}
function showDivofferthreew() {
    document.getElementById("offerthreew").style.display = "grid";
    document.getElementById("offertwow").style.display = "none";
    document.getElementById("offeronew").style.display = "none";
}
function hideDivofferthreew() {
    document.getElementById("offertwow").style.display = "none";
}



// kisd category showDivofferthreekid

function showDivofferkid() {
    document.getElementById("offerkid").style.display = "grid";
    document.getElementById("offerthreew").style.display = "none";
    document.getElementById("offertwow").style.display = "none";
}
function hideDivofferkid() {
    document.getElementById("offerkid").style.display = "none";

}



function nextdiv() {
    document.getElementById("nextdiv").style.display = "flex";
    document.getElementById("maindiv").style.display = "none";
}

function maindiv() {
    document.getElementById("maindiv").style.display = "flex";
    document.getElementById("nextdiv").style.display = "none";
}

function rightclick() {
    document.getElementById("nextdiv").style.display = "flex";
    document.getElementById("maindiv").style.display = "none";
}
function clicktomaindiv() {
    document.getElementById("maindiv").style.display = "flex";
    document.getElementById("nextdiv").style.display = "none";
}

function nextdiveyeone() {
    document.getElementById("nextdivone").style.display = "flex";
    document.getElementById("maindivone").style.display = "none";
}

function maindivone() {
    document.getElementById("maindivone").style.display = "flex";
    document.getElementById("nextdivone").style.display = "none";
}

function rightclickone() {
    document.getElementById("nextdivone").style.display = "flex";
    document.getElementById("maindivone").style.display = "none";
}
function clicktomaindivone() {
    document.getElementById("maindivone").style.display = "flex";
    document.getElementById("nextdivone").style.display = "none";
}

// two slider

function nextdiveyetwo() {
    document.getElementById("nextdivtwo").style.display = "flex";
    document.getElementById("maindivtwo").style.display = "none";
}

function maindivtwo() {
    document.getElementById("maindivtwo").style.display = "flex";
    document.getElementById("nextdivtwo").style.display = "none";
}

function rightclicktwo() {
    document.getElementById("nextdivtwo").style.display = "flex";
    document.getElementById("maindivtwo").style.display = "none";
}
function clicktomaindivtwo() {
    document.getElementById("maindivtwo").style.display = "flex";
    document.getElementById("nextdivtwo").style.display = "none";
}

// three slider

function nextdiveyethree() {
    document.getElementById("nextdivthree").style.display = "flex";
    document.getElementById("maindivthree").style.display = "none";
}

function maindivthree() {
    document.getElementById("maindivthree").style.display = "flex";
    document.getElementById("nextdivthree").style.display = "none";
}

function rightclickthree() {
    document.getElementById("nextdivthree").style.display = "flex";
    document.getElementById("maindivthree").style.display = "none";
}
function clicktomaindivthree() {
    document.getElementById("maindivthree").style.display = "flex";
    document.getElementById("nextdivthree").style.display = "none";
}

// four slider
function nextdiveyefour() {
    document.getElementById("nextdivfour").style.display = "flex";
    document.getElementById("maindivfour").style.display = "none";
}

function maindivfour() {
    document.getElementById("maindivfour").style.display = "flex";
    document.getElementById("nextdivfour").style.display = "none";
}

function rightclickfour() {
    document.getElementById("nextdivfour").style.display = "flex";
    document.getElementById("maindivfour").style.display = "none";
}
function clicktomaindivfour() {
    document.getElementById("maindivfour").style.display = "flex";
    document.getElementById("nextdivfour").style.display = "none";
}

// five slider

function nextdiveyefive() {
    document.getElementById("nextdivfive").style.display = "flex";
    document.getElementById("maindivfive").style.display = "none";
}

function maindivfive() {
    document.getElementById("maindivfive").style.display = "flex";
    document.getElementById("nextdivfive").style.display = "none";
}

function rightclickfive() {
    document.getElementById("nextdivfive").style.display = "flex";
    document.getElementById("maindivfive").style.display = "none";
}
function clicktomaindivfive() {
    document.getElementById("maindivfive").style.display = "flex";
    document.getElementById("nextdivfive").style.display = "none";
}

// six slider

function nextdiveyesix() {
    document.getElementById("nextdivsix").style.display = "flex";
    document.getElementById("maindivsix").style.display = "none";
}

function maindivsix() {
    document.getElementById("maindivsix").style.display = "flex";
    document.getElementById("nextdivsix").style.display = "none";
}

function rightclicksix() {
    document.getElementById("nextdivsix").style.display = "flex";
    document.getElementById("maindivsix").style.display = "none";
}
function clicktomaindivsix() {
    document.getElementById("maindivsix").style.display = "flex";
    document.getElementById("nextdivsix").style.display = "none";
}

// seven slider
function nextdiveyeseven() {
    document.getElementById("nextdivseven").style.display = "flex";
    document.getElementById("maindivseven").style.display = "none";
}

function maindivseven() {
    document.getElementById("maindivseven").style.display = "flex";
    document.getElementById("nextdivseven").style.display = "none";
}

function rightclickseven() {
    document.getElementById("nextdivseven").style.display = "flex";
    document.getElementById("maindivseven").style.display = "none";
}
function clicktomaindivseven() {
    document.getElementById("maindivseven").style.display = "flex";
    document.getElementById("nextdivseven").style.display = "none";
}

// eight slider

function nextdiveyeeight() {
    document.getElementById("nextdiveight").style.display = "flex";
    document.getElementById("maindiveight").style.display = "none";
}

function maindiveight() {
    document.getElementById("maindiveight").style.display = "flex";
    document.getElementById("nextdiveight").style.display = "none";
}

function rightclickeight() {
    document.getElementById("nextdiveight").style.display = "flex";
    document.getElementById("maindiveight").style.display = "none";
}
function clicktomaindiveight() {
    document.getElementById("maindiveight").style.display = "flex";
    document.getElementById("nextdiveight").style.display = "none";
}

// nine slider

function nextdiveyenine() {
    document.getElementById("nextdivnine").style.display = "flex";
    document.getElementById("maindivnine").style.display = "none";
}

function maindivnine() {
    document.getElementById("maindivnine").style.display = "flex";
    document.getElementById("nextdivnine").style.display = "none";
}

function rightclicknine() {
    document.getElementById("nextdivnine").style.display = "flex";
    document.getElementById("maindivnine").style.display = "none";
}
function clicktomaindivnine() {
    document.getElementById("maindivnine").style.display = "flex";
    document.getElementById("nextdivnine").style.display = "none";
}


// ten slider

function nextdiveyeten() {
    document.getElementById("nextdivten").style.display = "flex";
    document.getElementById("maindivten").style.display = "none";
}

function maindivten() {
    document.getElementById("maindivten").style.display = "flex";
    document.getElementById("nextdivten").style.display = "none";
}

function rightclickten() {
    document.getElementById("nextdivten").style.display = "flex";
    document.getElementById("maindivten").style.display = "none";
}
function clicktomaindivten() {
    document.getElementById("maindivten").style.display = "flex";
    document.getElementById("nextdivten").style.display = "none";
}