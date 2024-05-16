export interface iProduct {
    id: number
    brand: string
    name: string
    price: string
    price_sign: string
    currency: string
    image_link: string
    product_link: string
    website_link: string
    description: string
    rating?: number
    category: string
    product_type: string
    tag_list: string[]
    created_at: string
    updated_at: string
    product_api_url: string
    api_featured_image: string
    product_colors: iProductColor[]
}

export interface iProductColor {
    hex_value: string
    colour_name: string
}

export interface iSelectedVariant {
    id: number;
    color: iProductColor
}

export interface iProductType {
    id: number
    title: string
    categories: iProductCategory[]
}

export interface iProductCategory {
    id: number,
    title: string
}

export interface iProductRequestParams {
    productTypeId?: string
    producTypeTitle?: string
    productCategoryId?: string
    productCategoryTitle?: string
    productTag?: string
    productId?: string
    productName?: string
    brand?: string
}