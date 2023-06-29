export default function getFormJSONData(form) {
    const formData = new FormData(form);
    const formDataJson = Object.fromEntries(formData.entries());
    return formDataJson;
}
