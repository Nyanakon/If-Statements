const age=15;

if (15>=16){
    console.log('You can drive');
}else{
    console.log('You can not drive');
}

const time=13

if (time<12){
    console.log("good morning")
}else if (time===12){
    console.log("wait it is noon")
}else if (time>12 && time<18){
    console.log("good afternoon")
}else{
    console.log("good evening")
}


let weather='rain'
if(weather=='rain'){
    console.log('Grab your umbrella')
}else{
    console.log('Wear your sunglasses')
}

function checkDrivingAge(){
    const age=parseInt(document.getElementById("ageInput").value);
    const message=age>=16?`You can drive`:`You cannot drive yet.`;
    document.getElementById("drivingMessage").textContent=message;
}

function checkDrivingAge(){
    const time=parseInt(document.getElementById("timeInput").value);
    if (time<12){
        message=`Good morning!`;
    }else if (time===12){
        message=`It's noon.`;
    }else if (time>12 && time<18){
        message=`Good afternoon!`;
    }else {
        message=`Good evening!`;
    }
    document.getElementById("greeting").textContent=message;
}

function checkWeather(){
    const weather=document.getElementById("weatherInput").value;
    const message=weather.toLowerCase()==='rain'?`Grab your umbrella`:`Wear your sunglasses.`;
    document.getElementById("weatherMessage").textContent=message;
}


function checkGrade(){
    const score=parseInt(document.getElementById("gradeInput").value);
    let grade="";
    if (score>=90){
        grade=`A`;
    }else if (score>=80){
        grade=`B`;
    }else if (score>=70){
        grade=`C`;
    }else if (score>=60){
        grade=`D`
    }else{
        grade=`F`
    }
    document.getElementById("gradeResult").textContent=`You got a ${grade}.`;
    }


    function checkVotingAge(){
        const age=(document.getElementById("voteAgeInput").value);
        const message=age>=18?`You are eligible to vote`:`You are not old enough to vote`;
        document.getElementById("voting").textContent=message;
    }


    function checkPassword(){
        const password=document.getElementById("passwordInput").value;
        let message="";
        if(password.length>=12){
            message=`That's a strong password!`;
        }else if (password.length>=8){
            message=`That's a decent password.`;
        }else{
            message=`Password is too weak`;
        }
        document.getElementById("passwordStrength").textContent=message;
}