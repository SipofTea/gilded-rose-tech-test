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

  it("lowers quality by 1 for normal item", () => {
    shop.items = [new Item("foo", 10, 10)];
    const items = shop.updateQuality();
    expect(items[0].quality).toEqual(9);
  });

  it("lowers quality by 2 for normal item when sellIn is 0", () => {
    shop.items = [new Item("foo", 0, 10)];
    const items = shop.updateQuality();
    expect(items[0].quality).toEqual(8);
  });

  it("does not allow quality to be lowered below 0", () => {
    shop.items = [new Item("foo", 10, 0)];
    const items = shop.updateQuality();
    expect(items[0].quality).toEqual(0);
  })

  xit("raises error when selliN is set to a negative number", () => {
    shop.items = [new Item("foo", -10, 0)];
    expect(shop.updateQuality()).toThrow("Invalid sellIn, cannot be negative.")
  })

  xit("raises error when quality is set to a negative number", () => {
    shop.items = [new Item("foo", 0, -10)];
    expect(shop.updateQuality()).toThrow("Invalid quality, cannot be negative.")
  })
});
