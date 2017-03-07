// To extend BaseModel, just write
// BaseModel.call(model);

export default function BaseModel() {
  this.createdAt = () => new Date(this.created_at);
  this.updatedAt = () => new Date(this.updated_at);
}
