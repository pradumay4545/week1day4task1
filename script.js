function rectangleArea(length, width) {
    return length * width;
}
const checkVoter = (age) => {
    if (age > 18) {
        return "Eligible to Vote";
    } else {
        return "Not Eligible to Vote";
    }
}
console.log("Area of Rectangle:", rectangleArea(10, 5));  
console.log("Voter Status:", checkVoter(20));