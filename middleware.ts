export { default } from "next-auth/middleware"

export const config = { matcher: ["/admin","/admin/add","/admin/upload","/admin/uploadproduct","/admin/table","/admin/table/:id*","/admin/update"]}