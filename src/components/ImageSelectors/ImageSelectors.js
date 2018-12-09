import React, { Component } from 'react';

import './style.scss';

export default class ImageSelectors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active_selector: [
        {
          id: 0,
          className: 'selector-1',
          active: true,
          key: 'active_selector'
        },
        {
          id: 1,
          className: 'selector-2',
          active: false,
          key: 'active_selector'
        },
        {
          id: 2,
          className: 'selector-3',
          active: false,
          key: 'active_selector'
        }
      ]
    };

    this.handleClick = this.handleClick.bind(this);
    this.shouldToggle = this.shouldToggle.bind(this);
  }




  shouldToggle(e) {
    // Should only toggle if not already active (i.e, has the className active)
    if(!e.target.classList.contains('active')) {
      this.toggleSelector(e.target.id, 'active_selector');
    }
  }

  handleClick(e) {
    // Check to see if we should toggle the clicked selector
    //this.shouldToggle(e);
  }

  render() {
    const { active_selector } = this.state;
    return (
      <div className="image-selectors">
        <ul className="selectors">
          {
            active_selector.map((s) => {
              const className = s.active ? `${s.className} active` : `${s.className}`;
              return (
                <li
                  className={className}
                  onClick={this.handleClick}
                  id={s.id}
                />
              );
            })
          }
        </ul>
      </div>
    );
  }
}
