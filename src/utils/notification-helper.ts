import { v4 as uuidv4 } from 'uuid';
import { FeedbackType } from '../common/types';

interface INotifyOptions {
  /**
   * HTML id of the tag that hosts cf-notification
   */
  id?: string;
  /**
   * Duration to show notification in ms
   */
  duration?: number;
  /**
   * Feedback type - info, success, warning or error
   */
  type?: FeedbackType;
}

export const notify = (message: string, options?: INotifyOptions) => {
  const defaultOptions: INotifyOptions = {
    id: undefined,
    type: undefined,
    duration: 5000,
  }

  const {
    id,
    duration,
    type,
  } = { ...defaultOptions, ...options };

  // Locate Notification host
  let el: HTMLElement = null;

  if (id) {
    el = document.querySelector(`#${id} > div`);
  } else {
    el = document.querySelector('cf-notification > div');
  }

  // Create Notification Message
  const newNotificationEl = document.createElement('cf-notification-message');
  newNotificationEl.id = uuidv4();
  newNotificationEl.textContent = message;
  newNotificationEl.setAttribute('type', type);
  newNotificationEl.style.transform = `translateY(-${el.children.length * 148}px)`;

  // Append to shadow root
  el.appendChild(newNotificationEl);

  // Set clear
  setTimeout(() => {
    el.removeChild(newNotificationEl);
    reconcileNotificationPositions();
  }, duration)
};

export const reconcileNotificationPositions = (id?: string) => {
  // Locate Notification host
  let el: HTMLElement = null;

  if (id) {
    el = document.querySelector(`#${id} > div`);
  } else {
    el = document.querySelector('cf-notification > div');
  }

  // Reassign translate value
  for (let i = 0; i < el.children.length; i++) {
    (el.children.item(i) as HTMLElement).style.transform = `translateY(-${i * 148}px)`;
  }
}
