import React, { createElement } from 'react';
import BaseComponent from '../../base/BaseComponent';
import { propTypes, defaultProps } from './define';
import isObject  from 'lodash/isObject';

export default class IFrameUploader extends BaseComponent {

    static propTypes = propTypes
    
    static defaultProps = defaultProps

    constructor(props: Object){
        super(props);
        this.state = {
            files: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }

    uploadFiles(files: FileList){
        const { form, inputWrapper } = this.refs;
        let data = this.props.data;
        if(typeof data === 'function'){
            data = data(files);
        }
        if(!isObject(data)){
            data = {};
        }
        const inputsHTML = Object.keys(data).map(key => {
            return `<input type="text" name="${key}" value="${data[key]}" />`;
        });
        inputWrapper.innerHTML = inputsHTML;
        form.submit();
        inputWrapper.innerHTML = '';
    }

    handleDrop(evt: React.SyntheticEvent){
        evt.preventDefault();
        this.uploadFiles(evt.dataTransfer.files);
    }

    handleChange(evt: React.SyntheticEvent){
        const files = evt.target.files;
        this.uploadFiles(files);
    }

    handleClick(){
        this.refs.input.click();
    }

    componentDidMount() {
        const { onSuccess, onError } = this.props;
        window.addEventListener('message', evt => {
            console.log(evt);
        });
    }

    render(){
        let { tagName: Tag, action, accept, multiple, data, name, draggable, children } = this.props;
        return (
            <Tag className="cmr-uploader"
                onClick={this.handleClick}    
            >
                <iframe style={{display: 'none'}} ref="iframe" name="updateIFrame"/>
                <form 
                    ref="form"
                    action={action}
                    target="updateIFrame"
                    encType="multipart/form-data"
                    method="POST"
                >
                    <input 
                        type="file"
                        ref="input"
                        name={name}
                        accept={accept}
                        multiple={multiple}
                        className="cmr-uploader-input"
                        onChange={evt => this.handleChange(evt)}
                    />
                    <span ref="inputWrapper"/>
                </form>
                {children}
            </Tag>
        );
    }

}