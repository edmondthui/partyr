import React from 'react';
import { uploadDocument, clearDocumentErrors } from '../../actions/document_actions';
import { connect } from 'react-redux';

class newDocUpload extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: "",
            selectedFile: null
        };
        this.handleUpload = this.handleUpload.bind(this);
        this.update = this.update.bind(this)
        this.handleSelectedFile = this.handleSelectedFile.bind(this)
    };

    componentWillUnmount() {
      this.props.clearPartyErrors();
    }

    handleSelectedFile(e){
        e.preventDefault();
        this.setState({
           description: e.target.value,
           selectedFile: e.target.files[0]
        });
    };

    update(e){
        this.setState({[e.target.name]: e.target.value})
    };

    handleUpload(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        data.append("file",this.state.selectedFile, this.state.description);
        this.props.uploadDocument(data)
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
          <label> Upload Photo</label>
          <form className="upload-doc-form" onSubmit={this.handleUpload}>
            <div>
              <label htmlFor="doc-description">Description:</label>
              <input 
                type="text"
                name="doc-description"
                onChange={this.update}
              />
            </div>

            <div className="uploading-doc">
              <input
                type="file"
                name=""
                id=""
                onChange={this.handleSelectedFile}
              />
            </div>
            <button type="submit" onSubmit={this.handleUpload}></button>
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
    uploadDocument: docData => dispatch(uploadDocument(docData)),
    clearDocumentErrors: () => dispatch(clearDocumentErrors())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(newDocUpload);