import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import './HomeStyle.css';

const styles = theme => ({
  paper: {
    // card interior

  },
  root: {
    // root div
  },
  headline: {
    // card headline
  },
  headline2: {
    // card 2 headline
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className="hero">
        <div id="hero-overlay">
        
        <Grid container spacing={16}>
        <Grid container spacing={8}>

          <Grid container spacing={8} className="home-main">
            <Grid item xs={12}>
            
            <div className="agustin-chavez-title">
            </div>
            </Grid>
            {/* spacing */}
            <Grid item xs={12}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              
            {/* skills list */}
            <Grid item xs={12} id="grid-skills">
                <Paper className="paper-section" id="paper-section" >
                  <div className="paper-title-skills">
                  Technical Skills:
                  </div>
                      <hr></hr>
                  <ul>
                    <li>React</li>
                    <li>Adobe Illustrator</li>
                  </ul>
                </Paper>
              </Grid>
            </Grid>
            <Grid item xs={7} id="grid-academic-history">
              
              <Paper className="paper-section" id="paper-section">
                
                <Grid container spacing={24}>
                  <Grid item xs={3}>
                    <a href="https://github.com/isao92"> 
                    <b className="wrap-github-logo">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="20px" width="50px" height="50px" viewBox="0 0 150 150" enableBackground="new 0 0 150 150">
                      <g id="Layer_3">
                          <circle fill="none" stroke="#000000" strokeWidth="25.5131" strokeMiterlimit="10" cx="75.053" cy="72.81" r="59.792"/>
                          
                        </g>
                        <g id="Guide_hrzntl">
                          <g>
                            <g>
                              <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.4125" strokeMiterlimit="10" d="M17.947,78.052c1.841-0.014,3.676-0.154,5.486-0.403 c3.007-0.414,6.115-2.12,9.155-1.897"/>
                              <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.4125" strokeMiterlimit="10" d="M32.588,72.613c-2.864,0.177-5.667-0.362-8.552,0.046 c-1.9,0.27-3.767,0.822-5.682,0.791"/>
                              <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.4124" strokeMiterlimit="10" d="M131.751,78.052c-1.839-0.014-3.674-0.154-5.483-0.403 c-3.005-0.414-6.112-2.12-9.15-1.897"/>
                              <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.4124" strokeMiterlimit="10" d="M117.322,72.613c2.863,0.177,5.664-0.362,8.547,0.046 c1.899,0.27,3.766,0.822,5.68,0.791"/>
                              <line display="none" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeMiterlimit="10" x1="150" y1="75" x2="0" y2="75"/>
                            </g>
                          </g>
                          <g>
                            <g>
                              <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.4125" strokeMiterlimit="10" d="M132.053,78.052c-1.841-0.014-3.676-0.154-5.486-0.403 c-3.007-0.414-6.115-2.12-9.155-1.897"/>
                              <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.4125" strokeMiterlimit="10" d="M117.412,72.613c2.864,0.177,5.667-0.362,8.552,0.046 c1.9,0.27,3.767,0.822,5.682,0.791"/>
                              <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.4124" strokeMiterlimit="10" d="M18.249,78.052c1.839-0.014,3.674-0.154,5.483-0.403	c3.005-0.414,6.112-2.12,9.15-1.897"/>
                              <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.4124" strokeMiterlimit="10" d="M32.678,72.613c-2.863,0.177-5.664-0.362-8.547,0.046	c-1.899,0.27-3.766,0.822-5.68,0.791"/>
                              <line display="none" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeMiterlimit="10" x1="0" y1="75" x2="150" y2="75"/>
                            </g>
                          </g>
                        </g>
                        <g id="Layer_4">
                          <path fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2.3933" strokeMiterlimit="10" d="M57.208,116.292c-1.792-4.222-9.161-3.777-12.825-6	c-2.339-1.419-3.743-3.483-5.184-5.838c-0.995-1.626-1.374-3.663-2.336-5.1c0.759,2.656,3.624,5.558,6.228,6.9	c1.443,0.744,2.896,0.87,4.438,1.242c1.646,0.397,3.262,0.608,4.912,0.914c1.705,0.316,4.517,1.593,6.1,1.216l16.472,4.2	c1.525,0,3.288,1.394,3.965,3.138c0.678,1.744,1.626,12.657,1.626,12.657h3.457c0,0-0.192-12.586-0.203-13.284	s0.678-2.023,2.565-2.016c1.887,0.006,2.382,0.831,2.518,1.806c0.136,0.977,0.407,13.494,0.407,13.494s4.067,0,4.271,0	c0.203,0-0.204-9.519-0.611-14.959c-0.406-5.438-5.287-10.25-5.287-10.25s13.828,0.209,24.605-12.343	c10.777-12.552,1.017-40.794-0.204-43.096c-1.22-2.301,2.847-9.205,0-13.179c-4.27-0.837-15.251,6.485-15.251,6.485	S86.3,40.186,75.014,40.396h0.039c-11.279-0.21-21.848,1.882-21.848,1.882s-10.975-7.322-15.242-6.485	c-2.846,3.975,1.219,10.878,0,13.179c-1.22,2.302-10.975,30.544-0.204,43.096c10.771,12.553,24.592,12.343,24.592,12.343	s-4.878,4.812-5.284,10.25c-0.406,5.44-0.813,14.959-0.61,14.959c0.204,0,4.269,0,4.269,0s0.271-12.518,0.407-13.494	c0.136-0.976,0.63-1.8,2.517-1.806c1.886-0.007,2.575,1.318,2.564,2.016c-0.012,0.698-0.204,13.284-0.204,13.284h3.455	c0,0,0.948-10.914,1.626-12.657c0.677-1.744,2.438-3.138,3.963-3.138"/>
                        </g>
                        
                      </svg>
                    </b>
                    </a>
                  </Grid>

                  <Grid item xs={3}>
                    <a href="https://www.linkedin.com/in/agustinchavez1/"> 
                    <svg version="1.1" xmlns="http://www.w3.org/2000 svg" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 46.167 46.167" enableBackground="new 0 0 46.167 46.167">
                      <g id="Guide_hrzntl">
                        <g>
                          <g>
                            
                              <line display="none" fill="none" stroke="#000000" strokeWidth="0.5" strokeMiterlimit="10" x1="87.792" y1="41.206" x2="-62.208" y2="41.206"/>
                          </g>
                        </g>
                        <g>
                          <g>
                            
                              <line display="none" fill="none" stroke="#000000" strokeWidth="0.5" strokeMiterlimit="10" x1="-62.208" y1="41.206" x2="87.792" y2="41.206"/>
                          </g>
                        </g>
                      </g>
                      <g id="Layer_4">
                        <circle stroke="#000000" strokeMiterlimit="10" cx="22.833" cy="23.167" r="21.543"/>
                      </g>
                      <g id="Layer_3">
                        <g>
                          <path fill="#FFFFFF" stroke="#FFFFFF" strokeMiterlimit="10" d="M12.172,12.09c0-0.659,0.24-1.203,0.722-1.631	c0.481-0.428,1.165-0.643,2.052-0.643c0.887,0,1.596,0.209,2.128,0.626c0.532,0.417,0.798,0.967,0.798,1.647	c0,0.681-0.266,1.219-0.798,1.614c-0.532,0.396-1.241,0.593-2.128,0.593c-0.887,0-1.571-0.203-2.052-0.609	C12.413,13.282,12.172,12.749,12.172,12.09z M12.667,16.736h4.522V33.21h-4.522V16.736z"/>
                          <path fill="#FFFFFF" stroke="#FFFFFF" strokeMiterlimit="10" d="M30.26,33.21V23.194c0-1.208-0.165-2.054-0.494-2.537	c-0.33-0.483-0.887-0.725-1.672-0.725c-0.659,0-1.229,0.176-1.71,0.527c-0.481,0.352-0.824,0.791-1.026,1.318V33.21h-4.522V16.736	h3.61l0.532,1.911h0.114c0.456-0.637,1.076-1.181,1.862-1.631c0.785-0.45,1.811-0.676,3.078-0.676c0.76,0,1.438,0.099,2.033,0.297	s1.096,0.522,1.501,0.972c0.405,0.451,0.709,1.055,0.912,1.812c0.203,0.758,0.304,1.697,0.304,2.817V33.21H30.26z"/>
                        </g>
                      </g>
                      </svg>
                    </a>
                  </Grid>
                  
                  <Grid item xs={6}>
                    Resume: <a href="https://docs.google.com/document/d/1OYhRJdEUEy2VpcanFQfH1MgzhDpwhPb-ajSmFEiqTqg/edit?usp=sharing"> Google Docs Link </a> 
                  </Grid>
                </Grid>

              </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
            
          </Grid>
        </Grid>
      </Grid>
          </div>
      </div>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);