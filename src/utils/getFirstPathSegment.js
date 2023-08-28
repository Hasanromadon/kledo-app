export const getFirstPathSegment = (pathname) => {
    const segments = pathname.split("/");
    return "/"+segments[1] || "";
  };