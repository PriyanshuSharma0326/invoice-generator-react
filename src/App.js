import React from "react";
import InvoiceForm from "./components/InvoiceForm";
import { ItemsContextProvider } from "./context/ItemsContext";

export default function App() {
    return (
        <>
            <ItemsContextProvider>
                <InvoiceForm />
            </ItemsContextProvider>
        </>
    );
}
