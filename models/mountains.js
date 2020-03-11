const db = require('./conn');

class MountainModel {
  constructor(id, name, distance, location) {
    this.id = id;
    this.name = name;
    this.distance = distance;
    this.location = location;
  }

  static async getAllMountains() {
    try {
      
      const response = await db.any(`SELECT * FROM mountain;`);
      return response;

    } catch (err) {
      return err.message;
    }
  }

  static async getMountainById(m_id) {
    try {
      const response = await db.one(`SELECT * FROM mountain WHERE id = ${m_id}`);
      return response;

    } catch (err) {
      return err.message;
    }
  }

  static async getMountainName(m_id) {
    try {
      const response = await db.one(`SELECT name FROM mountain WHERE id = $1`, m_id);
      console.log(response);
      return response;
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  static async getRoutesById(r_id) {
    console.log("accessed");
    try {
      const response = await db.any(
        `SELECT * FROM route WHERE mountain_id = ${m_id}`
      )
      return response;

    } catch (err) {
      return err.message;
    }
  }

  static async getReviewsById(m_id) {
    console.log("accessed");
    try {
      const response = await db.any(
        `SELECT * FROM review WHERE mountain_id = ${m_id}`
    
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }
}



module.exports = MountainModel;
