const { Post } = require('../models');

const postdata = [
  {
    title: 'Which browsers support HTML5?',
    post_text: 'Chrome, Mozilla Firefox, Microsoft Edge, Internet Explorer and Safari supports some features.',
    user_id: 1
  },
  {
    title: 'Which two attributes should every <img> tag should have?',
    post_text: 'I had to brush up on my html code before my interview. I answered with src and alt. I was not sure what explanation to give with it. ',
    user_id: 2
  },
  {
    title: 'What are the advantages of using Git?',
    post_text: 'I did not give the best examples. Any ideas?',
    user_id: 3
  },
  {
    title: 'Algorithm Question for Jr Dev',
    post_text: 'Given an array of size n with a range of numbers from 1 to n+1. The array does not contain any duplicate, one number is missing, find the missing number. ',
    user_id: 4
  },
  {
    title: 'Array Algorithm for Jr Developer',
    post_text: 'Given a big array, how to efficiently find the kth largest element in it? Any ideas of how to approach this? ',
    user_id: 5
  }
  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
