/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Authencation
 */

/**
 * @swagger
 * /api/v1/auth/login:
 *  post:
 *      summary: User login
 *      tags: [Auth]
 *      requestBody:
 *          require: true
 *          content:
 *              application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      Email:
 *                        type: string
 *                      Password:
 *                        type: string
 *                  example:
 *                    Email: "buivietthang2393@gmail.com"
 *                    Password: "123456"
 *      responses:
 *        "200":
 *          description: ok
 *          content:
 *              application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      success:
 *                        type: boolean
 *                      token:
 *                        type: string
 *                  example:
 *                    success: true
 *                    token:
 *                      eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiQnVpdGhhbmciLCJFbWFpbCI6ImJ1aXZpZXR0aGFuZzIzOTNAZ21haWwuY29tIiwiUm9sZSI6ImFkbWluIiwiaWF0IjoxNjQ3MDA1NzUxLCJleHAiOjE2NDcwMDkzNTF9.BmKRP4lnUGvJbtxReJXrGYdFMk9w3pG-vRbEZSeQuFs
 *        "400":
 *          description: User login fail
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
 *                    message: User not found
 */

/**
 * @swagger
 * /api/v1/auth/register:
 *  put:
 *      summary: Resgister new account
 *      tags: [Auth]
 *      requestBody:
 *          require: true
 *          content:
 *              application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      Name:
 *                        type: string
 *                      Email:
 *                        type: string
 *                      Password:
 *                        type: string
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
 *                      isActive: true
 *                      Role: "guest"
 *        "400":
 *          description: Email is dupplicated
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
 *                    message: Email is dupplicated
 */

/**
 * @swagger
 * /api/v1/auth/forgot:
 *  post:
 *      summary: Send one-time link to reset password
 *      tags: [Auth]
 *      requestBody:
 *          require: true
 *          content:
 *              application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      Email:
 *                        type: string
 *                  example:
 *                    Email: "buivietthang2393@gmail.com"
 *      responses:
 *        "200":
 *          description: ok
 *          content:
 *              application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      success:
 *                        type: boolean
 *                      LinkResetPassword:
 *                        type: String
 *                  example:
 *                    success: true
 *                    LinkResetPassword:
 *                      http://localhost:3000/api/v1/auth/reset/62069ac2456f2224afc11794/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImJ1aXZpZXR0aGFuZzIzOTNAZ21haWwuY29tIiwiTmFtZSI6IkJ1aXRoYW5nIiwiaWF0IjoxNjQ3MDA2NDAyLCJleHAiOjE2NDcwMDY0MjJ9.8_InI9nsxIlBH3jAD8NRQ3znmvXFY5ak-p7j7Iu4oRw
 *        "400":
 *          description: Email not found
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
 *                    message: Email not found
 */

/**
 * @swagger
 * /api/v1/auth/reset:
 *  post:
 *      summary: Reset password
 *      tags: [Auth]
 *      parameters:
 *        - in : path
 *          name: link
 *          schema:
 *              type: string
 *          required: true
 *          description: get all string behind http://localhost:3000/api/v1/auth/reset/ in link reset password
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
 *          content:
 *            application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      success:
 *                        type: boolean
 *                  example:
 *                    success: true
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
 *          description: Link is expired
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
 *                    message: Link is expired
 */
