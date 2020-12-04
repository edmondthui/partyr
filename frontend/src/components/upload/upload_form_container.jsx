import React from 'react';
import { uploadPhoto} from '../../actions/photo_actions';
import { connect } from 'react-redux';
import './upload.css';;


class newDocUpload extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uploader: this.props.user.id,
            selectedFile: null
        };
        this.handleUpload = this.handleUpload.bind(this);
        this.update = this.update.bind(this)
        this.handleSelectedFile = this.handleSelectedFile.bind(this)
    };

    handleSelectedFile(e){
        e.preventDefault();
        this.setState({
           selectedFile: e.target.files[0]
        });
    };

    update(e){
        this.setState({[e.target.name]: e.target.value})
    };

    handleUpload(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        data.append("file", this.state.selectedFile, this.state.uploader);
        this.props.uploadPhoto(data).then(() => this.props.history.push("/dashboard"))
    }

    renderErrors() {
      return(
        <ul className="errors">
          {Object.keys(this.props.errors).map((error, i) => (
            <li key={`upload-error-${i}`}>
              {this.props.errors[error]}
            </li>
          ))}
        </ul>
      );
    }

    render() {
      return (
        <div className="upload-doc-container">
          <form className="upload-doc-form" onSubmit={this.handleUpload} style={{borderColor: this.props.user.color}}>
            <h3 className="Upload-heading"> Get ready to hangout with your friends!</h3>

            <div className="uploading-picture">
              <input
                type="file"
                name=""
                id=""
                onChange={this.handleSelectedFile}
              />
            </div>

            <button onSubmit={this.handleUpload} className="upload-btn"> 
              Upload Your Profile
            </button>

          </form>
          {this.renderErrors()}
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors.party,
    user: state.session.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    uploadPhoto: photo => dispatch(uploadPhoto(photo)),
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(newDocUpload);