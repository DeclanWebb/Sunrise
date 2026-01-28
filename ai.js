
function therapeuticResponse(input){
  if(checkCrisis(input)){
    showCrisisPopup();
    return "I’m really glad you reached out. You deserve support beyond this space.";
  }
  const replies=[
    "That sounds heavy. Do you want to share more?",
    "It’s okay to take things one step at a time.",
    "What do you feel is weighing on you most right now?"
  ];
  return replies[Math.floor(Math.random()*replies.length)];
}
