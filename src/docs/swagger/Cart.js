/**
 * @swagger
 * tags:
 *  name: Cart
 */

/**
 * @swagger
 * /api/v1/cart/:
 *  get:
 *      summary: Get Cart User
 *      tags: [Cart]
 *      description: You must login and use JWT to get cart
 *      security:
 *          - bearerAuth: []
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *                schema:
 *                  type: array
 *                  properties:
 *                      success:
 *                          type: boolean
 *                      data:
 *                          type: array
 *                          $ref: '#/components/schemas/OrderDetail'
 *                  example:
 *                    success: true
 *                    data:
 *                      OrderID: 621c40b1786b85249a25c6a9
 *                      ProductID: 620514950bbb67c4f6157e56
 *                      Color: Red
 *                      Size: 37
 *                      Quality: 3
 *        "400":
 *          description: Do not have any Order
 *          content:
 *            application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      success:
 *                        type: boolean
 *                      statuscode:
 *                        type: integer
 *                      message:
 *                        type: string
 *                  example:
 *                    success: false
 *                    statuscode: 400
 *                    message: Don't have any product in cart
 *        "401":
 *          description: User not login
 *          content:
 *            application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      success:
 *                        type: boolean
 *                      statuscode:
 *                        type: integer
 *                      message:
 *                        type: string
 *                  example:
 *                    success: false
 *                    statuscode: 401
 *                    message: Unauthorized
 *        "403":
 *          description: User not admin
 *          content:
 *            application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      success:
 *                        type: boolean
 *                      statuscode:
 *                        type: integer
 *                      message:
 *                        type: string
 *                  example:
 *                    success: false
 *                    statuscode: 400
 *                    message: Access Denied
 */
/**
 * @swagger
 * /api/v1/cart/:
 *  put:
 *      summary: Add product in cart
 *      tags: [Cart]
 *      description: You must login and use JWT to get list Product
 *      security:
 *          - bearerAuth: []
 *      requestBody:
 *          require: true
 *          content:
 *              application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      ProductID:
 *                        type: string
 *                        required: true
 *                      Color:
 *                        type: string
 *                        required: true
 *                      Size:
 *                        type: string
 *                        required: true
 *                      Amount:
 *                        type: string
 *                        required: true
 *                  example:
 *                      ProductID: 620514950bbb67c4f6157e56
 *                      Color: Red
 *                      Size: 37
 *                      Quality: 3
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *                schema:
 *                  type: array
 *                  properties:
 *                      success:
 *                          type: boolean
 *                      data:
 *                          type: array
 *                          $ref: '#/components/schemas/OrderDetail'
 *                  example:
 *                    success: true
 *                    data:
 *                      OrderID: 621c40b1786b85249a25c6a9
 *                      ProductID: 620514950bbb67c4f6157e56
 *                      Color: Red
 *                      Size: 37
 *                      Quality: 3
 *        "401":
 *          description: User not login
 *          content:
 *            application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      success:
 *                        type: boolean
 *                      statuscode:
 *                        type: integer
 *                      message:
 *                        type: string
 *                  example:
 *                    success: false
 *                    statuscode: 401
 *                    message: Unauthorized
 *        "403":
 *          description: User not admin
 *          content:
 *            application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      success:
 *                        type: boolean
 *                      statuscode:
 *                        type: integer
 *                      message:
 *                        type: string
 *                  example:
 *                    success: false
 *                    statuscode: 400
 *                    message: Access Denied
 */
/**
 * @swagger
 * /api/v1/cart/{id}:
 *  delete:
 *      summary: Delete product from cart
 *      tags: [Cart]
 *      description: You must login and use JWT to get list Product
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *        - in : path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: ID document OrderDetal have product
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *                schema:
 *                  type: array
 *                  properties:
 *                      success:
 *                          type: boolean
 *                  example:
 *                    success: true
 *        "400":
 *          description: Do not have any Order
 *          content:
 *            application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      success:
 *                        type: boolean
 *                      statuscode:
 *                        type: integer
 *                      message:
 *                        type: string
 *                  example:
 *                    success: false
 *                    statuscode: 400
 *                    message: Product not found
 *        "401":
 *          description: User not login
 *          content:
 *            application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      success:
 *                        type: boolean
 *                      statuscode:
 *                        type: integer
 *                      message:
 *                        type: string
 *                  example:
 *                    success: false
 *                    statuscode: 401
 *                    message: Unauthorized
 *        "403":
 *          description: User not admin
 *          content:
 *            application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      success:
 *                        type: boolean
 *                      statuscode:
 *                        type: integer
 *                      message:
 *                        type: string
 *                  example:
 *                    success: false
 *                    statuscode: 400
 *                    message: Access Denied
 */
/**
 * @swagger
 * /api/v1/cart/{CartID}:
 *  post:
 *      summary: Buy Cart (Cart have status is pending)
 *      tags: [Cart]
 *      description: You must login and use JWT to get list Product
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *        - in : path
 *          name: CartID
 *          schema:
 *              type: string
 *          required: true
 *          description: ID Cart
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *                schema:
 *                  type: array
 *                  properties:
 *                      success:
 *                          type: boolean
 *                      data:
 *                          type: array
 *                          $ref: '#/components/schemas/OrderDetail'
 *                  example:
 *                    success: true
 *                    data:
 *                      _id: 621c40b1786b85249a25c6a9
 *                      Customer: buivietthang2393@gmail.com
 *                      Status: WAITCONFRIM
 *        "401":
 *          description: User not login
 *          content:
 *            application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      success:
 *                        type: boolean
 *                      statuscode:
 *                        type: integer
 *                      message:
 *                        type: string
 *                  example:
 *                    success: false
 *                    statuscode: 401
 *                    message: Unauthorized
 *        "403":
 *          description: User not admin
 *          content:
 *            application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      success:
 *                        type: boolean
 *                      statuscode:
 *                        type: integer
 *                      message:
 *                        type: string
 *                  example:
 *                    success: false
 *                    statuscode: 400
 *                    message: Access Denied
 */
/**
 * @swagger
 * /api/v1/cart/{id}:
 *  patch:
 *      summary: Update Product in cart
 *      tags: [Cart]
 *      description: You must login and use JWT to get list Product
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *        - in : path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: ID document OrderDetail have product in cart
 *      requestBody:
 *          require: true
 *          content:
 *              application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      Color:
 *                        type: string
 *                        required: true
 *                      Size:
 *                        type: string
 *                        required: true
 *                      Amount:
 *                        type: string
 *                        required: true
 *                  example:
 *                      Color: Red
 *                      Size: 37
 *                      Quality: 3
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *                schema:
 *                  type: array
 *                  properties:
 *                      success:
 *                          type: boolean
 *                      data:
 *                          type: array
 *                          $ref: '#/components/schemas/OrderDetail'
 *                  example:
 *                    success: true
 *                    data:
 *                      OrderID: 621c40b1786b85249a25c6a9
 *                      ProductID: 620514950bbb67c4f6157e56
 *                      Color: Red
 *                      Size: 37
 *                      Quality: 3
 *        "401":
 *          description: User not login
 *          content:
 *            application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      success:
 *                        type: boolean
 *                      statuscode:
 *                        type: integer
 *                      message:
 *                        type: string
 *                  example:
 *                    success: false
 *                    statuscode: 401
 *                    message: Unauthorized
 *        "403":
 *          description: User not admin
 *          content:
 *            application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      success:
 *                        type: boolean
 *                      statuscode:
 *                        type: integer
 *                      message:
 *                        type: string
 *                  example:
 *                    success: false
 *                    statuscode: 400
 *                    message: Access Denied
 */
