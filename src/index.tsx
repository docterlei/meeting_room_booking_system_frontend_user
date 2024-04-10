import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, Link, Outlet } from 'react-router-dom';
import { Login } from './page/login';
import { Register } from './page/register';
import { UpdatePassword } from './page/updatePassword';
import { ErrorPage } from './page/errorPage';
import { Index } from './page/index';
import { UpdateInfo } from './page/update_info';
import { Menu } from './page/menu';
import { MeetingRoomList } from './page/meeting_room_list';
import { BookingHistory } from './page/bookingHistory';

const routes = [
  {
    path: "/",
    element: <Index></Index>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'update_info',
        element: <UpdateInfo />
      },
      {
        path: '/',
        element: <Menu/>,
        children: [
          {
            path: '/',
            element: <MeetingRoomList/>
          },
          {
            path: 'meeting_room_list',
            element: <MeetingRoomList/>
          },
          {
            path: 'booking_history',
            element: <BookingHistory/>
          }
        ]
    }
    
    ]
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "update_password",
    element: <UpdatePassword />,
  }
];
export const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<RouterProvider router={router}/>);

