export interface Product {
    id: number;
    name: string;
    price: number;
    images: Array<string>;
    chips: Array<string>;
    offer: {
        id: number;
        discount: number;
    } | null;
}