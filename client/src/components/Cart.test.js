import Cart from './Cart';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const dummyCartItems = [
  {
    _id: "62a0e8e79a2b9824a1a8bfc7",
    title: "cookieeees2",
    price: 22,
    quantity: 5,
    productId: "62a0c84395286d11c60c01ed",
    createdAt: "2022-06-08T18:22:31.908Z",
    updatedAt: "2022-06-08T18:26:48.659Z",
    __v: 0
  },
  {
    _id: "62a0e8f19a2b9824a1a8bfc9",
    title: "kitten",
    price: 32523,
    quantity: 3,
    productId: "62a0e8f09a2b9824a1a8bfc8",
    createdAt: "2022-06-08T18:22:41.393Z",
    updatedAt: "2022-06-08T18:27:02.238Z",
    __v: 0
  }
]

describe('Cart', () => {
  let fn

  beforeEach(() => {
    fn = jest.fn()
    render(<Cart cartItems={dummyCartItems} onCheckout={fn} />)
  })

  it('contains title, quantity and price table headings', () => {
    const titleHeader = screen.getByRole("columnheader", { name: /Item/ })
    expect(titleHeader).toBeInTheDocument()

    const quantityHeader = screen.getByRole("columnheader", { name: /Quantity/ })
    expect(quantityHeader).toBeInTheDocument()

    const priceHeader = screen.getByRole("columnheader", { name: /Price/ })
    expect(priceHeader).toBeInTheDocument()
  })

  it('contains an item with title, quantity and price', () => {
    const titleValue = screen.getByRole("cell", { name: /cookieeees2/ })
    expect(titleValue).toBeInTheDocument()

    const quantityValue = screen.getByRole("cell", { name: '5' })
    expect(quantityValue).toBeInTheDocument()

    const priceValue = screen.getByRole("cell", { name: '22' })
    expect(priceValue).toBeInTheDocument()
  })

  it('has a checkout button', () => {
    const checkoutButton = screen.getByRole("link", { name: /Checkout/ })
    expect(checkoutButton).toBeInTheDocument()
  })

  it('can checkout items', () => {
    const checkoutButton = screen.getByRole("link", { name: /Checkout/ })
    userEvent.click(checkoutButton)
    expect(fn.mock.calls).toHaveLength(1)
  })
})