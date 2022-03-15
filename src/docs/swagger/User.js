/**
 * @swagger
 * tags:
 *  name: User
 */

/**
 * @swagger
 * /api/v1/user/:
 *  get:
 *      summary: Get All user
 *      tags: [User]
 *      description: You must login Admin account and use JWT to get list user
 *      security:
 *          - bearerAuth: []
 *      responses:
 *        "200":
 *          description: ok
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
 * /api/v1/user/{id}:
 *  get:
 *      summary: Get User by UserID
 *      tags: [User]
 *      parameters:
 *        - in : path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *      responses:
 *        "200":
 *          description: ok
 *          content:
 *              application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      success:
 *                        type: string
 *                      data:
 *                        type: object
 *                        $ref: '#/components/schemas/User'
 *                  example:
 *                    success: true
 *                    data:
 *                      Name: "buithang"
 *                      Email: "buivietthang2393@gmail.com"
 *                      Password: "123456"
 *                      Telephone: "0979578023"
 *                      Age: "23"
 *                      Address: "170 đường số 2"
 *                      isActive: true
 *                      Role: "admin"
 *        "400":
 *          description: Id not true
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
 *                    message: Not Found
 */

/**
 * @swagger
 * /api/v1/user/{id}:
 *  delete:
 *      summary: Delete User by change isActive is false
 *      tags: [User]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *        - in : path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: User id
 *      description: You must login Admin account and use JWT to delete User
 *      responses:
 *        "200":
 *          description: ok
 */

/**
 * @swagger
 * /api/v1/user/{id}:
 *  patch:
 *      summary: Change role user
 *      tags: [User]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *        - in : path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: User id
 *      description: You must login Admin account and use JWT to delete User
 *      responses:
 *        "200":
 *          description: ok
 *          content:
 *              application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      success:
 *                        type: string
 *                      data:
 *                        type: object
 *                        $ref: '#/components/schemas/User'
 *                  example:
 *                    success: true
 *                    data:
 *                      Name: "buithang"
 *                      Email: "buivietthang2393@gmail.com"
 *                      Password: "123456"
 *                      Telephone: "0979578023"
 *                      Age: "23"
 *                      Address: "170 đường số 2"
 *                      isActive: true
 *                      Role: "admin"
 */

/**
 * @swagger
 * /api/v1/user/:
 *  patch:
 *      summary: Users Update Information
 *      tags: [User]
 *      security:
 *          - bearerAuth: []
 *      description: You must login to use this route
 *      requestBody:
 *          require: true
 *          content:
 *              application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      Name:
 *                        type: string
 *                      Address:
 *                        type: string
 *                      Telephone:
 *                          type: string
 *                      Age:
 *                          type: string
 *                  example:
 *                    Name: "buithang21"
 *                    Address: "Ngo 24b"
 *                    Telephone: "12344141"
 *                    Age: "21"
 *      responses:
 *        "200":
 *          description: ok
 *          content:
 *              application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      success:
 *                        type: string
 *                      data:
 *                        type: object
 *                        $ref: '#/components/schemas/User'
 *                  example:
 *                    success: true
 *                    data:
 *                      Name: "buithang"
 *                      Email: "buivietthang2393@gmail.com"
 *                      Password: "123456"
 *                      Telephone: "0979578023"
 *                      Age: "23"
 *                      Address: "170 đường số 2"
 *                      isActive: true
 *                      Role: "admin"
 *        "400":
 *          description: Confirm password not incorrest
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
 *                    message: Change role false
 */

/**
 * @swagger
 * /api/v1/user/:
 *  post:
 *      summary: User update password
 *      tags: [User]
 *      security:
 *          - bearerAuth: []
 *      description: User must be login to use this route
 *      requestBody:
 *          require: true
 *          content:
 *              application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      newpassord:
 *                        type: string
 *                      confirmpassword:
 *                        type: string
 *                  example:
 *                    newpassord: "12345"
 *                    confirmpassword: "12345"
 *      responses:
 *        "200":
 *          description: ok
 *        "400":
 *          description: Confirm password not incorrest
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
 *                    message: Confirm password not incorrest
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
 *        "404":
 *          description: User not found
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
 *                    statuscode: 404
 *                    message: User not found
 */
