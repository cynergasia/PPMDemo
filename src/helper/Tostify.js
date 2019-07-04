import { toast } from "react-toastify";

export const tostify = (msg, type) => {
  if (type === "success") toast.success(msg);
  if (type === "info") toast.info(msg);
  if (type === "error") toast.error(msg);
};
