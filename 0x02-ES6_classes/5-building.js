export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    console.log(this.constructor.evacuationWarningMessage);
    console.log(this.constructor.evacuationWarningMessage());
    console.log(this.constructor);

    if (!this.constructor.evacuationWarningMessage()) {
      throw new Error(
        "Class extending Building must override evacuationWarningMessage"
      );
    }
  }

  get sqft() {
    return this._sqft;
  }

  static evacuationWarningMessage() {
    return true;
  }
}
