import { THU_DO } from "../Types/TypeDressRoom"

const initialState = {
    danhSachDo: [
        {
            id: 'hairstyle_1',
            type: "hairstyle",
            img: "../assets/images/hairstyle/hairstyle1.png"
        },
        {
            id: 'necklace_3',
            type: "necklaces",
            img: "../assets/images/necklaces/necklace3.png"
        },
        {
            id: 'handbag_3',
            type: "handbags",
            img: "../assets/images/handbags/handbag3.png"
        },
        {
            id: "shoes_5",
            type: "shoes",
            img: "../assets/images/shoes/shoes5.png"
        },
        {
            id: "botcloth_5",
            type: "botclothes",
            img: "../assets/images/clothes/botcloth5.png"
        },
        {
            id: "topcloth_1",
            type: "topclothes",
            img: "../assets/images/clothes/topcloth1.png"
        },
        {
            id: "background_4",
            type: "background",
            img: "../assets/images/background/background4.jpg"
        }
    ]
}

export const ExDressRoomReducer = (state = initialState, action) => {
    switch (action.type) {

        case THU_DO: {
            let danhSachDoUpdate = [...state.danhSachDo]
            danhSachDoUpdate.forEach((item) => {
                if (item.type === action.clothes.type) {
                    item.img = action.clothes.imgSrc_png
                    item.id = action.clothes.id
                }
            })
            state.danhSachDo = danhSachDoUpdate
            return { ...state }
        }


        default: return { ...state }

    }
}
