import React, { createElement } from 'react';
import { ulid } from 'ulid';
import { WrappedFile, propTypes, defaultProps } from './define';
import BaseComponent from '../../base/BaseComponent';
import AjaxUploader from './AjaxUploader';
import IFrameUploader from './IFrameUploader';
import UploadedList from './UploadedList';
import Icon from '../Icon';

function createWrappedFile(file: File, progress: Number = 0, status: String, mode: String = 'text-list'): WrappedFile{
    const { size, name, uuid } = file;
    const ret = {
        origin: file,
        size,
        name,
        progress,
        status,
        uuid
    };
    if(mode !== 'text-list'){
        try{
            ret.dataUrl = URL.createObjectURL(file);
        }catch(err){
            ret.dataUrl = '';
        }
    }
    return ret;
}

export default class Uploader extends BaseComponent{

    get html5Supported(){
        return typeof File !== 'undefined' && typeof FormData !== 'undefined';
    }

    constructor(props: Object){
        super(props);
        this.state = {
            files: props.defaultFiles
        };
        this.handleProgress = this.handleProgress.bind(this);
        this.handleBegin = this.handleBegin.bind(this);
        this.handleSuccess = this.handleSuccess.bind(this);
        this.handleError = this.handleError.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    getWrappedFile(file: File): WrappedFile{
        return this.state.files.find(wf => wf.uuid === file.uuid);
    }

    handleBegin(file: File){
        file.uuid = ulid();
        file = createWrappedFile(file, 0, 'waiting', this.props.listMode);
        this.setState(({files}) => {
            return {
                files: [file].concat(files)
            };
        });
    }

    handleProgress(evt: React.SyntheticEvent, file: File){
        const wrappedFile = this.getWrappedFile(file);
        wrappedFile.progress = evt.progress;
        wrappedFile.status = 'processing';
        this.update(() => this.props.onProgress(wrappedFile));
    }

    handleSuccess(evt: React.SyntheticEvent, file: File){
        const wrappedFile = this.getWrappedFile(file);
        wrappedFile.status = 'success';
        wrappedFile.progress = 100;
        this.update(() => this.props.onSuccess(wrappedFile));
    }

    handleError(evt: React.SyntheticEvent, file: File){
        const wrappedFile = this.getWrappedFile(file);
        wrappedFile.status = 'failed';
        this.update(() => this.props.onError(wrappedFile));
    }

    update(callback: Function){
        this.setState(({toUpdate}) => {
            return {
                toUpdate: !toUpdate
            };
        }, () => {
            this.props.onChange(this.state.files);
            callback && callback();
        });
    }

    handleRemove(file: WrappedFile){
        this.setState(({files}) => {
            return {
                files: files.filter(wf => wf.uuid !== file.uuid)
            };
        }, () => {
            this.props.onChange(this.state.files);
            this.props.onRemove(file, this.state.files);
        });
    }

    componentWillReceiveProps(nextProps) {
        if(Array.isArray(nextProps.files)){
            this.setState({
                files: nextProps.files
            });
        }    
    }
    
    render(){
        const { children, showUploadedList, listMode, maxCount, onPreview, autoUpload, onChange, ...rest } = this.props;
        const uploadComponent = this.html5Supported ? AjaxUploader : IFrameUploader;
        const picker = (
            <div className="cmr-uploader-picker">
                <Icon type="plus" />
            </div>
        );
        const trigger = createElement(uploadComponent, {
            ...rest,     
            listMode,      
            onChange,
            onBegin: this.handleBegin,
            onProgress: this.handleProgress,
            onSuccess: this.handleSuccess,
            onError: this.handleError
        }, listMode !== 'gallery' ? children : (this.state.files.length < maxCount ? picker : null));
        return (
            <span className="cmr-uploader-wrapper">
                {listMode !== 'gallery' ? trigger : null}
                {showUploadedList &&
                    <UploadedList 
                        key="cmr-uploader-list" 
                        toUpdate={this.state.toUpdate} 
                        onRemove={this.handleRemove} 
                        onPreview={onPreview}
                        fileList={this.state.files} 
                        mode={listMode} 
                        autoUpload={autoUpload}
                    />                            
                }
                {listMode === 'gallery' ? trigger : null}
            </span>
        );
    }
}

Uploader.propTypes = propTypes;

Uploader.defaultProps = defaultProps;