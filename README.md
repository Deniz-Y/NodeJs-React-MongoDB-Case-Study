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

- `_id`: Unique order ID
- `cart_item`: Contains details about the items sold within the order. Each object within the array represents one product.
  - `cart_item.$.product`: Product ID
  - `cart_item.$.item_count`: Quantity of items in one pack
  - `cart_item.$.quantity`: Quantity of packs for this product
  - `cart_item.$.cogs`: Cost of goods sold to the supplier
- `payment_at`: Date when the payment is made

### Products Collection

- `_id`: Unique product ID
- `name`: Product name
- `vendor`: Vendor ID

### Vendors Collection

- `_id`: Unique vendor ID
- `name`: Vendor name

