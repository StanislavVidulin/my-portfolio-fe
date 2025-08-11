import { NotificationProps } from "./types";

export default function Notification({ message, onClose, isError = false }: NotificationProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className={`rounded-lg p-8 max-w-sm w-full text-center shadow-lg ${
          isError ? "bg-red-800" : "bg-gray-800"
        }`}
      >
        <div className={`mb-4 text-6xl ${isError ? "text-red-400" : "text-green-400"}`}>
          {isError ? "✗" : "✓"}
        </div>
        <p className="text-white text-lg mb-6">{message}</p>
        <button
          onClick={onClose}
          className={`${isError ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"} text-white px-6 py-2 rounded-md font-semibold`}
        >
          OK
        </button>
      </div>
    </div>
  );
}
