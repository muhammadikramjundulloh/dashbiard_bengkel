import {
  UserGroupIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ClockIcon
  

} from "@heroicons/react/24/solid";
import { Profile,Montir,Pesanan,Layanan } from "@/pages/dashboard";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "Montir",
        path: "/montir",
        element: <Montir />,
      },
      {
        icon: <ClockIcon {...icon} />,
        name: "Layanan",
        path: "/layanan",
        element: <Layanan />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "Pesanan",
        path: "/pesanan",
        element: <Pesanan />,
      },
    ],
  },
  

];

export default routes;
