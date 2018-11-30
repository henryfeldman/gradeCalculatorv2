rowCount = 0;


function setUpPage(){
    var firstTable = document.getElementById("gradeTable");
    var table = document.createElement("table");
    table.setAttribute("id","table");
    firstTable.appendChild(table);
    addRow();

}

function addRow() {
    var table = document.getElementById("table");
    var gradeType = document.createElement("tr");
    var gradeWeight = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var input1 = document.createElement("input");
    var input2 = document.createElement("input");

    td3.appendChild(input1);
    td4.appendChild(input2);
    gradeType.appendChild(td1);
    gradeType.appendChild(td2);

    gradeWeight.appendChild(td3);
    gradeWeight.appendChild(td4);
    table.appendChild(gradeType);
    table.appendChild(gradeWeight);




    input1.setAttribute("id", "grade" + rowCount);
    input2.setAttribute("id", "weight" + rowCount);
    input1.setAttribute("value","69,98,87");
    input2.setAttribute("value","20");

    var categoryLabel = document.getElementById("categoryName").value;
    console.log(categoryLabel);

    if (categoryLabel.length == 0) {
        categoryLabel = "Homework";
    }

    td1.innerHTML = categoryLabel + " points";
    td2.innerHTML = categoryLabel + " weight";


    rowCount++;
    console.log(rowCount);
    if(rowCount > 5){
        document.getElementById("addRow").disabled = true;
    }


}

function calculateGrade(){
    var finalGrade = 0;
    var totalWeight = 0;
    var grades = [];
    var weights = [];
    for (var i = 0; i < rowCount; i++){
        var str = document.getElementById("grade" + i).value;
        grades.push(convertStringToArray(str));
        grades[i] = averageArray(grades[i]);

        var str2 = document.getElementById("weight" + i).value;
        weights.push(convertStringToArray(str2));
        var totalWeight = totalWeight + parseInt(weights[i]);

        var finalGrade = finalGrade + (grades[i] * (weights[i]/100));
    }
    console.log(grades);
    console.log(finalGrade);
    finalGrade = finalGrade*100;
    finalGrade = Math.round(finalGrade);
    finalGrade = finalGrade/100;
    if (totalWeight <= 100) {
        document.getElementById("finalGrade").innerHTML = "Your current grade is : " + finalGrade;
    }else{
        document.getElementById("finalGrade").innerHTML = "Error: Please make sure all the weights add up to less " +
            "than or equal to 100";
    }
       return finalGrade;

}

function gradeNeeded(){
    var currentGrade = calculateGrade();
    var desiredGrade = document.getElementById("desiredGrade").value;
    var finalWeight = document.getElementById("finalWeight").value;
    var a = currentGrade*(1 - (finalWeight/100));
    var b = desiredGrade - a;
    var gradeNeededOnFinal = 100*(b/finalWeight);
    gradeNeededOnFinal = gradeNeededOnFinal *100;
    gradeNeededOnFinal = Math.round(gradeNeededOnFinal);
    gradeNeededOnFinal = gradeNeededOnFinal/100;
    document.getElementById("answer").innerHTML = "You need a " + gradeNeededOnFinal +
        "% on the final to get a " + desiredGrade +" % in this class";

}

function convertStringToArray(str){
    var arr = str.split(",");
    for (var i = 0; i < arr.length; i++){
        arr[i] = parseInt(arr[i]);
    }
    console.log (arr);
    return arr;

}
function averageArray(grades){
    var sum = 0;
    for (var i = 0; i < grades.length; i++){
        sum += grades[i];
    }
    var average = sum / grades.length;
    return average;
}








