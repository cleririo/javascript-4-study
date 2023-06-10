import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";
import styles from "../../styles/ProductTable.module.css"
import { Product } from "../../types/Product";

type Props = {
    products: Product[];
}

export function ProductTable({ products}: Props) {

    function getRows(): JSX.Element[] {
        const rows: JSX.Element[] = [];

        let lastCategory = "";

        products.forEach(product => {
            if (lastCategory !== product.category) {
                rows.push(<ProductCategoryRow category={product.category} />);
            }

            rows.push(<ProductRow
                name={product.name}
                price={product.price}
                quantity={product.quantity}
            />)
            lastCategory = product.category;
        });

        return rows;
    }
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {getRows()}
            </tbody>
        </table>
    );
}