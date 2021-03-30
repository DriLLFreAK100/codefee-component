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
  let el: HTMLElement = getNotificationHost(id);

  // Create Notification Message
  const translateY = (el.children.length * -148);
  const newNotificationEl = document.createElement('cf-notification-message');
  newNotificationEl.id = uuidv4();
  newNotificationEl.textContent = message;
  newNotificationEl.setAttribute('type', type);
  newNotificationEl.style.opacity = '0';
  newNotificationEl.style.transform = `translateY(${translateY + 148}px)`;

  // Append to shadow root
  el.appendChild(newNotificationEl);

  // Animate
  setTimeout(() => {
    newNotificationEl.style.opacity = '1';
    newNotificationEl.style.transform = `translateY(${translateY}px)`;
  }, 100);

  // Set clear
  setTimeout(() => {
    clearNotification(el, newNotificationEl);
  }, duration);
};

export const reconcileNotificationPositions = (id?: string) => {
  // Locate Notification host
  let el: HTMLElement = getNotificationHost(id);

  // Reassign translate value
  for (let i = 0; i < el.children.length; i++) {
    (el.children.item(i) as HTMLElement).style.transform = `translateY(${i * -148}px)`;
  }
};

export const clearNotification = (hostElement: HTMLElement, messageElement: HTMLElement) => {
  if (hostElement.querySelector(`[id='${messageElement.id}']`)) {
    // Animate Clear
    messageElement.style.opacity = '0';

    const currentTransform = messageElement.style.transform;
    const currentTranslateY = parseInt(currentTransform.substring(
      currentTransform.lastIndexOf("(") + 1,
      currentTransform.lastIndexOf("px)")
    ), 10);
    messageElement.style.transform = `translateY(${currentTranslateY + 148}px)`;

    // Clear after animation
    setTimeout(() => {
      hostElement.removeChild(messageElement);
      reconcileNotificationPositions();
    }, 200);
  }
};

export const getNotificationHost = (id: string) => {
  let el: HTMLElement = null;

  if (id) {
    el = document.querySelector(`#${id} > div`);
  } else {
    el = document.querySelector('cf-notification > div');
  }

  return el;
};
