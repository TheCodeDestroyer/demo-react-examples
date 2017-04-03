import React, {PropTypes, Component} from 'react';

export default class Posts extends Component {
    render() {
        const redditBaseUrl = 'https://www.reddit.com';
        return (
            <ul>
                {this.props.posts.map((post, i) =>
                    <li key={i}>{post.title} <a target="_blank" href={redditBaseUrl + post.permalink}>Link</a></li>
                )}
            </ul>
        );
    }
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired
};
