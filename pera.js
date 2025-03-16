document.getElementById('complete-btn').addEventListener('click',function(event){
event.preventDefault()


alert('Board Updated Successfully');


const Task=document.getElementById('task').innerText;
const convertedTask=parseInt(Task);
const result=convertedTask-1;

document.getElementById('task').innerText=result;


const Elach=document.getElementById('elach').innerText;
const convertedElach=parseInt(Elach);
const result2=convertedElach+1;
document.getElementById('elach').innerText=result2;


const button=document.getElementById('complete-btn');
button.disabled=true;

const button1=document.getElementById('complete-btn').style.backgroundColor='gray';


const ActivityMsg=document.getElementById('activity-msg');
const currentTime=new Date().toLocaleTimeString();
const div=document.createElement('div');
div.classList.add('bg-[#F4F7FF]','rounded-xl','p-3','mx-2', 'mb-3');
div.textContent=`You have completed the task Fix Mobile Button Issue at ${currentTime}`;
ActivityMsg.appendChild(div);


if(result===0){
    alert('ok');
}

})




document.getElementById('complete-btn2').addEventListener('click',function(event){
    event.preventDefault()
    
    
    alert('Board Updated Successfully');
    
    
    const Task=document.getElementById('task').innerText;
    const convertedTask=parseInt(Task);
    const result=convertedTask-1;
    document.getElementById('task').innerText=result;
    
    
    const Elach=document.getElementById('elach').innerText;
    const convertedElach=parseInt(Elach);
    const result2=convertedElach+1;
    document.getElementById('elach').innerText=result2;
    
    
    const button=document.getElementById('complete-btn2');
    button.disabled=true;
    
    const button1=document.getElementById('complete-btn2').style.backgroundColor='gray';
    
    const ActivityMsg=document.getElementById('activity-msg');
    const currentTime=new Date().toLocaleTimeString();
    const div=document.createElement('div');
    div.classList.add('bg-[#F4F7FF]','rounded-xl','p-3','mx-2', 'mb-3');
    div.textContent=`You have completed the task Add dark mode at ${currentTime}`;
    ActivityMsg.appendChild(div);
    
    if(result===0){
        alert('Congratulations!!!! You have completed all the current task');
    }
    })

   



    document.getElementById('complete-btn3').addEventListener('click',function(event){
        event.preventDefault()
        
        
        alert('Board Updated Successfully');
        
        
        const Task=document.getElementById('task').innerText;
        const convertedTask=parseInt(Task);
        const result=convertedTask-1;
        document.getElementById('task').innerText=result;
        
        
        const Elach=document.getElementById('elach').innerText;
        const convertedElach=parseInt(Elach);
        const result2=convertedElach+1;
        document.getElementById('elach').innerText=result2;
        
        
        const button=document.getElementById('complete-btn3');
        button.disabled=true;
        
        const button1=document.getElementById('complete-btn3').style.backgroundColor='gray';
        
        const ActivityMsg=document.getElementById('activity-msg');
        const currentTime=new Date().toLocaleTimeString();
        const div=document.createElement('div');
        div.classList.add('bg-[#F4F7FF]','rounded-xl','p-3','mx-2', 'mb-3');
        div.textContent=`You have completed the task Optimize Home Page at ${currentTime}`;
        ActivityMsg.appendChild(div);
        

        if(result===0){
            alert('Congratulations!!!! You have completed all the current task');
        }
        
        })



        document.getElementById('complete-btn4').addEventListener('click',function(event){
            event.preventDefault()
            
            
            alert('Board Updated Successfully');
            
            
            const Task=document.getElementById('task').innerText;
            const convertedTask=parseInt(Task);
            const result=convertedTask-1;
            document.getElementById('task').innerText=result;
            
            
            const Elach=document.getElementById('elach').innerText;
            const convertedElach=parseInt(Elach);
            const result2=convertedElach+1;
            document.getElementById('elach').innerText=result2;
            
            
            const button=document.getElementById('complete-btn4');
            button.disabled=true;
            
            const button1=document.getElementById('complete-btn4').style.backgroundColor='gray';
            
            const ActivityMsg=document.getElementById('activity-msg');
                    const currentTime=new Date().toLocaleTimeString();
                    const div=document.createElement('div');
                    div.classList.add('bg-[#F4F7FF]','rounded-xl','p-3','mx-2', 'mb-3');
                    div.textContent=`You have completed the task Add new emoji 🤲 at ${currentTime}`;
                    ActivityMsg.appendChild(div);
            
                    if(result===0){
                        alert('Congratulations!!!! You have completed all the current task');
                    }
            
            })


            document.getElementById('complete-btn5').addEventListener('click',function(event){
                event.preventDefault()
                
                
                alert('Board Updated Successfully');
                
                
                const Task=document.getElementById('task').innerText;
                const convertedTask=parseInt(Task);
                const result=convertedTask-1;
                document.getElementById('task').innerText=result;
                
                
                const Elach=document.getElementById('elach').innerText;
                const convertedElach=parseInt(Elach);
                const result2=convertedElach+1;
                document.getElementById('elach').innerText=result2;
                
                
                const button=document.getElementById('complete-btn5');
                button.disabled=true;
                
                const button1=document.getElementById('complete-btn5').style.backgroundColor='gray';


                const ActivityMsg=document.getElementById('activity-msg');
                    const currentTime=new Date().toLocaleTimeString();
                    const div=document.createElement('div');
                    div.classList.add('bg-[#F4F7FF]','rounded-xl','p-3','mx-2', 'mb-3');
                    div.textContent=`You have completed the task Integrated OpenAI API at ${currentTime}`;
                    ActivityMsg.appendChild(div);
                
                    if(result===0){
                        alert('Congratulations!!!! You have completed all the current task');
                    }
                
                
                })


                document.getElementById('complete-btn6').addEventListener('click',function(event){
                    event.preventDefault()
                    
                    
                    alert('Board Updated Successfully');
                    
                    
                    const Task=document.getElementById('task').innerText;
                    const convertedTask=parseInt(Task);
                    const result=convertedTask-1;
                    document.getElementById('task').innerText=result;
                    
                    
                    const Elach=document.getElementById('elach').innerText;
                    const convertedElach=parseInt(Elach);
                    const result2=convertedElach+1;
                    document.getElementById('elach').innerText=result2;
                    
                    
                    const button=document.getElementById('complete-btn6');
                    button.disabled=true;
                    console.log(button.disabled=true.length);
                    
                    const button1=document.getElementById('complete-btn6').style.backgroundColor='gray';
                    const ActivityMsg=document.getElementById('activity-msg');
                    const currentTime=new Date().toLocaleTimeString();
                    const div=document.createElement('div');
                    div.classList.add('bg-[#F4F7FF]','rounded-xl','p-3','mx-2');
                    div.textContent=`You have completed the task Improve Job Searching at ${currentTime}`;
                    ActivityMsg.appendChild(div);
                   
                    
                    if(result===0){
                        alert('Congratulations!!!! You have completed all the current task');
                    }
                    
                    })



                    document.getElementById('history').addEventListener('click',function(event){
                        document.getElementById('activity-msg').innerText='';
                    })

                
                const body=document.getElementById('body');
                  const Color=document.getElementById('color');
                  Color.onclick=function(){
                    const r=Math.floor(Math.random()*256);  
                  const g=Math.floor(Math.random()*256);
                  const b=Math.floor(Math.random()*256);

                  body.style.backgroundColor=`rgb(${r},${g},${b})`;
                  }




                 const today=new Date(); 
                 const days=['sun','mon','tues','wed','thu','fri','sat'];
                 const day=days[today.getDay()];
                 document.getElementById('dayy').textContent=`${day},`;
                 dayy.classList.add('text-2xl');
                 
                 const date=today.getDate();
                 const months=['january','February','March','April','May','June','July','August','September','November','December']
                 const month=months[today.getMonth()];
                 const year=today.getFullYear();
yearr.classList.add('text-2xl','font-bold')
                 document.getElementById('yearr').textContent=`${date} ${month} ${year}`



                 document.getElementById('discover').addEventListener('click',function(){
                    window.location.href='index2.html';
                 })
                 


                    
                    
                    
                    




