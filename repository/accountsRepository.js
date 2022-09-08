const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const jsonFileName = "./data/account.json";

class AccountsRepository {
  async getAllAccounts() {
    const data = JSON.parse(await readFile(jsonFileName));
    if (!data) throw "No have account";
    return data;
  }

  async addAccount(account) {
    let data = JSON.parse(await readFile(jsonFileName));
    const biggestId = Math.max.apply(
      Math,
      data.map((account) => account.id)
    );
    account.id = biggestId + 1;
    data.push(account);
    await writeFile(jsonFileName, JSON.stringify(data));
    return account;
  }

  async deleteAccount(id) {
    let data = JSON.parse(await readFile(jsonFileName));
    const parsedId = parseInt(id);
    let allAccounts = data.filter((account) => account.id !== parsedId);
    await writeFile(jsonFileName, JSON.stringify(allAccounts));
    return id;
  }

  async getAccountById(id) {
    let data = JSON.parse(await readFile(jsonFileName));
    const parsedId = parseInt(id);
    const account = data.find((account) => account.id === parsedId);
    if (!account) throw "No account with that id.";
    await writeFile(jsonFileName, JSON.stringify(data));
    return account;
  }

  async put(updateAccount) {
    let data = JSON.parse(await readFile(jsonFileName));
    const account = data.find((x) => x.id === updateAccount.id);
    if (!account) throw "No account by this id";
    account.name = updateAccount.name ?? account.name;
    account.topicsId = updateAccount.topicsId ?? account.topicsId;
    await writeFile(jsonFileName, JSON.stringify(data));
    return account;
  }
}

module.exports = new AccountsRepository();
