
let randomNumber
    function generateBtn(){
            randomNumber=Math.floor(Math.random()*9000+1000)
            document.getElementById('generate-input').value=randomNumber
        
    }



let myNumber
function calculate(id){
    let button=document.getElementById(id).innerText
    myNumber =parseInt(button)
    document.getElementById('my-input').value+=myNumber 
    myNumber=parseInt(document.getElementById('my-input').value)
    return myNumber
    
}

// window.addEventListener('keyup',(e)=>{
//     if(e.key=='Backspace' && e.keyCode==8){
//         backSpace();
//     }
// })

function backSpace(){
     document.getElementById('my-input').value=document.getElementById('my-input').value.substr(0,document.getElementById('my-input').value.length-1)
    
}

function clr() {
    document.getElementById('my-input').value=null
}

var t=0;
function submitBtn(){
        //  let myValue = document.getElementById('my-input').value
        //  let myNumber=parseInt(myValue)    
    if(randomNumber && t<3){
        if(myNumber){
            if(randomNumber===myNumber){
                 document.getElementById('alert1').style.display='none'
                 document.getElementById('alert2').style.display='block'
                
            }
            else{
                 document.getElementById('alert1').style.display='block'
                 document.getElementById('alert2').style.display='none'
                
            }
        }else{
            alert('please give your number')
        }
         t+=1;
         document.getElementsByClassName('action-left')[0].innerHTML=`${3-t} times left`
    }else{
        if(t>=3){
            let st=window.confirm('You tried maximum time.Ok to relode');
            if (st){
                location.reload();
                process.exit()
            }
        }
        alert('Please click generate number')
    }
}

