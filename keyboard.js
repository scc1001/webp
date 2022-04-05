var keyArray = [
    { 'key_name': '`', 'key_val': '192' },
    { 'key_name': '1', 'key_val': '49' },
    { 'key_name': '2', 'key_val': '50' },
    { 'key_name': '3', 'key_val': '51' },
    { 'key_name': '4', 'key_val': '52' },
    { 'key_name': '5', 'key_val': '53' },
    { 'key_name': '6', 'key_val': '54' },
    { 'key_name': '7', 'key_val': '55' },
    { 'key_name': '8', 'key_val': '56' },
    { 'key_name': '9', 'key_val': '57' },
    { 'key_name': '0', 'key_val': '48' },
    { 'key_name': '-', 'key_val': '189' },
    { 'key_name': '=', 'key_val': '187' },
    { 'key_name': 'Backspace', 'key_val': '8' },
    
    { 'key_name': 'Tab', 'key_val': '9' },
    { 'key_name': 'Q', 'key_val': '81' },
    { 'key_name': 'W', 'key_val': '87' },
    { 'key_name': 'E', 'key_val': '69' },
    { 'key_name': 'R', 'key_val': '82' },
    { 'key_name': 'T', 'key_val': '84' },
    { 'key_name': 'Y', 'key_val': '89' },
    { 'key_name': 'U', 'key_val': '85' },
    { 'key_name': 'I', 'key_val': '73' },
    { 'key_name': 'O', 'key_val': '79' },
    { 'key_name': 'P', 'key_val': '80' },
    { 'key_name': '[', 'key_val': '219' },
    { 'key_name': ']', 'key_val': '221' },
    { 'key_name': "\\ ", 'key_val': '220' },
    
    { 'key_name': 'CapsLock', 'key_val': '20' },
    { 'key_name': 'A', 'key_val': '65' },
    { 'key_name': 'S', 'key_val': '83' },
    { 'key_name': 'D', 'key_val': '68' },
    { 'key_name': 'F', 'key_val': '70' },
    { 'key_name': 'G', 'key_val': '71' },
    { 'key_name': 'H', 'key_val': '72' },
    { 'key_name': 'J', 'key_val': '74' },
    { 'key_name': 'K', 'key_val': '75' },
    { 'key_name': 'L', 'key_val': '76' },
    { 'key_name': ';', 'key_val': '186' },
    { 'key_name': "'", 'key_val': '222' },
    { 'key_name': 'Enter', 'key_val': '13' },
    
    { 'key_name': 'Shift', 'key_val': '16' },
    { 'key_name': 'Z', 'key_val': '90' },
    { 'key_name': 'X', 'key_val': '88' },
    { 'key_name': 'C', 'key_val': '67' },
    { 'key_name': 'V', 'key_val': '86' },
    { 'key_name': 'B', 'key_val': '66' },
    { 'key_name': 'N', 'key_val': '78' },
    { 'key_name': 'M', 'key_val': '77' },
    { 'key_name': ',', 'key_val': '188' },
    { 'key_name': '.', 'key_val': '190' },
    { 'key_name': '/', 'key_val': '191' },
    { 'key_name': 'Shift', 'key_val': '16' },
    
    { 'key_name': 'Ctrl', 'key_val': '17' },
    { 'key_name': 'Alt', 'key_val': '18' },
    { 'key_name': 'Home', 'key_val': '36 ' },
    { 'key_name': 'Space', 'key_val': '32' },
    { 'key_name': 'Home', 'key_val': '36' },
    { 'key_name': 'Alt', 'key_val': '18' },
    { 'key_name': 'Ctrl', 'key_val': '17' },
    { 'key_name': 'Fn', 'key_val': '00' },
    
   ]
   var keyBoard = document.getElementsByClassName('keyBoard')[0]
   function renderKeyBoard(keyArray) {
    var template = '';
    for (var i = 0; i < keyArray.length; i++) {
     if (keyArray[i].key_val == '8') {
      template += "<div class='key backspace' data-key='" + keyArray[i].key_val + "'>" + keyArray[i].key_name + "</div>";
     } else if (keyArray[i].key_val == '9') {
      template += "<div class='key tab' data-key='" + keyArray[i].key_val + "'>" + keyArray[i].key_name + "</div>";
     } else if (keyArray[i].key_val == '220') {
      template += "<div class='key backslash' data-key='" + keyArray[i].key_val + "'>" + keyArray[i].key_name + "</div>";
     } else if (keyArray[i].key_val == '20') {
      template += "<div class='key capslock' data-key='" + keyArray[i].key_val + "'>" + keyArray[i].key_name + "</div>";
     } else if (keyArray[i].key_val == '13') {
      template += "<div class='key enter' data-key='" + keyArray[i].key_val + "'>" + keyArray[i].key_name + "</div>";
     } else if (keyArray[i].key_val == '16') {
      template += "<div class='key leftshift' data-key='" + keyArray[i].key_val + "'>" + keyArray[i].key_name + "</div>";
     } else if (keyArray[i].key_val == '16') {
      template += "<div class='key rightshift' data-key='" + keyArray[i].key_val + "'>" + keyArray[i].key_name + "</div>";
     } else if (keyArray[i].key_val == '17') {
      template += "<div class='key leftctrl' data-key='" + keyArray[i].key_val + "'>" + keyArray[i].key_name + "</div>";
     } else if (keyArray[i].key_val == '36') {
      template += "<div class='key microsoft' data-key='" + keyArray[i].key_val + "'>" + keyArray[i].key_name + "</div>";
     }
     else if (keyArray[i].key_val == '32') {
      template += "<div class='key space' data-key='" + keyArray[i].key_val + "'>" + keyArray[i].key_name + "</div>";
     }
     else {
      template += "<div class='key' data-key='" + keyArray[i].key_val + "'>" + keyArray[i].key_name + "</div>";
     }
    
    
    }
    // console.log(template)
    keyBoard.innerHTML = template;
   }
   renderKeyBoard(keyArray)
   var key_div = document.getElementsByClassName('key');
   // console.log(key_div)
   $("#textarea_box").on("input", function (e) {
    // console.log(e.keyCode)
    keyBoard.style.display = 'grid'
    processCurrentText()
    
   });
   $("#textarea_box").on("focus", function (e) {
    // console.log(e.keyCode)
    keyBoard.style.display = 'grid';
    startGame();
    
   });
   $("#textarea_box").on("keydown", function (e) {
     console.log(e.target.value)
    if(e.target.value != ''){
    for (var i = 0; i < key_div.length; i++) {
     var key_val = Number(key_div[i].getAttribute('data-key'));
     if (key_val === e.keyCode) {
      key_div[i].style.color = '#fff';
      key_div[i].style.backgroundColor = '#9F79EE'
     } else {
      key_div[i].style.color = ''
      key_div[i].style.backgroundColor = ''
     }
    }
    }
    
   });
   $("#textarea_box").on("keyup", function (e) {
    for (var i = 0; i < key_div.length; i++) {
     key_div[i].style.color = ''
     key_div[i].style.backgroundColor = ''
    }
    
   });
   $("#textarea_box").on("blur", function (e) {
    // console.log(e.keyCode)
    keyBoard.style.display = 'none'
    
   });