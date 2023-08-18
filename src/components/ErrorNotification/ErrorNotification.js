import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

export default function ErrorNotification(errorMessage) {
    error({
        title: 'Oops!',
        text: errorMessage,
        animation: 'fade',
        delay: 2000,
    });
}
