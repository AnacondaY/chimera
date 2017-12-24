## Upload 上传
用于将客户端文件发送到服务器端。
@@-------@@
### API
属性 | 说明 | 类型 | 默认值
-----|------| ---- | ---
action | 上传的url地址, 必填 | ```String``` | -
name | 文件列表对应的请求体key值 | ```String``` | ```'file'```
multiple | 是否可以上传多个文件 | ```Boolean``` | ```false```
draggable | 是否支持拖放上传 | ```Boolean``` | ```false```
disabled | 是否禁用 | ```Boolean``` | ```false```
accept | 同原生```input[type=file]```, 定义可上传的文件类型 | ```String``` | -
headers | 自定义请求头 | ```Object``` | -
data | 自定义请求主体 | ```Object丨(file: File): Object => {}``` | -
autoUpload | 是否选择后自动上传 | ```Boolean``` | ```false```
maxCount | 上传图片的最大数量。仅在```listMode='gallery'```有效 | ```Number``` | ```9```
showUploadedList | 是否显示上传列表 | ```Boolean``` | ```true```
listMode | 上传列表的展示模式 | ```'text-list'丨'image-list'丨'gallery'``` | ```text-list```
beforeUpload | 文件上传之前的钩子函数, 可用于校验文件类型、大小等, 参数```file```为当前上传文件, 支持```Promise```的返回值; 若返回值为```false```则终止上传 | ```(file: File): File丨Promise丨Boolean => {}``` | -
onDragOver | 文件拖拽至目标区域时触发 | ```(evt: React.SyntheticEvent) => {} ``` | -
onDragLeave | 文件拖拽离开目标区域时触发 | ```(evt: React.SyntheticEvent) => {} ``` | -
onDrop | 文件拖拽至目标区域并释放时触发 | ```(files: FileList) => {}``` | -
onProgress | 文件正在上传时触发 | ```(file: WrappedFile) => {}``` | -
onSuccess | 文件上传成功时触发 | ```(file: WrappedFile) => {}``` | -
onError | 文件上传失败时触发 | ```(file: WrappedFile) => {}``` | -
