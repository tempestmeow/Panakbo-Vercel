import { useRouter } from "next/navigation";

export default function ProductsDisplay({ products, toggleCart, cart }) {
  const router = useRouter();

  return (
    <>
      <div className="productsCollection">
        {products.map((product, index) => {
          let isInCart = cart.some((item) => item.id == product.id);

          return (
            <div
              className="productCard"
              key={index}
              style={{ cursor: "pointer" }}
            >
              <img
                src={product.img}
                className="productImage"
                onClick={() => router.push(`/products/${product.id}`)}
              />

              <div className="productDetails">
                <div className="productLabels">
                  <div className="productName">{product.name}</div>
                  <div className="productPrice">${product.price}</div>
                </div>
                <div className="productStatus">
                  <div className="statusIcon">
                    {!isInCart && (
                      <svg
                        onClick={() => toggleCart(product.id)}
                        width="37"
                        height="33"
                        viewBox="0 0 37 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="toggle-cart-icon"
                      >
                        <rect width="37" height="33" rx="12" fill="white" />
                        <rect
                          x="0.347222"
                          y="0.347222"
                          width="36.3056"
                          height="32.3056"
                          rx="11.6528"
                          stroke="#374957"
                          strokeOpacity="0.2"
                          strokeWidth="0.694444"
                        />
                        <g clipPath="url(#clip0_50_44)">
                          <path
                            d="M17.7084 15H19.2917V13H21.6667V11.6667H19.2917V9.66666H17.7084V11.6667H15.3334V13H17.7084V15ZM14.5417 21C13.6709 21 12.9663 21.6 12.9663 22.3333C12.9663 23.0667 13.6709 23.6667 14.5417 23.6667C15.4125 23.6667 16.125 23.0667 16.125 22.3333C16.125 21.6 15.4125 21 14.5417 21ZM22.4584 21C21.5875 21 20.8829 21.6 20.8829 22.3333C20.8829 23.0667 21.5875 23.6667 22.4584 23.6667C23.3292 23.6667 24.0417 23.0667 24.0417 22.3333C24.0417 21.6 23.3292 21 22.4584 21ZM14.6763 18.8333L14.7 18.7533L15.4125 17.6667H21.3104C21.9042 17.6667 22.4267 17.3933 22.6959 16.98L25.7517 12.3067L24.3742 11.6667H24.3663L23.4954 13L21.3104 16.3333H15.7529L15.65 16.1533L13.8767 13L13.1246 11.6667L12.3804 10.3333H9.79169V11.6667H11.375L14.225 16.7267L13.1563 18.36C13.0296 18.5467 12.9584 18.7667 12.9584 19C12.9584 19.7333 13.6709 20.3333 14.5417 20.3333H24.0417V19H14.8742C14.7713 19 14.6763 18.9267 14.6763 18.8333Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_50_44">
                            <rect
                              width="19"
                              height="16"
                              fill="white"
                              transform="translate(9 9)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                    {isInCart && (
                      <svg
                        onClick={() => toggleCart(product.id)}
                        width="37"
                        height="33"
                        viewBox="0 0 37 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="toggle-cart-icon"
                      >
                        <rect width="37" height="33" rx="12" fill="white" />
                        <rect
                          x="0.347222"
                          y="0.347222"
                          width="36.3056"
                          height="32.3056"
                          rx="11.6528"
                          stroke="#374957"
                          strokeOpacity="0.2"
                          strokeWidth="0.694444"
                        />
                        <g clipPath="url(#clip0_50_44)">
                          <path
                            d="M26.9946 24.1533L11.1929 10.8467L10.5833 10.3333L10.0054 9.84668L9 10.6933L12.4754 13.62L14.225 16.7267L13.1563 18.36C13.0296 18.5467 12.9583 18.7667 12.9583 19C12.9583 19.7333 13.6708 20.3333 14.5417 20.3333H20.4475L21.54 21.2533C21.1442 21.4933 20.8829 21.8867 20.8829 22.3333C20.8829 23.0667 21.5875 23.6667 22.4583 23.6667C22.9888 23.6667 23.4558 23.4467 23.7408 23.1067L25.9892 25L26.9946 24.1533ZM14.8742 19C14.7633 19 14.6763 18.9267 14.6763 18.8333L14.7 18.7533L15.4125 17.6667H17.2808L18.8642 19H14.8742ZM21.3104 17.6667C21.9042 17.6667 22.4267 17.3933 22.6958 16.98L25.53 12.6533C25.5933 12.56 25.625 12.4467 25.625 12.3333C25.625 11.9667 25.2688 11.6667 24.8333 11.6667H14.1775L21.3104 17.6667ZM14.5417 21C13.6708 21 12.9663 21.6 12.9663 22.3333C12.9663 23.0667 13.6708 23.6667 14.5417 23.6667C15.4125 23.6667 16.125 23.0667 16.125 22.3333C16.125 21.6 15.4125 21 14.5417 21Z"
                            fill="#323232"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_50_44">
                            <rect
                              width="19"
                              height="16"
                              fill="white"
                              transform="translate(9 9)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                  </div>
                  <div className="statusIcon">
                    <svg
                      width="37"
                      height="33"
                      viewBox="0 0 37 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="arrow-product-icon"
                      onClick={() => router.push(`/products/${product.id}`)}
                    >
                      <rect width="37" height="33" rx="12" fill="white" />
                      <rect
                        x="0.347222"
                        y="0.347222"
                        width="36.3056"
                        height="32.3056"
                        rx="11.6528"
                        stroke="#374957"
                        strokeOpacity="0.2"
                        strokeWidth="0.694444"
                      />
                      <path
                        d="M24.9039 16.5C24.8987 15.9574 24.6724 15.4387 24.2741 15.0562L19.6954 10.6219C19.4954 10.4298 19.2249 10.322 18.9429 10.322C18.661 10.322 18.3905 10.4298 18.1905 10.6219C18.0905 10.7177 18.0111 10.8318 17.9569 10.9575C17.9027 11.0831 17.8748 11.2179 17.8748 11.3541C17.8748 11.4902 17.9027 11.625 17.9569 11.7507C18.0111 11.8763 18.0905 11.9904 18.1905 12.0862L21.7019 15.4687H11.0289C10.7458 15.4687 10.4743 15.5774 10.2742 15.7708C10.074 15.9642 9.96155 16.2265 9.96155 16.5C9.96155 16.7735 10.074 17.0358 10.2742 17.2292C10.4743 17.4226 10.7458 17.5312 11.0289 17.5312H21.7019L18.1905 20.924C17.9895 21.1169 17.876 21.3789 17.875 21.6526C17.874 21.9262 17.9856 22.1891 18.1852 22.3833C18.3847 22.5775 18.6559 22.6871 18.9392 22.6881C19.2224 22.689 19.4944 22.5812 19.6954 22.3884L24.2741 17.954C24.675 17.569 24.9015 17.0461 24.9039 16.5Z"
                        fill="#202727"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
