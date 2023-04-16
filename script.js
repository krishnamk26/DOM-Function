function createElement(tagname,attributename,attributevalue,content){
    let ele = document.createElement(tagname);
    ele.setAttribute(attributename,attributevalue);
    ele.innerHTML=content;
    return ele;
}
    // for line break
function linebreaker(tagname){
    let ele = document.createElement(tagname);
    return ele;
}
    //for input
function inpute(tagname,attributename,attributevalue,attributename1,attributevalue1){
    let ele = createElement(tagname);
    ele.setAttribute(attributename,attributevalue);
    ele.setAttribute(attributename1,attributevalue1);
    return ele
}
var firstname=createElement("label","for","firstname","First Name : ");
var linebr = createElement("br");
var inputfirstname = createElement("input","text","firstname","id","Firstname")
var linebr2 = createElement("br")

var middlename=createElement("label","for","middlename","Middle Name : ");
var linebr3 = createElement("br");
var inputmiddletname = createElement("input","text","middlename","id","Middlrname")
var linebr4 = createElement("br")

var lastname=createElement("label","for","lastname","Last Name : ");
var linebr5 = createElement("br");
var inputlastname = createElement("input","text","lastname","id","Lastname")
var linebr6 = createElement("br")

var statename=createElement("label","for","statename","State Name : ");
var linebr7 = createElement("br");
var inputstatename = createElement("input","text","statename","id","Statename")
var linebr8 = createElement("br")

var email=createElement("label","for","email","Email : ");
var linebr9 = createElement("br");
var inputemail = createElement("input","text","email","id","Email")
var linebr10 = createElement("br")

document.body.append(firstname,linebr,inputfirstname,linebr2,middlename,linebr3,inputmiddletname,linebr4,lastname,linebr5,inputlastname,linebr6,
    statename,linebr7,inputstatename,linebr8,email,linebr9,inputemail,linebr10)