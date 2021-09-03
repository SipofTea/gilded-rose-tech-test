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
    if (item.name.toLowerCase().split(" ").includes("conjured")) {
      this.updateConjuredItemQuality(item);
    } else if (this.specialItems.includes(item.name)) {
      this.updateSpecialItemQuality(item);
    } else {
      this.normalQualityReduction(item);
    }
  }

  updateConjuredItemQuality(item) {
    if (item.quality == 0) {
      return;
    }
    if (item.sellIn == 0) {
      item.quality = item.quality - 4;
    } else if (item.sellIn > 0) {
      item.quality = item.quality - 2;
    } else {
      item.quality = 0;
    }
  }

  updateSpecialItemQuality(item) {
    switch (item.name) {
      case "Aged Brie":
        this.agedBrieQualityIncrease(item);
        break;
      case "Backstage passes to a TAFKAL80ETC concert":
        this.updateBackStageQuality(item);
    }
  }

  updateSellIn(item) {
    if (item.name != "Sulfuras, Hand of Ragnaros") {
      this.normalSellInReduction(item);
    }
  }

  agedBrieQualityIncrease(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  updateBackStageQuality(item) {
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
    if (item.quality == 0) {
      return;
    }
    if (item.sellIn == 0) {
      item.quality = item.quality - 2;
    } else if (item.sellIn > 0) {
      item.quality = item.quality - 1;
    } else {
      item.quality = 0;
    }
  }

  normalSellInReduction(item) {
    if (item.sellIn > 0) {
      item.sellIn = item.sellIn - 1;
    } else {
      item.sellIn = 0;
    }
  }
}

module.exports = {
  Item,
  Shop,
};
