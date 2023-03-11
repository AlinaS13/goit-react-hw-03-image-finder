import { Component } from 'react';
import { Dna } from 'react-loader-spinner';

export class Loader extends Component {
  render() {
    return (
      <div>
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }
}
