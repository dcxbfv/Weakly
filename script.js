function Week() {
    // lets
    let Vorod = document.getElementById("Day").value;
    // if    
    if (Vorod === "0"){
        document.getElementsByClassName("result1")[1].innerHTML = "کار و فناوری"; 
        document.getElementsByClassName("result2")[1].innerHTML = "عربی";
        document.getElementsByClassName("result3")[1].innerHTML = "هنر";
    }else if (Vorod === "1"){
        document.getElementsByClassName("result1")[1].innerHTML = "فارسی";
        document.getElementsByClassName("result2")[1].innerHTML = "معارف";
        document.getElementsByClassName("result3")[1].innerHTML = "ریاضی";
    }else if (Vorod === "2"){
        document.getElementsByClassName("result1")[1].innerHTML = "املا و انشا";
        document.getElementsByClassName("result2")[1].innerHTML = "مطالعات(ظهر) علوم(صبح)";
        document.getElementsByClassName("result3")[1].innerHTML = "علوم"
    }else if (Vorod === "3"){
        document.getElementsByClassName("result1")[1].innerHTML = "قرآن" ;
        document.getElementsByClassName("result2")[1].innerHTML = "ریاضی";
        document.getElementsByClassName("result3")[1].innerHTML = "تفکر";
    }else if (Vorod === "4"){
        document.getElementsByClassName("result1")[1].innerHTML = "ورزش" ;
        document.getElementsByClassName("result2")[1].innerHTML = "مطالعات";
        document.getElementsByClassName("result3")[1].innerHTML = "زبان";
    }
    else {
        document.getElementsByClassName("result1")[1].innerHTML = "لطفا یک روز وارد کنید"
        document.getElementsByClassName("result2")[1].innerHTML = "لطفا یک روز وارد کنید"
        document.getElementsByClassName("result3")[1].innerHTML = "لطفا یک روز وارد کنید"
    }
}
