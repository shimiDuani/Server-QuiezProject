const db = require("../repository/adminsRepository.js");

class AdminsController {
  // Get Questions
  getAllAdmins() {
    return db.getAllAdmins();
  }

  // Add question to the list
  addAdmin(Admin) {
    if (!Admin.name) throw "admin has no name";
    return db.addAdmin(Admin);
  }

  deleteAdmin(id) {
    return db.deleteAdmin(id);
  }

  getAdmin(id) {
    return db.getAdminById(id);
  }

  updateAdmin(admin) {
    return db.put(admin);
  }
}

module.exports = new AdminsController();
