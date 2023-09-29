export interface IProductModel{
    _id: string;
    PRODUCT_NAME: string;
    PRODUCT_DESCRIPTION: string;
    PRODUCT_SKU: string;
    PRODUCT_IMAGE: string;
    PRODUCT_CATEGORIES: string[];
    PRODUCT_PRICE: number;
    PRODUCT_STOCK_QTY: number;
}
export interface IProductModeltoUpdate {
    PRODUCT_NAME: string;
    PRODUCT_DESCRIPTION: string;
    PRODUCT_SKU: string;
    PRODUCT_IMAGE: string;
    PRODUCT_CATEGORIES_ID: string[];
    PRODUCT_PRICE: number;
    PRODUCT_STOCK_QTY: number;
}

export interface IPaginationProductModel extends IPaginationSetup {
    products: IProductModel[];
}

export interface IPaginationSetup {
    page : number;
    totalPages : number;
    totalProducts : number;
    pageSize : number;
}