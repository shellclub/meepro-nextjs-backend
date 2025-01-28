import { matches } from "lodash"

export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboards/:path*","/products-list/:path*"]}
