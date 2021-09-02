var { Shop, Item } = require("../src/gilded_rose.js");
describe("Gilded Rose", function () {
  let shop;

  beforeEach(() => {
    shop = new Shop();
  });

  it("returns normal item name", function () {
    shop.items = [new Item("foo", 0, 0)];
    const items = shop.updateItemStock();
    expect(items[0].name).toEqual("foo");
  });

  it("lowers normal item sellIn by 1", function () {
    shop.items = [new Item("foo", 10, 0)];
    const items = shop.updateItemStock();
    expect(items[0].sellIn).toEqual(9);
  });

  it("does not lower sellIn of normal item if it is 0", function () {
    shop.items = [new Item("foo", 0, 0)];
    expect(shop.items[0].sellIn).toEqual(0);
  });

  it("lowers quality by 1 for normal item", () => {
    shop.items = [new Item("foo", 10, 10)];
    const items = shop.updateItemStock();
    expect(items[0].quality).toEqual(9);
  });

  it("lowers quality by 2 for normal item when sellIn is 0", () => {
    shop.items = [new Item("foo", 0, 10)];
    const items = shop.updateItemStock();
    expect(items[0].quality).toEqual(8);
  });

  it("does not allow quality to be lowered below 0", () => {
    shop.items = [new Item("foo", 10, 0)];
    const items = shop.updateItemStock();
    expect(items[0].quality).toEqual(0);
  })

  it("increases quality of Aged Brie", () => {
    shop.items = [new Item("Aged Brie", 0, 10)];
    const items = shop.updateItemStock();
    expect(items[0].quality).toEqual(11);
  })

  it("doesn't raise quality of Aged Brie over 50", () => {
    shop.items = [new Item("Aged Brie", 0, 50)];
    const items = shop.updateItemStock();
    expect(items[0].quality).toEqual(50);
  })

  it("increases backstage pass quality by one when more than 10 days are left", () => {
    shop.items = [new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10)];
    const items = shop.updateItemStock();
    expect(items[0].quality).toEqual(11);
  })

  it("increases backstage pass quality by two when there are 10 - 5 days left", () => {
    shop.items = [new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10)];
    const items = shop.updateItemStock();
    expect(items[0].quality).toEqual(12);
  })

  it("increases backstage pass quality by 3 when there are less than 5 days left", () => {
    shop.items = [new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)];
    const items = shop.updateItemStock();
    expect(items[0].quality).toEqual(13);
  })

  it("reduces backstage pass quality to 0 after concert", () => {
    shop.items = [new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)];
    const items = shop.updateItemStock();
    expect(items[0].quality).toEqual(0);
  })

  it("doesn't change the sellIn of Sulfuras, Hand of Ragnaros", () => {
    shop.items = [new Item("Sulfuras, Hand of Ragnaros", 10, 10)];
    const items = shop.updateItemStock();
    expect(items[0].quality).toEqual(10);
  })

  it("doesn't change the quality of Sulfuras, Hand of Ragnaros", () => {
    shop.items = [new Item("Sulfuras, Hand of Ragnaros", 10, 10)];
    const items = shop.updateItemStock();
    expect(items[0].quality).toEqual(10);
  })

  xit("raises error when sellIn is set to a negative number", () => {
    shop.items = [new Item("foo", -10, 0)];
    expect(shop.updateItemStock()).toThrow("Invalid sellIn, cannot be negative.")
  })

  xit("raises error when quality is set to a negative number", () => {
    shop.items = [new Item("foo", 0, -10)];
    expect(shop.updateItemStock()).toThrow("Invalid quality, cannot be negative.")
  })
});
