import { useLocation } from "react-router-dom";

function normalizePath(p) {
  if (!p || p === "/") return "/";
  const noTrail = p.replace(/\/$/, "");
  return noTrail || "/";
}

/**
 * Returns onClick handler factory: if link target is current route, prevent navigation and scroll to top.
 * @param {() => void} [onBefore] e.g. close mobile menu
 */
export function useSameRouteNavClick(onBefore) {
  const location = useLocation();

  return (to) => (e) => {
    onBefore?.();
    const pathPart = String(to).split("#")[0] || "/";
    if (normalizePath(pathPart) === normalizePath(location.pathname)) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
}
