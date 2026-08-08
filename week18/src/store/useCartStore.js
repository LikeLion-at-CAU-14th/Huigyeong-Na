import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
    persist(
        (set) => (({
        cartItems: [],
        addToCart: (product) =>
            set((state) => {
                const isExist = state.cartItems.some((cartItem) => cartItem.id === product.id);

                if (isExist){
                    return {cartItems: state.cartItems.map((cartItem) => cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)}
                }
                else{
                    return {cartItems: [...state.cartItems, product]}
                }
            }),

        removeFromCart: (index) =>
            set((state) => ({
                cartItems: state.cartItems.filter((_, i) => i !== index),
            })),

        decreaseFromCart: (productId) =>
            set((state) => ({
                cartItems: state.cartItems.map((cartItem) => cartItem.id === productId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem).filter((cartItem) => cartItem.quantity > 0)
            })),

    })),
    { name: 'cart-storage' })
);

export default useCartStore;