type Props = {
    name: string;
    price: number;
    quantity: number;
}


export function ProductRow({ name, price, quantity }: Props){
    return (
        <tr>
            <td style={{ color: !quantity ? "red" : "#000"}}>{name}</td>
            <td>{price}</td>
        </tr>
    );
}