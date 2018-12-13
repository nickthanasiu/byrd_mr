import React, { Component } from 'react';
import { toY as scrollToY } from '../../utils/scroll';

import './style.scss';

export default class SidebarRight extends Component {
  constructor(props) {
    super(props);

    this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo(page) {
    const selectedPage = document.querySelector(page);
    const top = page === '.page-3' ? selectedPage.offsetTop - 80 : selectedPage.offsetTop;
    scrollToY(top);
  }

  render() {
    const { isVisible, activePageId } = this.props;
    const hidden = isVisible ? null : 'hidden';
    const active0 = activePageId === 0 ? 'active' : null;
    const active1 = activePageId === 1 ? 'active' : null;
    const active2 = activePageId === 2 ? 'active' : null;

    return (
      <div className={`sidebar-right ${hidden}`}>
        <div className="page-indicators-container">
          <ul className="page-indicators">
            <li
              className={`indicator ${active0}`}
              onMouseDown={() => this.scrollTo('.page-2')}
            />
            <li
              className={`indicator ${active1}`}
              onMouseDown={() => this.scrollTo('.page-3')}
            />
            <li
              className={`indicator ${active2}`}
              onMouseDown={() => this.scrollTo('.page-4')}
            />
          </ul>
        </div>
      </div>
    );
  }
}
