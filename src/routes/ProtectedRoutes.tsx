import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

// export default function ProtectedRoute({ children }: any) {
//   const token = useAuthStore((state) => state.token);

//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

export default function ProtectedRoute({ children, allowedRoles }: any) {
  const { token, user } = useAuthStore();

  if (!token) return <Navigate to="/login" replace />;

  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}