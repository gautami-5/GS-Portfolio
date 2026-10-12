export function assetPath(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const basePath =
    process.env.NODE_ENV === "production" ? "/GS-Portfolio" : "";
  return `${basePath}${normalizedPath}`;
}
