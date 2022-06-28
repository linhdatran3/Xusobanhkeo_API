const WooCommerceRestApi = require("woocommerce-api");

const WooCommerce = new WooCommerceRestApi({
  url: "https://xusobanhkeo.com", // Your store URL
  consumerKey: "ck_467fe4008a12a00864a14b0144c96a775340a7d9", // Your consumer key
  consumerSecret: "cs_fea6357adb02c7636e1d0225d90623ff2ae31971", // Your consumer secret
  wpAPI: true,
  version: "wc/v3", // WooCommerce WP REST API version
});

// try {
//   WooCommerce.get("products", (req, res) => {
//     console.log(res.body);
//   });
// } catch (err) {
//   console.log("err" + err);
// }

// const data = {
//   name: "Brownie chocolate mix cheese",
//   type: "simple",
//   regular_price: "115000",
//   description: `B R O W N I E chocolate mix cheese ✨
//     🔥 115.000đ/ hộp 300gr
//     ( 2 miếng phô mai, 12 miếng mini chocolate )
//     🍫 Bánh brownie ai thích ăn nóng thì quay lò vi sóng 2 phút đảm bảo rất ngon nhé. Bánh brownies ra lò mềm ẩm thơm lừng mùi vị chocolate.
//     🧀 Cream Chese Brownies ngọt ngào, thơm phức mùi chocolate quyện với cái béo ngậy của phô mai tươi.`,
//   short_description: `B R O W N I E chocolate mix cheese 115.000đ/ hộp 300gr( 2 miếng phô mai, 12 miếng mini chocolate )
//      Bánh brownie ai thích ăn nóng thì quay lò vi sóng 2 phút đảm bảo rất ngon`,
//   categories: "Sản phẩm mới, Bánh tươi",
//   images: [
//     {
//       src: "https://product.hstatic.net/1000355547/product/bb65dccdf03c47e4ae10881505a1bc08_f428519e363d4f8e94f6b99cd6e3758e_1024x1024.jpg",
//     },
//     {
//       src: "https://product.hstatic.net/1000355547/product/bb65dccdf03c47e4ae10881505a1bc08_f428519e363d4f8e94f6b99cd6e3758e_medium.jpg",
//     },
//     {
//       src: "https://product.hstatic.net/1000355547/product/252074002_2669876806651126_6730381222483146318_n_bbd0cf0526b0410b80f992f294960c21_medium.jpg",
//     },
//     {
//       src: "https://product.hstatic.net/1000355547/product/248947689_2669876869984453_1069235140861722226_n_344b1e087dd5468fb84e1dc79bcdbf44_medium.jpg",
//     },
//   ],
// };
// try {
//   WooCommerce.post("products", data, (req, res) => {
//     console.log(res.body);
//   });
// } catch (err) {
//   console.log("err" + err);
// }
// try {
//   WooCommerce.get("products/1625", (req, res) => {
//     console.log(res.body);
//   });
// } catch (err) {
//   console.log("err" + err);
// }

// const dataUpdatePrice = {
//   regular_price: "120000",
// };

// try {
//   WooCommerce.put("products/1652", dataUpdatePrice, (req, res) => {
//     console.log("Update completed!");
//   });
// } catch (err) {
//   console.log("err" + err);
// }

// try {
//   WooCommerce.delete("products/1652", (req, res) => {
//     console.log("Delete completed!");
//   });
// } catch (err) {
//   console.log("Delete failured!");
// }

const dataBatch = {
  create: [
    {
      name: "Brownie chocolate mix cheese",
      type: "simple",
      regular_price: "115000",
      description: `B R O W N I E chocolate mix cheese ✨
    🔥 115.000đ/ hộp 300gr
    ( 2 miếng phô mai, 12 miếng mini chocolate )
    🍫 Bánh brownie ai thích ăn nóng thì quay lò vi sóng 2 phút đảm bảo rất ngon nhé. Bánh brownies ra lò mềm ẩm thơm lừng mùi vị chocolate.
    🧀 Cream Chese Brownies ngọt ngào, thơm phức mùi chocolate quyện với cái béo ngậy của phô mai tươi.`,
      short_description: `B R O W N I E chocolate mix cheese 115.000đ/ hộp 300gr( 2 miếng phô mai, 12 miếng mini chocolate )
     Bánh brownie ai thích ăn nóng thì quay lò vi sóng 2 phút đảm bảo rất ngon`,
      categories: "Sản phẩm mới, Bánh tươi",
      images: [
        {
          src: "https://product.hstatic.net/1000355547/product/bb65dccdf03c47e4ae10881505a1bc08_f428519e363d4f8e94f6b99cd6e3758e_1024x1024.jpg",
        },
        {
          src: "https://product.hstatic.net/1000355547/product/bb65dccdf03c47e4ae10881505a1bc08_f428519e363d4f8e94f6b99cd6e3758e_medium.jpg",
        },
        {
          src: "https://product.hstatic.net/1000355547/product/252074002_2669876806651126_6730381222483146318_n_bbd0cf0526b0410b80f992f294960c21_medium.jpg",
        },
        {
          src: "https://product.hstatic.net/1000355547/product/248947689_2669876869984453_1069235140861722226_n_344b1e087dd5468fb84e1dc79bcdbf44_medium.jpg",
        },
      ],
    },
  ],
  update: [
    {
      id: 1642,
      regular_price: "170000.000",
    },
  ],
  delete: [1605],
};
try {
  WooCommerce.post("products/batch", dataBatch, (req, res) => {
    console.log("Batch completed!");
  });
} catch (error) {
  console.log("Batch failured!");
}

// WooCommerce.get("products")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error.response.data);
//   });

// app.get('/', (req, response) => {

// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
