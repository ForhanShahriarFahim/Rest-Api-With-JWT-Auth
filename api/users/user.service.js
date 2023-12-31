const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into registration(firstName, lastName, gender, email, password, number) 
                values(?,?,?,?,?,?)`,
      [
        data.firstName,
        data.lastName,
        data.gender,
        data.email,
        data.password,
        data.number,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from registration where email=?`,
      [email],
      (error, result, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, result[0]);
      }
    );
  },

  getUserByUserId: (id, callBack) => {
    pool.query(
      `select id,firstName,lastName,gender,email,number from registration where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  getUsers: (callBack) => {
    pool.query(
      `select id,firstName,lastName,gender,email,number from registration`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  updateUser: (data, callBack) => {
    pool.query(
      `update registration set firstName=?, lastName=?,gender=?,email=?,password=?,number=? where id=?`,
      [
        data.firstName,
        data.lastName,
        data.gender,
        data.email,
        data.password,
        data.number,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  deleteUser: (id, callBack) => {
    pool.query(
      `delete from registration where id=?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
