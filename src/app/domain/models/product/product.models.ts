export interface IProductModel {
    _id: string;
    PRODUCT_NAME: string;
    PRODUCT: string;
    PRODUCT_SKU: string;
    PRODUCT_IMAGE: string;
    PRODUCT_CATEGORIES: string[];
    PRODUCT_PRICE: number;
    PRODUCT_STOCK_QTY: number;
}

export interface IPaginationProductModel {
    products: IProductModel[];
    page: number;
    pageSize: number;
    totalPages: number;
    totalProducts: number;
}