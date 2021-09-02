class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
    this.specialItems = [
      "Aged Brie",
      "Backstage passes to a TAFKAL80ETC concert",
      "Sulfuras, Hand of Ragnaros",
    ];
  }

  updateItemStock() {
    for (var i = 0; i < this.items.length; i++) {
      this.updateQuality(this.items[i]);
      this.updateSellIn(this.items[i]);
    }
    return this.items;
  }

  updateQuality(item) {
    if (this.specialItems.includes(item.name)) {
      switch (item.name) {
        case "Aged Brie":
          this.agedBrieQualityIncrease(item);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.backStageQualityUpdate(item);
      }
    } else {
      this.normalQualityReduction(item);
    }
  }

  updateSellIn(item) {
    if (item.name != "Sulfuras, Hand of Ragnaros") {
      this.normalSellInReduction(item);
    }
    if (item.sellIn < 0) {
      if (item.name != "Aged Brie") {
        if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
          if (items.quality > 0) {
            if (items.name != "Sulfuras, Hand of Ragnaros") {
              items.quality = items.quality - 1;
            }
          }
        } else {
          items.quality = items.quality - items.quality;
        }
      } else {
        if (items.quality < 50) {
          items.quality = items.quality + 1;
        }
      }
    }
  }

  agedBrieQualityIncrease(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  backStageQualityUpdate(item) {
    if (item.quality < 50) {
      if (item.sellIn == 0) {
        item.quality = 0;
      } else if (item.sellIn < 6) {
        item.quality += 3;
      } else if (item.sellIn < 11) {
        item.quality += 2;
      } else if (item.sellIn > 10) {
        item.quality += 1;
      }
    }
  }

  normalQualityReduction(item) {
    if (item.quality > 0) {
      if (item.name != "Sulfuras, Hand of Ragnaros") {
        // this is where normal item quality is changed
        if (item.sellIn == 0) {
          item.quality = item.quality - 2;
        } else if (item.sellIn > 0) {
          item.quality = item.quality - 1;
        } else {
          console.error("Invalid sellIn, cannot be negative.");
        }
      }
    } else if (item.quality == 0) {
      // this is weird
      item.quality;
    } else {
      console.error("Invalid quality, cannot be negative.");
    }
  }

  normalSellInReduction(item) {
    // reduces sellIn by 1 for normal items
    if (item.sellIn > 0) {
      item.sellIn = item.sellIn - 1;
    } else if (item.sellIn == 0) {
      //weird
      item.sellIn;
    } else {
      console.error("Invalid sellIn, cannot be negative.");
    }
  }
}

module.exports = {
  Item,
  Shop,
};
