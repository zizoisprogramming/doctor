const db =  require("../server")

const getAllPatients = () => {
    return new Promise((resolve, reject) => {
        sqlQuery = "SELECT * FROM Patients";
        db.query(sqlQuery, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
  };