type Props = {
    category: string;
}

export function ProductCategoryRow({ category }: Props){
    return (
        <tr>
            <th colSpan={2}>{category}</th>
        </tr>
    );
}