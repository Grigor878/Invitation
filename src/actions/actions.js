import toast from "react-hot-toast";

export function loading(text) {
    toast.loading(text);
}

export function success(text) {
    toast.dismiss(loading());
    toast.success(text);
}

export function error(text) {
    toast.dismiss(loading());
    toast.error(text);
}
