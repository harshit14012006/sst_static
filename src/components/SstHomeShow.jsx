import React from 'react';
import { Helmet } from 'react-helmet';

function SstHomeShow() {
  return (
    <div>
      <Helmet>
        <meta name="description" content="Shri Satya Technologies offers catchy and proficient website designs for corporate, business, social, and other organizations." />
        <meta name="keywords" content="Shri Satya Technologies, website design, corporate, business, social organizations, data management, cybersecurity solutions" />
        <meta name="author" content="Shri Satya Technologies" />
        <title>Shri Satya Technologies</title>
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-medium my-4 text-red-600">Best Solutions-Best Growth.</h2>
          <hr class="w-48 h-1 mx-auto my-4  border-0 rounded  bg-red-600"/>
          <p className="text-base leading-relaxed">
            At <strong className="font-semibold">Shri Satya Technologies</strong>, we have a team of experts to offer catchy and proficient website designs for any corporate, business, social, and other organizations.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/3 px-4 mb-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <img width="75" height="85" src="https://we-bridge.com/wp-content/uploads/2021/10/one-stop-shop-icon.png" className="w-20 h-20 object-contain" alt="One stop shop for the best cybersecurity and data management products" />
              </div>
              <div className="text-base">
                One stop shop for the best cybersecurity and data management products
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/3 px-4 mb-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <img width="75" height="85" src="https://we-bridge.com/wp-content/uploads/2021/10/simple-adoption-icon.png" className="w-20 h-20 object-contain" alt="Simple adoption with 100% software solutions" />
              </div>
              <div className="text-base">
                Simple adoption with 100% software solutions
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/3 px-4 mb-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <img width="75" height="85" src="https://we-bridge.com/wp-content/uploads/2021/10/entreprise-level-product-icon.png" className="w-20 h-20 object-contain" alt="Affordable Enterprise-level products for Enterprises" />
              </div>
              <div className="text-base">
                Affordable Enterprise-level products for Enterprises.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SstHomeShow;
