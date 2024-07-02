import { notification } from 'antd';
import {ErrorResponse} from "../../app/api/apiSlice.interface.ts";
import {formatErrorKey} from "./utils.ts";

export type KjcNotificationType = 'success' | 'info' | 'warning' | 'error';

export interface  KjcNotificationProps {
  type:  KjcNotificationType;
  message: string;
  description?: string;
}

/**
 * Shows a kjc notification with the specified type, message, and description.
 *
 * @param { KjcNotificationProps} props - The properties of the notification.
 * @param { KjcNotificationType} props.type - The type of the notification.
 * @param {string} props.message - The message of the notification.
 * @param {string} [props.description] - The optional description of the notification.
 */
export const showKjcNotification = ({ type, message, description }: KjcNotificationProps) => {
  notification[type]({
    message,
    description,
  });
};

export const showKjcErrorNotification = (error: ErrorResponse) => {
  if (error) {
    const errorResponse = error as ErrorResponse;
    const firstKey = Object.keys(errorResponse.errors)[0];
    const firstError = errorResponse.errors[firstKey];
    const errorMessage = Array.isArray(firstError) ? firstError[0] : firstError;

    notification.error({
      message: `${formatErrorKey(firstKey)}`,
      description: errorMessage,
    });
  } else {
    notification.error({
      message: `Error`,
      description: `An unknown error occurred`,
    });
  }
};

export default {showKjcErrorNotification, showKjcNotification};