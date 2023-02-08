console.log("測試測試測試")

var btn = document.getElementById("commit_btn")
var rsp = document.getElementById("response")

console.log(btn)

var qset = [5,6,9,10,4,1,8,3,2,7]
var guess_num = 0
var guess_not_num = 0;

btn.onclick = function(){
	var val = document.getElementById("answer").value


	if(isNumeric(val)){
		var ans = 1023 - parseInt(val) % 1024

		if(ans == 0){
			rsp.innerHTML = "全對！<br>通往結局："
		} else {
			let cnt = 0
			let tmp = 512
			let stack = []
			console.log(ans)
			while(tmp >= 1){
				if(ans >= tmp){
					ans -= tmp;
					stack.push(parseInt(qset[cnt]))
				}
				cnt += 1
				tmp /= 2
			}
			
			stack.sort(function(a,b){
				return a - b;
			})

			rsp.innerHTML = "答錯的題號: " + stack.toString() + "<br>";
			rsp.innerHTML += "二周目從這裡開始:"
		}

	} else {
		rsp.innerHTML = ""
		if(guess_not_num > 40){
			rsp.innerHTML = "🙂<br>"
			document.body.style.backgroundImage = "url('padko_bocchi.jpg')";
			// 
		} else if(guess_not_num > 30){
			rsp.innerHTML = "真的什麼也沒有喔<br>"
		} else if(guess_not_num > 16){
			rsp.innerHTML = "繼續按也什麼都不會有喔<br>"
		} else if(guess_not_num > 8){
			rsp.innerHTML = "你確定你還要亂猜下去?<br>"
		} else if(guess_not_num > 4){
			rsp.innerHTML = "你在亂猜嗎?<br>" 
		}
		rsp.innerHTML += "這不是數字"
		guess_not_num += 1
	}

	guess_num += 1
}

function isNumeric(str) {
	if (typeof str != "string") return false
	return !isNaN(str) && !isNaN(parseFloat(str))
}