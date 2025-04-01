import toast from "react-hot-toast";

export const ToastSuccess = (message = "عملیات با موفقیت انجام شد") => {
  // Using a unique ID to prevent duplicate toasts
  toast.success(message, { id: "clipboard" });
};

export const ToastInfo = (message = "عملیات با موفقیت انجام شد") => {
  toast(message); // Using a neutral info-style toast
};

export const ToastFail = (message = "خطا در انجام عملیات!") => {
  toast.error(message);
};

export const ToastAuthFail = (message = "لطفا لاگین کنید") => {
  toast.error(message);
};
