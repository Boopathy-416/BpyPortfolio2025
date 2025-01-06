import React, { useState, useEffect } from "react";

// Notification Dropdown Component
export default function NotificationDropdown() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [openedMessage, setOpenedMessage] = useState(null); // To track which message is opened
  const [readNotifications, setReadNotifications] = useState(new Set()); // To track read/unread state of notifications

  const fetchNotifications = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const response = await fetch(
        `https://dummyjson.com/c/860d-6fb9-4272-b2b7?page=${page}&limit=5`
      );
      const data = await response.json();

      console.log(data, "DATAAAA"); // Log the response to inspect its structure

      const notificationsData = data?.mails || [];
      console.log(notificationsData, "notificationsData");

      if (notificationsData.length < 5) {
        setHasMore(false); // If there are fewer than 5 items, no more data
      }

      setNotifications((prev) => [...prev, ...notificationsData]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications(); // Fetch initial data when the component is mounted
  }, []);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight;
    if (bottom) {
      fetchNotifications();
    }
  };

  // Toggle read/unread status of a notification
  const toggleReadStatus = (notificationId) => {
    setReadNotifications((prev) => {
      const newReadNotifications = new Set(prev);
      if (newReadNotifications.has(notificationId)) {
        newReadNotifications.delete(notificationId); // Mark as unread
      } else {
        newReadNotifications.add(notificationId); // Mark as read
      }
      return newReadNotifications;
    });
  };

  // Handle opening a notification
  const handleOpenMessage = (notification) => {
    setOpenedMessage(notification);
    toggleReadStatus(notification.id); // Mark as read when opened
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Content */}
      <div
        className="absolute right-0 mt-2 w-80 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 max-h-96 overflow-y-auto"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        onScroll={handleScroll}
      >
        <div className="absolute bottom-0 right-0">
          <button
            className="bg-blue-500 fixed text-white p-1 m-5 bottom-65 rounded-full shadow-xl hover:bg-blue-600 transition"
            onClick={() => setNotifications([])} // Close notifications dropdown
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6 mr-1" // Added margin to space the icon from the text
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 19l-7-7 7-7" // Back arrow path
              />
            </svg>
            
          </button>
        </div>
        <div className="border-b px-4 py-3">
          <h2 className="text-base font-medium text-gray-900">Notifications</h2>
        </div>
        <div className="p-2 space-y-1">
          {/* Display notifications */}
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <button
                key={notification.id || index} // Use unique id or index if id is not present
                className="w-full text-left px-2 py-2 hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => handleOpenMessage(notification)} // Open message when clicked
              >
                <div
                  className="flex items-start gap-3 p-4 border rounded-md"
                  onClick={() => console.log("Notification clicked")}
                >
                  <div
                    className={`h-2 w-2 translate-y-2 rounded-full ${
                      readNotifications.has(notification.id)
                        ? "bg-gray-500"
                        : "bg-emerald-500"
                    }`}
                  />
                  <div>
                    <p
                      className={`text-sm font-medium ${
                        readNotifications.has(notification.id)
                          ? "text-gray-500"
                          : "text-gray-900"
                      }`}
                    >
                      {notification.sender || "New Mail"}
                    </p>
                    <p
                      className={`text-sm mt-1 ${
                        readNotifications.has(notification.id)
                          ? "text-gray-400"
                          : "text-gray-500"
                      }`}
                    >
                      {notification.timestamp || "No timestamp"}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <button
                      className={`text-sm ${
                        readNotifications.has(notification.id)
                          ? "text-gray-500"
                          : "text-blue-500"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent parent click event
                        toggleReadStatus(notification.id); // Toggle read/unread state
                      }}
                    >
                      {readNotifications.has(notification.id)
                        ? "Mark as Unread"
                        : "Mark as Read"}
                    </button>
                  </div>
                </div>
              </button>
            ))
          ) : (
            <p className="text-sm text-gray-500">No notifications available</p>
          )}
        </div>

        {/* Loading state */}
        {loading && (
          <p className="text-center text-sm text-gray-500 py-2">Loading...</p>
        )}

        {/* Lazy loading trigger */}
        {!loading && hasMore && notifications.length > 0 && (
          <div className="text-center py-2">
            <button
              className="text-sm text-blue-500 hover:underline"
              onClick={fetchNotifications} // Load more data
            >
              Load More
            </button>
          </div>
        )}

        {/* Close Button */}
      </div>

      {/* Message details view */}
      {openedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 max-w-lg rounded-md shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">
              {openedMessage.sender || "Unknown Sender"}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              {openedMessage.timestamp || "No timestamp"}
            </p>
            <p className="text-base">
              {openedMessage.content || "No content available"}
            </p>
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                onClick={() => setOpenedMessage(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
