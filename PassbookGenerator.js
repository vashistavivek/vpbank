function printPassbook(outputMarkup){
  const a = [...arr];
  a.forEach(data => {
    outputMarkup.html(`<b>${data.statement} | ${data.balance}</b>`)
  });
}
