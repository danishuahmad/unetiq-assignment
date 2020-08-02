class BaseService {
  async get(criteria = {}, fields = [], options = {}) {
    return await this.className.find(criteria, fields, options);
  }

  async getOne(criteria, fields = [], options = {}) {
    return await this.className.findOne(criteria, fields, options);
  }

  async count(criteria) {
    return await this.className.countDocuments(criteria);
  }

  async delete(criteria) {
    return await this.className.deleteOne(criteria);
  }

  async deleteMany(criteria) {
    return await this.className.deleteMany(criteria);
  }

  async updateOne(criteria, data, upsert = true) {
    return await this.className.findOneAndUpdate(
      criteria,
      data,
      {new: false, useFindAndModify: false, upsert },
      function(err, doc) {
        if (err) {
          return err;
        } else {
          return doc;
        }
      }
    );
  }
  
  async updateMultiple(criteria, data,upsert = true) {
    return await this.className.updateMany(
      criteria,
      data,
      {upsert}
    );
  }
}

export default BaseService;
