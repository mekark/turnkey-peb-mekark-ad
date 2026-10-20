export const BASE_PATH = "/turnkey-peb";

// next/image and fetch don't add basePath to root-relative public paths.
export const asset = (path: string) => `${BASE_PATH}${path}`;
