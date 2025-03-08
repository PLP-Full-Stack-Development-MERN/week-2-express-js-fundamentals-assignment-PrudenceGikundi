[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/-gq_FNSX)
**Week 2: Express.js Fundamentals Assignment**

**Objective:**

- Apply Express.js concepts learned throughout the week.
- Develop hands-on experience with creating routes, middleware, and API endpoints.
- Understand and implement RESTful APIs.

**Instructions:**

1. **Setup Express.js Project:**

   - Install Node.js using NVM.
   - Create a new project folder named `express-assignment`.
   - Initialize a Node.js project using:
     ```sh
     npm init -y
     ```
   - Install necessary dependencies:
     ```sh
     npm install express dotenv
     ```

2. **Project Structure:**

   - Organize your project files with a clear folder structure:
     ```
     express-assignment/
     │-- routes/
     │    ├── userRoutes.js
     │    ├── productRoutes.js
     │-- middleware/
     │    ├── logger.js
     │-- controllers/
     │    ├── userController.js
     │    ├── productController.js
     │-- index.js
     │-- package.json
     │-- README.md
     │-- .env
     ```

3. **Create Routes:**

   - Create `userRoutes.js` and `productRoutes.js` inside the `routes/` folder.
   - Implement RESTful routes for users and products (GET, POST, PUT, DELETE).
   - Ensure proper usage of route parameters and query strings.

4. **Implement Middleware:**

   - Create a custom middleware function in `middleware/logger.js` to log request details (method, URL, timestamp).
   - Apply middleware globally to all routes.

5. **Develop Controllers:**

   - Create controller functions in `controllers/userController.js` and `controllers/productController.js`.
   - Implement business logic to handle requests and responses.

6. **Environment Variables:**

   - Use `dotenv` to manage environment variables.
   - Define variables such as `PORT` in the `.env` file and access them inside the application.

7. **Error Handling:**

   - Implement a global error-handling middleware to catch and respond to errors gracefully.

8. **Testing:**

   - Run the server using:
     ```sh
     node index.js
     ```
   - Test API endpoints using Postman or cURL.
   - Verify routes, middleware functionality, and error handling.

9. **Documentation:**

   - Add a `README.md` with instructions on setting up and running the project.
   - Document available API endpoints with descriptions and example requests.

10. **Submission:**

   - Push your code to your GitHub repository.

**Evaluation Criteria:**

- Correct implementation of Express routes and middleware.
- Proper error handling and logging.
- Clean project structure and code organization.
- Detailed documentation with clear instructions.
- Successful testing of all endpoints.









# ANSWERS
# Express.js Fundamentals Assignment

## Objective
- Apply Express.js concepts learned throughout the week.
- Develop hands-on experience with creating routes, middleware, and API endpoints.
- Understand and implement RESTful APIs.

## Instructions

### Step 1: Setup Express.js Project
1. **Install Node.js using NVM** (if not already installed).
2. **Create a new project folder**:
   ```sh
   mkdir express-assignment && cd express-assignment
   ```
3. **Initialize a Node.js project**:
   ```sh
   npm init -y
   ```
4. **Install necessary dependencies**:
   ```sh
   npm install express dotenv
   ```

### Step 2: Project Structure
Organize your project with the following structure:
```
express-assignment/
│-- routes/
│    ├── userRoutes.js
│    ├── productRoutes.js
│-- middleware/
│    ├── logger.js
│-- controllers/
│    ├── userController.js
│    ├── productController.js
│-- index.js
│-- package.json
│-- README.md
│-- .env
```

### Step 3: Create Routes
- Define RESTful routes for users and products in `routes/userRoutes.js` and `routes/productRoutes.js`.
- Implement **GET, POST, PUT, DELETE** methods.
- Utilize route parameters and query strings correctly.

### Step 4: Implement Middleware
- Create a custom logging middleware in `middleware/logger.js` that logs request details (method, URL, timestamp).
- Apply the middleware globally to all routes.

### Step 5: Develop Controllers
- Implement business logic in `controllers/userController.js` and `controllers/productController.js`.
- Handle different types of requests and responses efficiently.

### Step 6: Environment Variables
- Use `dotenv` to manage environment variables.
- Define `PORT` in the `.env` file:
  ```sh
  PORT=3000
  ```
- Access variables in `index.js`:
  ```js
  require('dotenv').config();
  const port = process.env.PORT || 3000;
  ```

### Step 7: Error Handling
- Implement global error-handling middleware to catch and respond to errors gracefully.

### Step 8: Testing
- Start the server:
  ```sh
  node index.js
  ```
- Use **Postman** or **cURL** to test API endpoints.
  ```sh
  curl -X GET http://localhost:3000/users
  ```

### Step 9: Documentation
- Add API endpoint descriptions in the `README.md`:
  - **GET /users** - Retrieve all users.
  - **POST /users** - Create a new user.
  - **PUT /users/:id** - Update a user.
  - **DELETE /users/:id** - Delete a user.
  - **GET /products** - Retrieve all products.
  - **POST /products** - Add a new product.
  - **PUT /products/:id** - Update a product.
  - **DELETE /products/:id** - Remove a product.

### Step 10: Submission
- Push your project to **GitHub**:
  ```sh
  git init
  git add .
  git commit -m "Initial commit"
  git branch -M main
  git remote add origin <your-repository-url>
  git push -u origin main
  ```




