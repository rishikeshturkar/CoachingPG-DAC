import UploadNotesService from "../../services/UploadNotesService";
import { Component } from "react";

export default class NotesForStudent extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        fileInfos: []
      };
    }

    componentDidMount() {
        UploadNotesService.getFiles().then((response) => {
          this.setState({
            fileInfos: response.data,
          });
        });
      }

    render() {
        const {
          fileInfos,
        } = this.state;
        return (
          <div>
            
            <div className="card">
              <div className="card-header">List of Files</div>
              <ul className="list-group list-group-flush">
                {fileInfos &&
                  fileInfos.map((file, index) => (
                    <li className="list-group-item" key={index}>
                      <a href={file.url}>{file.name}</a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        );
      }

}