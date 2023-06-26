let option1 = document.getElementById('b1');
let button1 = document.querySelector('button')
let option2 = document.getElementById('b2');
let button2 = document.querySelector('button')
let option3 = document.getElementById('b3');
let button3 = document.querySelector('button')
let option4 = document.getElementById('b4');
let button4 = document.querySelector('button')
let option5 = document.getElementById('b5');
let button5 = document.querySelector('button')
let option6 = document.getElementById('b6');
let button6 = document.querySelector('button')
let option7 = document.getElementById('b7');
let button7 = document.querySelector('button')
let option8 = document.getElementById('b8');
let button8 = document.querySelector('button')
let option9 = document.getElementById('b9');
let button9 = document.querySelector('button');
let animation=document.getElementById('outer')
let i;
let s;
let result
let arr=[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
let k=Math.round(Math.random());
function add(x)
{
    if(k===0)
    s="X";
    else if(k===1)
    s="O";
    arr[x]=s
    if(arr[1]==arr[2] && arr[1]==arr[3])
    {
    if(arr[1]!==' ' && arr[2]!==' ' && arr[3]!==' ')
    {
    alert("Match finished "+arr[1]+" won the match")
    }
    }
    if(arr[1]==arr[4] && arr[1]==arr[7])
    {
    if(arr[1]!==' ' && arr[4]!==' ' && arr[7]!==' ')
    alert("Match finished "+arr[1]+" won the match")
    }
    if(arr[7]==arr[8] && arr[7]==arr[9])
    {
    if(arr[7]!==' ' && arr[8]!==' ' && arr[9]!==' ')
    alert("Match finished "+arr[7]+" won the match")
    }
    if(arr[3]==arr[6] && arr[3]==arr[9])
    {
    if(arr[3]!==' ' && arr[6]!==' ' && arr[9]!==' ')
    alert("Match finished "+arr[3]+" won the match")
    }
    if(arr[1]==arr[5] && arr[1]==arr[9])
    {
    if(arr[1]!==' ' && arr[5]!==' ' && arr[9]!==' ')
    alert("Match finished "+arr[1]+" won the match")
    }
    if(arr[3]==arr[5] && arr[3]==arr[7])
    {
    if(arr[3]!==' ' && arr[5]!==' ' && arr[7]!==' ')
    alert("Match finished "+arr[3]+" won the match")
    }
    if(arr[4]==arr[5] && arr[4]==arr[6])
    {
    if(arr[4]!==' ' && arr[5]!==' ' && arr[6]!==' ')
    alert("Match finished "+arr[4]+" won the match")
    }
    switch(x)
    {
        case 1:option1.innerHTML=s;
        console.log(x)
        option1.style.color="white"
        break;
        case 2:option2.innerHTML=s;
        option2.style.color="white"
        console.log(x)
        break;
        case 3:option3.innerHTML=s;
        option3.style.color="white"
        console.log(x)
        break;
        case 4:option4.innerHTML=s;
        option4.style.color="white"
        console.log(x)
        break;
        case 5:option5.innerHTML=s;
        console.log(x)
        option5.style.color="white"
        break;
        case 6:option6.innerHTML=s;
        option6.style.color="white"
        console.log(x)
        break;
        case 7:option7.innerHTML=s;
        option7.style.color="white"
        console.log(x)
        break;
        case 8:option8.innerHTML=s;
        option8.style.color="white"
        console.log(x)
        break;
        case 9:option9.innerHTML=s;
        option9.style.color="white"
        console.log(x)
        break;
    }
    if(s=="X")
    s="O"
    else
    s="X"
    k=9
}
