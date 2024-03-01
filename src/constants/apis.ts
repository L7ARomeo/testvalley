export const HOST_SCHEMA =
  process.env['NEXT_PUBLIC_HOST_SCHEMA'] ?? process.env.NEXT_PUBLIC_HOST_SCHEMA
export const HOST =
  process.env['NEXT_PUBLIC_HOST'] ?? process.env.NEXT_PUBLIC_HOST
export const WEB_HOST = `${HOST_SCHEMA}${HOST}`
export const API_HOST = `${HOST_SCHEMA}api.${HOST}`
export const API_COLLECTIONS = `${API_HOST}/collections?prearrangedDiscount`
