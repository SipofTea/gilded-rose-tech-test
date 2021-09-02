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
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (
        this.items[i].name != "Aged Brie" &&
        this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
            // this is where normal item quality is changed
            if (this.items[i].sellIn == 0) {
              this.items[i].quality = this.items[i].quality - 2;
            } else if (this.items[i].sellIn > 0) {
              this.items[i].quality = this.items[i].quality - 1;
            } else {
              console.error("Invalid sellIn, cannot be negative.");
            }
          }
        } else if (this.items[i].quality == 0) {
          // this is weird
          this.items[i].quality
        } else {
          console.error('Invalid quality, cannot be negative.')
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (
            this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
          ) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        // reduces sellIn by 1 for normal items
        console.log("hello")
        if (this.items[i].sellIn > 0) {
          console.log("hi")
          this.items[i].sellIn = this.items[i].sellIn - 1;
        } else if (this.items[i].sellIn == 0) {
          //weird
          this.items[i].sellIn
        }
          else {
          console.error('Invalid sellIn, cannot be negative.')
        }
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != "Aged Brie") {
          if (
            this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
          ) {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                console.log("hello it's me");
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
}
module.exports = {
  Item,
  Shop,
};
