function calculateBMI() {
    const underweight = 18.5;
    const healthy = 25;
    const asian_overweight = 23;
    const overweight = 30;
    const asian_obese = 27.5;
    const obese = 40;

    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    if (height === "" || weight === "") {
        document.getElementById("bmi").innerHTML = "Please fill in the specified field(s).";
        document.getElementById("verdict").innerHTML = "";
        return false;
    }
    
    if (document.getElementById("lb").checked) {
        var bmi_value = Math.round(703 * (weight / Math.pow(height, 2)) * 100) / 100;
        document.getElementById("bmi").innerHTML = "BMI = " + bmi_value;
    } else {
        var bmi_value = Math.round(weight / Math.pow(height, 2) * 100) / 100;
        document.getElementById("bmi").innerHTML = "BMI = " + bmi_value;
    }
    
    if (bmi_value < underweight) {
        document.getElementById("verdict").innerHTML = "You are underweight!";
    } else if (bmi_value > underweight && bmi_value < healthy) {
        document.getElementById("verdict").innerHTML = "You are healthy!";
    } else if (document.getElementById("asians").checked && (bmi_value > asian_overweight && bmi_value < asian_obese) || (document.getElementById("nonasians").checked && (bmi_value > healthy && bmi_value < overweight))) {
        document.getElementById("verdict").innerHTML = "You are overweight!";
    } else if (bmi_value > overweight && bmi_value < obese) {
        document.getElementById("verdict").innerHTML = "You are obese!";
    } else {
        document.getElementById("verdict").innerHTML = "You are severely obese! It is suggested that you should talk to a nutritionist.";
    }
}

function calculateCycle() {

}

function Pregnancy() {

}