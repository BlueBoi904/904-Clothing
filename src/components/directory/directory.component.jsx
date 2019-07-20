import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

import { connect } from "react-redux";
// Import directory selector

import { selectDirectorySections} from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({sections}) => (
  <div className="directory-menu">
    {sections.map(({ id, ...sectionProps }) => (
      <MenuItem
        key={id}
        {...sectionProps}
        // We can spread the props using the ... operator
        // title={title}
        // imageUrl={imageUrl}
        // size={size}
        // linkUrl={linkUrl}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
// Connect our directory with mapStateToProps
export default connect(mapStateToProps)(Directory);
