import Swal from "sweetalert2"

export const sweetAlert = (icon="success", title="Successfully", text="Press enter to continue.") => {
    Swal.fire({
        icon: `${icon}`,
        title: `${title}`,
        text: `${text}`,
        // timer: 2000,
        customClass: {
            popup: 'sweetAlert-popup',
            closeButton: 'sweetAlert-closeButton',
            icon: 'sweetAlert-icon',
            confirmButton: 'sweetAlert-confirmButton',
            cancelButton: 'sweetAlert-cancelButton',
        },
    })
}

export const sweetConfirm = (title="Are you sure?", text="Press enter to continue.") => {
    return Swal.fire({
        icon: 'warning',
        title: `${title}`,
        text: `${text}`,
        showCancelButton: true,
        confirmButtonText: "Yes",
        customClass: {
            popup: 'sweetAlert-popup',
            closeButton: 'sweetAlert-closeButton',
            icon: 'sweetAlert-icon',
            confirmButton: 'sweetConfirm-confirmButton',
            cancelButton: 'sweetAlert-cancelButton',
        },
    });
}