
const crisisWords = ["kill myself","suicide","end it","hurt myself"];
function checkCrisis(text){
  return crisisWords.some(w => text.toLowerCase().includes(w));
}
function showCrisisPopup(){
  alert("You are not alone. If you are in danger, contact emergency services or a crisis helpline.");
}
