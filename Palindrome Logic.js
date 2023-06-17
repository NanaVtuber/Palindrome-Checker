function palindrome(str) {
  const trimmed = str.toLowerCase().replace(/[^A-Z0-9]/ig, "")
  const reversed = trimmed.split("").reverse().join("");
  return reversed === trimmed;
  
}

palindrome("A man, a plan, a canal. Panama");