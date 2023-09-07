// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
// import useAdmin from "../hooks/useAdmin";
// import { Navigate, useLocation } from "react-router-dom";
// import useLearnData from "../hooks/useLearnData/useLearnData";
// const CertificateRoute = ({ children }: any) => {
//   const { user, loading }: any = useContext(AuthContext);
//   const [isAdmin, isAdminLoading] = useAdmin();
//   const location = useLocation();
//   const [allLearnData] = useLearnData();
//    // certificate 
//    const totalUnits = allLearnData.length;
//    const isLastUnit = selectedUnit.unit === allLearnData[totalUnits - 1].unit;
//   if (loading || isAdminLoading) {
//     return <progress className="progress w-56"></progress>;
//   }

//   if (user && isAdmin) {
//     return children;
//   }

//   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
// };

// export default CertificateRoute;
