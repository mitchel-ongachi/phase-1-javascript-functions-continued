function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }

  let mondayWork = function(event="go to the office") {
    return `This Monday, I will ${event}.`
  }

  let wrapAdjective = function(unique="*") {
    return function(adjective="special") {
      return `You are ${unique}${adjective}${unique}!`
  }
}