var { Shop, Item } = require("../src/gilded_rose.js");
describe("Gilded Rose", function () {
  let shop;

  beforeEach(() => {
    shop = new Shop();
  });

  it("returns normal item name", function () {
    shop.items = [new Item("foo", 0, 0)];
    const items = shop.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it("lowers normal item sellIn by 1", function () {
    shop.items = [new Item("foo", 10, 0)];
    const items = shop.updateQuality();
    expect(items[0].sellIn).toEqual(9);
  });

  it("does not lower sellIn of normal item if it is 0", function () {
    shop.items = [new Item("foo", 0, 0)];
    expect(shop.items[0].sellIn).toEqual(0);
  });
});
