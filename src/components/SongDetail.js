import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
  // console.log(props);
  if ( !song) {
    return <div>Select 1st</div>
  }
  return (
    <div>
      <h3>Song Detail</h3>
      <div>
        {song.title}
      </div>
      <div>
        {song.duration}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
