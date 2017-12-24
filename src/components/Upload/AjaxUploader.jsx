import React, { createElement } from 'react';
import PropTypes from '../../base/prop-types';
import { ulid } from 'ulid';
import BaseComponent from '../../base/BaseComponent';
import post from './post.js';
import { Drop } from '../_DnD';
import { defaultProps, propTypes } from './define';

export default class AjaxUploader extends BaseComponent {

    static propTypes = propTypes;

    static defaultProps = defaultProps;

    handleChange(evt: React.SyntheticEvent){
        const files = evt.target.files;
        if(!files || !files.length) return;
        this.uploadFiles(files);
    }

    handleClick(){
        if(this.props.disabled) return;
        this.refs.input.click();
    }

    uploadFiles(files: FileList){
        const uploadFiles = Array.prototype.slice.call(files);
        uploadFiles.forEach(file => {
            this.props.onBegin(file);
            if(!this.props.autoUpload) return;
            this.upload(file);
            this.handleDrop = this.handleDrop.bind(this);
        });
    }

    upload(file: File){
        const { beforeUpload } = this.props;
        if(typeof beforeUpload !== 'function'){
            return this.request(file);
        }
        const before = beforeUpload(file);
        //if before is a Promise
        if(before && before.then){
            before.then(passedFile => {
                if(passedFile instanceof File){
                    this.request(passedFile);
                }else{
                    this.request(file);
                }
            });
        }else if(before !== false){
            this.request(file);
        }else{
            this.props.onRemove(file);
        }
    }

    request(file: File): void{
        let {
            name,
            data,
            headers,
            action,
            onProgress,
            onSuccess,
            onError
        } = this.props;
        if(typeof data === 'function'){
            data = data(file);
        }
        post({
            name,
            data,
            file,
            action,
            headers,
            onProgress: evt => onProgress(evt, file),
            onSuccess: evt => onSuccess(evt, file),
            onError: evt => onError(evt, file)
        });
    }

    handleDrop(files: FileList): void{
        this.uploadFiles(files);
        this.props.onDrop(files);
    }

    render(){
        const { children, multiple, draggable, accept, onDrop, onDragOver, onDragLeave, tagName: Tag, listMode } = this.props;
        return (
           <Tag className={this.classNames({
               'cmr-uploader': true,
               'cmr-uploader-gallery': listMode === 'gallery'
           })} onClick={() => this.handleClick()}>
                <input 
                    type="file" 
                    className="cmr-uploader-input" 
                    onChange={evt => this.handleChange(evt)} 
                    multiple={multiple}
                    accept={accept}
                    ref="input"
                />
                {!draggable ? children : 
                    <Drop onDrop={this.handleDrop.bind(this)}
                        onDragOver={onDragOver}
                        onDragLeave={onDragLeave}
                    >
                        {children}                        
                    </Drop>
                }
           </Tag>
        );
    }

}