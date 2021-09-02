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
    this.specialItems = ["Aged Brie", "Backstage passes to a TAFKAL80ETC concert", "Sulfuras, Hand of Ragnaros"]
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.specialItems.includes(this.items[i].name)) {
        switch (this.items[i].name) {
          case "Aged Brie":
            this.agedBrieQualityIncrease(this.items[i]);
            break;
          case "Backstage passes to a TAFKAL80ETC concert":
            this.backStageQualityUpdate(this.items[i]);
          case "Sulfuras, Hand of Ragnaros":
          
        } 
      } else {
        this.normalQualityReduction(this.items[i]);
      }
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        this.normalSellInReduction(this.items[i]);
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != "Aged Brie") {
          if (
            this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
          ) {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality =
              this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
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
