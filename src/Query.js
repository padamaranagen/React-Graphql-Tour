const githubQuery = {
  query: `
  {
    viewer {
      name
      repositories(first:10){
        nodes {
          name
          id
          description
          url        
        }
      }
    }    
  }    
  `
};

export default githubQuery;
