const post = ({
    action,
    file,
    name,
    data,
    headers,
    withCredentials,
    onProgress,
    onSuccess,
    onError
}) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();   
    headers = headers || {};   
    xhr.withCredentials = withCredentials && 'withCreditials' in xhr;    
    xhr.open('post', action, true);
    formData.append(name, file);
    Object.keys(headers).forEach(h => {
        xhr.setRequestHeader(h, headers[h]);
    });
    if(data){
        Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
        });
    }
    if(xhr.upload){
        xhr.upload.onprogress = evt => {         
            if(evt.total > 0){
                evt.progress = evt.loaded / evt.total * 100;
            }
            typeof onProgress === 'function' && onProgress(evt);
        };
    }
    xhr.send(formData);    
    
    xhr.onload = () => {
        if(xhr.status < 200 || xhr.status >= 300){
            return typeof onError === 'function' && onError(xhr);
        }
        typeof onSuccess === 'function' && onSuccess(parseBody(xhr));
    };
    xhr.onerror = () => {
        typeof onError === 'function' && onError(xhr);
    };
    return xhr;
};

const parseBody = xhr => {
    const res = xhr.responseText || xhr.response;
    if(!res){
        return res;
    }
    try{
        return JSON.parse(res);
    }catch(err){
        return res;
    }
};

const parseError = (action, option, xhr) => {
    const err = new Error(`response failed. status is ${xhr.status}`);
    err.status = xhr.status;
};

export default post;