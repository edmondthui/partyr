import React from "react";
// import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {fetchDocuments} from '../../actions/document_actions';
import UploadDoc from './upload_form_container';

class DocumentUploaded extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            documents: []
        }
    }

    componentDidMount(){
        this.props.fetchDocuments().then((res) => {
            this.setState({documents: res.documents.data})
        })
    }

    render(){
        const allDocs = this.state.documents.map((document, i) => {
            return (
                <li key={`all-docs-${i}`}><a href={document.fileLink} target="_blank"> 
                View: {document.description}
                </a></li>
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
    user: state.session.user
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