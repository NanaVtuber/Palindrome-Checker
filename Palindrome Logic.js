function palindrome() {
  const form = document.getElementById("palindrome").value
  const trimmed = form.toLowerCase().replace(/[^A-Z0-9]/ig, "")
  const reversed = trimmed.split("").reverse().join("");
  const spacecheck = /^\s+$/.test(form)
  if(spacecheck === true || form ===""){
    document.body.style.backgroundColor= "rgb(13, 31, 222)";
    document.getElementById("button").onclick = reset
    document.getElementById("button").innerHTML = "Reset"
    return document.getElementById("output").innerHTML = "That is not a word"
  }
  else if(reversed === trimmed){
    document.body.style.backgroundColor= "rgb(1, 237, 1)";
    document.getElementById("button").onclick = reset
    document.getElementById("button").innerHTML = "Reset"
  return document.getElementById("output").innerHTML = "That is a palindrome"
  }
  else{
    document.body.style.backgroundColor= "rgb(219, 8, 8)";
    document.getElementById("button").onclick = reset
    document.getElementById("button").innerHTML = "Reset"
    return document.getElementById("output").innerHTML = "That is not a palindrome"

  }
  
}
function reset(){
  document.body.style.backgroundColor= "rgb(13, 31, 222)";
  document.getElementById("output").innerHTML = "Insert Palindrome"
  document.getElementById("button").onclick = palindrome
  document.getElementById("button").innerHTML = "submit"
  document.getElementById("palindrome").value = ""
}