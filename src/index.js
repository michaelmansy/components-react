import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are You Sure?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                < CommentDetail author="Sam" timeAgo="Today at 1:00AM" text="Nice blog post" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                < CommentDetail author="Alex" timeAgo="Yesterday at 1:00AM" text="Best Country is Italy" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                < CommentDetail author="jerry" timeAgo="Last Monday at 1:00AM" text="Best player is Ronaldo" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            
        </div>
    );
};


ReactDom.render(<App />, document.querySelector('#root'));