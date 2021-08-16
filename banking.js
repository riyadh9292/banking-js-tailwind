function findType(id) {
  return document.getElementById("transaction-type").value;
}
function updateShowValue(tranId, updateId, withdraw = false) {
  if (withdraw) {
    return (document.getElementById(updateId).innerText =
      parseFloat(document.getElementById(updateId).innerText) -
      parseFloat(document.getElementById(tranId).value));
  } else {
    return parseFloat(document.getElementById(tranId).value) > 0
      ? (document.getElementById(updateId).innerText =
          parseFloat(document.getElementById(tranId).value) +
          parseFloat(document.getElementById(updateId).innerText))
      : console.log("no");
  }
}
document
  .getElementById("transaction-button")
  .addEventListener("click", function () {
    const transactionType = findType("transaction-type");
    if (transactionType == "") {
      let p = document.createElement("p");
      p.innerText = "You have to choose an option from below ->";
      p.style.color = "red";
      p.style.fontSize = "18px";
      p.style.fontWeight = "bold";
      document.getElementById("transaction-header").append(p);
    } else if (transactionType == "deposit") {
      updateShowValue("transact-amount", "deposit-show");
      updateShowValue("transact-amount", "show-balance");
    } else {
      updateShowValue("transact-amount", "withdraw-show");
      updateShowValue("transact-amount", "show-balance", (withdraw = true));
    }
  });
