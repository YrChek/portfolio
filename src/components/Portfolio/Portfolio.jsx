import React, { Component } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';
import './Portfolio.css'

export class Portfolio extends Component {
  state = {
    selected: 'All',
  }
  constructor(props) {
    super(props);
    this.filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
    this.selected = this.state.selected;
    this.select = this.select.bind(this);
    this.projects = this.projects.bind(this);
  }

  select(e) {
    this.selected =  e.target.innerText
    this.setState(() => ({selected: this.selected}));
  }

  projects = () => {
    const { images } = this.props
    const project = this.selected === 'All' ? images : images.filter((el) => el.category === this.selected);
    return project
  };

  render() {
    const projects = this.projects()
    return (
      <>
        <div className='toolbar'>
          <Toolbar selected={ this.state.selected } filters={ this.filters } onSelectFilter={this.select} />
        </div>
        <ProjectList project={ projects } />
      </>
    )
  }
}

export default Portfolio
