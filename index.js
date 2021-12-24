var daily = {
  work1: "5hrs",
  work2: "Yesterday - 7hrs",
  exercise1: "1hr",
  exercise2: "Yesterday - 1hr",
  play1: "1hr",
  play2: "Yesterday - 2hrs",
  social1: "1hr",
  social2: "Yesterday - 3hrs",
  study1: "0hrs",
  study2: "Yesterday - 1hr",
  selfCare1: "0hrs",
  selfCare2: "Yesterday - 1hr",
}
var weekly = {
  work1: "32hrs",
  work2: "Last week - 36hrs",
  exercise1: "4hrs",
  exercise2: "Last week - 5hrs",
  play1: "10hrs",
  play2: "Last week - 8hrs",
  social1: "5hrs",
  social2: "Last week - 10hrs",
  study1: "4hrs",
  study2: "Last week - 7hrs",
  selfCare1: "2hrs",
  selfCare2: "Last week - 2hrs",
}
var monthly = {
  work1: "103hrs",
  work2: "Last month - 128hrs",
  exercise1: "11hrs",
  exercise2: "Last month - 18hrs",
  play1: "23hrs",
  play2: "Last month - 29hrs",
  social1: "21hrs",
  social2: "Last month - 23hrs",
  study1: "13hrs",
  study2: "Last month - 19hrs",
  selfCare1: "7hrs",
  selfCare2: "Last month - 11hrs",
}
$('#weekly').click(function(){
  $('#weekly').removeClass('fontb');
  $('#daily').addClass('fontb');
  $('#monthly').addClass('fontb');
  changeText(weekly);
})
$('#daily').click(function(){
  $('#daily').removeClass('fontb');
  $('#weekly').addClass('fontb');
  $('#monthly').addClass('fontb');
  changeText(daily);
})
$('#monthly').click(function(){
  $('#monthly').removeClass('fontb');
  $('#daily').addClass('fontb');
  $('#weekly').addClass('fontb');
  changeText(monthly);
})
  // change weekly text to white (remove fontb class)
  // change previously selected to blue (add fontb class)

function changeText(currentTimeframe){
  $('#work1').text(currentTimeframe.work1);
  $('#work2').text(currentTimeframe.work2);
  $('#exercise1').text(currentTimeframe.exercise1);
  $('#exercise2').text(currentTimeframe.exercise2);
  $('#play1').text(currentTimeframe.play1);
  $('#play2').text(currentTimeframe.play2);
  $('#social1').text(currentTimeframe.social1);
  $('#social2').text(currentTimeframe.social2);
  $('#study1').text(currentTimeframe.study1);
  $('#study2').text(currentTimeframe.study2);
  $('#self-care1').text(currentTimeframe.selfCare1);
  $('#self-care2').text(currentTimeframe.selfCare2);
}
