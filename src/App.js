import React from 'react';
import './styles/styles.scss';
import Action from './components/Action';
import Form from './components/Form';
import Header from './components/Header';
import OptionalModal from './components/OptionModal';
import Options from './components/Options';

class App extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  componentDidMount = () => {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {
      console.log(e)
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  chooseOne = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const selectedOne = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: selectedOne }))
  }

  removeAll = () => {
    this.setState(() => ({ options: [] }))
  }

  removeSelected = (e, index) => {
    e.preventDefault();
    const newOptions = this.state.options.filter((t, i) => i !== index);
    this.setState(() => ({ options: newOptions }))
  }

  handleSaveOption = (option) => {
    if (option.length < 1) {
      return 'Enter a option to save !!';
    } else if (this.state.options.includes(option))
      return 'Enter a unique option to save !!'

    const updatedOptions = this.state.options.concat(option);
    this.setState(() => ({ options: updatedOptions }))
  }

  handleHideModal = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }
  render() {
    return (
      <>
        <div>
          <Header />
          <div className="container">
            <Action chooseOne={this.chooseOne} removeAll={this.removeAll} options={this.state.options}/>
            <div className="widget">
              <Options options={this.state.options} removeSelected={this.removeSelected} />
              <Form handleSaveOption={this.handleSaveOption} />
            </div>
            <OptionalModal
              selectedOption={this.state.selectedOption}
              handleHideModal={this.handleHideModal}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
