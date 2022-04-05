//定义测试时间
var testTime = 60;
//定义测试的句子
var testSentence = [
 "Push yourself, because no one else is going to do it for you.",
 "Failure is the condiment that gives success its flavor.",
 // "Wake up with determination. Go to bed with satisfaction.",
 // "It's going to be hard, but hard does not mean impossible.",
 // "Learning never exhausts the mind.",
 // "The only way to do great work is to love what you do."
]
//定义dom
//1.错误dom
var error_text = document.querySelector('.error_text');
//2.时间dom
var time_text = document.querySelector('.time_text');
//3.当前正确率
var currcorrect_text = document.querySelector('.currcorrect_text');
//4.打字速度
var type_speed_text = document.querySelector('.type_speed_text');
 
//打字速度父dom
var type_speed = document.querySelector('.type_speed');
 
 
//句子dom
var text_box = document.querySelector('.text_box');
//输入
var textarea_box = document.querySelector('#textarea_box');
//按钮
var restart = document.querySelector('.restart')
var timeLeft = testTime;
//当前句子
var currentSentence = "";
//默认开始是索引为0
var startIndex = 0;
//错误统计
var errors = 0;
var characterTyped = 0;
//总错误
var total_errors = 0; 
var timer = null;
var timeElapsed = 0; //已用时间
var accuracy = 0;//正确个数
//更新渲染句子
function updateSentence(){
 text_box.textContent = null;
 currentSentence = testSentence[startIndex];
 //句子拆分
 var newChar = currentSentence.split('');
 for(var i = 0; i < newChar.length; i++){
  var charSpan = document.createElement('span');
  charSpan.innerText = newChar[i];
  text_box.appendChild(charSpan)
 }
 if(startIndex < testSentence.length - 1){
  startIndex++;
 }else{
  startIndex = 0
 }
}
//输入当前正确的句子
function processCurrentText(){
 curr_input = textarea_box.value;
 curr_input_array = curr_input.split('');
 // console.log(curr_input_array);
 characterTyped++;
 errors = 0;
 quoteSpanArray = text_box.querySelectorAll('span');
 // console.log(quoteSpanArray);
 quoteSpanArray.forEach((char,index)=>{
  var typeChar = curr_input_array[index];
  //当前没有输入
  if(typeChar == null){
   char.classList.remove('correct_char'); 
   char.classList.remove('incorrect_char'); 
  }else if(typeChar === char.innerText){
   //正确的输入
   char.classList.add('correct_char'); 
   char.classList.remove('incorrect_char'); 
  }else{
   //不正确的输入
   char.classList.add('incorrect_char'); 
    char.classList.remove('correct_char');
    errors++; 
  }
 })
 error_text.textContent = total_errors + errors; 
 console.log(characterTyped)
 console.log(error_text.textContent)
 var correctCharacters = (characterTyped - (total_errors + errors)); 
 var accuracyVal = ((correctCharacters / characterTyped) * 100); 
 console.log(accuracyVal)
 currcorrect_text.textContent = Math.round(accuracyVal); 
 //输入结束
 if(curr_input.length == currentSentence.length){
  updateSentence(); 
  total_errors += errors; 
  textarea_box.value = ""
 }
}
//开始游戏
function startGame(){
 resetValues(); 
 updateSentence(); 
  
 // clear old and start a new timer 
 clearInterval(timer); 
 timer = setInterval(updateTimer, 1000); 
}
//重新开始
function resetValues(){
 timeLeft = testTime;
 timeElapsed = 0;
 errors = 0;
 total_errors = 0;
 accuracy = 0;
 characterTyped = 0;
 startIndex = 0;
 textarea_box.disabled = false;
 textarea_box.value = "";
 text_box.textContent = 'Click on the area below to start the game.'; 
 currcorrect_text.textContent = 100;
 time_text.textContent = timeLeft + 's';
 type_speed.style.display = 'none';
  
}
//更新时间
function updateTimer() { 
 if (timeLeft > 0) { 
  // decrease the current time left 
  timeLeft--; 
  
  // increase the time elapsed 
  timeElapsed++; 
  
  // update the timer text 
  time_text.textContent = timeLeft + "s"; 
 } 
 else { 
  // finish the game 
  finishGame(); 
 } 
 } 
 //游戏结束
 function finishGame() { 
 // stop the timer 
 clearInterval(timer); 
  
 // disable the input area 
 textarea_box.disabled = true; 
  
 // show finishing text 
 text_box.textContent = "可点击下方按钮重新开始！！！"; 
  
 // display restart button 
 restart.style.display = "block"; 
  
 // calculate cpm and wpm 
 console.log(characterTyped,timeElapsed)
 cpm = Math.round(((characterTyped / timeElapsed) * 60)); 
  
 // update cpm and wpm text 
  
 type_speed_text.textContent = cpm + '个/分'; 
  
 // display the cpm and wpm 
 type_speed.style.display = "block"; 
  
 }