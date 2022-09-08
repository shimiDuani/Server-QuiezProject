const db = require("../repository/accountsRepository.js");

class AccountsController {
  // Get Questions
  getAllAccounts() {
    return db.getAllAccounts();
  }

  // Add question to the list
  addAccount(account) {
    if (!account.name) throw "account has no name";
    return db.addAccount(account);
  }

  deleteAccount(id) {
    return db.deleteAccount(id);
  }

  getAccount(id) {
    return db.getAccountById(id);
  }

  updateAccount(account) {
    return db.put(account);
  }
}

module.exports = new AccountsController();
