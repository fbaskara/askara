import React from "react";
import PropTypes from "prop-types";

class ArticleContent extends React.Component {
  render() {
    const {data, classTitle} = this.props

    return (
      <>
        <article className="tile is-child notification">
          <p className={`title ${classTitle}`}>{data.title}</p>
          <div className="content">
            {data.value}
          </div>
          <p className="subtitle">Last updated 17.30</p>
        </article>
      </>
    );
  }
}

ArticleContent.propTypes = {
  data: PropTypes.object,
  classTitle: PropTypes.string,
}

export default ArticleContent;