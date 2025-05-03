import React from 'react'
import CommentList from './CommentList';

const commentsData=[
    {
        name:"Navya",
        text:"Lorem ipsum dolor sit amet",
        replies:[],
    },
    {
        name:"Navya",
        text:"Lorem ipsum dolor sit amet",
        replies:[ {
            name:"Navya",
            text:"Lorem ipsum dolor sit amet",
            replies:[{
                name:"Navya",
                text:"Lorem ipsum dolor sit amet",
                replies:[{
                    name:"Navya",
                    text:"Lorem ipsum dolor sit amet",
                    replies:[],
                }],
            },
            {
                name:"Navya",
                text:"Lorem ipsum dolor sit amet",
                replies:[ {
                    name:"Navya",
                    text:"Lorem ipsum dolor sit amet",
                    replies:[],
                },
                {
                    name:"Navya",
                    text:"Lorem ipsum dolor sit amet",
                    replies:[],
                }],
            },],
        },{
            name:"Navya",
            text:"Lorem ipsum dolor sit amet",
            replies:[],
        },
        {
            name:"Navya",
            text:"Lorem ipsum dolor sit amet",
            replies:[],
        },
    ],
    },
    {
        name:"Navya",
        text:"Lorem ipsum dolor sit amet",
        replies:[ {
            name:"Navya",
            text:"Lorem ipsum dolor sit amet",
            replies:[],
        },{
            name:"Navya",
            text:"Lorem ipsum dolor sit amet",
            replies:[],
        },
    ],
    },
    {
        name:"Navya",
        text:"Lorem ipsum dolor sit amet",
        replies:[ {
            name:"Navya",
            text:"Lorem ipsum dolor sit amet",
            replies:[],
        }
    ],
    },
    {
        name:"Navya",
        text:"Lorem ipsum dolor sit amet",
        replies:[],
    },
    {
        name:"Navya",
        text:"Lorem ipsum dolor sit amet",
        replies:[ {
            name:"Navya",
            text:"Lorem ipsum dolor sit amet",
            replies:[],
        },{
            name:"Navya",
            text:"Lorem ipsum dolor sit amet",
            replies:[],
        },
        {
            name:"Navya",
            text:"Lorem ipsum dolor sit amet",
            replies:[],
        },
    ],
    },
    {
        name:"Navya",
        text:"Lorem ipsum dolor sit amet",
        replies:[],
    },
    {
        name:"Navya",
        text:"Lorem ipsum dolor sit amet",
        replies:[],
    }
];
const CommentContainer = () => {
  return (
    <div className="m-2 p-2">
        <h1 className="text-xl font-bold"> Comments:</h1>
        <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentContainer