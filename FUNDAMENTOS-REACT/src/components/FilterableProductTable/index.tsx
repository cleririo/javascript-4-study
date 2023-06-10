import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";
import styles from "../../styles/FilterableProductTable.module.css"
import { Product } from "../../types/Product";
import { useState } from "react";

const products: Product[] = [
    { id: 1, name: "Bola de futebol", price: 70, quantity: 2, category: "Esportes" },
    { id: 1, name: "Bola de basket", price: 80, quantity: 0, category: "Esportes" },
    { id: 1, name: "Computador", price: 4500, quantity: 10, category: "Eletronicos" },
    { id: 1, name: "Teclado", price: 100, quantity: 2, category: "Eletronicos" },
    { id: 1, name: "Bola de futebolmouse", price: 120, quantity: 5, category: "Eletronicos" },
];

export function FilterableProductTable(){
    const [filterText, setFilterText] = useState("");
    const [isInStockOnly, setIsInStockOnly] = useState(false);

    const filteredProducts = products.filter(product => {
        if (!product.quantity && isInStockOnly){
            return false;
        }

        if(!product.name.toLowerCase().includes(filterText.toLowerCase())){
            return false;
        }

        return true;
    });

    return(
        <div className={styles.container}>
            <SearchBar 
                filterTextValue={filterText} 
                onChangeFilterTextValue={setFilterText}
                productsInStockOnlyValue={isInStockOnly}
                toggleProductsInStockOnly={() => setIsInStockOnly(!isInStockOnly)}
                />
            <ProductTable products={filteredProducts}/>
        </div>
    );
}