var prevPart = "";
var operand = "";
var equation = "";
var answer = "";
var ready = false;
var current = document.getElementsByClassName("current")[0];
var prev = document.getElementsByClassName("prev")[0];
function calculate()
{
    if(operand != "" && equation != "")
    {
        if(operand == '+')
        {
            prev.innerHTML = prevPart + operand + equation;
            equation = parseFloat(prevPart) + parseFloat(equation);
            current.innerHTML = equation;
            answer = equation;
        }
        else if(operand == '-')
        {
            prev.innerHTML = prevPart + operand + equation;
            equation = parseFloat(prevPart) - parseFloat(equation);
            current.innerHTML = equation;
            answer = equation;
        }
        else if(operand == '*')
        {
            prev.innerHTML = prevPart + operand + equation;
            equation = parseFloat(prevPart) * parseFloat(equation);
            current.innerHTML = equation;
            answer = equation;
        }
        else if(operand == '/')
        {
            if(equation == 0)
            {
                prev.innerHTML = prevPart + operand + equation;
                current.innerHTML = "Syntax Error!";
            }
            else
            {
                prev.innerHTML = prevPart + operand + equation;
                equation = parseFloat(prevPart) / parseFloat(equation);
                current.innerHTML = equation;
                answer = equation;
            }
        }
        ready = true;
    }
}
function append(val)
{
    if(equation == "" && val == ".")
    {
        val = "0.";
    }
    if(val == '!')
    {
        if(answer != "")
            val = answer.toString();
        else
            val = "";
    }
    if(ready == true)
    {
        equation = val;
        prevPart = "";
        operand = "";
        current.innerHTML = equation;
        prev.innerHTML = prevPart + operand;
        ready = false;
    }
    else
    {
        equation += val;
        console.log(equation);
        current.innerHTML = equation;
        ready = false;
    }
}
function appOperand(val)
{
    if(equation != "" && operand == "")
    {
        operand = val;
        prevPart = equation;
        equation = "";
        prev.innerHTML = prevPart + operand;
        current.innerHTML = equation;
    }
}
function clearAll()
{
    equation = "";
    operand = "";
    prevPart = "";
    console.log(equation);
    current.innerHTML = equation;
    prev.innerHTML = "";
}
function delOne()
{
    if(ready == false)
    {
        if(equation != "")
        {
            equation = equation.slice(0,-1);
            current.innerHTML = equation;
        }
        else if(operand != "")
        {
            operand = "";
            equation = prevPart;
            prevPart = "";
            prev.innerHTML = prevPart + operand;
            current.innerHTML = equation;
        }
    }
}