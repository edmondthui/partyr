import React from 'react';


class newDocUpload extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: "",
            selectedFile: null
        };
    };

    handleSelectedFile(e){
        e.preventDefault();
        this.setState({
           description: e.target.value,
           selectedFile: e.target.files[0]
        });
    };

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    };


}