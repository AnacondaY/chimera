export default function post({
    onSuccess
}){
    const timer = setTimeout(() => {
        clearTimeout(timer);
        onSuccess([{
            filename: 'success.xxx'
        }]);
    }, 0);
}