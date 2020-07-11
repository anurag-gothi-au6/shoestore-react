import {
    GET_PRODUCTS
} from "../actionTypes";

const initialState = {
    products: [
        {
            productId: '5e5ab300607452591bfe6a1d',
            productName: 'BLUEFIN',
            productPrice: 10.6,
            productImageURL: 'https://imshopping.rediff.com/imgshop/300-300/shopping/pixs/28705/j/jl_ms_3488_lbr_1._jl-collections-men-apos-s-formal-brown-mocassin-shoe-code-jl_ms_3488_lbr-.jpg'
        },
        {
            productId: '5e5ab300607452591bfe6a22',
            productName: 'CREVO',
            productPrice: 19.47,
            productImageURL: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        },
        {
            productId: '5e5ab300607452591bfe6a24',
            productName: 'CUPCAKE COUTURE',
            productPrice: 24.37,
            productImageURL: 'data:image/jpeg;base64,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'
        },
        {
            productId: '5e5ab300607452591bfe6a2b',
            productName: 'BZEES',
            productPrice: 13.16,
            productImageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgQKWS_uood_tBpfWDxnTFeqaHBWHXireQ5Q&usqp=CAU'
        },
        {
            productId: '5e5ab300607452591bfe6a33',
            productName: 'CALVIN KLEIN',
            productPrice: 24.67,
            productImageURL: 'https://e7.pngegg.com/pngimages/388/176/png-clipart-sports-shoes-asics-gelbeyond-4-mt-b453n4793-women-shoes-volleyball-asics-mens-gel-beyond-4-sneakers-lime-blue-red-extra-wide-tennis-shoes-for-women.png'
        },
        {
            productId: '5e5ab300607452591bfe6a36',
            productName: 'CL BY LAUNDRY',
            productPrice: 17.93,
            productImageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1jh4dbZIPifPoKMXVhPK7jgGDtUtt4bbqKQ&usqp=CAU'
        },
        {
            productId: '5e5ab300607452591bfe6a39',
            productName: 'COLE HAAN',
            productPrice: 21.96,
            productImageURL: 'https://f0.pngfuel.com/png/393/109/nike-free-sneakers-shoe-clothing-shoe-sale-flyer-png-clip-art-thumbnail.png'
        },
        {
            productId: '5e5ab300607452591bfe6a44',
            productName: 'CATERPILLAR',
            productPrice: 12.61,
            productImageURL: 'https://e7.pngegg.com/pngimages/388/176/png-clipart-sports-shoes-asics-gelbeyond-4-mt-b453n4793-women-shoes-volleyball-asics-mens-gel-beyond-4-sneakers-lime-blue-red-extra-wide-tennis-shoes-for-women.png'
        },
        {
            productId: '5e5ab300607452591bfe6a49',
            productName: 'AK ANNE KLEIN',
            productPrice: 11.96,
            productImageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSX-KonJABnSXRtVaorTUv_nGMVmFFCRtBIug&usqp=CAU'
        },
        {
            productId: '5e5ab300607452591bfe6a4a',
            productName: 'ADIDAS OUTDOOR',
            productPrice: 15.54,
            productImageURL: 'https://f0.pngfuel.com/png/393/109/nike-free-sneakers-shoe-clothing-shoe-sale-flyer-png-clip-art-thumbnail.png'
        },
        {
            productId: '5e5ab300607452591bfe6a57',
            productName: 'BEBE',
            productPrice: 20.92,
            productImageURL: 'https://f0.pngfuel.com/png/393/109/nike-free-sneakers-shoe-clothing-shoe-sale-flyer-png-clip-art-thumbnail.png'
        },
        {
            productId: '5e5ab300607452591bfe6a63',
            productName: 'BATMAN',
            productPrice: 13.57,
            productImageURL: 'https://imshopping.rediff.com/imgshop/300-300/shopping/pixs/28705/j/jl_ms_3488_lbr_1._jl-collections-men-apos-s-formal-brown-mocassin-shoe-code-jl_ms_3488_lbr-.jpg'
        },
        {
            productId: '5e5ab300607452591bfe6a6a',
            productName: 'CROCS',
            productPrice: 17.86,
            productImageURL: 'https://e7.pngegg.com/pngimages/388/176/png-clipart-sports-shoes-asics-gelbeyond-4-mt-b453n4793-women-shoes-volleyball-asics-mens-gel-beyond-4-sneakers-lime-blue-red-extra-wide-tennis-shoes-for-women.png'
        },
        {
            productId: '5e5ab300607452591bfe6a6f',
            productName: 'CLARKS',
            productPrice: 13.58,
            productImageURL: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        },
        {
            productId: '5e5ab300607452591bfe6a7f',
            productName: 'COLUMBIA',
            productPrice: 17.75,
            productImageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSX-KonJABnSXRtVaorTUv_nGMVmFFCRtBIug&usqp=CAU'
        }
    ]
};

const productReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_PRODUCTS:
            console.log(state)
            return { ...state, products: payload };
        default:
            console.log(1)
            return state;
    }
};

export default productReducer;
