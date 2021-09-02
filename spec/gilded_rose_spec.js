var { Shop, Item } = require("../src/gilded_rose.js");
describe("Gilded Rose", function () {
  let shop;

  beforeEach(() => {
    shop = new Shop();
  });

  it("returns item name", function () {
    shop.items = [new Item("foo", 0, 0)];
    const items = shop.updateQuality();
    expect(items[0].name).toEqual("foo");
  });
});
