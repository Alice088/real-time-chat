class User {
  private _name: string;
  private _bio: string;
  private _avatarImage: string;

  constructor(name = "defaultUsername", bio = "Default Bio") {
    this._name = name;
    this._bio = bio;
    this._avatarImage = require("@/assets/defaultImage.jpg");
  }

  get name() {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  get bio() {
    return this._bio;
  }

  set bio(newBio: string) {
    this._bio = newBio;
  }

  get avatarImage() {
    return this._avatarImage;
  }

  set avatarImage(newAvatarImage: string) {
    this._avatarImage = newAvatarImage;
  }
}

export { User };
