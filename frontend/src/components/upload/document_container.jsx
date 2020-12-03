import React from "react";
// import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {fetchDocuments} from '../../actions/document_actions';
import UploadDoc from './upload_form_container';

class DocumentUploaded extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            documents: this.props.documents
        }
    }

    componentDidMount(){
        this.props.fetchDocuments().then((res) => {
            this.setState({documents: this.props.documents})
        })
    }

    render(){
        const allDocs = this.state.documents.map((document, i) => {
            return (
                <li key={`all-docs-${i}`}>
                    <img src={document.fileLink} alt={document.description}/>
                </li>
            )
        })

        return (
            <div className="documents-container">
                <ul className="view-all-docs"> All Photos
                    {allDocs}
                </ul>
                <UploadDoc/>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
  return {
    user: state.session.user,
    documents: Object.values(state.documents.all)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDocuments: () => dispatch(fetchDocuments())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(DocumentUploaded);