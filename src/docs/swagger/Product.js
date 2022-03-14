/**
 * @swagger
 * tags:
 *  name: Product
 */

/**
 * @swagger
 * /api/v1/product/:
 *  get:
 *      summary: Get All Product
 *      tags: [Product]
 *      description: You must login Admin account and use JWT to get list Product
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
 *                          $ref: '#/components/schemas/Product'
 *                  example:
 *                    success: true
 *                    data:
 *                      _id: 620512ba0bbb67c4f6157e54
 *                      NameProduct: Áo ngắn tay
 *                      TypeProduct: Ao dài
 *                      Price: 20000
 *                      Description: Áo đẹp
 *        "400":
 *          description: Do not have any product
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
 * /api/v1/product/:
 *  post:
 *      summary: Create new Product
 *      tags: [Product]
 *      description: You must login Admin account and use JWT to get list Product
 *      security:
 *          - bearerAuth: []
 *      requestBody:
 *          require: true
 *          content:
 *              application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      NameProduct:
 *                        type: string
 *                        required: true
 *                      TypeProduct:
 *                        type: string
 *                        required: true
 *                      Price:
 *                        type: string
 *                        required: true
 *                      Description:
 *                        type: string
 *                  example:
 *                    NameProduct: "Áo Thun "
 *                    TypeProduct: "Áo Nam"
 *                    Price: "120000"
 *                    Description: "Áo mặc Thoáng Mát"
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
 *                          $ref: '#/components/schemas/Product'
 *                  example:
 *                    success: true
 *                    data:
 *                      _id: 620512ba0bbb67c4f6157e54
 *                      NameProduct: Áo ngắn tay
 *                      TypeProduct: Ao dài
 *                      Price: 20000
 *                      Description: Áo đẹp
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
 * /api/v1/product/{productId}:
 *  get:
 *      summary: Get Product by ID
 *      tags: [Product]
 *      description: You must login Admin account and use JWT to get list Product
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *        - in : path
 *          name: productId
 *          schema:
 *              type: string
 *          required: true
 *          description: Product Id
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
 *                          $ref: '#/components/schemas/Product'
 *                  example:
 *                    success: true
 *                    data:
 *                      _id: 620512ba0bbb67c4f6157e54
 *                      NameProduct: Áo ngắn tay
 *                      TypeProduct: Ao dài
 *                      Price: 20000
 *                      Description: Áo đẹp
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
 * /api/v1/product/{productId}:
 *  post:
 *      summary: Create Product Color
 *      tags: [Product]
 *      description: You must login Admin account and use JWT to get list Product
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *        - in : path
 *          name: productId
 *          schema:
 *              type: string
 *          required: true
 *          description: Product Id
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
 *                      Quality:
 *                        type: string
 *                        required: true
 *                  example:
 *                    Color: "Red"
 *                    Size: "37"
 *                    Quality: "8"
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
 *                          $ref: '#/components/schemas/ProductDetail'
 *                  example:
 *                    success: true
 *                    data:
 *                      _id: 620512ba0bbb67c4f6157e54
 *                      NameProduct: Áo ngắn tay
 *                      TypeProduct: Ao dài
 *                      Price: 20000
 *                      Description: Áo đẹp
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
 * /api/v1/product/{id}:
 *  patch:
 *      summary: Update Product
 *      tags: [Product]
 *      description: You must login Admin account and use JWT to get list Product
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *        - in : path
 *          name: productId
 *          schema:
 *              type: string
 *          required: true
 *          description: Product Id
 *      requestBody:
 *          require: true
 *          content:
 *              application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      NameProduct:
 *                        type: string
 *                        required: true
 *                      Price:
 *                        type: string
 *                        required: true
 *                      description:
 *                        type: string
 *                  example:
 *                    NameProduct: "Ao thun 2"
 *                    Price: 150000
 *                    description: "A thun mong nh"
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
 *                          $ref: '#/components/schemas/Product'
 *                  example:
 *                    success: true
 *                    data:
 *                      _id: 620512ba0bbb67c4f6157e54
 *                      NameProduct: "Ao thun 2"
 *                      Price: 150000
 *                      description: "A thun mong nh"
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
 * /api/v1/product/{productId}:
 *  delete:
 *      summary: Delete Product
 *      tags: [Product]
 *      description: You must login Admin account and use JWT to get list Product
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *        - in : path
 *          name: productId
 *          schema:
 *              type: string
 *          required: true
 *          description: Product Id
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
