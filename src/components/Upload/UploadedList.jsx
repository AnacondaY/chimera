import React from 'react';
import BaseComponent from '../../base/BaseComponent';
import Progress from '../Progress';
import Icon from '../Icon';
import { uploaderListDefaultProps, uploaderListProps, WrappedFile } from './define';

export default class UploadedList extends BaseComponent{

    constructor(props: Object){
        super(props);
        this.state = {
            activeKey: null
        };
    }

    renderItem(file: WrappedFile): React.ReactNode{
        const { mode, onRemove, onPreview, autoUpload } = this.props;
        const progress = Math.round(file.progress);        
        const showProgress = (file.status === 'processing' || file.status === 'waiting') && autoUpload;
        if(mode === 'gallery'){
            if(showProgress){
                return (
                    <div className="cmr-uploader-list-item-circle">
                        <Progress diameter={84} progress={progress} mode="circle" />
                    </div>
                );
            }else{
                return [
                    <img alt="" src={file.dataUrl} className="cmr-uploader-list-item-thumbnail" key={file.dataUrl} />,
                    <div className="cmr-uploader-list-item-mask" key={`cmr-uploader-mask-${file.dataUrl}`}>
                        <div className="cmr-uploader-list-item-control">
                            <span className="cmr-uploader-list-item-preview" onClick={() => onPreview(file)}>
                                <Icon type="eye"/>
                            </span>
                            <span className="cmr-uploader-list-item-delete" onClick={() => onRemove(file)}>
                                <Icon type="trash"/>                            
                            </span>
                        </div>
                    </div>
                ];
            }
        }else if(mode === 'image-list'){
            if(showProgress){
                return [
                    <div className="cmr-uploader-list-item-thumbnail" key={`cmr-upload-thumnail-${file.uuid}`}>
                        <Icon type="picture"/>
                    </div>,
                    <div className="cmr-uploader-list-item-content" key={`cmr-upload-content-${file.uuid}`}>
                        <Progress progress={progress} outside status={file.status}/>
                    </div>
                ];
            }else{
                return [
                    <div className="cmr-uploader-list-item-thumbnail" key={`cmr-upload-thumnail-${file.uuid}`}>
                        <img alt="" src={file.dataUrl} key={`cmr-upload-image-${file.uuid}`}/>
                    </div>,
                    <div className="cmr-uploader-list-item-content" key={`cmr-upload-content-${file.uuid}`}>
                        <a href={file.dataUrl} target="_blank">{file.name}</a>
                        <span className="cmr-uploader-list-item-close" onClick={() => onRemove(file)}>
                            <Icon type="close"/>
                        </span>
                    </div>
                ];
            }
        }else{
            if(showProgress){
                return <Progress progress={progress} outside/>;
            }else{
                return [
                    file.name,
                    <span key={`cmr-uploader-close-${file.uuid}`} className="cmr-uploader-list-item-close" onClick={() => onRemove(file)}>
                        <Icon type="close"/>
                    </span>
                ];
            }
        }
    }

    handleMouseEnter(file: WrappedFile){
        this.setState({
            activeKey: file.uuid
        });
    }

    handleMouseLeave(){
        this.setState({
            activeKey: null
        });
    }

    render(){
        const { fileList, mode, onRemove, onPreview } = this.props;
        return (
            <ol className={this.classNames({
                'cmr-uploader-list': true,
                'cmr-uploader-list-text': mode === 'text-list',
                'cmr-uploader-list-image': mode === 'image-list',
                'cmr-uploader-list-gallery': mode === 'gallery'
            })}>
                {fileList.map((file: WrappedFile, index) => {
                    return (
                        <li className={this.classNames({
                            'cmr-uploader-list-item': true,
                            [`cmr-uploader-list-item-${file.status}`]: true,
                            'cmr-uploader-list-item-loaded': file.dataUrl,
                            'cmr-uploader-list-item-active': this.state.activeKey === file.uuid
                        })} key={`cmr-file-${file.uuid}`}
                            onMouseEnter={this.handleMouseEnter.bind(this, file)}
                            onMouseLeave={this.handleMouseLeave.bind(this)}
                        >
                            {this.renderItem(file)}
                        </li>
                    );
                })}
            </ol>
        );
    }
    
}

UploadedList.propTypes = uploaderListProps;

UploadedList.defaultProps = uploaderListDefaultProps;