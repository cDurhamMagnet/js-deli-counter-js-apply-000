const takeANumber = (currentLine, newCustomer) => {
  return 'Welcome, ' + newCustomer + 'You are number ' + (currentLine + 1) + "."
}

const nowServing = (currentLine) => {
  if (currentLine){
    let serving = currentLine[0]
    currentLine.shift()
    return serving
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

const currentLine = (currentLine) => {
  if (currentLine){
    let string = "The line is currently: "
    for (let i = 0; i < currentLine.length; i++)    {
      string += (i + 1) + ". " + currentLine[i] + ", "
    }
    return string.substring(0, string.length - 1)
  }
  else {
    return "The line is currently empty."
  }
}
