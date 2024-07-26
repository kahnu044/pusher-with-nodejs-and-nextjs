import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';

const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
});

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const channel = pusher.subscribe(process.env.NEXT_PUBLIC_PUSHER_CHANNEL);

    channel.bind(process.env.NEXT_PUBLIC_EVENT_NAME, data => {

      console.log("Incoming data=>", data)

      setNotifications([...notifications, data]);

    });

    return () => {
      pusher.unsubscribe(process.env.NEXT_PUBLIC_PUSHER_CHANNEL);
    };
  }, [notifications]);

  return (
    <div>
      <h2 className='text-red-500'>Notifications</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
