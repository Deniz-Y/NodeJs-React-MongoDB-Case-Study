# NodeJs-React-MongoDB-Case-Study
This project is a monthly sales dashboard designed for suppliers/vendors. It provides insights into monthly sales through graphical representation and a comprehensive table showcasing product sales over time.

## Features

- A monthly sales chart displaying the sales performance of suppliers.
- A comprehensive table showcasing sales data of products over time.

## Technologies Used

- MongoDB: A NoSQL database used to store vendor, product, and order information.
- Node.js: Backend environment used to create API endpoints for fetching sales data.
- React: Frontend framework used to create an interactive dashboard for vendors.

## Folder Structure

- `server`: Contains backend Node.js code handling API requests and MongoDB connections.
- `client`: Consists of React components responsible for rendering the sales dashboard.

## Database Structure

### Orders Collection
_id: Unique order ID
cart_item: Detaylar, siparişte hangi ürünlerin satıldığını belirtir. Dizi içindeki her bir nesne bir ürünü temsil eder.
cart_item.$.product: Ürün ID'si
cart_item.$.item_count: Bir paketteki ürün adedi
cart_item.$.quantity: Bu üründen kaç paket olduğu
cart_item.$.cogs: Tedarikçiye ne kadar ödendiği
payment_at: Ödemenin yapıldığı tarih

### Products Collection
_id: Unique ürün ID'si
name: Ürün adı
vendor: Tedarikçi ID'si

### Vendors Collection
_id: Unique tedarikçi ID'si
name: Tedarikçi adı

