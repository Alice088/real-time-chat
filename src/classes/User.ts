import { validation } from "@/hooks/validationForms";

class User {
  private _name: string;
  private _bio: string;
  private _avatarImage: string;
  private _id: string;

  constructor(
    name = "defaultUsername",
    bio = "Default Bio",
    avatarImage = require("@/assets/defaultImage.jpg"),
    id = `${Date.now()}`
  ) {
    this._name = name;
    this._bio = bio;
    this._avatarImage = avatarImage;
    this._id = id;
  }

  getName() {
    return this._name;
  }

  setName(newName: string): boolean {
    if (validation(newName, null).result) {
      //fetch
      this._name = newName;
      return true;
    }
    return false;
  }

  get bio() {
    return this._bio;
  }

  set bio(newBio: string) {
    //fetch
    this._bio = newBio;
  }

  get avatarImage() {
    return this._avatarImage;
  }

  set avatarImage(newAvatarImage: string) {
    //fetch
    this._avatarImage = newAvatarImage;
  }

  get id() {
    return this._id;
  }
}

export { User };
