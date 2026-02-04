import { notification } from "antd";
import type { NotificationArgsProps } from "antd";

export type NotifyType = "success" | "error" | "info" | "warning";

export const useNotify = () => {
  const [api, contextHolder] = notification.useNotification();

  const notify = (
    type: NotifyType,
    title: string,
    description?: string,
    options?: Partial<NotificationArgsProps>,
  ) => {
    api[type]({
      title,
      description,
      placement: "topRight",
      duration: 3,
      ...options,
    });
  };

  return {
    contextHolder,

    success: (
      title: string,
      desc?: string,
      options?: Partial<NotificationArgsProps>,
    ) => notify("success", title, desc, options),

    error: (
      title: string,
      desc?: string,
      options?: Partial<NotificationArgsProps>,
    ) => notify("error", title, desc, options),
  };
};
