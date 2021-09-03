# Gilded Rose
The challenge was to refactor the Gilded Rose quality updating system, and to implement new conjured item functionality. The first step was to write a test suite that covered the currently covered cases and rules, so that refactoring wouldn't break any of the legacy functionality. This was done in stages, first for normal items, followed by extracting the normal item updating methods out. The same process was followed for each special item, first Aged Brie, then Backstage passes to a TAFKAL80ETC concert, and finally Sulfuras, Hand of Ragnaros. As the methods for special items were extracted it became possible to do more general refactoring of the flow of the program, without breaking any functionality. Finally, the conjured item functionality was added.

## Instructions
First run `npm install` to install the correct packages.

To run the tests execute `jasmine` in the console.

To use the program execute `open index.html`, in the browser console execute:
```
rose = new Shop();

\\ For normal items
rose.addItem(name, sellIn, quality);
\\ For conjured items
rose.addItem("Conjured name", sellIn, quality);
\\ For special items:
rose.addItem("Aged Brie", sellIn, quality);
rose.addItem("Backstage passes to a TAFKAL80ETC concert", sellIn, quality);
rose.addItem("Sulfuras, Hand of Ragnaros", sellIn, quality);

rose.updateItemStock();
```