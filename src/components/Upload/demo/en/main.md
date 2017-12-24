## Upload
Upload files to the server.
@@-------@@
### API
property | description | type | default
-----|------| ---- | ---
action | uploading url. required | ```String``` | -
name | the key of files in request body. | ```String``` | ```'file'```
multiple | indicate whether files can be selected multiply. | ```Boolean``` | ```false```
draggable | indicate if files can be dragged to upload | ```Boolean``` | ```false```
disabled | Disable upload | ```Boolean``` | ```false```
accept | the filted file type. Reference to [accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept) | ```String``` | -
headers | customized request headers | ```Object``` | -
data | customized request body | ```Object丨(file: File): Object => {}``` | -
autoUpload | indicate whether to upload automatically after selection | ```Boolean``` | ```false```
maxCount | maximal count of uploading pictures. Only matters on condition of ```listMode='gallery'``` | ```Number``` | ```9```
showUploadedList | indicate whether to show upload list | ```Boolean``` | ```true```
listMode | display style of upload list | ```'text-list'丨'image-list'丨'gallery'``` | ```text-list```
beforeUpload | the hook function triggered before uploading.It can be used to validate the size or type of file. If type of return value is ```false``` or rejected promise, uploading will be stopped.  | ```(file: File): File丨Promise丨Boolean => {}``` | -
onDragOver | the callback function will be triggered when file is dragged over the uploading area | ```(evt: React.SyntheticEvent) => {} ``` | -
onDragLeave | the callback function will be triggered when file is dragged out of the uploading area | ```(evt: React.SyntheticEvent) => {} ``` | -
onDrop | the callback function will be triggered when file is dropped to the uploading area | ```(files: FileList) => {}``` | -
onProgress | the callback function triggered by uploading | ```(file: WrappedFile) => {}``` | -
onSuccess | the callback function triggered by successful uploading | ```(file: WrappedFile) => {}``` | -
onError | the callback function triggered by failed uploading | ```(file: WrappedFile) => {}``` | -
