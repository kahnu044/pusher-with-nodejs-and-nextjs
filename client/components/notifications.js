import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Pusher from 'pusher-js';

const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
});

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [user, setUser] = useState('Guest');

  useEffect(() => {
    const channel = pusher.subscribe(process.env.NEXT_PUBLIC_PUSHER_CHANNEL);

    channel.bind(process.env.NEXT_PUBLIC_EVENT_NAME, data => {

      console.log("Incoming data=>", data)

      toast.success(data?.message || "Nothing special for you");
      setUser(data?.user)
      // setNotifications([...notifications, data]);

    });

    return () => {
      pusher.unsubscribe(process.env.NEXT_PUBLIC_PUSHER_CHANNEL);
    };
  }, [notifications]);

  return (
    <div>
      <h2 className='text-red-500'>Hi {user}</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
