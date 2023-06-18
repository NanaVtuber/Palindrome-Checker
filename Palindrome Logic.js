function palindrome() {
  const form = document.getElementById("palindrome").value
  const trimmed = form.toLowerCase().replace(/[^A-Z0-9]/ig, "")
  const reversed = trimmed.split("").reverse().join("");
  const spacecheck = /^\s+$/.test(form)
  if(spacecheck === true || form ===""){
    document.body.style.backgroundColor= "rgb(13, 31, 222)";
    return document.getElementById("output").innerHTML = "That is not a word"
  }
  else if(reversed === trimmed){
 document.body.style.backgroundColor= "rgb(1, 237, 1)";
  return document.getElementById("output").innerHTML = "That is a palindrome"
  }
  else{
    document.body.style.backgroundColor= "rgb(219, 8, 8)";
    return document.getElementById("output").innerHTML = "That is not a palindrome"

  }
  
}

palindrome("A man, a plan, a canal. Panama");