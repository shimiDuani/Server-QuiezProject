const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const jsonFileName = "./data/admin.json";

class AdminsRepository {
  async getAllAdmins() {
    const data = JSON.parse(await readFile(jsonFileName));
    if (!data) throw "No have admins";
    return data;
  }

  async addAdmin(admin) {
    let data = JSON.parse(await readFile(jsonFileName));
    const biggestId = Math.max.apply(
      Math,
      data.map((admin) => admin.id)
    );
    admin.id = biggestId + 1;
    data.push(admin);
    await writeFile(jsonFileName, JSON.stringify(data));
    return admin;
  }

  async deleteAdmin(id) {
    let data = JSON.parse(await readFile(jsonFileName));
    const parsedID = parseInt(id);
    let allAdmins = data.filter((admin) => admin.id !== parsedID);
    await writeFile(jsonFileName, JSON.stringify(allAdmins));
    return id;
  }

  async getAdminById(id) {
    let data = JSON.parse(await readFile(jsonFileName));
    const parsedId = parseInt(id);
    const index = data.findIndex((admin) => admin.id === parsedId);
    let admin = data[index];
    if (!admin) throw "No admin with that id.";
    await writeFile(jsonFileName, JSON.stringify(data));
    return admin;
  }

  async put(updateAdmin) {
    let data = JSON.parse(await readFile(jsonFileName));
    const admin = data.find((x) => x.id === updateAdmin.id);
    if (!admin) throw "No admin by this id";
    admin.name = updateAdmin.name ?? admin.name;
    admin.password = updateAdmin.password ?? admin.password;
    admin.accountId = updateAdmin.accountId ?? admin.accountId;
    await writeFile(jsonFileName, JSON.stringify(data));
    return admin;
  }
}

module.exports = new AdminsRepository();
