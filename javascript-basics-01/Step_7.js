function calculate() {
    var shoesSize = document.getElementById('shoe_size').value;
    var yearDate = document.getElementById('year').value;
    var value_1 = (shoesSize * 2) + 5;
    var value_2 = (value_1 * 50) - yearDate;
    var result = value_2 + 1766;
    
     alert(" Multiplication result of both numbers is: " + result);
}