import styles from "../../styles/SearchBar.module.css"

type Props = {
    filterTextValue: string;
    onChangeFilterTextValue: (text: string) => void;
    productsInStockOnlyValue: boolean;
    toggleProductsInStockOnly: VoidFunction;
}

export function SearchBar(props: Props){
    return(
        <div className={styles.container}>
            <input 
                value={props.filterTextValue}
                onChange={e => props.onChangeFilterTextValue(e.target.value)}
                type="text" 
                placeholder="Pesquisar"/>
            <label>
                <input 
                    type="checkbox"
                    checked={props.productsInStockOnlyValue}
                    onChange={props.toggleProductsInStockOnly}
                />
                Mostrar apenas produtos em estoque
            </label>
        </div>
    );
}