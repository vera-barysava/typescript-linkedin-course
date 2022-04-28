let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
let originalCost: number = 425;

enum InvemtoryItemType {
    Computer,
    Furnitute
}

type Cost = string | number ;
interface InventoryItem {
    displayName: string;
    inventoryType: InvemtoryItemType;
    trackingNumber: string;
    createDate: Date;
    originalCost?: Cost;
    addNote?(note: string): string; //One way to define methods
    addBonus?: (bonus:string) => string; //Second way to define methods
}

function getInventoryItem(trackingNumber: string): InventoryItem {
    return null;
}

function saveInventoryItem(item: InventoryItem) {

}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem({
    displayName: "Jess's standing desk",
    inventoryType: InvemtoryItemType.Computer,
    trackingNumber:"FD123455",
    createDate:  new Date(),
    originalCost: 425
});