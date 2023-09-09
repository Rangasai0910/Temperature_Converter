function convertTemp(event)
{
    if(event)
        {options.selectedIndex;
            event.preventDefault();
        }
    let input=document.getElementById("from").options.selectedIndex;
    let output=document.getElementById("to").options.selectedIndex;
    let invalue=parseFloat(document.getElementById("in").value);
    let outvalue;
    if(input===0)
    {
        if(output===1)
        {
            outvalue=((invalue*(9/5))+32);
        }
        else if(output===2)
        {
            outvalue=invalue+273.15;
        }
        else
        {
            outvalue=invalue;
        }
    }
    else if(input===1)
    {
        if(output===0)
        {
         outvalue=((invalue-32)*(5/9));
        }
        else if(output===2)
        {
            outvalue=(((invalue-32)*(5/9))+273.15);
        }
        else{
            outvalue=invalue;
        }
    }
    else if(input===2)
    {
     if(output===0)
     {
       outvalue=invalue-273.15;
     }
     else if(output===1)
     {
        outvalue=(((invalue-273.15)*(9/5))+32);
     }
     else{
        outvalue=invalue;
     }
    }
    let result=parseFloat(outvalue);
    document.getElementById("out").value=result;
} 