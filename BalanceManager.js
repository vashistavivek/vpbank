function BalanceManager(){
  let balance;
  this.getBalance = () => this.balance;
  this.updateBalance = (updatedAmt) => {
      this.balance = updatedAmt;
      return true;
  }
}
