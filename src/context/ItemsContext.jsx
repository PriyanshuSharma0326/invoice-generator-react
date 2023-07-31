import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

let item = {
    itemName: '',
    itemDescription: '',
    itemQuantity: 1,
    itemPrice: 1,
    itemID: ''
};

const getDefaultItems = () => {
    let items = [
        {...item, itemID: Date.now()}
    ];

    return items;
}

export const ItemsContextProvider = ({ children }) => {
    const [itemList, setItemList] = useState(getDefaultItems());

    const getSubtotalAmount = () => {
        let subtotal = itemList.reduce((prev, curr) => 
            prev + curr.itemPrice
        , 0);

        return subtotal;
    }

    const addToList = () => {
        setItemList([...itemList, {
            ...item,
            itemID: Date.now()
        }]);
    }

    const removeFromList = (id) => {
        setItemList(itemList.filter(item  => 
            item.itemID !== id
        ));
    }

    const contextvalue = { itemList, addToList, removeFromList, getSubtotalAmount };

    return (
        <ItemsContext.Provider value={contextvalue}>
            { children }
        </ItemsContext.Provider>
    );
}
