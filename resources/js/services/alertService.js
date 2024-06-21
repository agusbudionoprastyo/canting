import { useToast } from "vue-toastification";
/*
 * Position
 * --------------
 * top-left
 * top-center
 * top-left
 * bottom-right
 * bottom-center
 * bottom-left
 * */
export default {
    default: function (message = "Default", position = "top-left") {
        const toast = useToast();
        toast(message, {
            position: position,
        });
    },

    // success: function (message = "Success", position = "top-left") {
    //     const toast = useToast();
    //     toast.success(message, {
    //         position: position,
    //     });
    // },
    success: function (message = "Success", position = "top-left") {
        const toast = useToast();
        toast(message, {
            position: position,
            style: { backgroundColor: 'rgba(255, 43, 133, 0.5)' }, // Menggunakan nilai RGBA untuk warna latar belakang dengan transparansi
        });
    },

    info: function (message = "Info", position = "top-left") {
        const toast = useToast();
        toast.info(message, {
            position: position,
        });
    },

    warning: function (message = "Warning", position = "top-left") {
        const toast = useToast();
        toast.warning(message, {
            position: position,
        });
    },

    error: function (message = "Error", position = "top-left") {
        const toast = useToast();
        toast.error(message, {
            position: position,
        });
    },

    successFlip: function (status = null, message = "", position = "top-left") {
        const toast = useToast();
        if (status != null) {
            if (status) {
                message = message + " Updated Successfully.";
            } else {
                message = message + " Created Successfully.";
            }
        } else {
            message = message + " Deleted Successfully.";
        }

        toast.info(message, {
            position: position,
        });
    },

    successInfo: function (status = null, message = "", position = "top-left") {
        const toast = useToast();
        toast.info(message, {
            position: position,
        });
    },
};