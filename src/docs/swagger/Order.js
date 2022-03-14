/**
 * @swagger
 * tags:
 *  name: Order
 */

/**
 * @swagger
 * /api/v1/order/:
 *  get:
 *      summary: Get All Order status is not Pending
 *      tags: [Order]
 *      description: You must login Admin account and use JWT to get all order
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
 *                          $ref: '#/components/schemas/Order'
 *                  example:
 *                    success: true
 *                    data:
 *                      _id: 621c40b1786b85249a25c6a9
 *                      Customer: buivietthang2393@gmail.com
 *                      Status: WAITCONFRIM
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
 *                    message: Do not have any Order
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
 * /api/v1/order/:
 *  patch:
 *      summary: Update status order
 *      tags: [Order]
 *      description: You must login Admin account and use JWT to get list Product
 *      security:
 *          - bearerAuth: []
 *      requestBody:
 *          require: true
 *          description: Action have two choice is Canceled and Confirm
 *          content:
 *              application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      OrderID:
 *                        type: string
 *                        required: true
 *                      Stauts:
 *                        type: string
 *                        required: true
 *                      Action:
 *                        type: string
 *                        required: true
 *                  example:
 *                    OrderID: 621c40b1786b85249a25c6a9
 *                    Stauts: CANCELLED
 *                    Action: "Canceled"
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
 *                          type: object
 *                  example:
 *                    success: true
 *                    data:
 *                      _id: 621c40b1786b85249a25c6a9
 *                      Customer: buivietthang2393@gmail.com
 *                      Status: CANCELLED
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
