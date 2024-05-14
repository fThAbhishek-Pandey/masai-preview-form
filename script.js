const prevName = document.querySelector('#pvw-name');
const prevGen = document.querySelector('#pvw-gen');
const prevEmail = document.querySelector('#pvw-email');
const prevmob = document.querySelector('#pvw-mob');
const Name = document.querySelector('#Name');
const Gen = document.querySelector('#gen');
const Mob = document.querySelector('#mob');
const Email = document.querySelector('#eml');
const reserforms = document.querySelector('#reset');
const resetDisplays = document.querySelector('#resetDisplay');
console.log( "mob",Mob);
// console.log();

Name.addEventListener('click',function showName() {
    // Show filled name inside preview
    const dName = document.querySelector('#name').value;
    console.log('dName : ',dName);
    if(dName==="" ){
        alert("you Dont enter any Name");
    }
    prevName.innerHTML= dName;

});
Gen.addEventListener('click',function showGender() {
    // Show the selected gender inside preview
    
    const dGen = document.querySelector('#gender').value;
    console.log('dGen : ',dGen);
    if(dGen==="" ){
        alert("you Dont enter any Gender");
    }
    prevGen.innerHTML= dGen;
});
Email.addEventListener('click',function showEmail() {
    // Show the filled email inside preview
    const dEmail = document.querySelector('#email').value;
    console.log('dEmail : ',dEmail);
    if(dEmail==="" ){
        alert("you Dont enter any Email");
    }
    prevEmail.innerHTML= dEmail;
});
Mob.addEventListener('click',function showMobile() {
    // Show the filled mobile inside h4
    console.log('I am mobile');
    const dMob = document.querySelector('#mobile').value;
    console.log('dMob : ',dMob);
    if(dMob==="" ){
        alert("you Dont enter any Email");
    }
    prevmob.innerHTML= dMob;
});

reserforms.addEventListener('click',function resetForm() {
    // Reset all the form elements to default values (blank "")
    document.querySelector('#name').innerHTML="";
    document.querySelector('#gender').innerHTML="";
    document.querySelector('#email').innerHTML="";
    document.querySelector('#mobile').innerHTML="";

});
resetDisplays.addEventListener('click',function resetDisplay() {
    // Reset all the headings (h1, h2, h3, h4) to blank values
    prevName.innerHTML="";
    prevGen.innerHTML="";
    prevEmail.innerHTML="";
    prevmob.innerHTML='';

});

